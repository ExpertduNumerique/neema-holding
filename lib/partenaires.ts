export interface Partenaire {
  name: string;
  logo: string;
  url?: string;
}

/**
 * Aucun partenaire officiel confirmé pour l'instant — voir
 * app/partenaires/page.tsx pour l'état vide affiché tant que ce tableau
 * reste vide. Ajouter des entrées ici uniquement avec de vrais logos et
 * accords confirmés (pas de logos inventés).
 */
export const partenaires: Partenaire[] = [];
