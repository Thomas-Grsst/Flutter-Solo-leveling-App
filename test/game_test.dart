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
    for (var i = 0; i < 2; i++) {
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
    expect(g.d.unlocked, contains('survivor'));
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

  test('ISO week numbers', () {
    expect(isoWeek(DateTime(2026, 10, 23)), 43);
    expect(isoWeek(DateTime(2027, 1, 1)), 53);
  });
}
