/**
 * Icônes SVG inline pour les 6 pôles Neema — inspirées du pictogramme
 * central de chaque logo (voir AGENTS.md §4). Zéro emoji (AGENTS.md §4).
 */

import type { ReactNode } from "react";

export const POLE_ICON_COLORS: Record<string, { bg: string; color: string }> = {
  accueil: { bg: "rgba(34,184,99,.15)", color: "#22B863" },
  elevage: { bg: "rgba(9,94,43,.12)", color: "#0C7A38" },
  agro: { bg: "rgba(18,161,80,.14)", color: "#12A150" },
  trading: { bg: "rgba(26,102,255,.12)", color: "#1A4FA6" },
  training: { bg: "rgba(26,102,255,.1)", color: "#1A66FF" },
  immo: { bg: "rgba(11,42,102,.1)", color: "#0B2A66" },
  store: { bg: "rgba(9,94,43,.1)", color: "#095E2B" },
  groupe: { bg: "rgba(255,255,255,.1)", color: "#94A3B8" },
};

export const POLE_ICONS: Record<string, ReactNode> = {
  // Accueil
  accueil: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
      <path d="m3 11 9-8 9 8" />
      <path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" />
    </svg>
  ),
  // Notre Groupe — bâtiment / organisation
  groupe: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
      <path d="M4 21V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v16" />
      <path d="M12 21V9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v12" />
      <path d="M4 21h16M7.5 8h.01M7.5 12h.01M7.5 16h.01M15.5 12h.01M15.5 16h.01" />
    </svg>
  ),
  // Élevage — tête de bovin (cornes, oreilles, museau)
  elevage: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
      <path d="M7 6c-1-1.4-3-1-3 1 0 1 .8 1.8 1.8 2" />
      <path d="M17 6c1-1.4 3-1 3 1 0 1-.8 1.8-1.8 2" />
      <path d="M6.5 10c0-2.5 2.2-4.5 5.5-4.5s5.5 2 5.5 4.5c0 3-1.5 4.5-1.5 6.5a3.5 3.5 0 0 1-7 0c0-2-1.5-3.5-1.5-6.5Z" />
      <circle cx="9.5" cy="10.5" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="10.5" r="0.6" fill="currentColor" stroke="none" />
      <path d="M10.3 13.7h3.4" />
    </svg>
  ),
  // Agro-Business — épi / tige stylisée
  agro: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
      <path d="M12 21V9" />
      <path d="M12 9c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3Z" />
      <path d="M9 12c-1.7 0-3-1.3-3-3" />
      <path d="M15 12c1.7 0 3-1.3 3-3" />
      <path d="M8.5 16c-1.4 0-2.7-.9-2.7-2.6" />
      <path d="M15.5 16c1.4 0 2.7-.9 2.7-2.6" />
    </svg>
  ),
  // Trading — chandeliers boursiers
  trading: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" className="w-5 h-5" aria-hidden="true">
      <line x1="6" y1="3" x2="6" y2="21" />
      <rect x="4.5" y="8" width="3" height="6" rx="0.6" fill="currentColor" stroke="none" />
      <line x1="12" y1="3" x2="12" y2="21" />
      <rect x="10.5" y="4" width="3" height="8" rx="0.6" fill="currentColor" stroke="none" />
      <line x1="18" y1="3" x2="18" y2="21" />
      <rect x="16.5" y="12" width="3" height="6" rx="0.6" fill="currentColor" stroke="none" />
    </svg>
  ),
  // Training — flèches bidirectionnelles (échange de savoir)
  training: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
      <path d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h18M16.5 3 21 7.5m0 0L16.5 12M21 7.5H3" />
    </svg>
  ),
  // Immo — maison
  immo: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M6 10v9a1 1 0 0 0 1 1h3v-5h4v5h3a1 1 0 0 0 1-1v-9" />
    </svg>
  ),
  // Store — caddie
  store: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
      <path d="M3 4h2l.6 2.4M5.6 6.4 7.5 14h9.5l2-6.6H6.1M5.6 6.4l1.9 7.6M7.5 14l-.9 3.5h11" />
      <circle cx="9.5" cy="20" r="1" fill="currentColor" stroke="none" />
      <circle cx="16.5" cy="20" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
};
