import 'dart:async';
import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'data.dart';

String dayKey(DateTime d) => '${d.year}-${_pad(d.month)}-${_pad(d.day)}';
DateTime parseDay(String k) => DateTime.parse(k);
int daysBetween(String from, DateTime to) => DateTime(to.year, to.month, to.day).difference(parseDay(from)).inDays;
String _pad(int n) => n.toString().padLeft(2, '0');
String hhmm(DateTime d) => '${_pad(d.hour)}:${_pad(d.minute)}';

/// Monday 00:00 of the week containing [d].
DateTime weekStart(DateTime d) => DateTime(d.year, d.month, d.day - (d.weekday - 1));

/// ISO-8601 week number.
int isoWeek(DateTime d) {
  final thursday = DateTime(d.year, d.month, d.day + (4 - d.weekday));
  final jan1 = DateTime(thursday.year, 1, 1);
  return thursday.difference(jan1).inDays ~/ 7 + 1;
}

class LevelUp {
  const LevelUp(this.from, this.to);
  final int from, to;
}

class DebuffNotice {
  const DebuffNotice(this.habitId, this.time, this.statBefore, this.statAfter);
  final String habitId, time;
  final int statBefore, statAfter;
}

/// Everything that is persisted between launches.
class GameData {
  bool awakened = false;
  String playerName = 'Joueur';
  Map<String, bool> domains = {'corps': true, 'esprit': true, 'travail': true, 'habitudes': false};
  Map<String, bool> chosen = {'tabac': true, 'reseaux': true, 'sucre': true, 'coucher': true, 'alcool': false, 'jeux': false};
  int level = 1, xp = 0, points = 0;
  Map<String, int> base = {for (final c in statCodes) c: 10};

  /// Day the current quest progress belongs to.
  String day = '';
  Map<String, int> progress = {for (final q in quests) q.id: 0};
  bool rewardGiven = false;

  /// Today's slips: habit id → time (HH:MM).
  Map<String, String> slips = {};

  /// Habit id → day the current clean streak started.
  Map<String, String> habitSince = {};

  /// Active debuffs: habit id → day of the slip that caused it. Insertion order is display order.
  Map<String, String> debuffs = {};

  String week = '';
  int bossHp = 100, sessions = 0;
  bool bossDead = false;

  Set<String> unlocked = {};
  String? title;
  int streak = 0, earlyCompletions = 0;
  String lastFullDay = '';

  bool remind = true, vibe = true, hard = false;

  Map<String, dynamic> toJson() => {
    'awakened': awakened,
    'playerName': playerName,
    'domains': domains,
    'chosen': chosen,
    'level': level,
    'xp': xp,
    'points': points,
    'base': base,
    'day': day,
    'progress': progress,
    'rewardGiven': rewardGiven,
    'slips': slips,
    'habitSince': habitSince,
    'debuffs': debuffs,
    'week': week,
    'bossHp': bossHp,
    'sessions': sessions,
    'bossDead': bossDead,
    'unlocked': unlocked.toList(),
    'title': title,
    'streak': streak,
    'earlyCompletions': earlyCompletions,
    'lastFullDay': lastFullDay,
    'remind': remind,
    'vibe': vibe,
    'hard': hard,
  };

