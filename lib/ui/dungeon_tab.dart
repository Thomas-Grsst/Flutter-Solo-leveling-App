import 'package:flutter/material.dart';

import '../game/data.dart';
import '../game/state.dart';
import 'theme.dart';
import 'widgets.dart';

class DungeonTab extends StatelessWidget {
  const DungeonTab({super.key, required this.game});
  final Game game;

  @override
  Widget build(BuildContext context) {
    final g = game, d = g.d, now = g.now;
    final left = weekStart(now).add(const Duration(days: 7)).difference(now);
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            const SectionLabel('DONJON DE LA SEMAINE', color: C.violetLight, ls: .16),
            SectionLabel('SEMAINE ${isoWeek(now)}', color: C.violetLight, ls: .16),
          ],
        ),
        const SizedBox(height: 14),
        SizedBox(
          height: 200,
          child: Stack(
            alignment: Alignment.center,
            children: [
              AnimatedOpacity(
                opacity: d.bossDead ? .25 : 1,
                duration: const Duration(milliseconds: 400),
                child: Pulse(
                  period: const Duration(seconds: 2),
                  builder: (_, t) => Transform.scale(
                    scale: 1 + .04 * t,
                    child: Container(
                      width: 140,
                      height: 186,
                      decoration: BoxDecoration(
                        borderRadius: const BorderRadius.all(Radius.elliptical(70, 93)),
                        gradient: RadialGradient(
                          radius: .5,
                          transform: const _StretchY(186 / 140),
                          colors: [
                            const Color(0xFF05040C),
                            const Color(0xFF05040C),
                            Color.lerp(const Color(0xFF6E3CE6), const Color(0xFF8A5CFF), t)!.withValues(alpha: .9),
                            const Color(0xFFA07BFF).withValues(alpha: .5),
                            Colors.transparent,
                          ],
                          stops: const [0, .42, .78, .99, 1],
                        ),
                        boxShadow: [BoxShadow(color: const Color(0xFF8C5AFF).withValues(alpha: .55 + .15 * t), blurRadius: 60)],
                      ),
                    ),
                  ),
                ),
              ),
              Positioned(
                bottom: 2,
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 4),
                  decoration: boxed(C.violet, fill: const Color(0xFF140A28).withValues(alpha: .85)),
                  child: Text(d.bossDead ? 'PORTE FERMÉE' : 'PORTE DE RANG C', style: chakra(12, color: C.violetPale, ls: .24)),
                ),
              ),
            ],
          ),
        ),
        const SizedBox(height: 14),
        Text('Gardien de la procrastination', textAlign: TextAlign.center, style: chakra(22, ls: .04)),
        const SizedBox(height: 4),
        Text(
          'Chaque séance de travail profond inflige $bossDamage % de dégâts.',
          textAlign: TextAlign.center,
          style: barlow(13, w: FontWeight.w500, color: C.violetMuted),
        ),
        const SizedBox(height: 14),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text('PV DU BOSS', style: mono(11, color: C.violetMuted)),
            Text('${d.bossHp} %', style: mono(11)),
          ],
        ),
        const SizedBox(height: 6),
        GlowBar(
          fraction: d.bossHp / 100,
          height: 8,
          color: C.violet,
          track: C.violetA(.15),
          border: C.violetA(.4),
          gradient: const LinearGradient(colors: [C.red, C.violet]),
          duration: const Duration(milliseconds: 500),
        ),
        const SizedBox(height: 14),
        Container(
          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
          decoration: boxed(C.violetA(.35), fill: const Color(0xFF140C28).withValues(alpha: .6)),
          child: Column(
            children: [
              _line('Séances réalisées', Text('${d.sessions} / $bossSessionsMax', style: mono(13))),
              const SizedBox(height: 8),
              _line('Temps restant', Text('${left.inDays} j ${left.inHours % 24} h', style: mono(13, color: C.redLight))),
              const SizedBox(height: 8),
              _line(
                'Récompense',
                Text(
                  'Titre « Inarrêtable » · 1 500 XP',
                  style: barlow(13, w: FontWeight.w500, color: C.gold),
                ),
              ),
            ],
          ),
        ),
        const SizedBox(height: 14),
        if (!d.bossDead)
          HudButton(label: 'TERMINER UNE SÉANCE · 50 MIN', onTap: g.doSession, color: C.violet, ink: const Color(0xFFEDE6FF), ls: .14)
        else
          Container(
            padding: const EdgeInsets.all(14),
            decoration: boxed(C.gold, fill: const Color(0xFF3C2C0A).withValues(alpha: .4)),
            child: Text(
              'PORTE NETTOYÉE · PROCHAINE PORTE LUNDI',
              textAlign: TextAlign.center,
              style: chakra(13, color: C.goldLight, ls: .14),
            ),
          ),
      ],
    );
  }

  Widget _line(String k, Widget v) => Row(
    mainAxisAlignment: MainAxisAlignment.spaceBetween,
    children: [
      Text(
        k,
        style: barlow(13, w: FontWeight.w500, color: C.violetMuted),
      ),
      const SizedBox(width: 12),
      Flexible(child: v),
    ],
  );
}

/// Stretches a circular gradient vertically so it fills an elliptical portal.
class _StretchY extends GradientTransform {
  const _StretchY(this.k);
  final double k;

  @override
  Matrix4 transform(Rect bounds, {TextDirection? textDirection}) {
    final c = bounds.center;
    return Matrix4.identity()
      ..translateByDouble(c.dx, c.dy, 0, 1)
      ..scaleByDouble(1, k, 1, 1)
      ..translateByDouble(-c.dx, -c.dy, 0, 1);
  }
}
