import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { poles } from "@/lib/poles";
import { ContactForm } from "@/components/neema/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Neema Holding International — Koudougou / Ouagadougou, Burkina Faso.",
};

function MapPinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0" aria-hidden="true">
      <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-2.013 3.5-4.509 3.5-7.327a8.25 8.25 0 0 0-16.5 0c0 2.818 1.555 5.314 3.5 7.327a19.568 19.568 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.144.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0" aria-hidden="true">
      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      <section className="section-navy text-white">
        <div className="container-neema py-16 sm:py-20 text-center">
          <h1 className="text-3xl sm:text-4xl font-black">Contactez-nous</h1>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,.72)" }}>
            Une question sur l&apos;un de nos pôles ? Écrivez-nous ou appelez-nous
            directement.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-neema grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* ── Coordonnées ── */}
          <div className="lg:col-span-4">
            <h2 className="text-xl font-bold text-navy-900 mb-6">Nos coordonnées</h2>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <span style={{ color: "#12A150" }}><MapPinIcon /></span>
                <span className="text-gray-700">Koudougou / Ouagadougou, Burkina Faso</span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: "#12A150" }}><PhoneIcon /></span>
                <a href="tel:+22666081896" className="text-gray-700 hover:text-navy-900">(+226) 66 08 18 96</a>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: "#12A150" }}><PhoneIcon /></span>
                <a href="tel:+22670420566" className="text-gray-700 hover:text-navy-900">70 42 05 66</a>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: "#12A150" }}><PhoneIcon /></span>
                <a href="tel:+22668733969" className="text-gray-700 hover:text-navy-900">68 73 39 69</a>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: "#12A150" }}><FacebookIcon /></span>
                <span className="text-gray-700">Neema Holding International</span>
              </li>
            </ul>

            <div className="mt-10 rounded-2xl p-6" style={{ backgroundColor: "#F0F5FF" }}>
              <p className="text-sm font-bold text-navy-900 mb-2">Nos pôles</p>
              <div className="flex flex-wrap gap-2">
                {poles.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/poles/${p.slug}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-xs font-semibold text-navy-900 border transition-colors hover:bg-gray-50"
                    style={{ borderColor: "var(--color-border)" }}
                  >
                    <Image src={p.logo} alt="" width={16} height={16} aria-hidden="true" />
                    {p.shortName}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* ── Formulaire ── */}
          <div className="lg:col-span-8">
            <div className="card p-6 sm:p-8">
              <h2 className="text-xl font-bold text-navy-900 mb-6">Envoyez-nous un message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
