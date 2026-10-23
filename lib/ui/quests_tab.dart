import 'package:flutter/material.dart';

import '../game/data.dart';
import '../game/state.dart';
import 'home_tab.dart';
import 'theme.dart';
import 'widgets.dart';

class QuestsTab extends StatelessWidget {
  const QuestsTab({super.key, required this.game});
  final Game game;

  @override
  Widget build(BuildContext context) {
    final g = game, d = g.d;
    final left = g.activeQuests.length - g.doneCount;
    final slipN = g.slipCountToday;
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            const SectionLabel('QUÊTE QUOTIDIENNE'),
            Countdown(clock: () => g.now, size: 13),
          ],
        ),
        const SizedBox(height: 2),
        Text(left == 0 ? 'Quête accomplie' : '$left objectif${left > 1 ? 's' : ''} restant${left > 1 ? 's' : ''}', style: chakra(22, ls: .02)),
        if (d.penaltyPending) ...[const SizedBox(height: 14), _PenaltyCard(game: g)],
        const SizedBox(height: 14),
        for (final (i, q) in g.activeQuests.indexed) ...[if (i > 0) const SizedBox(height: 8), _QuestCard(game: g, quest: q)],
        const SizedBox(height: 20),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            const SectionLabel('INTERDITS', color: C.redLight),
            Text(slipN > 0 ? "$slipN écart${slipN > 1 ? 's' : ''} aujourd'hui" : 'Aucun écart', style: mono(12, color: C.redPale)),
          ],
        ),
        for (final h in g.chosenHabits) ...[const SizedBox(height: 8), _HabitRow(game: g, habit: h)],
        if (d.debuffs.isNotEmpty) ...[
          const SizedBox(height: 20),
          const SectionLabel('ALTÉRATIONS ACTIVES'),
          for (final id in d.debuffs.keys) ...[const SizedBox(height: 14), _DebuffCard(game: g, id: id)],
        ],
      ],
    );
  }
}

class _PenaltyCard extends StatelessWidget {
  const _PenaltyCard({required this.game});
  final Game game;

  @override
  Widget build(BuildContext context) => Container(
    padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
    decoration: boxed(
      C.red,
      fill: const Color(0xFF320810).withValues(alpha: .6),
      shadow: [BoxShadow(color: C.redA(.25), blurRadius: 18)],
    ),
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Text(
          'ZONE DE PÉNALITÉ',
          style: chakra(11, w: FontWeight.w600, color: C.redLight, ls: .2),
        ),
        const SizedBox(height: 4),
        Text('Survivre : $penaltyQuest', style: chakra(18, ls: .02)),
        const SizedBox(height: 6),
        Text(
          "Vous n'avez pas accompli la quête quotidienne. Vos gains d'XP sont réduits de moitié tant que cette quête n'est pas terminée.",
          style: barlow(13, w: FontWeight.w500, color: C.redPale, height: 1.4),
        ),
        const SizedBox(height: 10),
        HudButton(
          label: 'QUÊTE DE PÉNALITÉ TERMINÉE',
          onTap: game.completePenalty,
          height: 44,
          color: C.red,
          fill: .2,
          ink: C.redWhite,
          size: 12,
          ls: .14,
          glow: false,
        ),
      ],
    ),
  );
}

class _QuestCard extends StatelessWidget {
  const _QuestCard({required this.game, required this.quest});
  final Game game;
  final QuestDef quest;

