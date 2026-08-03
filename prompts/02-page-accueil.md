# Prompt 02 — Page d'accueil

Prérequis : prompts 00 et 01 exécutés (header/footer en place dans le
layout global `app/layout.tsx`). Lis `AGENTS.md` en entier.

## Objectif

Construire `app/page.tsx`, la page d'accueil du site vitrine Neema Holding
International.

## Contenu attendu

1. **Hero** : tagline en titre (« Construire aujourd'hui les solutions qui
   façonnent l'Afrique de demain. »), courte accroche (reprends/adapte la
   description du groupe dans `AGENTS.md` §1), CTA vers `/contact` et vers
   la section pôles. Fond utilisant les couleurs de marque (dégradé bleu
   Neema ou bleu marine, cohérent avec le header).

2. **Section « Nos pôles »** : grille des 6 pôles, chacun avec son logo
   (`public/images/neema/logo_<slug>.png`), son nom, sa description
   officielle courte (`AGENTS.md` §2), lien vers `/poles/<slug>`. Design en
   cards, cohérent avec les couleurs de marque, pas d'emoji (icônes SVG
   uniquement si besoin d'un pictogramme en plus du logo).

3. **Section mission/valeurs** : présente la mission et les 4 valeurs
   (innovation, intégrité, collaboration, excellence) — une carte ou un
   bloc par valeur avec une icône SVG pertinente (pas d'emoji).

4. **Section devise/impact** : mets en avant la devise (« Unir les forces,
   créer la valeur, bâtir l'avenir. ») dans un bandeau visuellement fort
   (fond coloré pleine largeur), éventuellement avec un CTA final vers
   `/contact`.

5. **Section contact rapide** (optionnelle si déjà bien couverte par le
   footer) : coordonnées + bouton contact.

## Metadata

Exporte un `metadata` (ou `generateMetadata`) propre à cette page : titre
(peut rester le titre par défaut du template posé dans `app/layout.tsx` au
prompt 00), description reprenant la tagline/mission.

## Contraintes de design

- Réutilise les couleurs/tokens définis au prompt 00 (bleu `#1A66FF`, vert
  `#095E2B`, teintes UI dérivées).
- Toutes les icônes en SVG inline, zéro emoji Unicode (voir AGENTS.md §4).
- Layout responsive (mobile-first), sections en pleine largeur avec
  conteneur centré (comme `.container-recap` chez recaptech — définis un
  équivalent, ex. `.container-neema`, dans les styles globaux si utile).
- Pas de données factices inventées (pas de faux témoignages clients, faux
  chiffres, fausses stats) — si tu veux illustrer l'impact, utilise des
  formulations qualitatives tirées du contenu officiel plutôt que des
  chiffres inventés.

## Vérification

- `npm run dev`, vérifie le rendu desktop/mobile, les liens vers les 6
  pages de pôles (elles n'existent pas encore — normal, à faire dans les
  prompts 04 à 09 ; utilise des liens qui pointeront vers les bonnes routes
  `/poles/<slug>` dès maintenant).
