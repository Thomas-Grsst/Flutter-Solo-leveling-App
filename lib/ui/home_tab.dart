import 'dart:async';

import 'package:flutter/material.dart';

import '../game/data.dart';
import '../game/state.dart';
import 'theme.dart';
import 'widgets.dart';

String fmtNum(int n) {
  final s = n.abs().toString();
  final b = StringBuffer(n < 0 ? '-' : '');
  for (var i = 0; i < s.length; i++) {
    if (i > 0 && (s.length - i) % 3 == 0) b.write(' ');
    b.write(s[i]);
  }
  return b.toString();
}

String rankShort(String r) => r == 'NATIONAL'
    ? 'NAT'
    : r == 'MONARQUE'
    ? 'MON'
    : r;

/// Live HH:MM:SS until midnight, when unfinished quests are due.
class Countdown extends StatefulWidget {
  const Countdown({super.key, required this.clock, this.size = 11});
  final DateTime Function() clock;
  final double size;

  @override
  State<Countdown> createState() => _CountdownState();
}

class _CountdownState extends State<Countdown> {
  late final Timer _t = Timer.periodic(const Duration(seconds: 1), (_) => setState(() {}));

  @override
  void dispose() {
    _t.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final now = widget.clock();
    final diff = DateTime(now.year, now.month, now.day + 1).difference(now).inSeconds;
    String p(int n) => n.toString().padLeft(2, '0');
    return Text('${p(diff ~/ 3600)}:${p(diff % 3600 ~/ 60)}:${p(diff % 60)}', style: mono(widget.size, color: C.redLight));
  }
}

class HomeTab extends StatelessWidget {
  const HomeTab({super.key, required this.game});
  final Game game;

  @override
  Widget build(BuildContext context) {
    final g = game, d = g.d;
    final ri = g.rankIndex, rank = ranks[ri];
    final tint = rankTint(ri);
    final pending = quests.where((q) => !g.isDone(q)).take(3).toList();
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Row(
          children: [
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    g.equippedTitle ?? 'Aucun titre',
                    style: barlow(12, w: FontWeight.w500, color: C.muted),
                  ),
                  Text(d.playerName, style: chakra(19, ls: .04)),
                ],
              ),
            ),
            RankBadge(label: rankShort(rank.$1), color: tint == C.blue ? C.blueLight : tint, onTap: () => g.setTab('profile')),
          ],
        ),
        const SizedBox(height: 14),
        Center(
          child: XpRing(
            fraction: d.xp / g.xpMax,
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Text(
                  'NIVEAU',
                  style: chakra(11, w: FontWeight.w600, color: C.muted, ls: .3, height: 1),
                ),
                const SizedBox(height: 4),
                Text(
                  '${d.level}',
                  style: chakra(
                    66,
                    height: 1,
                    shadows: glowText(const Color(0xFF50B4FF).withValues(alpha: .7), 22),
                  ).copyWith(fontFeatures: const [FontFeature.tabularFigures()]),
                ),
                const SizedBox(height: 4),
                Text('${fmtNum(d.xp)}/${fmtNum(g.xpMax)}', style: mono(11, color: C.blueLight)),
              ],
            ),
          ),
        ),
        const SizedBox(height: 14),
        Row(
          children: [
            for (final (i, c) in statCodes.indexed) ...[
              if (i > 0) const SizedBox(width: 6),
              Expanded(
                child: _StatTile(game: g, code: c),
              ),
            ],
          ],
        ),
        if (d.points > 0) ...[
          const SizedBox(height: 6),
          Text(
            '${d.points} point${d.points > 1 ? 's' : ''} à répartir · touchez une stat',
            textAlign: TextAlign.center,
            style: barlow(12, color: C.blueLight),
          ),
        ],
        const SizedBox(height: 14),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            SectionLabel("AUJOURD'HUI · ${g.doneCount}/${quests.length}", ls: .16),
            Countdown(clock: () => g.now, size: 11),
          ],
        ),
        for (final q in pending) ...[
          const SizedBox(height: 8),
          RuleRow(
            rule: C.blue,
            tint: C.blueA(.14),
            child: Row(
              children: [
                Expanded(child: TwoLine(q.name, rewardLine(q))),
                Text(countLine(g, q), style: mono(13)),
                const SizedBox(width: 12),
                HudButton(
                  label: q.session ? '+1' : '+${q.step}',
                  onTap: () => g.bump(q, 1),
                  height: 40,
                  minWidth: 48,
                  size: 13,
                  ls: 0,
                  fill: .1,
                  ink: C.blueLight,
                  glow: false,
                ),
              ],
            ),
          ),
        ],
        if (g.allDone) ...[
          const SizedBox(height: 8),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
            decoration: BoxDecoration(
              color: C.blueA(.08),
              border: const Border(left: BorderSide(color: C.blue, width: 2)),
            ),
            child: Text('Quête quotidienne accomplie. Aucune pénalité ce soir.', style: barlow(14, color: C.blueLight)),
          ),
        ],
        for (final id in d.debuffs.keys) ...[
          const SizedBox(height: 8),
          RuleRow(
            rule: C.red,
            tint: C.redA(.14),
            padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
            onTap: () => g.setTab('quests'),
            child: Row(
              children: [
                Expanded(child: TwoLine(habitById(id).debuff, debuffEffect(id), subColor: C.redPale)),
                Text('${g.debuffDays(id)}/$debuffPurgeDays j', style: mono(12, color: C.redLight)),
              ],
            ),
          ),
        ],
      ],
    );
  }
}