  static GameData fromJson(Map<String, dynamic> j) {
    Map<String, T> m<T>(String k) => (j[k] as Map? ?? {}).map((a, b) => MapEntry(a as String, b as T));
    return GameData()
      ..awakened = j['awakened'] ?? false
      ..playerName = j['playerName'] ?? 'Joueur'
      ..domains = m<bool>('domains')
      ..chosen = m<bool>('chosen')
      ..level = j['level'] ?? 1
      ..xp = j['xp'] ?? 0
      ..points = j['points'] ?? 0
      ..base = m<int>('base')
      ..day = j['day'] ?? ''
      ..progress = {for (final q in quests) q.id: (j['progress']?[q.id] as int?) ?? 0}
      ..rewardGiven = j['rewardGiven'] ?? false
      ..slips = m<String>('slips')
      ..habitSince = m<String>('habitSince')
      ..debuffs = m<String>('debuffs')
      ..week = j['week'] ?? ''
      ..bossHp = j['bossHp'] ?? 100
      ..sessions = j['sessions'] ?? 0
      ..bossDead = j['bossDead'] ?? false
      ..unlocked = {...(j['unlocked'] as List? ?? []).cast<String>()}
      ..title = j['title']
      ..streak = j['streak'] ?? 0
      ..earlyCompletions = j['earlyCompletions'] ?? 0
      ..lastFullDay = j['lastFullDay'] ?? ''
      ..remind = j['remind'] ?? true
      ..vibe = j['vibe'] ?? true
      ..hard = j['hard'] ?? false;
  }

  /// The state shown in the design prototype, for demos and screenshots.
  static GameData demo(DateTime now) {
    final today = dayKey(now);
    String ago(int d) => dayKey(DateTime(now.year, now.month, now.day - d));
    return GameData()
      ..playerName = 'Alex Moreau'
      ..level = 12
      ..xp = 2160
      ..points = 3
      ..base = {'FOR': 24, 'AGI': 19, 'VIT': 21, 'INT': 17, 'PER': 15}
      ..day = today
      ..progress = {'pompes': 100, 'gainage': 3, 'lecture': 30, 'eau': 8, 'travail': 1}
      ..slips = {'sucre': '16:20'}
      ..habitSince = {'tabac': ago(23), 'reseaux': ago(2), 'sucre': today, 'coucher': ago(5), 'alcool': ago(11), 'jeux': ago(4)}
      ..debuffs = {'sucre': today}
      ..week = dayKey(weekStart(now))
      ..bossHp = 55
      ..sessions = 3
      ..unlocked = {'riser', 'iron', 'survivor'}
      ..title = 'riser';
  }
}

/// Game logic and persistence. Transient UI state (overlays, toast) lives here too
/// so every rule from the prototype is in one place.
class Game extends ChangeNotifier {
  /// [demo] loads the prototype's sample data and never persists it.
  Game({DateTime Function()? clock, this.demo = false, this.skipAwakening = false}) : _clock = clock ?? DateTime.now;

  static const _key = 'ascend.state.v1';
  final DateTime Function() _clock;
  final bool demo, skipAwakening;
  SharedPreferences? _prefs;
  Timer? _tick, _toastTimer;

  GameData d = GameData();

  // Transient UI state.
  int awakenStep = 0;
  int refusals = 0;
  String tab = 'home';
  LevelUp? levelUp;
  DebuffNotice? debuffShown;
  bool victory = false;
  String toast = '';

  DateTime get now => _clock();

  Future<void> load() async {
    _prefs = await SharedPreferences.getInstance();
    final raw = _prefs!.getString(_key);
    if (demo) {
      d = GameData.demo(now)..awakened = skipAwakening;
    } else if (raw != null) {
      d = GameData.fromJson(jsonDecode(raw) as Map<String, dynamic>);
    }
    _rollover(save: false);
    _tick = Timer.periodic(const Duration(seconds: 15), (_) {
      if (_rollover()) notifyListeners();
    });
  }

  bool _disposed = false;

  @override
  void dispose() {
    _disposed = true;
    _tick?.cancel();
    _toastTimer?.cancel();
    super.dispose();
  }

  void _save() => demo ? null : _prefs?.setString(_key, jsonEncode(d.toJson()));

  void _commit() {
    _save();
    notifyListeners();
  }

