import 'dart:convert';

import 'package:ascend/game/data.dart';
import 'package:ascend/game/state.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();
  late DateTime now;
  Game make({bool demo = false}) => Game(clock: () => now, demo: demo, skipAwakening: true);
  QuestDef q(String id) => quests.firstWhere((x) => x.id == id);

  setUp(() {
    now = DateTime(2026, 10, 23, 14, 30);
    SharedPreferences.setMockInitialValues({});
  });

  test('a fresh player starts at the awakening, level 1', () async {
    final g = make();
    await g.load();
    expect(g.d.awakened, isFalse);
    expect(g.d.level, 1);
    g.nextAwakenStep();
    g.nextAwakenStep();
    g.nextAwakenStep();
    expect(g.d.awakened, isTrue);
    g.dispose();
  });

  test('demo data matches the prototype and two quests level up', () async {
    final g = make(demo: true);
    await g.load();
    expect(g.d.level, 12);
    expect(g.effective('VIT'), 19); // 21 − Langueur
    expect(g.doneCount, 3);
    expect(g.targetOf(q('pompes')), 170); // FOR 24
    expect(g.targetOf(q('gainage')), 7); // AGI 19
    for (var i = 0; i < 4; i++) {
      g.bump(q('gainage'), 1);
    }
    expect(g.levelUp, isNull); // 2160 + 135 < 2400
    g.doSession();
    expect(g.levelUp?.to, 13);
    expect(g.allDone, isTrue);
    expect(g.d.points, 3 + pointsPerLevel + dailyBonusPoints);
    expect(g.d.bossHp, 40);
    g.dispose();
  });

  test('a slip applies a debuff, costs XP and can be purged', () async {
    final g = make();
    await g.load();
    g.d
      ..awakened = true
      ..xp = 100;
    final before = g.effective('INT');
    g.slip('reseaux');
    expect(g.d.xp, 40);
    expect(g.effective('INT'), before - debuffStatMalus);
    expect(g.debuffShown!.statAfter, before - debuffStatMalus);
    g.purge('reseaux');
    expect(g.d.debuffs, isEmpty);
    g.dispose();
  });

  test('the dungeon falls after seven sessions and grants its title', () async {
    final g = make();
    await g.load();
    for (var i = 0; i < bossSessionsMax; i++) {
      g.doSession();
    }
    expect(g.d.bossDead, isTrue);
    expect(g.victory, isTrue);
    expect(g.d.title, 'unstoppable');
    g.dispose();
  });

  test('state persists and resets daily and weekly', () async {
    final g = make();
    await g.load();
    g.d.awakened = true;
    g.bump(q('pompes'), 1);
    g.slip('sucre');
    g.doSession();
    g.dispose();

    final saved = (await SharedPreferences.getInstance()).getString('ascend.state.v1')!;
    expect(jsonDecode(saved)['progress']['pompes'], 10);

    now = DateTime(2026, 10, 24, 9); // next day, same week
    final g2 = make();
    await g2.load();
    expect(g2.d.progress['pompes'], 0);
    expect(g2.d.slips, isEmpty);
    expect(g2.d.debuffs, contains('sucre')); // needs 3 clean days
    expect(g2.d.sessions, 1);
    g2.dispose();

    now = DateTime(2026, 10, 26, 9); // Monday: 3 days later, new week
    final g3 = make();
    await g3.load();
    expect(g3.d.debuffs, isEmpty);
    expect(g3.d.sessions, 0);
    expect(g3.d.bossHp, 100);
    g3.dispose();
  });

  test('objectives grow with stats from the next day on', () async {
    final g = make();
    await g.load();
    g.d
      ..awakened = true
      ..points = 4;
    expect(g.targetOf(q('pompes')), 100);
    for (var i = 0; i < 4; i++) {
      g.addStat('FOR');
    }
    expect(g.targetOf(q('pompes')), 100);
    expect(g.nextTargetOf(q('pompes')), 120);
    expect(g.targetOf(q('eau')), 8);
    g.dispose();

    now = DateTime(2026, 10, 24, 9);
    final g2 = make();
    await g2.load();
    expect(g2.targetOf(q('pompes')), 120);
    g2.dispose();
  });

  test('domains choose which quests make up the daily quest', () async {
    final g = make();
    await g.load();
    g.d.awakened = true;
    g.toggleDomain('travail');
    g.toggleDomain('habitudes');
    expect(g.activeQuests.map((x) => x.id), ['pompes', 'gainage', 'lecture']);
    g.toggleDomain('esprit');
    g.toggleDomain('corps'); // last one stays on
    expect(g.d.domains['corps'], isTrue);
    g.dispose();
  });

  test('missing the daily quest triggers the midnight penalty', () async {
    final g = make();
    await g.load();
    g.d
      ..awakened = true
      ..awakenedOn = '2026-10-20'
      ..level = 4
      ..xp = 500;
    g.bump(q('eau'), 1);
    g.dispose();

    now = DateTime(2026, 10, 24, 0, 5);
    final g2 = make();
    await g2.load();
    expect(g2.d.penaltyPending, isTrue);
    expect(g2.penaltyShown!.xpLost, 200); // 25 % of 800
    expect(g2.d.xp, 300);
    g2.bump(q('eau'), 1);
    g2.d.progress['eau'] = 7;
    g2.bump(q('eau'), 1); // 60 XP halved
    expect(g2.d.xp, 330);
    g2.completePenalty();
    expect(g2.d.penaltyPending, isFalse);
    expect(g2.d.unlocked, contains('survivor'));
    g2.dispose();

    now = DateTime(2026, 10, 27, 9); // three days without opening the app
    final g3 = make();
    await g3.load();
    expect(g3.penaltyShown!.missedDays, 3);
    g3.dispose();
  });

  test('no penalty on the day of the awakening', () async {
    final g = make();
    await g.load();
    g.nextAwakenStep();
    g.nextAwakenStep();
    g.nextAwakenStep();
    g.dispose();
    now = DateTime(2026, 10, 24, 9);
    final g2 = make();
    await g2.load();
    expect(g2.d.penaltyPending, isFalse);
    g2.dispose();
  });

  test('ISO week numbers', () {
    expect(isoWeek(DateTime(2026, 10, 23)), 43);
    expect(isoWeek(DateTime(2027, 1, 1)), 53);
  });
}
