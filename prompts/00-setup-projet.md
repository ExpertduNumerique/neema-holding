# Prompt 00 — Setup du projet

Lis d'abord `AGENTS.md` à la racine du projet pour le contexte complet
(marque, couleurs, stack, plan). Ce prompt couvre uniquement le scaffolding
initial.

## Objectif

Initialiser un projet Next.js dans `C:\nema-holding` (répertoire courant),
strictement calqué sur la stack de `c:\recaptech`, en conservant le dossier
`brand-source/` déjà présent (ne pas le supprimer).

## Étapes

1. Le dossier `C:\nema-holding` contient déjà `brand-source/` (docx, PDF,
   logos PNG extraits) et `prompts/`. Déplace temporairement `brand-source`
   hors du dossier (ex. vers un dossier temporaire), lance le scaffold
   Next.js, puis remets `brand-source` à sa place — `create-next-app` refuse
   de scaffolder un dossier non vide.

2. Scaffold avec les mêmes choix que recaptech :
   - TypeScript, Tailwind CSS, App Router, ESLint
   - **Pas** de `src/` directory
   - Alias d'import `@/*`
   - Package manager npm

3. Aligne les versions de `package.json` sur celles de `c:\recaptech\package.json`
   pour les dépendances communes : `next` (16.x), `react`/`react-dom` (19.x),
   `typescript` (^5), `tailwindcss`/`@tailwindcss/postcss` (^4), `eslint` /
   `eslint-config-next`, `clsx`, `tailwind-merge`. N'installe **pas** les
   dépendances propres à l'e-commerce/backend de recaptech (Prisma,
   next-auth, @auth/prisma-adapter, uploadthing, ai/@ai-sdk, recharts,
   react-hook-form, etc.) — ce projet est un site vitrine statique en V1.

4. Crée `lib/utils.ts` avec le helper `cn()` (clsx + tailwind-merge), copié
   du même fichier dans recaptech.

5. Copie les logos depuis `brand-source/logo_*.png` (holding + 6 pôles) vers
   `public/images/neema/` (crée le dossier). Garde les noms de fichiers
   (`logo_holding.png`, `logo_elevage.png`, etc.).

6. Configure les couleurs de marque en variables Tailwind v4 (`@theme` dans
   `app/globals.css` ou équivalent) : reprends les valeurs de `AGENTS.md`
   §4 (bleu `#1A66FF`, vert `#095E2B`, plus les teintes UI dérivées que tu
   choisis pour le header/footer et les CTA). Documente les valeurs
   choisies en commentaire dans le fichier de config. Ajoute aussi une
   classe conteneur réutilisable (ex. `.container-neema`, même logique que
   `.container-recap` chez recaptech : `max-width: 1280px`, marges auto,
   padding horizontal responsive) — toutes les pages des prompts suivants
   s'appuient dessus.

7. Configure `app/layout.tsx` (voir aussi `AGENTS.md` §6) :
   - `<html lang="fr">`
   - une police via `next/font/google` (ex. Poppins, comme recaptech, ou un
     autre choix cohérent avec l'identité Neema) exposée en variable CSS
   - `favicon`/icônes d'app à partir de `public/images/neema/logo_holding.png`
     (génère au moins un favicon et une icône 512×512 ; utilise cette image
     comme base, ne fabrique pas un autre logo)
   - `metadata` de base (title + template, description reprenant la tagline
     de `AGENTS.md` §1, `openGraph`/`twitter` avec une image basée sur le
     logo, `metadataBase`) — les pages individuelles pourront surcharger le
     titre/description via leur propre export `metadata` (voir prompts
     02–10, chacun doit exporter son propre `metadata` de page)
   - Ne copie pas les briques spécifiques recaptech qui n'ont pas de sens
     ici : pas de `ThemeProvider`/`SessionProvider`/`CartProvider`, pas de
     PWA, pas de Meta Pixel, pas d'Analytics tant que ce n'est pas demandé.

8. Nettoie la page d'accueil par défaut de `create-next-app` (remplace le
   contenu de `app/page.tsx` par un placeholder simple — la vraie page
   d'accueil est traitée dans un prompt séparé).

9. Vérifie que `npm run dev` démarre sans erreur.

## Points d'attention

- **Next.js 16 a des changements par rapport à ce que tu connais peut-être**
  (voir la remarque en tête de `c:\recaptech\AGENTS.md`) : une fois
  `node_modules` installé, consulte `node_modules/next/dist/docs/` pour les
  conventions à jour avant d'écrire du code (routing, metadata, images,
  etc.).
- Ne touche à rien dans `c:\recaptech` — c'est un projet totalement séparé,
  on ne fait que s'inspirer de sa structure.
- Ne crée pas encore de composants métier (header, footer, pages) — c'est
  l'objet des prompts suivants.
