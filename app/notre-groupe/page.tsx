import Link from "next/link";
import type { Metadata } from "next";
import { poles } from "@/lib/poles";
import { PoleCard } from "@/components/neema/PoleCard";
import { ValuesGrid } from "@/components/neema/ValuesGrid";

export const metadata: Metadata = {
  title: "Notre Groupe",
  description:
    "Neema Holding International : un groupe multisectoriel engagé dans le développement économique, social et humain en Afrique, à travers six pôles complémentaires.",
};

export default function NotreGroupePage() {
  return (
    <>
      {/* ── Intro ── */}
      <section className="section-navy text-white">
        <div className="container-neema py-20 sm:py-24 text-center">
          <p className="text-sm font-bold uppercase tracking-widest" style={{ color: "#22B863" }}>
            Notre Groupe
          </p>
          <h1 className="mt-3 text-3xl sm:text-5xl font-black leading-tight max-w-3xl mx-auto">
            Construire aujourd&apos;hui les solutions qui façonnent l&apos;Afrique de demain.
          </h1>
          <p className="mt-6 text-base sm:text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,.72)" }}>
            Neema Holding International est un groupe multisectoriel engagé dans le
            développement économique, social et humain, à travers des activités
            innovantes, durables et à fort impact. Notre mission est de créer de la
            valeur en réunissant plusieurs secteurs stratégiques au sein d&apos;une même
            vision : contribuer à la croissance des entreprises, accompagner les
            communautés et favoriser un développement responsable.
          </p>
        </div>
      </section>

      {/* ── Positionnement ── */}
      <section className="py-20 sm:py-24">
        <div className="container-neema max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">Notre ambition</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Grâce à notre expertise et à notre approche orientée vers l&apos;excellence,
            nous intervenons dans plusieurs domaines complémentaires, réunis au sein
            d&apos;un même groupe multisectoriel africain. Notre ambition est de devenir
            une référence en Afrique et à l&apos;international en proposant des solutions
            fiables, créatrices de richesse et porteuses d&apos;impact.
          </p>
        </div>
      </section>

      {/* ── Valeurs ── */}
      <section className="py-20 sm:py-24" style={{ backgroundColor: "#F0F5FF" }}>
        <div className="container-neema">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">Nos valeurs</h2>
            <p className="mt-3 text-gray-600">
              Chez Neema Holding International, nous croyons que le développement
              durable repose sur l&apos;innovation, l&apos;intégrité, la collaboration et
              l&apos;excellence.
            </p>
          </div>
          <ValuesGrid />
        </div>
      </section>

      {/* ── Nos 6 pôles ── */}
      <section className="py-20 sm:py-24">
        <div className="container-neema">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">Nos 6 pôles en un coup d&apos;œil</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {poles.map((pole) => (
              <PoleCard key={pole.slug} pole={pole} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Devise de clôture ── */}
      <section className="section-navy text-white">
        <div className="container-neema py-16 sm:py-20 text-center">
          <p className="text-xl sm:text-3xl font-bold max-w-2xl mx-auto">
            « Unir les forces, créer la valeur, <span style={{ color: "#22B863" }}>bâtir l&apos;avenir</span>. »
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn btn-primary">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
