import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'theme.dart';

/// Square-cornered outlined button used throughout the HUD.
class HudButton extends StatelessWidget {
  const HudButton({
    super.key,
    required this.label,
    required this.onTap,
    this.color = C.blue,
    this.ink = C.bluePale,
    this.fill = 0.2,
    this.height = 50,
    this.size = 14,
    this.ls = .16,
    this.glow = true,
    this.borderOpacity = 1,
    this.width,
    this.minWidth = 0,
  });

  final String label;
  final VoidCallback? onTap;
  final Color color, ink;
  final double fill, height, size, ls, borderOpacity, minWidth;
  final double? width;
  final bool glow;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      behavior: HitTestBehavior.opaque,
      child: Container(
        height: height,
        width: width,
        constraints: BoxConstraints(minWidth: minWidth),
        alignment: Alignment.center,
        padding: const EdgeInsets.symmetric(horizontal: 8),
        decoration: BoxDecoration(
          color: color.withValues(alpha: fill),
          border: Border.all(color: color.withValues(alpha: borderOpacity)),
          boxShadow: glow ? [BoxShadow(color: color.withValues(alpha: .35), blurRadius: 18)] : null,
        ),
        child: Text(
          label,
          textAlign: TextAlign.center,
          style: chakra(size, color: ink, ls: ls),
        ),
      ),
    );
  }
}

/// Small spaced uppercase section label.
class SectionLabel extends StatelessWidget {
  const SectionLabel(this.text, {super.key, this.color = C.muted, this.ls = .2});
  final String text;
  final Color color;
  final double ls;

  @override
  Widget build(BuildContext context) => Text(
    text,
    style: chakra(11, w: FontWeight.w600, color: color, ls: ls),
  );
}

/// Row with a coloured left rule and a gradient fading to transparent.
class RuleRow extends StatelessWidget {
  const RuleRow({super.key, required this.child, required this.rule, required this.tint, this.padding = const EdgeInsets.fromLTRB(14, 10, 10, 10), this.onTap});
  final Widget child;
  final Color rule, tint;
  final EdgeInsets padding;
  final VoidCallback? onTap;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        padding: padding,
        decoration: BoxDecoration(
          border: Border(left: BorderSide(color: rule, width: 2)),
          gradient: LinearGradient(colors: [tint, tint.withValues(alpha: 0)]),
        ),
        child: child,
      ),
    );
  }
}

/// Two-line text block (title + subtitle).
class TwoLine extends StatelessWidget {
  const TwoLine(this.title, this.sub, {super.key, this.titleColor = C.ink, this.subColor = C.muted, this.gap = 2});
  final String title, sub;
  final Color titleColor, subColor;
  final double gap;

  @override
  Widget build(BuildContext context) => Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    mainAxisSize: MainAxisSize.min,
    children: [
      Text(title, style: barlow(15, color: titleColor)),
      SizedBox(height: gap),
      Text(
        sub,
        style: barlow(12, w: FontWeight.w500, color: subColor),
      ),
    ],
  );
}

class HexClipper extends CustomClipper<Path> {
  const HexClipper();
  @override
  Path getClip(Size s) => Path()
    ..moveTo(s.width / 2, 0)
    ..lineTo(s.width, s.height * .25)
    ..lineTo(s.width, s.height * .75)
    ..lineTo(s.width / 2, s.height)
    ..lineTo(0, s.height * .75)
    ..lineTo(0, s.height * .25)
    ..close();
  @override
  bool shouldReclip(covariant CustomClipper<Path> oldClipper) => false;
}

/// Hexagonal rank badge.
class RankBadge extends StatelessWidget {
  const RankBadge({super.key, required this.label, required this.color, this.onTap});
  final String label;
  final Color color;
  final VoidCallback? onTap;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: ClipPath(
        clipper: const HexClipper(),
        child: Container(
          width: 46,
          height: 52,
          color: color,
          alignment: Alignment.center,
          child: ClipPath(
            clipper: const HexClipper(),
            child: Container(
              width: 42,
              height: 48,
              color: const Color(0xFF081226),
              alignment: Alignment.center,
              child: Text(label, style: chakra(label.length > 2 ? 13 : 22, color: color)),
            ),
          ),
        ),
      ),
    );
  }
}