String rewardLine(QuestDef q) => '+${q.xp} XP · ${q.stat}${q.session ? ' · −$bossDamage % boss' : ''}';
String countLine(Game g, QuestDef q) {
  final t = g.targetOf(q);
  return '${g.d.progress[q.id]!.clamp(0, t)}/$t${q.unit}';
}

String debuffEffect(String id) => '${habitById(id).stat} −$debuffStatMalus · XP −${(debuffXpMalus * 100).round()} %';

class _StatTile extends StatelessWidget {
  const _StatTile({required this.game, required this.code});
  final Game game;
  final String code;

  @override
  Widget build(BuildContext context) {
    final deb = game.malus(code) > 0, can = game.d.points > 0;
    return GestureDetector(
      onTap: can ? () => game.addStat(code) : null,
      child: Stack(
        clipBehavior: Clip.none,
        fit: StackFit.passthrough,
        children: [
          Container(
            padding: const EdgeInsets.symmetric(vertical: 8),
            decoration: BoxDecoration(
              color: deb ? const Color(0xFF320810).withValues(alpha: .5) : const Color(0xFF0A162E).withValues(alpha: .6),
              border: Border.all(color: deb ? C.redA(.5) : C.blueA(can ? .6 : .3)),
            ),
            child: Column(
              children: [
                Text(
                  code,
                  style: chakra(10, w: FontWeight.w600, color: deb ? C.redPale : C.muted),
                ),
                const SizedBox(height: 2),
                Text(
                  '${game.effective(code)}',
                  style: chakra(17, color: deb ? C.redLight : C.ink).copyWith(fontFeatures: const [FontFeature.tabularFigures()]),
                ),
              ],
            ),
          ),
          if (can)
            Positioned(
              top: -7,
              right: -5,
              child: Container(
                width: 16,
                height: 16,
                alignment: Alignment.center,
                decoration: const BoxDecoration(
                  color: C.blue,
                  boxShadow: [BoxShadow(color: C.blue, blurRadius: 8)],
                ),
                child: Text(
                  '+',
                  style: barlow(12, w: FontWeight.w700, color: C.bg, height: 1),
                ),
              ),
            ),
        ],
      ),
    );
  }
}
