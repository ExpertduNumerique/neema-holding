/**
 * Source centrale des 6 pôles Neema Holding — voir AGENTS.md §2.
 * Utilisé par le header (mega-menu), le footer, l'accueil et les pages
 * /poles/[slug].
 */

export interface Pole {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  /** Axes d'activité complémentaires — repérés sur le kakémono officiel, voir AGENTS.md §2. */
  extra: string[];
  /** Optionnel — certains pôles récents n'ont pas encore de logo officiel dédié. */
  logo?: string;
  iconId: string;
}

export const poles: Pole[] = [
  {
    slug: "elevage",
    name: "Neema Élevage & Business International",
    shortName: "Élevage",
    description:
      "Développement de solutions modernes pour une production animale durable et performante.",
    extra: [
      "Développement personnel, option abondance",
      "Coaching en affaires et business",
      "Marketing digital",
    ],
    logo: "/images/neema/logo_elevage.png",
    iconId: "elevage",
  },
  {
    slug: "agro-business",
    name: "Neema Agro-Business International",
    shortName: "Agro-Business",
    description:
      "Production, transformation et commercialisation de produits agricoles afin de renforcer la sécurité alimentaire et créer de la valeur.",
    extra: ["Papayer", "Tomate", "Maraîchculture"],
    logo: "/images/neema/logo_agro.png",
    iconId: "agro",
  },
  {
    slug: "trading",
    name: "Neema Trading",
    shortName: "Trading",
    description:
      "Facilitation des échanges commerciaux, import-export et mise en relation de partenaires d'affaires à l'échelle nationale et internationale.",
    extra: [],
    logo: "/images/neema/logo_trading.png",
    iconId: "trading",
  },
  {
    slug: "training",
    name: "Neema Training",
    shortName: "Training",
    description:
      "Formation professionnelle, coaching, développement du leadership et accompagnement des entrepreneurs et des organisations.",
    extra: [
      "Formations de haut niveau : agriculture, élevage, coaching, blockchain, marketing digital",
      "Consulting et accompagnement multisectoriel : agriculture, élevage, blockchain, vente, marketing",
    ],
    logo: "/images/neema/logo_training.png",
    iconId: "training",
  },
  {
    slug: "immo",
    name: "Neema Immobilier",
    shortName: "Immobilier",
    description:
      "Conception, développement et gestion de projets immobiliers répondant aux besoins des particuliers et des entreprises.",
    extra: [
      "Hébergement de haut niveau",
      "Location de haut standing respectant les critères et normes internationales",
    ],
    logo: "/images/neema/logo_immo.png",
    iconId: "immo",
  },
  {
    slug: "store",
    name: "Neema Store",
    shortName: "Store",
    description:
      "Distribution de produits et services de qualité destinés aux professionnels comme aux particuliers.",
    extra: [
      "« Neema Mall » : tous les produits du groupe réunis en un même lieu",
      "Format supermarché",
      "Vente de produits agroalimentaires",
    ],
    logo: "/images/neema/logo_store.png",
    iconId: "store",
  },
  {
    slug: "transformation",
    name: "Neema Transformation",
    shortName: "Transformation",
    description:
      "Transformation industrielle et valorisation des matières premières, au service des autres pôles du groupe.",
    extra: [],
    iconId: "transformation",
  },
];

export function getPole(slug: string): Pole | undefined {
  return poles.find((p) => p.slug === slug);
}
