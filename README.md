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
- Propositions du Système : après 7 jours d'affilée où Pompes, Gainage ou Lecture est accompli, le Système propose d'augmenter l'objectif (+10 pompes, +1 min, +5 min). Accepter rapporte 200 XP et s'applique le lendemain ; « Plus tard » garde l'objectif et le Système redemande après 7 nouveaux jours. Les stats ne modifient pas les objectifs.
- Domaines : chaque domaine ajoute ses objectifs à la quête quotidienne (Corps → Pompes, Gainage ; Esprit → Lecture ; Travail → Travail profond ; Habitudes → Eau). Modifiables dans le profil.
- Pénalité de minuit : quête quotidienne non accomplie → −25 % de l'XP du niveau par jour manqué, gains d'XP divisés par deux jusqu'à la quête de pénalité (45 min de cardio). Le jour de l'éveil est exempté.
- Notifications : rappels à 20:00 et 23:00 si la quête n'est pas finie, et avis à minuit en cas d'échec (désactivables dans le profil).
- À minuit : progression des quêtes et écarts du jour remis à zéro. Une altération disparaît après 3 jours sans écart, ou via la quête de purge.
- Chaque lundi : nouveau donjon (PV à 100 %).
- Titres : *Lève-tôt* (7 quêtes complètes avant 08:00), *Volonté de fer* (série de 14 jours), *Survivant* (quête de pénalité), *Inarrêtable* (donjon), *Résistant* (30 jours sans tabac).
- Réglage « Difficulté difficile » : objectifs doublés.

## APK

GitHub Actions compile l'APK à chaque push sur `main` et le publie dans la release `latest`. Il est signé avec `android/ascend-release.jks` (clé d'installation manuelle, non destinée au Play Store) pour que chaque version s'installe par-dessus la précédente.

## Structure

```
lib/game/data.dart    contenu statique (quêtes, habitudes, rangs, titres)
lib/game/state.dart   logique de jeu, persistance, remises à zéro, pénalité
lib/services/         notifications locales
lib/ui/               thème, widgets HUD, écrans et overlays
assets/fonts/         Chakra Petch, Barlow, JetBrains Mono (OFL)
design/               export Claude Design d'origine (maquettes + transcription)
```
