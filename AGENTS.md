<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# NEEMA HOLDING INTERNATIONAL — Plateforme web

Ce fichier est la référence permanente du projet. Chaque prompt du dossier
`/prompts` s'appuie dessus. Si un prompt et ce fichier se contredisent, ce
fichier fait foi.

## 1. Le groupe

**NEEMA HOLDING INTERNATIONAL** est un groupe multisectoriel (siège :
Ouagadougou / Koudougou, Burkina Faso) engagé dans le développement
économique, social et humain à travers des activités innovantes, durables et
à fort impact.

- **Tagline** : *« Construire aujourd'hui les solutions qui façonnent
  l'Afrique de demain. »*
- **Devise** : *« Unir les forces, créer la valeur, bâtir l'avenir. »*
- **Mission** : créer de la valeur en réunissant plusieurs secteurs
  stratégiques au sein d'une même vision : contribuer à la croissance des
  entreprises, accompagner les communautés et favoriser un développement
  responsable.
- **Valeurs** : innovation, intégrité, collaboration, excellence.
- **Ambition** : devenir une référence en Afrique et à l'international en
  proposant des solutions fiables, créatrices de richesse et porteuses
  d'impact.

### Contact (source : kakémono officiel, `brand-source/photo_2026-08-03_17-30-48.jpg`)

- Siège : Koudougou / Ouagadougou, Burkina Faso
- Téléphones : (+226) 66 08 18 96 · 70 42 05 66 · 68 73 39 69
- Facebook : « Neema Holding International »

## 2. Les 6 pôles

Chaque pôle a son propre logo (voir §4) et sa propre page. Descriptions
officielles issues de `brand-source/NEEMA HOLDING INTERNATIONAL.docx` :

| Pôle | Slug | Description officielle |
|---|---|---|
| Neema Élevage & Business International | `elevage` | Développement de solutions modernes pour une production animale durable et performante. |
| Neema Agro-Business International | `agro-business` | Production, transformation et commercialisation de produits agricoles afin de renforcer la sécurité alimentaire et créer de la valeur. |
| Neema Trading | `trading` | Facilitation des échanges commerciaux, import-export et mise en relation de partenaires d'affaires à l'échelle nationale et internationale. |
| Neema Training | `training` | Formation professionnelle, coaching, développement du leadership et accompagnement des entrepreneurs et des organisations. |
| Neema Immo | `immo` | Conception, développement et gestion de projets immobiliers répondant aux besoins des particuliers et des entreprises. |
| Neema Store | `store` | Distribution de produits et services de qualité destinés aux professionnels comme aux particuliers. |

Contenu additionnel repéré sur le kakémono (à valider avant publication finale
— transcription visuelle, pas une source texte) :

- **Élevage & Business** : développement personnel option abondance, coaching
  en affaires et business, marketing digital.
- **Agro & Business** : papayer, tomate, maraîchculture.
- **Immo** : hébergement de haut niveau, location de haut standing respectant
  les critères et normes internationales.
- **Training** : formations de haut niveau en agriculture, élevage, coaching,
  blockchain, marketing digital ; consulting et accompagnement multisectoriel.
- **Store** : « Neema Mall » regroupant tous les produits du groupe, type
  supermarché, vente de produits agroalimentaires.

## 3. Stack technique

Identique à celle du projet frère `recaptech` (`c:\recaptech`), pour
réutiliser directement ses conventions de header/footer :

- Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4
- ESLint + Prettier, alias d'import `@/*`
- Pas de `src/` : `app/`, `components/`, `lib/`, `public/` à la racine
- **V1 = site vitrine** : pas de Prisma, pas de NextAuth, pas de panier, pas
  de base de données. Contenu statique/en dur dans le code. Ces briques
  pourront être ajoutées plus tard si un pôle (Store, Immo…) devient
  transactionnel — ne pas les anticiper.
- `lib/utils.ts` : reprendre le helper `cn()` (clsx + tailwind-merge) comme
  dans recaptech.

## 4. Charte graphique

### Couleurs de marque (extraites du logo officiel, `brand-source/logo_holding.png`)

- **Bleu Neema** : `#1A66FF`
- **Vert Neema** : `#095E2B`

Ce sont les couleurs exactes du logo — à utiliser telles quelles pour tout
élément de marque (logo, wordmark). Pour l'UI (fonds, boutons, hover), on
dérive des teintes lisibles en s'inspirant de la logique recaptech (fond
foncé + accent vif) :

