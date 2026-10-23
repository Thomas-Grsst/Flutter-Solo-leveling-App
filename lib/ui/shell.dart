import 'package:flutter/material.dart';

import '../game/state.dart';
import 'awaken_screen.dart';
import 'dungeon_tab.dart';
import 'home_tab.dart';
import 'overlays.dart';
import 'profile_tab.dart';
import 'quests_tab.dart';
import 'theme.dart';

const _tabBarHeight = 52.0;

class Shell extends StatelessWidget {
  const Shell({super.key, required this.game});
  final Game game;

  @override
  Widget build(BuildContext context) {
    return ListenableBuilder(
      listenable: game,
      builder: (context, _) {
        final g = game;
        final bottomInset = MediaQuery.paddingOf(context).bottom;
        return Scaffold(
          body: Container(
            decoration: BoxDecoration(
              color: C.bg,
              gradient: RadialGradient(
                center: const Alignment(0, -.48),
                radius: .9,
                colors: [const Color(0xFF286EDC).withValues(alpha: .22), C.bg],
                stops: const [0, .55],
              ),
            ),
            child: Stack(
              children: [
                SafeArea(
                  bottom: false,
                  child: g.d.awakened
                      ? Column(
                          children: [
                            Expanded(
                              child: SingleChildScrollView(
                                key: PageStorageKey(g.tab),
                                padding: const EdgeInsets.fromLTRB(18, 8, 18, 16),
                                child: switch (g.tab) {
                                  'quests' => QuestsTab(game: g),
                                  'dungeon' => DungeonTab(game: g),
                                  'profile' => ProfileTab(game: g),
                                  _ => HomeTab(game: g),
                                },
                              ),
                            ),
                            _TabBar(game: g, bottomInset: bottomInset),
                          ],
                        )
                      : Padding(
                          padding: EdgeInsets.only(bottom: bottomInset),
                          child: AwakenScreen(game: g),
                        ),
                ),
                if (g.toast.isNotEmpty)
                  Positioned(
                    left: 16,
                    right: 16,
                    bottom: _tabBarHeight + bottomInset + 14,
                    child: Toast(text: g.toast),
                  ),
                if (g.levelUp != null && !g.victory) Positioned.fill(child: LevelUpOverlay(game: g)),
                if (g.debuffShown != null) Positioned.fill(child: DebuffOverlay(game: g)),
                if (g.penaltyShown != null && g.debuffShown == null) Positioned.fill(child: PenaltyOverlay(game: g)),
                if (g.victory) Positioned.fill(child: VictoryOverlay(game: g)),
              ],
            ),
          ),
        );
      },
    );
  }
}

class _TabBar extends StatelessWidget {
  const _TabBar({required this.game, required this.bottomInset});
  final Game game;
  final double bottomInset;

  @override
  Widget build(BuildContext context) {
    final g = game;
    final tabs = [
      ('home', 'ACCUEIL', g.d.points, C.blue),
      ('quests', 'QUÊTES', g.activeQuests.length - g.doneCount + (g.d.penaltyPending ? 1 : 0), C.blue),
      ('dungeon', 'DONJONS', 0, C.violet),
      ('profile', 'PROFIL', 0, C.blue),
    ];
    return Container(
      padding: EdgeInsets.only(bottom: bottomInset),
      decoration: BoxDecoration(
        color: C.bg.withValues(alpha: .92),
        border: Border(top: BorderSide(color: C.blueA(.15))),
      ),
      child: Row(
        children: [
          for (final (id, label, badge, col) in tabs)
            Expanded(
              child: GestureDetector(
                behavior: HitTestBehavior.opaque,
                onTap: () => g.setTab(id),
                child: Container(
                  height: _tabBarHeight,
                  transform: Matrix4.translationValues(0, -1, 0),
                  decoration: BoxDecoration(
                    border: Border(top: BorderSide(color: g.tab == id ? col : Colors.transparent, width: 2)),
                  ),
                  child: Stack(
                    alignment: Alignment.center,
                    children: [
                      AnimatedDefaultTextStyle(
                        duration: const Duration(milliseconds: 140),
                        style: chakra(11, w: FontWeight.w600, ls: .1, color: g.tab == id ? (id == 'dungeon' ? C.violetPale : C.blueLight) : C.dim),
                        child: Text(label),
                      ),
                      if (badge > 0)
                        Positioned(
                          top: 6,
                          right: 14,
                          child: Container(
                            constraints: const BoxConstraints(minWidth: 15),
                            height: 15,
                            padding: const EdgeInsets.symmetric(horizontal: 3),
                            alignment: Alignment.center,
                            color: id == 'quests' ? C.redLight : C.blue,
                            child: Text(
                              '$badge',
                              style: barlow(10, w: FontWeight.w700, color: C.bg, height: 1),
                            ),
                          ),
                        ),
                    ],
                  ),
                ),
              ),
            ),
        ],
      ),
    );
  }
}