  /// Applies day and week changes. Returns true when something changed.
  bool _rollover({bool save = true}) {
    final t = now, today = dayKey(t);
    var changed = false;
    if (d.day != today) {
      if (d.day.isNotEmpty) {
        final yesterday = dayKey(DateTime(t.year, t.month, t.day - 1));
        if (d.lastFullDay != yesterday && d.lastFullDay != today) d.streak = 0;
      }
      d.day = today;
      d.progress = {for (final q in quests) q.id: 0};
      d.rewardGiven = false;
      d.slips = {};
      d.debuffs.removeWhere((_, since) => daysBetween(since, t) >= debuffPurgeDays);
      changed = true;
    }
    final week = dayKey(weekStart(t));
    if (d.week != week) {
      d.week = week;
      d.bossHp = 100;
      d.sessions = 0;
      d.bossDead = false;
      changed = true;
    }
    for (final h in habits) {
      d.habitSince.putIfAbsent(h.id, () => today);
    }
    if (d.chosen['tabac'] == true && daysBetween(d.habitSince['tabac']!, t) >= 30) changed |= _unlock('resist');
    if (changed && save) _save();
    return changed;
  }

  bool _unlock(String id) {
    if (!d.unlocked.add(id)) return false;
    d.title ??= id;
    final name = titles.firstWhere((x) => x.id == id).name;
    Future.delayed(const Duration(milliseconds: 2600), () => flash('Titre débloqué · $name'));
    return true;
  }

  // ---- Derived values ----

  int get mult => d.hard ? 2 : 1;
  int targetOf(QuestDef q) => q.target * mult;
  bool isDone(QuestDef q) => d.progress[q.id]! >= targetOf(q);
  int get doneCount => quests.where(isDone).length;
  bool get allDone => doneCount == quests.length;
  int malus(String stat) => d.debuffs.keys.where((id) => habitById(id).stat == stat).length * debuffStatMalus;
  int effective(String stat) => d.base[stat]! - malus(stat);
  int get xpMax => xpForLevel(d.level);
  int get rankIndex {
    var idx = 0;
    for (var i = 0; i < ranks.length; i++) {
      if (d.level >= ranks[i].$3) idx = i;
    }
    return idx;
  }

  List<HabitDef> get chosenHabits => habits.where((h) => d.chosen[h.id] == true).toList();
  int get slipCountToday => d.slips.keys.where((id) => d.chosen[id] == true).length;
  int habitDays(String id) => daysBetween(d.habitSince[id] ?? d.day, now);
  int debuffDays(String id) => daysBetween(d.debuffs[id]!, now);
  String? get equippedTitle => d.title == null ? null : titles.firstWhere((t) => t.id == d.title).name;

  // ---- Awakening ----

  void refuse() {
    refusals++;
    notifyListeners();
  }

  void nextAwakenStep() {
    if (awakenStep < 2) {
      awakenStep++;
    } else {
      d.awakened = true;
      d.debuffs.removeWhere((id, _) => d.chosen[id] != true);
      tab = 'home';
    }
    _commit();
  }

  void toggleDomain(String id) {
    d.domains[id] = !(d.domains[id] ?? false);
    notifyListeners();
  }

  void toggleHabitChoice(String id) {
    d.chosen[id] = !(d.chosen[id] ?? false);
    notifyListeners();
  }

  void restart() {
    final settings = (d.remind, d.vibe, d.hard);
    d = GameData()
      ..remind = settings.$1
      ..vibe = settings.$2
      ..hard = settings.$3;
    awakenStep = 0;
    refusals = 0;
    levelUp = null;
    debuffShown = null;
    victory = false;
    _rollover(save: false);
    _commit();
  }

  // ---- Progression ----

  void setTab(String id) {
    tab = id;
    notifyListeners();
  }

  void flash(String msg) {
    if (_disposed) return;
    _toastTimer?.cancel();
    toast = msg;
    notifyListeners();
    _toastTimer = Timer(const Duration(milliseconds: 2400), () {
      toast = '';
      if (!_disposed) notifyListeners();
    });
  }

