# Prompt 01 — Header & Footer

Prérequis : prompt 00 exécuté (projet scaffoldé, logos dans
`public/images/neema/`, couleurs de marque configurées, `app/layout.tsx`
avec metadata de base déjà posé). Lis `AGENTS.md` §4, §5 et §6 avant de
commencer.

## Objectif

Construire le header et le footer de la plateforme Neema Holding en
reproduisant fidèlement la **structure et l'esthétique** de
`c:\recaptech\components\layout\{Navbar,NavbarClient,Footer,AnnouncementBar}.tsx`,
avec le contenu et les couleurs de Neema (pas ceux de recaptech).

Lis ces 4 fichiers recaptech avant d'écrire le moindre code, pour
comprendre : la séparation Server/Client Component (`Navbar.tsx` server,
`NavbarClient.tsx` client), le pattern des mega-menus, le drawer mobile, la
gestion du scroll, les tailles/spacings, l'accessibilité (aria-*,
focus-visible, tailles tactiles 44px min).

## Header

- Composant serveur `components/layout/Navbar.tsx` + client
  `components/layout/NavbarClient.tsx`, même découpage que recaptech.
- Fixe, hauteur 64px, fond bleu marine foncé (teinte dérivée du bleu Neema —
  celle définie au prompt 00), ombre renforcée au scroll.
- Logo à gauche : `public/images/neema/logo_holding.png` + wordmark texte
  « Neema<span accent vert>Holding</span> » (même logique que
  `Recap<span>Tech</span>` chez recaptech).
- Liens principaux (desktop, centrés) — propose une nav simple adaptée à un
  site vitrine, par exemple : Accueil, Nos pôles (mega-menu), Notre Groupe,
  Contact.
- **Mega-menu "Nos pôles"** : grille présentant les 6 pôles (Élevage,
  Agro-Business, Trading, Training, Immo, Store), chacun avec une icône
  colorée (SVG inline, PAS d'emoji — voir AGENTS.md §4), le nom du pôle et
  une courte description (reprends les descriptions officielles de
  `AGENTS.md` §2). Chaque item lie vers `/poles/<slug>`.
- CTA à droite : bouton « Nous contacter » vers `/contact` (pas de
  connexion/inscription — pas de comptes utilisateurs en V1).
- Pas de panier ni de recherche produit (pas de e-commerce en V1). Si tu
  juges qu'une recherche a du sens (ex. rechercher un pôle), tu peux
  proposer une version très simplifiée, sinon omets-la.
- Drawer mobile plein écran : mêmes animations/transitions que recaptech
  (translate-x, backdrop blur), liste des liens principaux + les 6 pôles
  avec icônes, CTA contact en bas.
- Accessibilité : `aria-label`, `aria-expanded`, `aria-current`, fermeture au
  `Escape`, fermeture au clic extérieur, tailles tactiles ≥44px, ne pas
  scroller le body quand le drawer est ouvert.

## Footer

- Composant `components/layout/Footer.tsx`, structure en colonnes façon
  recaptech (à propos + réseaux sociaux, navigation, pôles, contact),
  fond sombre assorti au header.
- Colonne « À propos » : logo + wordmark, courte description reprenant la
  tagline (`AGENTS.md` §1), liens réseaux sociaux — seul Facebook est connu
  (« Neema Holding International ») ; n'invente pas d'autres comptes, laisse
  la structure prête à en accueillir d'autres si fournis plus tard.
- Colonne « Nos pôles » : liens vers les 6 pages `/poles/<slug>`.
- Colonne « Navigation » : Accueil, Notre Groupe, Contact.
- Colonne « Contact » : adresse (Koudougou / Ouagadougou, Burkina Faso),
  les 3 numéros de téléphone, pas d'email connu (ne pas en inventer un —
  soit omettre la ligne email, soit laisser un placeholder clairement
  identifiable à compléter).
- Pas de newsletter obligatoire — recaptech en a une branchée sur une API
  interne (`/api/newsletter`) qui n'existe pas ici ; omets cette section ou
  ne la garde que si tu poses un formulaire `mailto:`/statique sans backend.
- Barre basse : copyright `© {année} Neema Holding International — Tous
  droits réservés.` — pas de liens légaux (CGU/mentions légales) tant qu'ils
  n'existent pas comme pages réelles ; n'ajoute la barre que si tu as au
  moins un lien réel à y mettre (ex. juste le copyright, sans liens fictifs).

## Intégration dans le layout (point critique)

- Le header étant en `position: fixed`, le contenu de chaque page se
  retrouverait caché sous ses 64px si rien ne compense. Recaptech gère ça
  avec un `HeaderHeightObserver` (composant client qui pose une variable CSS
  `--header-height` via `ResizeObserver`, consommée en `padding-top` sur le
  conteneur principal) — utile chez eux car une barre d'annonce dismissible
  fait varier la hauteur du header. **Neema n'a pas de barre d'annonce en
  V1** (pas de session utilisateur, rien à annoncer dynamiquement) : la
  hauteur du header est donc fixe et connue (64px). Tu peux donc soit :
  - reprendre le pattern `HeaderHeightObserver` + variable CSS (plus robuste
    si une barre d'annonce est ajoutée plus tard), soit
  - simplement mettre `padding-top: 64px` (ou la classe Tailwind
    équivalente) sur le wrapper `<main>` dans `app/layout.tsx`.
  Choisis l'option la plus simple à maintenir, mais **n'oublie pas cette
  compensation** — c'est le bug le plus visible si tu l'oublies (titre de
  page coupé par le header).
- Édite `app/layout.tsx` pour rendre `<Navbar />` avant `{children}` et
  `<Footer />` après, `{children}` étant enveloppé dans le `<main>` qui porte
  la compensation ci-dessus.

## Icônes

Réutilise le principe des `MEGA_ICONS`/`CAT_ICONS` de recaptech
(`NavbarClient.tsx`) : un dictionnaire `iconId -> SVG` en Heroicons-style,
strokeWidth cohérent, `aria-hidden="true"`. Crée les SVG nécessaires pour
chaque pôle en t'inspirant du pictogramme central de son logo (bétail,
épi de maïs, chandeliers, flèches, maison, caddie) plutôt que de réutiliser
des icônes génériques recaptech.

## Vérification

- `npm run dev`, vérifie visuellement header + footer sur mobile et
  desktop, teste le mega-menu, le drawer mobile, la fermeture au clavier
  (Echap) et au clic extérieur.
