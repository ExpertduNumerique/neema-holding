import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation",
};

export default function CGUPage() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-neema max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-black text-navy-900 mb-8">
          Conditions Générales d&apos;Utilisation
        </h1>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-navy-900 mb-2">1. Objet</h2>
            <p>
              Les présentes conditions générales d&apos;utilisation régissent l&apos;accès et
              l&apos;usage du site officiel de Neema Holding International. En naviguant
              sur ce site, vous acceptez ces conditions sans réserve.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy-900 mb-2">2. Accès au site</h2>
            <p>
              Ce site est un site vitrine présentant Neema Holding International et
              ses six pôles d&apos;activité (Élevage, Agro-Business, Trading, Training,
              Immobilier, Store). Il ne propose actuellement aucune fonctionnalité de
              vente en ligne, de création de compte ou de paiement.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy-900 mb-2">3. Formulaire de contact</h2>
            <p>
              Le formulaire présent sur la page Contact permet de préparer un message
              à destination de Neema Holding International. Pour toute demande
              nécessitant une réponse rapide, privilégiez les numéros de téléphone
              indiqués sur le site.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy-900 mb-2">4. Propriété intellectuelle</h2>
            <p>
              Les logos, textes, images et éléments graphiques de ce site sont la
              propriété de Neema Holding International et ne peuvent être réutilisés
              sans autorisation, sauf pour les éléments explicitement mis à disposition
              dans la section Presse &amp; Kit média.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy-900 mb-2">5. Évolution des présentes conditions</h2>
            <p>
              Neema Holding International se réserve le droit de modifier les présentes
              conditions à tout moment, notamment à mesure que de nouvelles
              fonctionnalités seront ajoutées au site.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy-900 mb-2">6. Contact</h2>
            <p>
              Pour toute question relative à ces conditions, contactez Neema Holding
              International via la page Contact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
