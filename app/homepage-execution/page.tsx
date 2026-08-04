import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "En cours d'exécution",
  robots: { index: false, follow: false },
};

export default function HomepageExecutionPage() {
  return (
    <section className="bg-white min-h-[70vh] flex items-center justify-center px-6">
      <span className="btn btn-primary cursor-default select-none text-center max-w-[26rem]">
        Nous travaillons activement sur cette plateforme.
      </span>
    </section>
  );
}
