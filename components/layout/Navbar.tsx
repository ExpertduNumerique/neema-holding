/**
 * Navbar Neema Holding International — Server Component
 * Header fixe 64px — fond marine, logo + wordmark, liens directs pour les
 * pôles principaux + un menu "Plus" (Trading, Store) pour garder de
 * l'espace, à la manière de RecapTech (liens directs + dropdown "Plus").
 */

import Link from "next/link";
import Image from "next/image";
import { poles } from "@/lib/poles";
import { NavbarClient } from "./NavbarClient";

export interface NavLink {
  href: string;
  label: string;
  iconId: string;
}

const PLUS_SLUGS = ["trading", "store"];

const directPoles = poles.filter((p) => !PLUS_SLUGS.includes(p.slug));
const plusPoles = poles.filter((p) => PLUS_SLUGS.includes(p.slug));

const directLinks: NavLink[] = [
  { href: "/", label: "Accueil", iconId: "accueil" },
  ...directPoles.map((p) => ({ href: `/poles/${p.slug}`, label: p.shortName, iconId: p.iconId })),
];

const plusLinks: NavLink[] = [
  ...plusPoles.map((p) => ({ href: `/poles/${p.slug}`, label: p.shortName, iconId: p.iconId })),
  { href: "/notre-equipe", label: "Notre Équipe", iconId: "equipe" },
];

// Ordre naturel complet (Accueil + les 6 pôles + Notre Équipe) pour le
// tiroir mobile, où l'espace vertical permet de tout afficher sans
// distinction "Plus".
const mobileLinks: NavLink[] = [
  { href: "/", label: "Accueil", iconId: "accueil" },
  ...poles.map((p) => ({ href: `/poles/${p.slug}`, label: p.shortName, iconId: p.iconId })),
  { href: "/notre-equipe", label: "Notre Équipe", iconId: "equipe" },
];

export function Navbar() {
  return (
    <header
      id="main-header"
      className="fixed top-0 left-0 right-0 z-40"
      style={{ backgroundColor: "#0B2A66", borderBottom: "1px solid rgba(255,255,255,.07)" }}
    >
      <nav
        className="h-16 container-neema flex items-center justify-between gap-3"
        aria-label="Navigation principale"
      >
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-sm"
          aria-label="Neema Holding International — Accueil"
        >
          <Image
            src="/images/neema/logo_holding.png"
            alt="Neema Holding International"
            width={36}
            height={36}
            className="shrink-0"
            priority
          />
          <span className="font-black text-sm sm:text-base tracking-tight leading-none">
            <span style={{ color: "#4785FF" }}>Neema</span>{" "}
            <span style={{ color: "#22B863" }}>Holding</span>
          </span>
        </Link>

        <NavbarClient directLinks={directLinks} plusLinks={plusLinks} mobileLinks={mobileLinks} />
      </nav>
    </header>
  );
}
