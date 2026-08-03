export interface Actualite {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
}

/**
 * Aucun article publié pour l'instant — voir app/actualites/page.tsx pour
 * l'état vide affiché tant que ce tableau reste vide. Ajouter des entrées
 * ici dès qu'il y a du contenu réel à publier (pas de faux articles).
 */
export const actualites: Actualite[] = [];