- Fond header/footer : bleu marine foncé dérivé du bleu Neema, proposer
  `#0B2A66` (à ajuster à l'implémentation pour un bon contraste avec le blanc).
- Accent CTA / hover / lien actif : vert éclairci dérivé du vert Neema,
  proposer `#12A150` (le vert brut `#095E2B` est trop sombre pour un texte
  lisible sur fond marine).
- Texte sur fond foncé : blanc à opacité variable, comme recaptech
  (`rgba(255,255,255,.72)` etc.)

### Logos

Logos vectoriels d'origine convertis en PNG haute résolution, fond
transparent, recadrés, dans `brand-source/` :

- `logo_holding.png` — logo du groupe (à utiliser dans le header/footer)
- `logo_elevage.png`, `logo_agro.png`, `logo_trading.png`,
  `logo_training.png`, `logo_immo.png`, `logo_store.png` — un par pôle (à
  utiliser sur la page de chaque pôle et dans le mega-menu)

Chaque logo : cercle avec deux croissants bleu/vert entrelacés, texte
« NEEMA … INTERNATIONAL » circulaire, pictogramme central spécifique au pôle
(globe pour le holding, tête de bétail pour Élevage, épi de maïs pour
Agro-Business, chandeliers pour Trading, flèches pour Training, maison pour
Immo, caddie pour Store).

### Règle icônes UI (héritée du projet recaptech)

**Zéro emoji Unicode comme élément d'UI.** Utiliser exclusivement des icônes
SVG inline (équivalents Heroicons), jamais d'emoji dans badges, boutons,
listes de features, etc. Les logos de marque (PNG ci-dessus) sont la seule
exception — ce sont des images de marque, pas des pictogrammes UI.

## 5. Référence de style — header & footer

Le rendu doit reprendre fidèlement la structure de
`c:\recaptech\components\layout\{Navbar,NavbarClient,Footer,AnnouncementBar}.tsx` :

- Header fixe, hauteur 64px, fond uni foncé, logo + wordmark à gauche
- Liens principaux centrés (desktop), version scroll avec ombre renforcée
- Mega-menu déroulant listant les 6 pôles (icône colorée + libellé + courte
  description), au lieu des liens marketplace/EcoFlouz de recaptech
- Recherche (peut être simplifiée/omise en V1 vitrine si pas de contenu à
  indexer — décision à prendre dans le prompt header/footer)
- Bouton(s) CTA à droite (ex. « Nous contacter » au lieu de « Connexion »)
- Drawer mobile plein écran avec les mêmes liens, icônes, animations
- Footer 4 colonnes (à propos + réseaux sociaux, navigation, pôles,
  contact), newsletter optionnelle, barre légale en bas

Le contenu (liens, textes, réseaux sociaux, coordonnées) est spécifique à
Neema — seule la structure/l'esthétique de recaptech sert de modèle.

**Header fixe = compenser le contenu.** Le header est en `position: fixed`
(64px) : sans `padding-top` équivalent sur le contenu des pages, le haut de
chaque page se retrouve caché dessous. Pas de barre d'annonce en V1 (pas de
session utilisateur), donc pas besoin du `HeaderHeightObserver` dynamique de
recaptech — un `padding-top` fixe de 64px suffit, sauf si on veut garder la
possibilité d'ajouter une barre d'annonce plus tard.

## 6. Layout racine & metadata

`app/layout.tsx` doit poser, une fois pour toutes :

- `<html lang="fr">`
- une police via `next/font/google`
- favicon/icônes générés à partir de `public/images/neema/logo_holding.png`
- des `metadata` de base (title + template, description = tagline/mission,
  Open Graph avec une image basée sur le logo) — chaque page peut ensuite
  surcharger titre/description via son propre export `metadata`
- `<Navbar />` et `<Footer />` autour de `{children}`

Pas de `ThemeProvider`/`SessionProvider`/`CartProvider`/PWA/Analytics/Meta
Pixel — ces briques recaptech n'ont pas d'utilité pour un site vitrine sans
comptes utilisateurs.

## 7. Plan d'exécution

Voir `/prompts`, à exécuter dans l'ordre :

00. Setup projet (scaffold Next.js + intégration des assets de marque)
01. Header & footer
02. Page d'accueil
03. Page « Notre Groupe » (à propos)
04–09. Une page par pôle (Élevage, Agro-Business, Trading, Training, Immo, Store)
10. Page Contact
