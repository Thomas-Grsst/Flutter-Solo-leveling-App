import 'package:flutter/material.dart';

import '../game/data.dart';
import '../game/state.dart';
import 'awaken_screen.dart' show AlertHeader;
import 'home_tab.dart' show fmtNum;
import 'theme.dart';
import 'widgets.dart';

class _Fade extends StatelessWidget {
  const _Fade({required this.child, this.ms = 200});
  final Widget child;
  final int ms;

  @override
  Widget build(BuildContext context) => TweenAnimationBuilder<double>(
    tween: Tween(begin: 0, end: 1),
    duration: Duration(milliseconds: ms),
    builder: (_, v, c) => Opacity(opacity: v, child: c),
    child: child,
  );
}

class LevelUpOverlay extends StatelessWidget {
  const LevelUpOverlay({super.key, required this.game});
  final Game game;

  @override
  Widget build(BuildContext context) {
    final g = game, lu = g.levelUp!, ri = g.rankIndex;
    final next = ri + 1 < ranks.length ? ranks[ri + 1] : null;
    Widget line(String k, String v, int delayMs) => Rise(
      delay: Duration(milliseconds: delayMs),
      child: KeyValue(k, v, vStyle: mono(14, color: k == 'Points de stat' ? C.blueLight : C.ink)),
    );
    return _Fade(
      child: Container(
        color: const Color(0xFF03050A).withValues(alpha: .97),
        child: Container(
          decoration: BoxDecoration(
            gradient: RadialGradient(center: const Alignment(0, -.4), radius: .5, colors: [const Color(0xFF3C96FF).withValues(alpha: .42), Colors.transparent]),
          ),
          child: SafeArea(
            child: Padding(
              padding: const EdgeInsets.fromLTRB(22, 30, 22, 34),
              child: Column(
                children: [
                  SizedBox(
                    width: 200,
                    height: 200,
                    child: Stack(
                      alignment: Alignment.center,
                      children: [
                        const _Burst(color: C.blue, delay: 0),
                        const _Burst(color: C.blueLight, delay: 600),
                        Transform.rotate(
                          angle: .785398,
                          child: Container(
                            width: 140,
                            height: 140,
                            decoration: boxed(C.blueLight.withValues(alpha: .6), shadow: [BoxShadow(color: C.blueA(.5), blurRadius: 30)]),
                          ),
                        ),
                        Rise(
                          duration: const Duration(milliseconds: 500),
                          child: Text(
                            '${g.d.level}',
                            style: chakra(84, color: Colors.white, shadows: glowText(C.blue, 30)),
                          ),
                        ),
                      ],
                    ),
                  ),
                  const SizedBox(height: 22),
                  FittedBox(
                    fit: BoxFit.scaleDown,
                    child: Text(
                      'NIVEAU SUPÉRIEUR',
                      maxLines: 1,
                      style: chakra(26, ls: .22, shadows: glowText(const Color(0xFF50B4FF).withValues(alpha: .9), 16)),
                    ),
                  ),
                  const SizedBox(height: 6),
                  Text(
                    'Vous êtes passé du niveau ${lu.from} au niveau ${lu.to}.',
                    textAlign: TextAlign.center,
                    style: barlow(14, w: FontWeight.w500, color: C.muted),
                  ),
                  const SizedBox(height: 22),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
                    decoration: boxed(C.blueA(.45), fill: const Color(0xFF081226).withValues(alpha: .75)),
                    child: Column(
                      children: [
                        line('Points de stat', '+${(lu.to - lu.from) * pointsPerLevel}', 200),
                        const SizedBox(height: 8),
                        line('Rang actuel', ranks[ri].$1, 350),
                        const SizedBox(height: 8),
                        line('Prochain rang', next == null ? 'Rang maximal' : '${next.$1} · niveau ${next.$3}', 500),
                      ],
                    ),
                  ),
                  const Spacer(),
                  HudButton(label: 'RÉPARTIR LES POINTS', onTap: g.allocateNow, fill: .18),
                  const SizedBox(height: 8),
                  HudButton(label: 'FERMER', onTap: g.closeLevelUp, height: 44, fill: 0, borderOpacity: 0, ink: C.muted, size: 13, glow: false),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}

/// Expanding, fading ring (prototype `burst` keyframes, 1.8 s loop).
class _Burst extends StatefulWidget {
  const _Burst({required this.color, required this.delay});
  final Color color;
  final int delay;

  @override
  State<_Burst> createState() => _BurstState();
}

class _BurstState extends State<_Burst> with SingleTickerProviderStateMixin {
  late final AnimationController _c = AnimationController(vsync: this, duration: const Duration(milliseconds: 1800));

  @override
  void initState() {
    super.initState();
    Future.delayed(Duration(milliseconds: widget.delay), () {
      if (mounted) _c.repeat();
    });
  }

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => AnimatedBuilder(
    animation: _c,
    builder: (_, _) {
      final t = Curves.easeOut.transform(_c.value);
      return Opacity(
        opacity: _c.isAnimating ? .9 * (1 - t) : 0,
        child: Transform.scale(
          scale: .6 + 1.2 * t,
          child: Container(
            width: 200,
            height: 200,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              border: Border.all(color: widget.color, width: 2),
            ),
          ),
        ),
      );
    },
  );
}

Widget _alertCell(String label, List<Widget> body) => Expanded(
  child: Container(
    padding: const EdgeInsets.all(10),
    decoration: boxed(C.redA(.35)),
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          label,
          style: chakra(10, w: FontWeight.w600, color: C.redPale, ls: .16),
        ),
        const SizedBox(height: 2),
        ...body,
      ],
    ),
  ),
);

/// Red "System" alert window shared by the debuff and penalty notices.
class _RedAlert extends StatelessWidget {
  const _RedAlert({required this.header, required this.trigger, required this.children, required this.onClose});
  final String header;
  final Object trigger;
  final List<Widget> children;
  final VoidCallback onClose;

  @override
  Widget build(BuildContext context) => _Fade(
    ms: 150,
    child: Container(
      color: const Color(0xFF0A0206).withValues(alpha: .88),
      padding: const EdgeInsets.symmetric(horizontal: 18),
      alignment: Alignment.center,
      child: Rise(
        duration: const Duration(milliseconds: 300),
        child: Shake(
          trigger: trigger,
          delay: const Duration(milliseconds: 300),
          child: Container(
            padding: const EdgeInsets.all(18),
            decoration: boxed(
              C.redA(.7),
              gradient: LinearGradient(
                begin: Alignment.topCenter,
                end: Alignment.bottomCenter,
                colors: [const Color(0xFF500A18).withValues(alpha: .75), const Color(0xFF14040A).withValues(alpha: .95)],
              ),
              shadow: [BoxShadow(color: C.redA(.3), blurRadius: 30)],
            ),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Container(
                  padding: const EdgeInsets.only(bottom: 10),
                  decoration: BoxDecoration(
                    border: Border(bottom: BorderSide(color: C.redA(.3))),
                  ),
                  child: AlertHeader(text: header, color: C.red, ink: C.redWhite),
                ),
                const SizedBox(height: 14),
                ...children,
                const SizedBox(height: 14),
                HudButton(label: 'COMPRIS', onTap: onClose, height: 48, color: C.red, fill: .18, ink: C.redWhite, size: 13, ls: .14, glow: false),
              ],
            ),
          ),
        ),
      ),
    ),
  );
}

const _alertBody = Color(0xFFF3D3D7);

class DebuffOverlay extends StatelessWidget {
  const DebuffOverlay({super.key, required this.game});
  final Game game;

