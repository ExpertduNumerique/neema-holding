import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notre Équipe",
  description: "L'équipe de Neema Holding International.",
};

/**
 * Placeholder honnête en attendant les informations réelles de l'équipe
 * (voir la liste transmise dans la conversation) — pas de noms, photos ou
 * postes inventés.
 */
export default function NotreEquipePage() {
  return (
    <section className="section-navy text-white">
      <div className="container-neema py-24 sm:py-32 text-center">
        <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#22B863" }}>
          Notre Équipe
        </p>
        <h1 className="text-3xl sm:text-4xl font-black max-w-2xl mx-auto">
          Les visages derrière Neema Holding International
        </h1>
        <p className="mt-4 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,.72)" }}>
          Cette page est en préparation. Elle présentera prochainement l&apos;équipe
          dirigeante et les responsables de chaque pôle.
        </p>
        <div className="mt-8">
          <Link href="/contact" className="btn btn-primary">
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
}
