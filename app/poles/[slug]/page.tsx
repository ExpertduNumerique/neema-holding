import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { poles, getPole } from "@/lib/poles";
import { POLE_ICON_COLORS } from "@/components/layout/PoleIcons";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return poles.map((pole) => ({ slug: pole.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pole = getPole(slug);
  if (!pole) return {};
  return {
    title: pole.name,
    description: pole.description,
  };
}

export default async function PolePage({ params }: PageProps) {
  const { slug } = await params;
  const pole = getPole(slug);
  if (!pole) notFound();

  const colors = POLE_ICON_COLORS[pole.iconId];
  const others = poles.filter((p) => p.slug !== pole.slug);

  return (
    <>
      {/* ── Hero ── */}
      <section className="section-navy text-white">
        <div className="container-neema py-16 sm:py-20">
          <Link href="/notre-groupe" className="text-sm inline-flex items-center gap-1.5" style={{ color: "rgba(255,255,255,.6)" }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
              <path d="M19 12H5M11 6l-6 6 6 6" />
            </svg>
            Notre Groupe
          </Link>
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Image src={pole.logo} alt={pole.name} width={96} height={96} className="shrink-0" priority />
            <div>
              <p className="text-sm font-bold uppercase tracking-widest" style={{ color: "#22B863" }}>
                Un pôle Neema Holding International
              </p>
              <h1 className="mt-1 text-2xl sm:text-4xl font-black leading-tight">{pole.name}</h1>
              <p className="mt-4 text-base sm:text-lg max-w-2xl" style={{ color: "rgba(255,255,255,.72)" }}>
                {pole.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ce que nous faisons ── */}
      {pole.extra.length > 0 && (
        <section className="py-20 sm:py-24">
          <div className="container-neema max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">Ce que nous faisons</h2>
            <ul className="mt-6 space-y-4">
              {pole.extra.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <span
                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: colors?.bg, color: colors?.color }}
                    aria-hidden="true"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M5 12l4 4L19 6" />
                    </svg>
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="section-navy text-white">
        <div className="container-neema py-16 sm:py-20 text-center">
          <h2 className="text-xl sm:text-2xl font-bold max-w-xl mx-auto">
            Vous voulez en savoir plus sur {pole.shortName} ?
          </h2>
          <div className="mt-8">
            <Link href="/contact" className="btn btn-primary">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* ── Autres pôles ── */}
      <section className="py-16 sm:py-20">
        <div className="container-neema">
          <h2 className="text-lg font-bold text-navy-900 mb-6">Autres pôles</h2>
          <div className="flex flex-wrap gap-3">
            {others.map((p) => (
              <Link
                key={p.slug}
                href={`/poles/${p.slug}`}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-full border transition-colors hover:bg-gray-50"
                style={{ borderColor: "var(--color-border)" }}
              >
                <Image src={p.logo} alt="" width={24} height={24} aria-hidden="true" />
                <span className="text-sm font-semibold text-navy-900">{p.shortName}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