  @override
  Widget build(BuildContext context) {
    final n = game.debuffShown!, h = habitById(n.habitId);
    return _RedAlert(
      header: "ALTÉRATION D'ÉTAT",
      trigger: n,
      onClose: game.closeDebuff,
      children: [
        Text(h.debuff, textAlign: TextAlign.center, style: chakra(26, ls: .04)),
        const SizedBox(height: 4),
        Text(
          'Écart enregistré\u00A0: ${h.name.toLowerCase()} à ${n.time}.',
          textAlign: TextAlign.center,
          style: barlow(14, w: FontWeight.w500, color: C.redPale),
        ),
        const SizedBox(height: 14),
        IntrinsicHeight(
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              _alertCell(statNames[h.stat]!, [Text('${n.statBefore} → ${n.statAfter}', style: chakra(20))]),
              const SizedBox(width: 8),
              _alertCell('XP', [
                Text('−$xpPerSlip XP', style: chakra(20, color: C.redMid)),
                Text(
                  'Gain −${(debuffXpMalus * 100).round()} %',
                  style: barlow(12, w: FontWeight.w500, color: C.redPale),
                ),
              ]),
            ],
          ),
        ),
        const SizedBox(height: 14),
        Text(
          'Pour purger\u00A0: tenez $debuffPurgeDays jours sans écart, ou terminez une quête de purge de 30 min de cardio.',
          style: barlow(14, w: FontWeight.w500, color: _alertBody, height: 1.4),
        ),
      ],
    );
  }
}

