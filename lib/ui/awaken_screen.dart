import 'package:flutter/material.dart';

import '../game/data.dart';
import '../game/state.dart';
import 'theme.dart';
import 'widgets.dart';

class AwakenScreen extends StatelessWidget {
  const AwakenScreen({super.key, required this.game});
  final Game game;

  @override
  Widget build(BuildContext context) {
    final step = game.awakenStep;
    return Container(
      decoration: BoxDecoration(
        gradient: RadialGradient(radius: .8, colors: [const Color(0xFF286EDC).withValues(alpha: .18), Colors.transparent], stops: const [0, .7]),
      ),
      child: LayoutBuilder(
        builder: (context, box) => SingleChildScrollView(
          padding: const EdgeInsets.fromLTRB(20, 20, 20, 12),
          child: ConstrainedBox(
            constraints: BoxConstraints(minHeight: box.maxHeight - 32),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                ...switch (step) {
                  0 => _notification(),
                  1 => _domains(),
                  _ => _habits(),
                },
                const SizedBox(height: 18),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    for (var i = 0; i < 3; i++)
                      AnimatedContainer(
                        duration: const Duration(milliseconds: 200),
                        margin: const EdgeInsets.symmetric(horizontal: 3),
                        width: i == step ? 24 : 8,
                        height: 4,
                        color: i <= step ? C.blue : C.blueA(.25),
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

  List<Widget> _notification() => [
    Rise(
      duration: const Duration(milliseconds: 500),
      child: Pulse(
        period: const Duration(milliseconds: 1500),
        builder: (_, t) => Container(
          padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 20),
          decoration: BoxDecoration(
            border: Border.all(color: C.blueA(.7)),
            gradient: LinearGradient(
              begin: Alignment.topCenter,
              end: Alignment.bottomCenter,
              colors: [const Color(0xFF122852).withValues(alpha: .65), const Color(0xFF060C1C).withValues(alpha: .85)],
            ),
            boxShadow: [
              BoxShadow(
                color: const Color(0xFF3CA0FF).withValues(alpha: .22 + .2 * t),
                blurRadius: 16 + 12 * t,
              ),
            ],
          ),
          child: Column(
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
              Text('Vous avez rempli les conditions pour devenir un Joueur. Acceptez-vous\u00A0?', textAlign: TextAlign.center, style: barlow(19, height: 1.4)),
              if (game.refusals > 0) ...[
                const SizedBox(height: 14),
                Shake(
                  trigger: game.refusals,
                  child: Text(
                    'Refus impossible. Le Système vous a déjà choisi.',
                    textAlign: TextAlign.center,
                    style: barlow(13, color: C.redLight),
                  ),
                ),
              ],
            ],
          ),
        ),
      ),
    ),
    const SizedBox(height: 18),
    Row(
      children: [
        Expanded(
          child: HudButton(label: 'REFUSER', onTap: game.refuse, fill: 0, borderOpacity: .3, ink: C.muted, size: 13, ls: .14, glow: false),
        ),
        const SizedBox(width: 8),
        Expanded(
          flex: 2,
          child: HudButton(label: 'ACCEPTER', onTap: game.nextAwakenStep),
        ),
      ],
    ),
  ];

  Widget _stepHeader(String step, Color stepColor, String title, String sub) => Rise(
    duration: const Duration(milliseconds: 300),
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          step,
          style: chakra(11, w: FontWeight.w600, color: stepColor, ls: .2),
        ),
        const SizedBox(height: 6),
        Text(title, style: chakra(24, ls: .02)),
        const SizedBox(height: 6),
        Text(
          sub,
          style: barlow(14, w: FontWeight.w500, color: C.muted),
        ),
      ],
    ),
  );

  List<Widget> _domains() => [
    _stepHeader('ÉTAPE 2 SUR 3', C.blue, 'Que voulez-vous entraîner\u00A0?', 'Le Système générera vos quêtes quotidiennes à partir de ces domaines.'),
    const SizedBox(height: 18),
    GridView.count(
      crossAxisCount: 2,
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      mainAxisSpacing: 8,
      crossAxisSpacing: 8,
      childAspectRatio: 2.4,
      children: [for (final (id, name, sub) in domains) _DomainTile(name: name, sub: sub, on: game.d.domains[id] ?? false, onTap: () => game.toggleDomain(id))],
    ),
    const SizedBox(height: 18),
    HudButton(label: 'CONTINUER', onTap: game.nextAwakenStep),
  ];

  List<Widget> _habits() => [
    _stepHeader(
      'ÉTAPE 3 SUR 3',
      C.redMid,
      'Quelles habitudes voulez-vous éliminer\u00A0?',
      "Chaque jour sans écart rapporte de l'XP. Un écart applique une altération d'état.",
    ),
    const SizedBox(height: 18),
    for (final h in habits) ...[_HabitChoice(habit: h, on: game.d.chosen[h.id] ?? false, onTap: () => game.toggleHabitChoice(h.id)), const SizedBox(height: 6)],
    const SizedBox(height: 12),
    HudButton(label: 'DEVENIR UN JOUEUR', onTap: game.nextAwakenStep),
  ];
}

/// "!" box + glowing spaced title, shared with the debuff overlay.
class AlertHeader extends StatelessWidget {
  const AlertHeader({super.key, required this.text, required this.color, required this.ink, this.ls = .24});
  final String text;
  final Color color, ink;
  final double ls;

