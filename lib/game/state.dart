import 'dart:async';
import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'data.dart';
import 'data.dart' as data show domains;

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

class PenaltyNotice {
  const PenaltyNotice(this.missedDays, this.xpLost, this.done, this.total);
  final int missedDays, xpLost, done, total;
}

/// Schedules the 20:00 / 23:00 reminders. Implemented by the platform layer.
abstract class ReminderScheduler {
  Future<void> sync({required bool enabled, required int remainingToday, required int totalToday, required bool penaltyPending, required DateTime now});
  Future<bool> requestPermission();
}

class DebuffNotice {
  const DebuffNotice(this.habitId, this.time, this.statBefore, this.statAfter);
  final String habitId, time;
  final int statBefore, statAfter;
}

/// Everything that is persisted between launches.
class GameData {
  bool awakened = false;
  String awakenedOn = '';
  String playerName = 'Joueur';
  Map<String, bool> domains = {for (final d in data.domains) d.$1: true};
  Map<String, bool> chosen = {'tabac': true, 'reseaux': true, 'sucre': true, 'coucher': true, 'alcool': false, 'jeux': false};
  int level = 1, xp = 0, points = 0;
  Map<String, int> base = {for (final c in statCodes) c: 10};

  /// Day the current quest progress belongs to.
  String day = '';
  Map<String, int> progress = {for (final q in quests) q.id: 0};
  bool rewardGiven = false;

  /// Objectives chosen by the player (quest id → base objective), raised through proposals.
  Map<String, int> targets = {};

  /// Objectives in force today, fixed at day start so an accepted raise applies tomorrow.
  Map<String, int> dayTargets = {};

  /// Per quest: days in a row the objective was met, and the last such day.
  Map<String, int> questStreaks = {};
  Map<String, String> questLastDone = {};

  /// Quests the System proposes to raise, waiting for an answer.
  List<String> proposals = [];

  /// Set at midnight when the daily quest was missed, until the penalty quest is done.
  bool penaltyPending = false;

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
    'awakenedOn': awakenedOn,
    'targets': targets,
    'dayTargets': dayTargets,
    'questStreaks': questStreaks,
    'questLastDone': questLastDone,
    'proposals': proposals,
    'penaltyPending': penaltyPending,
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
      ..awakenedOn = j['awakenedOn'] ?? ''
      ..targets = m<int>('targets')
      ..dayTargets = m<int>('dayTargets')
      ..questStreaks = m<int>('questStreaks')
      ..questLastDone = m<String>('questLastDone')
      ..proposals = [...(j['proposals'] as List? ?? []).cast<String>()]
      ..penaltyPending = j['penaltyPending'] ?? false
      ..playerName = j['playerName'] ?? 'Joueur'
      ..domains = {for (final d in data.domains) d.$1: (j['domains']?[d.$1] as bool?) ?? true}
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
      ..questStreaks = {'pompes': 4, 'gainage': 6, 'lecture': 2}
      ..questLastDone = {'pompes': today, 'gainage': ago(1), 'lecture': today}
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
  Game({DateTime Function()? clock, this.demo = false, this.skipAwakening = false, this.reminders}) : _clock = clock ?? DateTime.now;

  static const _key = 'ascend.state.v1';
  final DateTime Function() _clock;
  final bool demo, skipAwakening;
  final ReminderScheduler? reminders;
  String _reminderKey = '';
  SharedPreferences? _prefs;
  Timer? _tick, _toastTimer;

  GameData d = GameData();