class PenaltyOverlay extends StatelessWidget {
  const PenaltyOverlay({super.key, required this.game});
  final Game game;

  @override
  Widget build(BuildContext context) {
    final n = game.penaltyShown!;
    final cause = n.missedDays > 1
        ? 'Quête quotidienne non accomplie pendant ${n.missedDays} jours.'
        : 'Quête quotidienne non accomplie\u00A0: ${n.done}/${n.total} objectifs.';
    return _RedAlert(
      header: 'PÉNALITÉ',
      trigger: n,
      onClose: game.closePenalty,
      children: [
        Text('ZONE DE PÉNALITÉ', textAlign: TextAlign.center, style: chakra(24, ls: .08)),
        const SizedBox(height: 4),
        Text(
          cause,
          textAlign: TextAlign.center,
          style: barlow(14, w: FontWeight.w500, color: C.redPale),
        ),
        const SizedBox(height: 14),
        IntrinsicHeight(
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              _alertCell('XP PERDUE', [Text('−${fmtNum(n.xpLost)} XP', style: chakra(20, color: C.redMid))]),
              const SizedBox(width: 8),
              _alertCell('GAINS', [
                Text('−${((1 - penaltyGainFactor) * 100).round()} %', style: chakra(20, color: C.redMid)),
                Text(
                  'jusqu\'à la purge',
                  style: barlow(12, w: FontWeight.w500, color: C.redPale),
                ),
              ]),
            ],
          ),
        ),
        const SizedBox(height: 14),
        Text(
          'Quête de pénalité\u00A0: survivre à $penaltyQuest. Validez-la dans l\'onglet Quêtes pour lever la pénalité.',
          style: barlow(14, w: FontWeight.w500, color: _alertBody, height: 1.4),
        ),
      ],
    );
  }
}

/// Blue System notification proposing to raise an objective after a streak.
class ProposalOverlay extends StatelessWidget {
  const ProposalOverlay({super.key, required this.game});
  final Game game;

