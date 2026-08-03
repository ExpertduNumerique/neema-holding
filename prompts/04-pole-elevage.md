# Prompt 04 — Page pôle « Neema Élevage & Business International »

Prérequis : prompts 00–01 exécutés (idéalement aussi 02–03 pour avoir un
composant de carte/patterns de section réutilisables). Lis `AGENTS.md` §2.

## Objectif

Créer `app/poles/elevage/page.tsx`.

Si tu n'as pas encore défini de route dynamique commune pour les pôles,
c'est le moment de décider : soit 6 fichiers statiques
`app/poles/<slug>/page.tsx` (plus simple, contenu 100% en dur, recommandé
pour un site vitrine sans CMS), soit une route dynamique
`app/poles/[slug]/page.tsx` avec un objet de données centralisé (ex.
`lib/poles.ts` exportant les 6 pôles). **Choisis la route dynamique avec
`lib/poles.ts`** si tu veux éviter la répétition sur les 6 pages — dans ce
cas, ce prompt et les 5 suivants (05 à 09) servent à définir le contenu de
CHAQUE pôle dans ce fichier de données + à vérifier son rendu, plutôt qu'à
créer 6 fichiers page distincts.

## Contenu du pôle

- **Nom** : Neema Élevage & Business International
- **Logo** : `public/images/neema/logo_elevage.png`
- **Description officielle** : développement de solutions modernes pour une
  production animale durable et performante.
- **Contenu additionnel repéré sur le kakémono** (à formuler proprement,
  transcription visuelle donc à considérer comme une base à reformuler
  plutôt qu'une citation exacte) : développement personnel option
  abondance, coaching en affaires et business, marketing digital.
- **Pictogramme du logo** : tête de bétail (bovin/caprin stylisé).

## Structure de la page

1. Hero du pôle : logo, nom, description officielle en accroche, sur fond
   utilisant les couleurs de marque (cohérent avec le header/footer).
2. Section « Ce que nous faisons » : détaille l'activité à partir de la
   description officielle + contenu additionnel ci-dessus, sous forme de
   liste de prestations/axes (avec icônes SVG pertinentes — pas d'emoji).
3. Fil d'Ariane ou lien de retour vers `/notre-groupe` ou `/#poles`.
4. Bandeau CTA de fin : « Vous voulez en savoir plus sur ce pôle ? » →
   bouton vers `/contact`.
5. Lien « Autres pôles » en bas de page (les 5 autres, avec logo miniature),
   pour faciliter la navigation transversale.

## Metadata

Titre de page « Neema Élevage & Business International » (+ suffixe du
template), description reprenant la description officielle du pôle.

## Contraintes

- Réutilise le layout/patterns de section déjà établis dans les pages
  précédentes (mêmes espacements, mêmes styles de titres, même conteneur).
- Ne pas inventer de chiffres, clients, ou réalisations non fournis par la
  source officielle.

## Vérification

- Vérifie le lien depuis le mega-menu du header et depuis la page d'accueil.
