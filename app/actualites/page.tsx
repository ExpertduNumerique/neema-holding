import Link from "next/link";
import type { Metadata } from "next";
import { actualites } from "@/lib/actualites";

export const metadata: Metadata = {
  title: "Actualités",
  description: "Les actualités de Neema Holding International et de ses pôles.",
};

function NewspaperIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10" aria-hidden="true">
      <path d="M4 4.5h11a2 2 0 0 1 2 2V18a2 2 0 0 0 2 2M4 4.5v15a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3M4 4.5h13" />
      <path d="M7.5 9h5M7.5 12.5h5M7.5 16h3" />
    </svg>
  );
}

export default function ActualitesPage() {
  return (
    <>
      <section className="section-navy text-white">
        <div className="container-neema py-16 sm:py-20 text-center">
          <h1 className="text-3xl sm:text-4xl font-black">Actualités</h1>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,.72)" }}>
            Les dernières nouvelles de Neema Holding International et de ses six pôles.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-neema">
          {actualites.length === 0 ? (
            <div className="text-center max-w-md mx-auto">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "#F0F5FF", color: "#1A4FA6" }}
              >
                <NewspaperIcon />
              </div>
              <h2 className="text-xl font-bold text-navy-900">Aucune actualité pour le moment</h2>
              <p className="mt-2 text-gray-600">
                Revenez bientôt : les prochaines actualités du groupe seront publiées ici.
              </p>
              <div className="mt-6">
                <Link href="/contact" className="btn btn-outline">
                  Nous contacter
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {actualites.map((a) => (
                <article key={a.slug} className="card p-6">
                  <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#12A150" }}>
                    {a.date}
                  </p>
                  <h3 className="mt-2 font-bold text-navy-900">{a.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{a.excerpt}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