  /// Adds XP (reduced by active debuffs) and handles level-ups. Returns the amount gained.
  int _gain(int raw) {
    final factor = (1 - debuffXpMalus * d.debuffs.length).clamp(0.0, 1.0);
    final amt = (raw * factor).round();
    final from = d.level;
    d.xp += amt;
    while (d.xp >= xpMax) {
      d.xp -= xpMax;
      d.level++;
      d.points += pointsPerLevel;
    }
    if (d.level > from) levelUp = LevelUp(levelUp?.from ?? from, d.level);
    return amt;
  }

  void _haptic() {
    if (d.vibe) HapticFeedback.mediumImpact();
  }

  void bump(QuestDef q, int dir) {
    if (q.session && dir > 0) return doSession();
    final target = targetOf(q), cur = d.progress[q.id]!;
    final next = (cur + dir * q.step).clamp(0, target);
    d.progress[q.id] = next;
    if (cur < target && next >= target) {
      final amt = _gain(q.xp);
      _haptic();
      flash('${q.name} accompli · +$amt XP');
      _checkAll();
    }
    _commit();
  }

  void _checkAll() {
    if (!allDone || d.rewardGiven) return;
    d.points += dailyBonusPoints;
    d.rewardGiven = true;
    final t = now, today = dayKey(t), yesterday = dayKey(DateTime(t.year, t.month, t.day - 1));
    d.streak = d.lastFullDay == yesterday ? d.streak + 1 : 1;
    d.lastFullDay = today;
    if (t.hour < 8) d.earlyCompletions++;
    Future.delayed(const Duration(milliseconds: 2500), () => flash('Quête quotidienne accomplie · +$dailyBonusPoints points de stat'));
    if (d.earlyCompletions >= 7) _unlock('riser');
    if (d.streak >= 14) _unlock('iron');
  }

  void doSession() {
    if (d.bossDead) return;
    final q = quests.firstWhere((x) => x.session);
    d.progress[q.id] = (d.progress[q.id]! + 1).clamp(0, targetOf(q));
    d.bossHp = (d.bossHp - bossDamage).clamp(0, 100);
    d.sessions++;
    _gain(q.xp);
    _haptic();
    if (d.bossHp == 0) {
      _gain(bossRewardXp);
      d.bossDead = true;
      victory = true;
      d.unlocked.add('unstoppable');
      d.title ??= 'unstoppable';
    } else {
      flash('Séance terminée · Gardien −$bossDamage % PV');
    }
    _checkAll();
    _commit();
  }

  void addStat(String code) {
    if (d.points <= 0) return;
    d.points--;
    d.base[code] = d.base[code]! + 1;
    _commit();
  }

  void slip(String id) {
    final h = habitById(id), t = now, today = dayKey(t);
    final before = effective(h.stat);
    d.slips[id] = hhmm(t);
    d.debuffs[id] = today;
    d.habitSince[id] = today;
    d.xp = (d.xp - xpPerSlip).clamp(0, xpMax);
    debuffShown = DebuffNotice(id, d.slips[id]!, before, effective(h.stat));
    _commit();
  }

  void purge(String id) {
    d.debuffs.remove(id);
    final h = habitById(id);
    flash('${h.debuff} purgée · ${h.stat} restaurée');
    _unlock('survivor');
    _commit();
  }

  void equip(String id) {
    if (!d.unlocked.contains(id)) return;
    d.title = id;
    _commit();
  }

  void toggleSetting(String key) {
    switch (key) {
      case 'remind':
        d.remind = !d.remind;
      case 'vibe':
        d.vibe = !d.vibe;
      case 'hard':
        d.hard = !d.hard;
    }
    _commit();
  }

  void allocateNow() {
    levelUp = null;
    tab = 'home';
    notifyListeners();
  }

  void closeLevelUp() {
    levelUp = null;
    notifyListeners();
  }

  void closeDebuff() {
    debuffShown = null;
    notifyListeners();
  }

  void closeVictory() {
    victory = false;
    notifyListeners();
  }
}