  // Transient UI state.
  int awakenStep = 0;
  int refusals = 0;
  String tab = 'home';
  LevelUp? levelUp;
  DebuffNotice? debuffShown;
  PenaltyNotice? penaltyShown;
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
    _syncReminders();
    _tick = Timer.periodic(const Duration(seconds: 15), (_) {
      if (_rollover()) {
        _syncReminders();
        notifyListeners();
      }
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
    _syncReminders();
    notifyListeners();
  }

  /// Reschedules reminders when anything they depend on changed.
  void _syncReminders() {
    final r = reminders;
    if (r == null || demo) return;
    final enabled = d.awakened && d.remind, remaining = activeQuests.length - doneCount;
    final key = '$enabled|$remaining|${d.penaltyPending}|${d.day}|${d.hard}';
    if (key == _reminderKey) return;
    _reminderKey = key;
    r.sync(enabled: enabled, remainingToday: remaining, totalToday: activeQuests.length, penaltyPending: d.penaltyPending, now: now);
  }

  /// Applies day and week changes. Returns true when something changed.
  bool _rollover({bool save = true}) {
    final t = now, today = dayKey(t);
    var changed = false;
    if (d.day != today) {
      if (d.day.isNotEmpty) {
        final yesterday = dayKey(DateTime(t.year, t.month, t.day - 1));
        if (d.lastFullDay != yesterday && d.lastFullDay != today) d.streak = 0;
        _applyMidnightPenalty(t);
      }
      d.day = today;
      d.dayTargets = {for (final q in quests) q.id: baseTargetOf(q)};
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

  /// Runs before the day's progress is reset. The day of the awakening is exempt;
  /// days on which the app was never opened count as missed.
  void _applyMidnightPenalty(DateTime t) {
    if (!d.awakened) return;
    final failedLastDay = d.day != d.awakenedOn && !allDone;
    final skipped = (daysBetween(d.day, t) - 1).clamp(0, 365);
    final missed = (failedLastDay ? 1 : 0) + skipped;
    if (missed == 0) return;
    final before = d.xp;
    for (var i = 0; i < missed; i++) {
      d.xp = (d.xp - (xpMax * penaltyXpShare).round()).clamp(0, xpMax);
    }
    d.penaltyPending = true;
    d.streak = 0;
    penaltyShown = PenaltyNotice(missed, before - d.xp, failedLastDay ? doneCount : 0, activeQuests.length);
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

  /// Objective the player has set for [q], before the difficulty multiplier.
  int baseTargetOf(QuestDef q) => d.targets[q.id] ?? q.target;
  int targetOf(QuestDef q) => (d.dayTargets[q.id] ?? baseTargetOf(q)) * mult;

  /// Days in a row [q] has been met, counting today if it already is.
  int questStreak(QuestDef q) {
    final last = d.questLastDone[q.id];
    if (last == null || daysBetween(last, now) > 1) return 0;
    return d.questStreaks[q.id] ?? 0;
  }

  /// The proposal to answer first, if any.
  QuestDef? get proposal => d.proposals.isEmpty ? null : quests.firstWhere((q) => q.id == d.proposals.first);
  bool isDone(QuestDef q) => d.progress[q.id]! >= targetOf(q);

  /// Quests of the domains the player trains.
  List<QuestDef> get activeQuests => quests.where((q) => d.domains[q.domain] == true).toList();
  int get doneCount => activeQuests.where(isDone).length;
  bool get allDone => doneCount == activeQuests.length;
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
      d.awakenedOn = dayKey(now);
      reminders?.requestPermission();
      d.debuffs.removeWhere((id, _) => d.chosen[id] != true);
      tab = 'home';
    }
    _commit();
  }

  void toggleDomain(String id) {
    final on = d.domains[id] ?? false;
    if (on && d.domains.values.where((v) => v).length == 1) {
      flash('Gardez au moins un domaine.');
      return;
    }
    d.domains[id] = !on;
    _checkAll();
    _commit();
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
    penaltyShown = null;
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
    final factor = (1 - debuffXpMalus * d.debuffs.length).clamp(0.0, 1.0) * (d.penaltyPending ? penaltyGainFactor : 1);
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
      _recordStreak(q);
      _checkAll();
    }
    _commit();
  }

  /// Counts today towards [q]'s streak once, and queues a raise after [proposalStreak] days.
  void _recordStreak(QuestDef q) {
    final today = dayKey(now);
    if (d.questLastDone[q.id] == today) return;
    d.questStreaks[q.id] = questStreak(q) + 1;
    d.questLastDone[q.id] = today;
    if (q.growable && d.questStreaks[q.id]! >= proposalStreak && !d.proposals.contains(q.id)) d.proposals.add(q.id);
  }

  /// Raises [proposal]'s objective by one step from tomorrow on, for bonus XP.
  void acceptProposal() {
    final q = proposal;
    if (q == null) return;
    final next = baseTargetOf(q) + q.step;
    d.targets[q.id] = next;
    d.questStreaks[q.id] = 0;
    d.proposals.remove(q.id);
    final amt = _gain(proposalBonusXp);
    flash('${q.name} : $next${q.unit} dès demain · +$amt XP');
    _commit();
  }

  /// Keeps the objective; the System asks again after another streak.
  void declineProposal() {
    final q = proposal;
    if (q == null) return;
    d.questStreaks[q.id] = 0;
    d.proposals.remove(q.id);
    _commit();
  }

  void _checkAll() {
    if (!d.awakened || !allDone || d.rewardGiven) return;
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
    if (isDone(q)) _recordStreak(q);
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
    _commit();
  }

  void completePenalty() {
    if (!d.penaltyPending) return;
    d.penaltyPending = false;
    _haptic();
    flash('Pénalité levée · gains d\'XP rétablis');
    _unlock('survivor');
    _commit();
  }

  void closePenalty() {
    penaltyShown = null;
    notifyListeners();
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
        if (d.remind) reminders?.requestPermission();
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
