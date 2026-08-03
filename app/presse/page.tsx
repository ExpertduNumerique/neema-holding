import Image from "next/image";
import type { Metadata } from "next";
import { poles } from "@/lib/poles";

export const metadata: Metadata = {
  title: "Presse & Kit média",
  description:
    "Logos officiels, charte graphique et éléments de marque de Neema Holding International, prêts à télécharger.",
};

function DownloadIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
      <path d="M12 3v12m0 0-4-4m4 4 4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
    </svg>
  );
}

const PALETTE = [
  { label: "Bleu Neema", hex: "#1A66FF" },
  { label: "Vert Neema", hex: "#095E2B" },
];

export default function PressePage() {
  return (
    <>
      <section className="section-navy text-white">
        <div className="container-neema py-16 sm:py-20 text-center">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#22B863" }}>
            Presse & Kit média
          </p>
          <h1 className="text-3xl sm:text-4xl font-black max-w-2xl mx-auto">
            Logos, charte graphique et éléments de marque
          </h1>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,.72)" }}>
            Tous les visuels officiels de Neema Holding International, prêts à
            l&apos;emploi pour vos articles, présentations ou supports partenaires.
          </p>
          <div className="mt-8">
            <a href="/downloads/neema-kit-media.zip" download className="btn btn-primary inline-flex items-center gap-2">
              <DownloadIcon />
              Télécharger le kit complet (.zip)
            </a>
          </div>
        </div>
      </section>

      {/* ── Logos ── */}
      <section className="py-20 sm:py-24">
        <div className="container-neema">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-8">Logos</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            <div className="card p-5 flex flex-col items-center gap-3 text-center">
              <Image src="/images/neema/logo_holding.png" alt="Logo Neema Holding International" width={72} height={72} />
              <p className="text-sm font-semibold text-navy-900">Neema Holding</p>
              <a
                href="/images/neema/logo_holding.png"
                download
                className="text-xs font-semibold inline-flex items-center gap-1"
                style={{ color: "#12A150" }}
              >
                <DownloadIcon /> PNG
              </a>
            </div>
            {poles.map((pole) => (
              <div key={pole.slug} className="card p-5 flex flex-col items-center gap-3 text-center">
                <Image src={pole.logo} alt={`Logo ${pole.name}`} width={72} height={72} />
                <p className="text-sm font-semibold text-navy-900">{pole.shortName}</p>
                <a
                  href={pole.logo}
                  download
                  className="text-xs font-semibold inline-flex items-center gap-1"
                  style={{ color: "#12A150" }}
                >
                  <DownloadIcon /> PNG
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Palette ── */}
      <section className="py-20 sm:py-24" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="container-neema">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-8">Palette de couleurs</h2>
          <div className="flex flex-wrap gap-6">
            {PALETTE.map((c) => (
              <div key={c.hex} className="flex items-center gap-4">
                <span
                  className="w-16 h-16 rounded-2xl shrink-0 shadow-inner"
                  style={{ backgroundColor: c.hex, border: "1px solid rgba(0,0,0,.08)" }}
                  aria-hidden="true"
                />
                <div>
                  <p className="font-bold text-navy-900">{c.label}</p>
                  <p className="text-sm text-gray-500 font-mono">{c.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Charte graphique ── */}
      <section className="py-20 sm:py-24">
        <div className="container-neema">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-4">Charte graphique complète</h2>
          <p className="text-gray-600 max-w-2xl mb-6">
            Le document officiel présentant l&apos;ensemble des logos du groupe et de
            ses six pôles.
          </p>
          <a
            href="/downloads/Neema-Holding-Charte-Graphique.pdf"
            download
            className="btn btn-outline inline-flex items-center gap-2"
          >
            <DownloadIcon />
            Télécharger le PDF
          </a>
        </div>
      </section>
    </>
  );
}