  @override
  Widget build(BuildContext context) {
    final q = quest, done = game.isDone(q), target = game.targetOf(q);
    final ink = done ? C.muted : C.ink;
    return RuleRow(
      rule: done ? C.blueA(.35) : C.blue,
      tint: C.blueA(done ? .05 : .14),
      padding: const EdgeInsets.fromLTRB(14, 11, 10, 11),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Row(
            children: [
              Expanded(child: TwoLine(q.name, rewardLine(q), titleColor: ink, gap: 1)),
              const SizedBox(width: 10),
              Text(countLine(game, q), style: mono(13, color: ink)),
            ],
          ),
          const SizedBox(height: 8),
          SizedBox(
            height: 38,
            child: Row(
              children: [
                Expanded(child: GlowBar(fraction: game.d.progress[q.id]! / target)),
                const SizedBox(width: 8),
                if (done)
                  Text('ACCOMPLI', style: chakra(11, color: C.blue, ls: .16))
                else ...[
                  Semantics(
                    label: 'Retirer',
                    button: true,
                    child: HudButton(
                      label: '−',
                      onTap: () => game.bump(q, -1),
                      width: 40,
                      height: 38,
                      fill: 0,
                      borderOpacity: .3,
                      ink: C.muted,
                      size: 16,
                      ls: 0,
                      glow: false,
                    ),
                  ),
                  const SizedBox(width: 6),
                  HudButton(
                    label: q.session ? '+1' : '+${q.step}',
                    onTap: () => game.bump(q, 1),
                    height: 38,
                    minWidth: 56,
                    fill: .14,
                    size: 13,
                    ls: 0,
                    glow: false,
                  ),
                ],
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _HabitRow extends StatelessWidget {
  const _HabitRow({required this.game, required this.habit});
  final Game game;
  final HabitDef habit;

  @override
  Widget build(BuildContext context) {
    final h = habit, slipTime = game.d.slips[h.id], slipped = slipTime != null;
    final days = game.habitDays(h.id);
    final sub = slipped
        ? 'Écart à $slipTime · ${h.stat} −$debuffStatMalus'
        : days > 0
        ? 'Tenu · $days jour${days > 1 ? 's' : ''}'
        : 'Premier jour';
    return RuleRow(
      rule: slipped ? C.red : C.redA(.35),
      tint: C.redA(slipped ? .16 : .06),
      child: SizedBox(
        height: 38,
        child: Row(
          children: [
            Expanded(child: TwoLine(h.name, sub, subColor: slipped ? C.redLight : const Color(0xFFA9B6C9), gap: 1)),
            const SizedBox(width: 10),
            Text(slipped ? '−$xpPerSlip XP' : '+${h.xp} XP', style: mono(12, color: slipped ? C.redLight : C.blue)),
            if (!slipped) ...[
              const SizedBox(width: 10),
              HudButton(
                label: 'ÉCART',
                onTap: () => game.slip(h.id),
                width: 62,
                height: 38,
                fill: 0,
                color: C.red,
                borderOpacity: .55,
                ink: C.redLight,
                size: 11,
                ls: .1,
                glow: false,
              ),
            ],
          ],
        ),
      ),
    );
  }
}

class _DebuffCard extends StatelessWidget {
  const _DebuffCard({required this.game, required this.id});
  final Game game;
  final String id;

  @override
  Widget build(BuildContext context) {
    final h = habitById(id);
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
      decoration: boxed(C.redA(.45), fill: const Color(0xFF320810).withValues(alpha: .45)),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Row(
            crossAxisAlignment: CrossAxisAlignment.baseline,
            textBaseline: TextBaseline.alphabetic,
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(h.debuff, style: chakra(16, ls: .04)),
              Text(debuffEffect(id), style: mono(12, color: C.redLight)),
            ],
          ),
          const SizedBox(height: 10),
          Text(
            'Tenez $debuffPurgeDays jours sans écart (${game.debuffDays(id)}/$debuffPurgeDays j) ou terminez la quête de purge.',
            style: barlow(13, w: FontWeight.w500, color: C.redPale, height: 1.4),
          ),
          const SizedBox(height: 10),
          HudButton(
            label: 'QUÊTE DE PURGE · 30 MIN DE CARDIO',
            onTap: () => game.purge(id),
            height: 42,
            color: C.red,
            fill: .16,
            ink: C.redWhite,
            size: 12,
            ls: .14,
            glow: false,
          ),
        ],
      ),
    );
  }
}
