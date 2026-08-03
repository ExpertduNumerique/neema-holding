import Link from "next/link";
import type { Metadata } from "next";
import { poles } from "@/lib/poles";
import { PoleCard } from "@/components/neema/PoleCard";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { ApproachSection } from "@/components/home/ApproachSection";

export const metadata: Metadata = {
  description:
    "Construire aujourd'hui les solutions qui façonnent l'Afrique de demain. Découvrez les 6 pôles de Neema Holding International : Élevage, Agro-Business, Trading, Training, Immo, Store.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />

      {/* ── Nos pôles ── */}
      <section id="nos-poles" className="py-20 sm:py-24" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="container-neema">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">Nos pôles</h2>
            <p className="mt-3 text-gray-600">
              Six secteurs complémentaires réunis au sein d&apos;une même vision : contribuer
              à la croissance des entreprises, accompagner les communautés et favoriser un
              développement responsable.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {poles.map((pole) => (
              <PoleCard key={pole.slug} pole={pole} />
            ))}
          </div>
        </div>
      </section>

      <ApproachSection />

      {/* ── Devise ── */}
      <section className="section-navy text-white">
        <div className="container-neema py-16 sm:py-20 text-center">
          <p className="text-xl sm:text-3xl font-bold max-w-2xl mx-auto">
            « Unir les forces, créer la valeur, <span style={{ color: "#22B863" }}>bâtir l&apos;avenir</span>. »
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn btn-primary">
              Parlons de votre projet
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