  @override
  Widget build(BuildContext context) {
    final g = game, q = g.proposal!;
    final from = g.baseTargetOf(q), to = from + q.step;
    return _Fade(
      child: Container(
        color: const Color(0xFF03050A).withValues(alpha: .9),
        padding: const EdgeInsets.symmetric(horizontal: 18),
        alignment: Alignment.center,
        child: Rise(
          key: ValueKey(q.id),
          duration: const Duration(milliseconds: 400),
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 20),
            decoration: boxed(
              C.blueA(.7),
              gradient: LinearGradient(
                begin: Alignment.topCenter,
                end: Alignment.bottomCenter,
                colors: [const Color(0xFF122852).withValues(alpha: .85), const Color(0xFF060C1C).withValues(alpha: .95)],
              ),
              shadow: [BoxShadow(color: const Color(0xFF3CA0FF).withValues(alpha: .35), blurRadius: 24)],
            ),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Container(
                  padding: const EdgeInsets.only(bottom: 10),
                  decoration: BoxDecoration(
                    border: Border(bottom: BorderSide(color: C.blueA(.25))),
                  ),
                  child: const AlertHeader(text: 'NOTIFICATION', color: C.blue, ink: C.bluePale, ls: .26),
                ),
                const SizedBox(height: 14),
                Text(
                  '${q.name}\u00A0: objectif accompli $proposalStreak jours de suite. Le Système propose de l\'augmenter.',
                  textAlign: TextAlign.center,
                  style: barlow(17, height: 1.4),
                ),
                const SizedBox(height: 14),
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
                  decoration: boxed(C.blueA(.35), fill: const Color(0xFF081226).withValues(alpha: .75)),
                  child: Column(
                    children: [
                      KeyValue('Objectif actuel', '${from * g.mult}${q.unit}'),
                      const SizedBox(height: 8),
                      KeyValue('Nouvel objectif', '${to * g.mult}${q.unit}', vStyle: mono(14, color: C.blueLight)),
                      const SizedBox(height: 8),
                      KeyValue('Récompense', '+$proposalBonusXp XP', vStyle: mono(14, color: C.gold)),
                    ],
                  ),
                ),
                const SizedBox(height: 10),
                Text(
                  'Le nouvel objectif s\'applique dès demain.',
                  textAlign: TextAlign.center,
                  style: barlow(12, w: FontWeight.w500, color: C.muted),
                ),
                const SizedBox(height: 14),
                Row(
                  children: [
                    Expanded(
                      child: HudButton(label: 'PLUS TARD', onTap: g.declineProposal, fill: 0, borderOpacity: .3, ink: C.muted, size: 13, ls: .14, glow: false),
                    ),
                    const SizedBox(width: 8),
                    Expanded(
                      child: HudButton(label: 'ACCEPTER', onTap: g.acceptProposal),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class VictoryOverlay extends StatelessWidget {
  const VictoryOverlay({super.key, required this.game});
  final Game game;

  @override
  Widget build(BuildContext context) => _Fade(
    child: Container(
      decoration: BoxDecoration(
        gradient: RadialGradient(
          center: const Alignment(0, -.2),
          radius: .55,
          colors: [const Color(0xFF8C5AFF).withValues(alpha: .4), const Color(0xFF05040C).withValues(alpha: .97)],
        ),
      ),
      padding: const EdgeInsets.symmetric(horizontal: 22),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Rise(
            duration: const Duration(milliseconds: 300),
            child: Text(
              'PORTE DE RANG C',
              textAlign: TextAlign.center,
              style: chakra(12, w: FontWeight.w600, color: C.violetLight, ls: .3),
            ),
          ),
          const SizedBox(height: 20),
          Rise(
            delay: const Duration(milliseconds: 100),
            child: Text(
              'DONJON NETTOYÉ',
              textAlign: TextAlign.center,
              style: chakra(30, ls: .1, height: 1.15, shadows: glowText(C.violetA(.9), 20)),
            ),
          ),
          const SizedBox(height: 20),
          Rise(
            delay: const Duration(milliseconds: 250),
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
              decoration: boxed(C.goldA(.55), fill: const Color(0xFF32240A).withValues(alpha: .4)),
              child: Column(
                children: [
                  KeyValue(
                    'Titre obtenu',
                    'Inarrêtable',
                    kColor: const Color(0xFFC9BC9C),
                    vStyle: barlow(14, color: C.goldLight),
                  ),
                  const SizedBox(height: 8),
                  KeyValue(
                    'Expérience',
                    '+1 500 XP',
                    kColor: const Color(0xFFC9BC9C),
                    vStyle: mono(14, color: C.goldLight),
                  ),
                ],
              ),
            ),
          ),
          const SizedBox(height: 20),
          HudButton(label: 'RÉCUPÉRER LES RÉCOMPENSES', onTap: game.closeVictory, color: C.gold, fill: .16, ink: const Color(0xFFFFE7B0)),
        ],
      ),
    ),
  );
}

class Toast extends StatelessWidget {
  const Toast({super.key, required this.text});
  final String text;

  @override
  Widget build(BuildContext context) => Rise(
    key: ValueKey(text),
    duration: const Duration(milliseconds: 200),
    child: Container(
      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
      decoration: boxed(
        C.blue,
        fill: const Color(0xFF060E1E).withValues(alpha: .96),
        shadow: [BoxShadow(color: C.blueA(.35), blurRadius: 22)],
      ),
      child: Text(text, style: barlow(14, color: C.bluePale)),
    ),
  );
}