  @override
  Widget build(BuildContext context) => Row(
    mainAxisAlignment: MainAxisAlignment.center,
    children: [
      Container(
        width: 20,
        height: 20,
        alignment: Alignment.center,
        decoration: BoxDecoration(border: Border.all(color: color)),
        child: Text('!', style: chakra(13, color: color)),
      ),
      const SizedBox(width: 10),
      Text(
        text,
        style: chakra(15, color: ink, ls: ls, shadows: glowText(color.withValues(alpha: .8), 12)),
      ),
    ],
  );
}

class _DomainTile extends StatelessWidget {
  const _DomainTile({required this.name, required this.sub, required this.on, required this.onTap});
  final String name, sub;
  final bool on;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) => GestureDetector(
    onTap: onTap,
    child: AnimatedContainer(
      duration: const Duration(milliseconds: 140),
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 14),
      decoration: BoxDecoration(
        color: on ? C.blueA(.14) : Colors.transparent,
        border: Border.all(color: on ? C.blue : C.blueA(.25)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Text(name, style: chakra(15, color: on ? C.ink : C.muted, ls: .08)),
          const SizedBox(height: 3),
          Text(
            sub,
            style: barlow(12, w: FontWeight.w500, color: C.muted),
          ),
        ],
      ),
    ),
  );
}

class _HabitChoice extends StatelessWidget {
  const _HabitChoice({required this.habit, required this.on, required this.onTap});
  final HabitDef habit;
  final bool on;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) => GestureDetector(
    onTap: onTap,
    child: AnimatedContainer(
      duration: const Duration(milliseconds: 140),
      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
      decoration: BoxDecoration(
        color: on ? C.redA(.1) : Colors.transparent,
        border: Border.all(color: on ? C.redA(.6) : C.redA(.2)),
      ),
      child: Row(
        children: [
          Container(
            width: 16,
            height: 16,
            alignment: Alignment.center,
            decoration: BoxDecoration(
              color: on ? C.red : Colors.transparent,
              border: Border.all(color: C.red),
            ),
            child: on
                ? Text(
                    '✓',
                    style: barlow(11, w: FontWeight.w700, color: C.bg, height: 1),
                  )
                : null,
          ),
          const SizedBox(width: 12),
          Expanded(child: Text(habit.name, style: barlow(15))),
          Text('${habit.debuff} · ${habit.stat} −$debuffStatMalus', style: mono(11, color: C.redPale)),
        ],
      ),
    ),
  );
}
