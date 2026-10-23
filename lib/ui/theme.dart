import 'package:flutter/material.dart';

/// Palette of the "Système" direction (3b · HUD de chasseur).
class C {
  static const bg = Color(0xFF04060C);
  static const ink = Color(0xFFE8F3FF);
  static const muted = Color(0xFF8FA8C9);
  static const dim = Color(0xFF5B7090);
  static const faint = Color(0xFF7F8FA8);
  static const soft = Color(0xFFC9D8EC);
  static const blue = Color(0xFF4FB3FF);
  static const blueLight = Color(0xFFA9DCFF);
  static const bluePale = Color(0xFFCFEAFF);
  static const red = Color(0xFFFF4D5E);
  static const redLight = Color(0xFFFF8A95);
  static const redMid = Color(0xFFFF6B78);
  static const redPale = Color(0xFFE5B9BE);
  static const redWhite = Color(0xFFFFD0D5);
  static const violet = Color(0xFFA07BFF);
  static const violetLight = Color(0xFFB9A4FF);
  static const violetPale = Color(0xFFD6C8FF);
  static const violetMuted = Color(0xFFA99CC9);
  static const gold = Color(0xFFFFC857);
  static const goldLight = Color(0xFFFFD98A);
  static const gray = Color(0xFF3A4458);

  static Color blueA(double o) => blue.withValues(alpha: o);
  static Color redA(double o) => red.withValues(alpha: o);
  static Color violetA(double o) => violet.withValues(alpha: o);
  static Color goldA(double o) => gold.withValues(alpha: o);
}

Color rankTint(int i) => i >= 9
    ? C.violet
    : i == 8
    ? C.redMid
    : i >= 5
    ? C.gold
    : C.blue;

/// Text style helpers named after the prototype's three families.
TextStyle chakra(double size, {FontWeight w = FontWeight.w700, Color color = C.ink, double ls = 0, List<Shadow>? shadows, double? height}) =>
    TextStyle(fontFamily: 'Chakra Petch', fontSize: size, fontWeight: w, color: color, letterSpacing: size * ls, shadows: shadows, height: height);

TextStyle barlow(double size, {FontWeight w = FontWeight.w600, Color color = C.ink, double? height}) =>
    TextStyle(fontFamily: 'Barlow', fontSize: size, fontWeight: w, color: color, height: height);

TextStyle mono(double size, {FontWeight w = FontWeight.w600, Color color = C.ink}) =>
    TextStyle(fontFamily: 'JetBrains Mono', fontSize: size, fontWeight: w, color: color, fontFeatures: const [FontFeature.tabularFigures()]);

List<Shadow> glowText(Color c, double blur) => [Shadow(color: c, blurRadius: blur)];

ThemeData buildTheme() => ThemeData(
  brightness: Brightness.dark,
  scaffoldBackgroundColor: C.bg,
  fontFamily: 'Barlow',
  colorScheme: const ColorScheme.dark(primary: C.blue, surface: C.bg, error: C.red),
  splashFactory: NoSplash.splashFactory,
  highlightColor: Colors.transparent,
);
