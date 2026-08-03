# Prompt 03 — Page « Notre Groupe » (À propos)

Prérequis : prompts 00–02 exécutés. Lis `AGENTS.md` §1 et §2.

## Objectif

Créer `app/notre-groupe/page.tsx` (ou `app/(public)/notre-groupe/page.tsx`
si tu structures le projet avec des groupes de routes comme recaptech —
reste cohérent avec le choix fait au prompt 00).

## Contenu attendu

1. **Intro** : reprend la description complète du groupe (`AGENTS.md` §1,
   mission), avec la tagline en accroche.

2. **Notre histoire / positionnement** : présente le groupe comme un
   groupe multisectoriel africain, son ambition (devenir une référence en
   Afrique et à l'international). Ne pas inventer de dates de création,
   chiffres d'effectifs ou faits non fournis — rester sur le registre
   qualitatif du texte officiel.

3. **Nos valeurs** : les 4 valeurs (innovation, intégrité, collaboration,
   excellence), chacune avec une courte explication et une icône SVG
   distincte (pas d'emoji).

4. **Nos 6 pôles en un coup d'œil** : liste résumée des 6 pôles avec logo +
   lien vers leur page dédiée (réutilise si possible le même composant de
   carte que la section « Nos pôles » de la page d'accueil, en l'extrayant
   dans `components/` pour éviter la duplication).

5. **Devise de clôture** : « Unir les forces, créer la valeur, bâtir
   l'avenir. » en bandeau de fin de page, cohérent avec celui de l'accueil.

## Metadata

Exporte un `metadata` de page : titre du type « Notre Groupe » + suffixe du
template, description reprenant la mission (`AGENTS.md` §1).

## Contraintes

- Cohérence visuelle totale avec la page d'accueil (mêmes tokens de
  couleur, mêmes patterns de section, même conteneur).
- Si tu extrais un composant de carte « pôle » pour le réutiliser entre
  accueil et cette page, mets-le dans `components/neema/PoleCard.tsx` (ou
  équivalent) plutôt que de dupliquer le JSX.

## Vérification

- Vérifie que le lien « Notre Groupe » du header pointe bien vers cette
  page et que l'état actif du lien fonctionne (aria-current, style actif).
