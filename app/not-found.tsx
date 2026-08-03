import Link from "next/link";
import type { Metadata } from "next";
import { poles } from "@/lib/poles";

export const metadata: Metadata = {
  title: "Page introuvable",
};

export default function NotFound() {
  return (
    <section className="section-navy text-white">
      <div className="container-neema py-24 sm:py-32 text-center">
        <p className="text-6xl sm:text-7xl font-black" style={{ color: "#22B863" }}>
          404
        </p>
        <h1 className="mt-4 text-2xl sm:text-3xl font-bold">Cette page n&apos;existe pas</h1>
        <p className="mt-3 max-w-md mx-auto" style={{ color: "rgba(255,255,255,.72)" }}>
          Le lien que vous avez suivi est peut-être incorrect, ou la page a été déplacée.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/" className="btn btn-primary">
            Retour à l&apos;accueil
          </Link>
          <Link href="/contact" className="btn btn-outline" style={{ borderColor: "rgba(255,255,255,.4)", color: "#fff" }}>
            Nous contacter
          </Link>
        </div>

        <div className="mt-12 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,.1)" }}>
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,.4)" }}>
            Ou explorez nos pôles
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {poles.map((pole) => (
              <Link
                key={pole.slug}
                href={`/poles/${pole.slug}`}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors"
                style={{ background: "rgba(255,255,255,.08)", color: "rgba(255,255,255,.8)" }}
              >
                {pole.shortName}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
