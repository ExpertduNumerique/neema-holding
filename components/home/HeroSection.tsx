import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="bg-white overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-20" aria-labelledby="hero-title">
      <div className="container-neema">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Colonne gauche : texte ── */}
          <div className="text-center lg:text-left">
            <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: "#12A150" }}>
              Groupe multisectoriel africain
            </p>
            <h1
              id="hero-title"
              className="font-black leading-tight text-navy-900"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              Construire aujourd&apos;hui les solutions qui{" "}
              <span style={{ color: "#12A150" }}>façonnent l&apos;Afrique de demain</span>.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Neema Holding International réunit six pôles complémentaires au service
              d&apos;un même objectif : contribuer à la croissance des entreprises,
              accompagner les communautés et favoriser un développement responsable.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <a href="#nos-poles" className="btn btn-primary">
                Découvrir nos pôles
              </a>
              <Link href="/contact" className="btn btn-outline">
                Nous contacter
              </Link>
            </div>
          </div>

          {/* ── Colonne droite : visuel authentique (kakémonos officiels) ── */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border" style={{ borderColor: "var(--color-border)" }}>
              <Image
                src="/images/neema/kakemonos.jpg"
                alt="Kakémonos de présentation officiels de Neema Holding International"
                width={1280}
                height={853}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            <div
              className="absolute -bottom-5 -left-5 sm:-left-8 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <Image src="/images/neema/logo_holding.png" alt="" width={40} height={40} aria-hidden="true" />
              <div>
                <p className="text-sm font-bold text-navy-900 leading-tight">6 pôles d&apos;activité</p>
                <p className="text-xs text-gray-500 leading-tight">Un seul groupe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
