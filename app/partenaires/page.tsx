import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { partenaires } from "@/lib/partenaires";

export const metadata: Metadata = {
  title: "Partenaires",
  description: "Les partenaires de Neema Holding International.",
};

function HandshakeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10" aria-hidden="true">
      <path d="M8 12.5 4.5 9a1.5 1.5 0 0 1 2.1-2.1L10 10.2M8 12.5l2.5 2.5a1.5 1.5 0 0 0 2.1 0l.4-.4m-5-2.1 4.6-4.6a1.5 1.5 0 0 1 2.1 0l4.3 4.3a1.5 1.5 0 0 1 0 2.1l-4.9 4.9a1.5 1.5 0 0 1-2.1 0" />
      <path d="m13 8 3 3M15.5 5.5 19 9a1.5 1.5 0 0 1 0 2.1" />
    </svg>
  );
}

export default function PartenairesPage() {
  return (
    <>
      <section className="section-navy text-white">
        <div className="container-neema py-16 sm:py-20 text-center">
          <h1 className="text-3xl sm:text-4xl font-black">Nos partenaires</h1>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,.72)" }}>
            Neema Holding International construit des collaborations durables avec des
            partenaires qui partagent notre vision.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-neema">
          {partenaires.length === 0 ? (
            <div className="text-center max-w-md mx-auto">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "#EFFCF3", color: "#12A150" }}
              >
                <HandshakeIcon />
              </div>
              <h2 className="text-xl font-bold text-navy-900">Nos partenariats se construisent</h2>
              <p className="mt-2 text-gray-600">
                Cette page présentera bientôt nos partenaires officiels. Vous représentez
                une organisation intéressée par un partenariat ?
              </p>
              <div className="mt-6">
                <Link href="/contact" className="btn btn-primary">
                  Devenir partenaire
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {partenaires.map((p) => (
                <div key={p.name} className="card p-6 flex items-center justify-center">
                  <Image src={p.logo} alt={p.name} width={120} height={60} className="object-contain" />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
