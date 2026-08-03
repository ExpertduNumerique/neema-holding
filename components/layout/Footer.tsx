/**
 * Footer Neema Holding International — structure en colonnes (à propos +
 * réseaux, pôles, navigation, contact) + barre basse. Server Component.
 */

import Link from "next/link";
import Image from "next/image";
import { poles } from "@/lib/poles";

function MapPinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true">
      <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-2.013 3.5-4.509 3.5-7.327a8.25 8.25 0 0 0-16.5 0c0 2.818 1.555 5.314 3.5 7.327a19.568 19.568 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.144.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true">
      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  const NAV_LINKS = [
    { href: "/", label: "Accueil" },
    { href: "/notre-groupe", label: "Notre Groupe" },
    { href: "/contact", label: "Contact" },
  ];

  const linkClass = "text-sm transition-colors duration-200 hover:text-white";
  const linkStyle = { color: "rgba(255,255,255,0.55)" };
  const headingStyle = {
    color: "#fff",
    fontSize: "0.78rem",
    fontWeight: 700,
    textTransform: "uppercase" as const,
    letterSpacing: "0.08em",
    marginBottom: "1rem",
  };

  return (
    <footer style={{ backgroundColor: "#081D4D", color: "rgba(255,255,255,0.55)" }}>
      <div className="container-neema" style={{ paddingTop: "3.5rem", paddingBottom: "2.5rem" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">

          {/* ─ À propos + réseaux ─ */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-4" aria-label="Neema Holding International — Accueil">
              <Image
                src="/images/neema/logo_holding.png"
                alt="Neema Holding International"
                width={36}
                height={36}
                className="shrink-0"
              />
              <span className="font-bold text-lg" style={{ color: "#fff" }}>
                Neema<span style={{ color: "#22B863" }}>Holding</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.5)", maxWidth: "300px" }}>
              Construire aujourd&apos;hui les solutions qui façonnent l&apos;Afrique de demain.
              Un groupe multisectoriel engagé pour un développement durable et à fort impact.
            </p>
            <p className="text-xs font-bold mb-3 uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.3)" }}>
              Suivez-nous
            </p>
            {/* Pas d'URL Facebook connue avec certitude — badge non cliquable
                en attendant le lien exact de la page officielle. */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm"
              style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <span style={{ color: "#22B863" }}><FacebookIcon /></span>
              Neema Holding International
            </div>
          </div>

          {/* ─ Nos pôles ─ */}
          <div className="lg:col-span-3">
            <h3 style={headingStyle}>Nos pôles</h3>
            <ul className="space-y-2.5">
              {poles.map((pole) => (
                <li key={pole.slug}>
                  <Link href={`/poles/${pole.slug}`} className={linkClass} style={linkStyle}>
                    {pole.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ─ Navigation ─ */}
          <div className="lg:col-span-2">
            <h3 style={headingStyle}>Navigation</h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass} style={linkStyle}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ─ Contact ─ */}
          <div className="lg:col-span-3">
            <h3 style={headingStyle}>Contact</h3>
            <ul className="space-y-3 mb-0">
              <li className="flex items-start gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                <span style={{ color: "#22B863" }}><MapPinIcon /></span>
                <span>Koudougou / Ouagadougou, Burkina Faso</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                <span style={{ color: "#22B863" }}><PhoneIcon /></span>
                <a href="tel:+22666081896" className="transition-colors duration-200 hover:text-white" style={{ color: "inherit" }}>
                  (+226) 66 08 18 96
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                <span style={{ color: "#22B863" }}><PhoneIcon /></span>
                <a href="tel:+22670420566" className="transition-colors duration-200 hover:text-white" style={{ color: "inherit" }}>
                  70 42 05 66
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                <span style={{ color: "#22B863" }}><PhoneIcon /></span>
                <a href="tel:+22668733969" className="transition-colors duration-200 hover:text-white" style={{ color: "inherit" }}>
                  68 73 39 69
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container-neema py-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <p className="text-xs text-center" style={{ color: "rgba(255,255,255,0.3)" }}>
          © {year} Neema Holding International — Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