/// Animated circular XP gauge with a slowly rotating dashed halo.
class XpRing extends StatefulWidget {
  const XpRing({super.key, required this.fraction, required this.child});
  final double fraction;
  final Widget child;

  @override
  State<XpRing> createState() => _XpRingState();
}

class _XpRingState extends State<XpRing> with SingleTickerProviderStateMixin {
  late final AnimationController _spin = AnimationController(vsync: this, duration: const Duration(seconds: 40))..repeat();

  @override
  void dispose() {
    _spin.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 196,
      height: 196,
      child: Stack(
        clipBehavior: Clip.none,
        alignment: Alignment.center,
        children: [
          Positioned(
            left: -6,
            top: -6,
            right: -6,
            bottom: -6,
            child: RotationTransition(
              turns: _spin,
              child: CustomPaint(painter: _DashedCircle(C.blueA(.3))),
            ),
          ),
          TweenAnimationBuilder<double>(
            tween: Tween(end: widget.fraction.clamp(0, 1)),
            duration: const Duration(milliseconds: 700),
            curve: Curves.easeOut,
            builder: (_, v, _) => CustomPaint(size: const Size(196, 196), painter: _RingPainter(v)),
          ),
          widget.child,
        ],
      ),
    );
  }
}

class _RingPainter extends CustomPainter {
  _RingPainter(this.value);
  final double value;

  @override
  void paint(Canvas canvas, Size size) {
    // Prototype geometry: r=96, stroke 8 in a 220 viewBox scaled to 196.
    final k = size.width / 220, c = size.center(Offset.zero), r = 96 * k, sw = 8 * k;
    final track = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = sw
      ..color = C.blueA(.12);
    canvas.drawCircle(c, r, track);
    if (value <= 0) return;
    final rect = Rect.fromCircle(center: c, radius: r);
    final sweep = 2 * math.pi * value;
    final glow = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = sw
      ..color = C.blue
      ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 6);
    final arc = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = sw
      ..color = C.blue;
    canvas.drawArc(rect, -math.pi / 2, sweep, false, glow);
    canvas.drawArc(rect, -math.pi / 2, sweep, false, arc);
  }

  @override
  bool shouldRepaint(_RingPainter old) => old.value != value;
}

class _DashedCircle extends CustomPainter {
  _DashedCircle(this.color);
  final Color color;

  @override
  void paint(Canvas canvas, Size size) {
    final r = size.width / 2 - .5, c = size.center(Offset.zero);
    final p = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1
      ..color = color;
    const dash = 3.0, gap = 3.0;
    final n = (2 * math.pi * r / (dash + gap)).floor();
    final step = 2 * math.pi / n, dashA = step * dash / (dash + gap);
    for (var i = 0; i < n; i++) {
      canvas.drawArc(Rect.fromCircle(center: c, radius: r), i * step, dashA, false, p);
    }
  }

  @override
  bool shouldRepaint(_DashedCircle old) => false;
}

/// Thin horizontal progress bar with glow.
class GlowBar extends StatelessWidget {
  const GlowBar({
    super.key,
    required this.fraction,
    this.height = 4,
    this.color = C.blue,
    this.track,
    this.gradient,
    this.border,
    this.duration = const Duration(milliseconds: 300),
  });
  final double fraction, height;
  final Color color;
  final Color? track;
  final Gradient? gradient;
  final Color? border;
  final Duration duration;

  @override
  Widget build(BuildContext context) {
    return Container(
      height: height,
      decoration: BoxDecoration(
        color: track ?? C.blueA(.14),
        border: border == null ? null : Border.all(color: border!),
      ),
      child: LayoutBuilder(
        builder: (_, box) => Align(
          alignment: Alignment.centerLeft,
          child: AnimatedContainer(
            duration: duration,
            curve: Curves.easeOut,
            width: box.maxWidth * fraction.clamp(0, 1),
            decoration: BoxDecoration(
              color: gradient == null ? color : null,
              gradient: gradient,
              boxShadow: [BoxShadow(color: color.withValues(alpha: .8), blurRadius: 8)],
            ),
          ),
        ),
      ),
    );
  }
}

