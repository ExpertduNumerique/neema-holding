import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
};

function LegalNotice() {
  return (
    <div
      className="rounded-2xl px-5 py-4 text-sm mb-10"
      style={{ backgroundColor: "#FFFBEB", color: "#92400E", border: "1px solid #FDE68A" }}
    >
      Certaines informations légales (forme juridique, numéro d&apos;immatriculation
      RCCM/IFU, hébergeur du site) seront ajoutées dès que le site sera mis en ligne
      officiellement. Cette page sera complétée en conséquence.
    </div>
  );
}

export default function MentionsLegalesPage() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-neema max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-black text-navy-900 mb-8">Mentions légales</h1>
        <LegalNotice />

        <div className="prose-legal space-y-8 text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-navy-900 mb-2">Éditeur du site</h2>
            <p>
              Le présent site est édité par <strong>Neema Holding International</strong>,
              groupe multisectoriel dont le siège se trouve à Koudougou / Ouagadougou,
              Burkina Faso.
            </p>
            <p className="mt-2">
              Contacts : (+226) 66 08 18 96 · 70 42 05 66 · 68 73 39 69.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy-900 mb-2">Directeur de la publication</h2>
            <p>Neema Holding International.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy-900 mb-2">Hébergement</h2>
            <p>Les informations relatives à l&apos;hébergeur du site seront précisées ici.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy-900 mb-2">Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des contenus présents sur ce site (textes, logos, images,
              charte graphique) est la propriété de Neema Holding International, sauf
              mention contraire. Toute reproduction ou représentation, totale ou
              partielle, sans autorisation préalable est interdite.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy-900 mb-2">Responsabilité</h2>
            <p>
              Neema Holding International s&apos;efforce d&apos;assurer l&apos;exactitude des
              informations diffusées sur ce site, mais ne saurait être tenu responsable
              d&apos;éventuelles omissions ou erreurs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
