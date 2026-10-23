# SKERA Console — Design System

Design system unifié de la **console SKERA**, le SaaS de gestion cloud multi-tenant du groupe **XEFI**. Deux interfaces bâties sur le même système : **SKE-A** (admin, équipes internes SKERA) et **SKE-C** (client, techniciens d'agence revendeurs). Cible d'implémentation : **Nuxt 3 + Tailwind CSS + Reka UI** (les tokens CSS de `tokens/` se mappent dans `tailwind.config` ; les composants ici servent de spécification visuelle pour les primitives Reka).

Sources fournies (dossier `uploads/`, extraits lisibles dans `extracted/`) :
- `Design Graphite Light (standalone).html` — référence maîtresse : tokens, coquilles, tableaux, cartes, boutons, pastilles, login (thème retenu : `d10l`, Manrope).
- `V.html` (Valérian) — sidebar, header, couleurs de cartes (liseré gauche), filtres, menu clic droit.
- `G.html` (G) — header, sélecteur de Périmètre, choix des colonnes, authentification.
En cas d'écart, les tokens de la spécification écrite priment sur les fichiers.

## Cadre produit
- Règle SKE-A / SKE-C : en admin, `Client` et `Agence` sont des colonnes/champs affichés ; en client, ils sont inférés du contexte et **jamais affichés**. **La DA du tableau est strictement identique** entre les deux — seules ces colonnes disparaissent.
- Barre d'outils de tableau (V) : recherche « Filtrer… » (~230px) → boutons icône compacts filter/columns à compteur (sans libellé) → lien accent « Enregistrer la vue ». **Pas de jetons de filtre dans la toolbar.** Les actions Exporter / CTA vivent dans l'en-tête de page. Le bouton « filter » ouvre le **panneau de filtres V** (`FilterPanel`) : nav de catégories à badges rouges collés au libellé, options cochables (« Sélectionnés · n » / « Tous »), pied Annuler / Appliquer (n) — pas de récap en jetons. Les jetons `[ CLÉ | valeur ✕ ]` (`FilterToken`) servent ailleurs (récaps de vues, modale d'ajout), pas dans la toolbar.
- Persona type : « Guillaume Charpin — Technicien cloud · LYE ».
- Produits réels (jamais de lorem) : Evolucloud (VM), Dedicloud (serveur dédié), MailInBlack / Xmailsecure / SpamRock (antispam), Hébergement web, IPAM, Pare-feu & NAT, SMTP, OpenVPN.
- Données réalistes : trigrammes (`CLX`, `DMI`, `DFS`), agences (LYE, Lyon Est/Sud, Villeurbanne), statuts (Actif, En attente de validation, Installation en cours, Refusé).

## CONTENT FUNDAMENTALS
- **Français exclusivement, vouvoiement.** « Vous êtes connecté en tant que… », « Vérifiez l'orthographe… ».
- **Libellés d'action explicites** — jamais « OK » ou « Valider » seuls : « Créer le client », « Réinitialiser l'accès », « Se connecter avec Microsoft », « Quitter l'impersonation ».
- **Micro-labels de section** en uppercase court : `RÉCENTS`, `PARCOURIR`, `ACCÈS COLLABORATEUR`, `THÈME`.
- **Ton** : factuel, métier, dense. Phrases courtes d'état : « Données de production rafraîchies il y a 4 minutes. » Compteurs partout (« 1–25 sur 318 », « 4 catégories sur 8 chargées · 6 résultats »).
- **Pas d'emoji.** Chiffres toujours `tabular-nums`; identifiants techniques (IP, trigrammes, n° de contrat/facture/ticket) en mono.
- Casse : phrase normale (sentence case) pour titres et boutons ; UPPERCASE réservé aux micro-labels et kickers.

## VISUAL FOUNDATIONS
- **Couleurs** : graphite clair (`#EDEFF3` page, cartes blanches, bordures `#DBDEE6`) / sombre (`#1B1E24`, cartes `#252932`). Accent marque `#E10600` **réservé** : CTA primaire, état actif, marque, panneau login — jamais en grand aplat décoratif. Destructif = `#C42121` (≠ marque). En dark, l'accent texte/icône devient `#FF6B60`. Sémantique complète (succès/info/avertissement/erreur/neutre) en paire forte + douce. Voir `tokens/colors.css`.
- **Type** : Manrope unique (400–800). Titres/KPI 700–800, tracking -0.02em (KPI -0.045em). Micro-labels 9.5–10px uppercase tracking .08–.1em. JetBrains Mono pour le technique.
- **Espacement** : grille 4px stricte (4/8/12/16/24/32/48).
- **Rayons** : carte 14px, champ/menu/modale 10px, bouton 8px, pastille/chip 999px. Pas de bouton pill. Signature optionnelle : coin découpé « bento » ~26px, cartes héros uniquement.
- **Ombres** : `0 2px 8px rgba(44,44,80,.06)` standard ; halo CTA `0 4px 14px rgba(225,6,0,.28)` ; halo nav active `.35`. Jamais d'ombres lourdes, pas de neumorphisme.
- **Cartes** : fond blanc, bordure fine, ombre standard. La couleur passe par le **liseré gauche 3px** (signal = accent, statut = couleur sémantique, KPI = liseré gauche accent 3px (jamais en haut)) et les pastilles — jamais de fond coloré plein.
- **Fonds** : aplats neutres. Un seul dégradé autorisé : panneau de marque du login `linear-gradient(135deg,#E10600 0%,#B80C0C 100%)` + halo radial.
- **Destructif** : `--crit` = texte/icône (rose clair en sombre) ; `--crit-solid` = aplat portant du texte blanc (`#C42121` dans les deux thèmes) — ne jamais remplir un bouton avec `--crit`.
- **États** : hover = fond surface alternée ; actif nav = texte accent + barre gauche 3px `#E10600` sans fond (maquette V) ; logo dans la sidebar uniquement (jamais doublé dans le header) ; thème Clair/Sombre/Système dans le menu profil (clic avatar), pas dans le header ; « Gestion de la plateforme » vit dans le menu profil, pas dans la sidebar ; sélection tableau = fond accent doux ; focus = anneau `rgba(225,6,0,.12)`.
- **Animation** : discrète — apparition `pop .14s ease-out` (translateY 10px + scale .99), spinners `1s linear`. Pas de bounce.
- **Chargement** : squelettes, jamais de spinner plein écran. Chaque écran data-driven montre chargement / vide / erreur.
- **Contrastes — RGAA AA** : toutes les couleurs de la spec §2 sont conservées telles quelles. Deux tokens de confort ajoutés, sans toucher à la palette : `--ink-weak` (`#66667A` / `#A8A8B8`) pour le texte faible et les placeholders, `--ink-micro` (`#5A5A6A` / `#B4B4C2`) pour les micro-labels et en-têtes de tableau ; `--ink-3` reste la valeur de spec (`#A0A0B2` / `#616170`), à réserver au décoratif. `--accent-ink` = `#C90500` en clair pour l'accent **en texte/icône** (l'aplat CTA garde `#E10600`).
- **Lucide exclusivement**, trait 1.5–2px, taille 14–20px selon contexte. Chargées inline en SVG (copie du path Lucide), jamais d'icône dessinée à la main, pas d'emoji, pas d'icon-font.
- Logo : logotype « SKERA » fourni en SVG — **toujours rouge** `assets/logo-red.svg` (#E10600), jamais en noir ; `assets/logo-white.svg` sur le panneau de marque (fond rouge) uniquement ; `assets/logo.svg` (currentColor) réservé aux cas techniques. Ratio 516×107.
- Pastilles produits : carrés arrondis 22px avec code court (`MIB`, `CM`, `VPN`, `EVO`, `DED`).

## Index
- `styles.css` → `tokens/` (fonts, colors, typography, spacing). Dark = `[data-theme="dark"]` sur un ancêtre.
- `assets/` — logos SVG.
- `guidelines/` — cartes specimens (Design System tab) : couleurs, type (dont **typographie en contexte** et **règles**), espacements (dont **espacements en usage**), marque.
- `components/` — primitives React. Liste complète :
  - `core/` : Button, StatusPill, Gauge, Checkbox, Toggle, Segmented, SearchField, Kbd, Icon
  - `cards/` : Card, KpiCard
  - `filters/` : FilterToken (+ FilterAdd), FilterBar (+ FilterButton)
  - `table/` : ContextMenu, ColumnsMenu, Pagination
  - `navigation/` : Sidebar, Topbar, PerimeterSelect, ImpersonationBanner
  - `overlays/` : Modal (+ ModalField, ModalInput)
  - `forms/` : Field, TextInput, TextArea, Select (dropdown), Combobox (multi) — états default / focus / error / disabled / readonly
  - `datepicker/` : DatePicker (date ou plage, raccourcis)
  - `stepper/` : Stepper (horizontal / vertical, étape en erreur)
  - `datatable/` : DataTable (tri, sélection, accordéon = SubTable dans la ligne, états), SubTable
  - `states/` : EmptyState — empty / blank / unreachable (504) / denied / error
  - `feedback/` : Snackbar (+ SnackbarStack), Tooltip, Loader, ProgressBar, Skeleton (+ SkeletonRow, SkeletonKpi)
  - `notifications/` : NotificationPanel (popover de la cloche)
  - `icons/` : carte « Icônes d'actions » — vocabulaire action → icône Lucide
  - `search/` : CommandPalette
- `ui_kits/console/` — écrans complets light+dark (voir son README) : `index.html` (navigable), `Login.html`, `PaletteK.html` (6 états ×2 thèmes), `Dashboard.html`, `Clients.html` (+ états chargement/vide/504/restreint), `FicheClient.html`, `Planche.html`, `console.css`.
- `SKILL.md` — usage agent.

## Règles d'usage des nouveaux composants
- **Chargement** : Skeleton pour une page ou un tableau ; Loader (spinner) uniquement local (bouton, cellule, section) ; ProgressBar 2px en haut d'une carte pour un rafraîchissement. Jamais de spinner plein écran.
- **Notifications** : Snackbar = transitoire (bas-droite, 5 s, action explicite) ; NotificationPanel = historique persistant derrière la cloche ; bandeau d'alerte = contextuel à la page.
- **Tooltip** : hover/focus après 300 ms, chrome sombre, texte court, jamais d'information indispensable.
- **États de tableau** : toujours dans le cadre du tableau, en-têtes conservés ; filtres conservés sur 504 ; « Accès restreint » n'expose jamais le nombre de lignes.
- **Formulaires** : label micro-uppercase + astérisque requis ; erreur sous le champ avec icône ; lecture seule = pointillé + cadenas ; désactivé = surface alternée atténuée. Stepper en tête des modales larges multi-étapes.
- **Boutons** : une icône d'action à gauche du libellé (voir carte « Icônes d'actions ») ; une action = une icône.

## Intentional additions
- `Kbd` (raccourcis clavier `Ctrl K`, `Échap`) — requis par la palette et le champ de recherche.
- `Icon` — wrapper Lucide inline (dictionnaire de paths embarqué), garantit trait/tailles conformes.

## Substitutions / caveats
- Binaires de police non fournis : Manrope et JetBrains Mono chargés depuis Google Fonts (`tokens/fonts.css`). Fournir les .woff2 pour un usage hors-ligne.
- La palette ⌘K est construite uniquement depuis la spécification écrite (aucun visuel source).
- « Éléments par page » : **select** retenu (le segmented ne passe pas l'échelle au-delà de 3-4 options). La valeur est **mémorisée dans le store par page et par tableau**.
