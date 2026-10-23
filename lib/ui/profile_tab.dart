import 'package:flutter/material.dart';

import '../game/data.dart';
import '../game/state.dart';
import 'awaken_screen.dart' show DomainGrid;
import 'theme.dart';
import 'widgets.dart';

class ProfileTab extends StatelessWidget {
  const ProfileTab({super.key, required this.game});
  final Game game;

  @override
  Widget build(BuildContext context) {
    final g = game, d = g.d, ri = g.rankIndex;
    final settings = [
      ('remind', 'Rappels de pénalité', 'Notification à 20:00 et 23:00 si la quête n\'est pas finie', d.remind),
      ('vibe', 'Vibrations', 'À chaque objectif accompli', d.vibe),
      ('hard', 'Difficulté difficile', 'Objectifs quotidiens doublés', d.hard),
    ];
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        const SectionLabel('PROFIL'),
        const SizedBox(height: 2),
        Text('Rang ${ranks[ri].$1} · ${ri + 1} sur ${ranks.length}', style: chakra(22, ls: .02)),
        const SizedBox(height: 14),
        for (var i = ranks.length - 1; i >= 0; i--) ...[_RankRow(index: i, current: ri, level: d.level), if (i > 0) const SizedBox(height: 4)],
        const SizedBox(height: 20),
        const SectionLabel('TITRES'),
        const SizedBox(height: 14),
        for (final (i, t) in titles.indexed) ...[
          if (i > 0) const SizedBox(height: 6),
          _TitleRow(title: t, unlocked: d.unlocked.contains(t.id), equipped: d.title == t.id, onTap: () => g.equip(t.id)),
        ],
        const SizedBox(height: 20),
        const SectionLabel('DOMAINES'),
        const SizedBox(height: 6),
        Text(
          'Touchez un domaine pour ajouter ou retirer ses objectifs de la quête quotidienne.',
          style: barlow(12, w: FontWeight.w500, color: C.muted),
        ),
        const SizedBox(height: 10),
        DomainGrid(game: g),
        const SizedBox(height: 20),
        const SectionLabel('RÉGLAGES'),
        const SizedBox(height: 14),
        Container(
          decoration: boxed(C.blueA(.2)),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              for (final (k, name, sub, on) in settings)
                GestureDetector(
                  behavior: HitTestBehavior.opaque,
                  onTap: () => g.toggleSetting(k),
                  child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
                    decoration: BoxDecoration(
                      border: Border(bottom: BorderSide(color: C.blueA(.12))),
                    ),
                    child: Row(
                      children: [
                        Expanded(child: TwoLine(name, sub, gap: 1)),
                        const SizedBox(width: 12),
                        HudSwitch(on: on),
                      ],
                    ),
                  ),
                ),
              GestureDetector(
                behavior: HitTestBehavior.opaque,
                onTap: () => _confirmRestart(context),
                child: Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
                  child: Text("Recommencer depuis l'éveil", style: barlow(14, color: C.redLight)),
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }

  // Unlike the prototype, progress is persisted, so wiping it asks first.
  Future<void> _confirmRestart(BuildContext context) async {
    final ok = await showDialog<bool>(
      context: context,
      barrierColor: const Color(0xE60A0206),
      builder: (ctx) => Dialog(
        backgroundColor: Colors.transparent,
        insetPadding: const EdgeInsets.symmetric(horizontal: 18),
        child: Container(
          padding: const EdgeInsets.all(18),
          decoration: boxed(
            C.redA(.7),
            gradient: LinearGradient(
              begin: Alignment.topCenter,
              end: Alignment.bottomCenter,
              colors: [const Color(0xFF500A18).withValues(alpha: .75), const Color(0xFF14040A).withValues(alpha: .95)],
            ),
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Text('Recommencer\u00A0?', textAlign: TextAlign.center, style: chakra(22, ls: .04)),
              const SizedBox(height: 10),
              Text(
                'Niveau, stats, titres et progression seront effacés.',
                textAlign: TextAlign.center,
                style: barlow(14, w: FontWeight.w500, color: C.redPale, height: 1.4),
              ),
              const SizedBox(height: 14),
              Row(
                children: [
                  Expanded(
                    child: HudButton(
                      label: 'ANNULER',
                      onTap: () => Navigator.pop(ctx, false),
                      height: 48,
                      fill: 0,
                      borderOpacity: .3,
                      ink: C.muted,
                      size: 13,
                      ls: .14,
                      glow: false,
                    ),
                  ),
                  const SizedBox(width: 8),
                  Expanded(
                    child: HudButton(
                      label: 'EFFACER',
                      onTap: () => Navigator.pop(ctx, true),
                      height: 48,
                      color: C.red,
                      fill: .18,
                      ink: C.redWhite,
                      size: 13,
                      ls: .14,
                      glow: false,
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
    if (ok == true) game.restart();
  }
}

class _RankRow extends StatelessWidget {
  const _RankRow({required this.index, required this.current, required this.level});
  final int index, current, level;

  @override
  Widget build(BuildContext context) {
    final i = index, r = ranks[i], cur = i == current, passed = i < current, tint = rankTint(i);
    final subInk = cur ? C.soft : C.faint;
    final dashed = !(passed || cur || i >= 5);
    final border = cur
        ? C.blue
        : passed
        ? C.blueA(.25)
        : tint.withValues(alpha: .4);
    final row = Container(
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
      decoration: BoxDecoration(
        color: cur
            ? C.blueA(.16)
            : i == 8
            ? const Color(0xFF3C0812).withValues(alpha: .4)
            : i >= 5 && i < 9
            ? const Color(0xFF32240A).withValues(alpha: .25)
            : passed
            ? C.blueA(.05)
            : null,
        gradient: i >= 9 && !cur
            ? LinearGradient(colors: [const Color(0xFF6E32DC).withValues(alpha: .3), const Color(0xFF0A041E).withValues(alpha: .5)])
            : null,
        border: dashed ? null : Border.all(color: border),
        boxShadow: cur
            ? [BoxShadow(color: C.blueA(.35), blurRadius: 16)]
            : i >= 9
            ? [BoxShadow(color: const Color(0xFF8C5AFF).withValues(alpha: .3), blurRadius: 16)]
            : null,
      ),
      child: Row(
        children: [
          SizedBox(
            width: 92,
            child: Text(
              cur
                  ? '${r.$1} · ACTUEL'
                  : passed
                  ? '${r.$1} ✓'
                  : r.$1,
              style: chakra(
                14,
                color: cur
                    ? Colors.white
                    : passed
                    ? C.blue
                    : tint,
                ls: .1,
              ),
              maxLines: 1,
              overflow: TextOverflow.visible,
              softWrap: false,
            ),
          ),
          const SizedBox(width: 10),
          Expanded(
            child: Text(
              cur ? 'Niveau $level' : r.$2,
              style: barlow(12, w: FontWeight.w500, color: subInk),
            ),
          ),
          const SizedBox(width: 10),
          Text('niv. ${r.$3}', style: mono(11, color: subInk)),
        ],
      ),
    );
    return dashed ? CustomPaint(foregroundPainter: _DashedRect(border), child: row) : row;
  }
}

class _DashedRect extends CustomPainter {
  _DashedRect(this.color);
  final Color color;

  @override
  void paint(Canvas canvas, Size size) {
    final p = Paint()
      ..color = color
      ..strokeWidth = 1;
    const dash = 3.0, gap = 3.0;
    void line(Offset a, Offset b) {
      final len = (b - a).distance, dir = (b - a) / len;
      for (var t = 0.0; t < len; t += dash + gap) {
        canvas.drawLine(a + dir * t, a + dir * (t + dash).clamp(0, len), p);
      }
    }

    final w = size.width - .5, h = size.height - .5;
    line(const Offset(.5, .5), Offset(w, .5));
    line(Offset(w, .5), Offset(w, h));
    line(Offset(w, h), Offset(.5, h));
    line(Offset(.5, h), const Offset(.5, .5));
  }

  @override
  bool shouldRepaint(_DashedRect old) => old.color != color;
}

class _TitleRow extends StatelessWidget {
  const _TitleRow({required this.title, required this.unlocked, required this.equipped, required this.onTap});
  final TitleDef title;
  final bool unlocked, equipped;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) => GestureDetector(
    onTap: unlocked ? onTap : null,
    child: Container(
      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
      decoration: boxed(equipped ? C.goldA(.55) : C.blueA(.2), fill: equipped ? const Color(0xFF32240A).withValues(alpha: .35) : null),
      child: Row(
        children: [
          Expanded(child: TwoLine(title.name, title.desc, titleColor: unlocked ? C.ink : C.faint, gap: 1)),
          const SizedBox(width: 12),
          Text(
            equipped
                ? 'ÉQUIPÉ'
                : unlocked
                ? 'ÉQUIPER'
                : 'VERROUILLÉ',
            style: chakra(
              11,
              color: equipped
                  ? C.gold
                  : unlocked
                  ? C.blueLight
                  : C.dim,
              ls: .12,
            ),
          ),
        ],
      ),
    ),
  );
}
