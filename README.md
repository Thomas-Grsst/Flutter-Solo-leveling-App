# Ascend

Application Android (Flutter) de progression personnelle façon *Solo Leveling* : quêtes quotidiennes, XP et niveaux, stats, rangs de E à Monarque, mauvaises habitudes avec altérations d'état, donjon hebdomadaire et titres.

Implémentation de la direction **3b · HUD de chasseur** de la maquette Claude Design (`design/project/Ascend App.dc.html`).

## Lancer

```sh
flutter pub get
flutter run                 # sur un appareil / émulateur Android
flutter test                # logique de jeu
```

Données de démonstration (celles de la maquette, non sauvegardées) :

```sh
flutter run --dart-define=ASCEND_DEMO=true
flutter run --dart-define=ASCEND_DEMO=true --dart-define=ASCEND_SKIP_AWAKENING=true
```

## Écrans

- **Éveil** : notification du Système (refus impossible), choix des domaines, choix des habitudes à éliminer.
- **Accueil** : anneau d'XP, stats (touchez pour répartir les points), quêtes restantes, altérations actives.
- **Quêtes** : 5 objectifs (− / +), interdits avec bouton « Écart », altérations et quête de purge.
- **Donjons** : Gardien de la procrastination, −15 % de PV par séance de travail profond.
- **Profil** : échelle des 10 rangs, titres à équiper, réglages, recommencer.
- Overlays : montée de niveau, altération d'état, donjon nettoyé, toasts.

## Comportement

- L'état est sauvegardé sur l'appareil (`shared_preferences`).
- À minuit : progression des quêtes et écarts du jour remis à zéro. Une altération disparaît après 3 jours sans écart, ou via la quête de purge.
- Chaque lundi : nouveau donjon (PV à 100 %).
- Titres : *Lève-tôt* (7 quêtes complètes avant 08:00), *Volonté de fer* (série de 14 jours), *Survivant* (quête de purge), *Inarrêtable* (donjon), *Résistant* (30 jours sans tabac).
- Réglage « Difficulté difficile » : objectifs doublés.

## Structure

```
lib/game/data.dart    contenu statique (quêtes, habitudes, rangs, titres)
lib/game/state.dart   logique de jeu, persistance, remises à zéro
lib/ui/               thème, widgets HUD, écrans et overlays
assets/fonts/         Chakra Petch, Barlow, JetBrains Mono (OFL)
design/               export Claude Design d'origine (maquettes + transcription)
```
