import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_localizations/flutter_localizations.dart';

import 'game/state.dart';
import 'ui/shell.dart';
import 'ui/theme.dart';

/// `--dart-define=ASCEND_DEMO=true` loads the prototype's sample data (not saved);
/// add `ASCEND_SKIP_AWAKENING=true` to open straight on the home tab.
const _demo = bool.fromEnvironment('ASCEND_DEMO');
const _skipAwakening = bool.fromEnvironment('ASCEND_SKIP_AWAKENING');

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  SystemChrome.setSystemUIOverlayStyle(
    const SystemUiOverlayStyle(
      statusBarColor: Colors.transparent,
      statusBarIconBrightness: Brightness.light,
      systemNavigationBarColor: C.bg,
      systemNavigationBarIconBrightness: Brightness.light,
    ),
  );
  SystemChrome.setPreferredOrientations([DeviceOrientation.portraitUp]);
  final game = Game(demo: _demo, skipAwakening: _skipAwakening);
  await game.load();
  runApp(AscendApp(game: game));
}

class AscendApp extends StatelessWidget {
  const AscendApp({super.key, required this.game});
  final Game game;

  @override
  Widget build(BuildContext context) => MaterialApp(
    title: 'Ascend',
    debugShowCheckedModeBanner: false,
    theme: buildTheme(),
    locale: const Locale('fr'),
    supportedLocales: const [Locale('fr')],
    localizationsDelegates: GlobalMaterialLocalizations.delegates,
    home: Shell(game: game),
  );
}
