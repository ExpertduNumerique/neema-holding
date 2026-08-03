import Link from "next/link";
import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { PolesCarousel } from "@/components/home/PolesCarousel";
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
      <section id="nos-poles" className="py-20 sm:py-24 overflow-hidden" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="container-neema">
          <PolesCarousel />
        </div>
      </section>

      <ApproachSection />

      {/* ── Devise ── */}
      <section className="relative section-navy text-white overflow-hidden">
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(34,184,99,.12), transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="container-neema relative py-16 sm:py-20 text-center">
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