/// Fade + slide-up entrance, like the prototype's `rise` keyframes.
class Rise extends StatelessWidget {
  const Rise({super.key, required this.child, this.delay = Duration.zero, this.duration = const Duration(milliseconds: 400), this.offset = 10});
  final Widget child;
  final Duration delay, duration;
  final double offset;

  @override
  Widget build(BuildContext context) {
    final total = delay + duration;
    final start = delay.inMilliseconds / total.inMilliseconds;
    return TweenAnimationBuilder<double>(
      tween: Tween(begin: 0, end: 1),
      duration: total,
      builder: (_, t, child) {
        final v = Curves.easeOut.transform(((t - start) / (1 - start)).clamp(0, 1));
        return Opacity(
          opacity: v,
          child: Transform.translate(offset: Offset(0, offset * (1 - v)), child: child),
        );
      },
      child: child,
    );
  }
}

/// Horizontal shake, replayed each time [trigger] changes.
class Shake extends StatelessWidget {
  const Shake({super.key, required this.trigger, required this.child, this.delay = Duration.zero});
  final Object trigger;
  final Widget child;
  final Duration delay;

  @override
  Widget build(BuildContext context) {
    final total = delay + const Duration(milliseconds: 400);
    final start = delay.inMilliseconds / total.inMilliseconds;
    return TweenAnimationBuilder<double>(
      key: ValueKey(trigger),
      tween: Tween(begin: 0, end: 1),
      duration: total,
      builder: (_, t, child) {
        final v = ((t - start) / (1 - start)).clamp(0.0, 1.0);
        // Keyframes: 0 → -6 → 6 → -4 → 4 → 0 at 20 % steps.
        const pts = [0.0, -6.0, 6.0, -4.0, 4.0, 0.0];
        final f = v * 5, i = f.floor().clamp(0, 4), x = pts[i] + (pts[i + 1] - pts[i]) * (f - i);
        return Transform.translate(offset: Offset(x, 0), child: child);
      },
      child: child,
    );
  }
}

/// Repeating pulse used for the awakening window glow and the dungeon portal.
class Pulse extends StatefulWidget {
  const Pulse({super.key, required this.period, required this.builder});
  final Duration period;
  final Widget Function(BuildContext, double) builder;

  @override
  State<Pulse> createState() => _PulseState();
}

class _PulseState extends State<Pulse> with SingleTickerProviderStateMixin {
  late final AnimationController _c = AnimationController(vsync: this, duration: widget.period)..repeat(reverse: true);

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => AnimatedBuilder(animation: _c, builder: (ctx, _) => widget.builder(ctx, Curves.easeInOut.transform(_c.value)));
}

/// Square toggle switch from the settings list.
class HudSwitch extends StatelessWidget {
  const HudSwitch({super.key, required this.on});
  final bool on;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 40,
      height: 22,
      padding: const EdgeInsets.all(2),
      decoration: BoxDecoration(border: Border.all(color: on ? C.blue : C.blueA(.3))),
      child: AnimatedAlign(
        duration: const Duration(milliseconds: 140),
        alignment: on ? Alignment.centerRight : Alignment.centerLeft,
        child: Container(
          width: 16,
          height: 16,
          decoration: BoxDecoration(
            color: on ? C.blue : C.gray,
            boxShadow: on ? const [BoxShadow(color: C.blue, blurRadius: 8)] : null,
          ),
        ),
      ),
    );
  }
}

/// Square-cornered bordered box.
BoxDecoration boxed(Color border, {Color? fill, Gradient? gradient, List<BoxShadow>? shadow}) => BoxDecoration(
  color: fill,
  gradient: gradient,
  border: Border.all(color: border),
  boxShadow: shadow,
);

/// Label/value line used in summary panels.
class KeyValue extends StatelessWidget {
  const KeyValue(this.k, this.v, {super.key, this.kColor = C.muted, this.vStyle});
  final String k;
  final String v;
  final Color kColor;
  final TextStyle? vStyle;

  @override
  Widget build(BuildContext context) => Row(
    mainAxisAlignment: MainAxisAlignment.spaceBetween,
    children: [
      Text(k, style: barlow(14, color: kColor)),
      const SizedBox(width: 12),
      Flexible(
        child: Text(v, textAlign: TextAlign.right, style: vStyle ?? mono(14)),
      ),
    ],
  );
}
