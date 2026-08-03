import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
};

export default function ConfidentialitePage() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-neema max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-black text-navy-900 mb-8">
          Politique de confidentialité
        </h1>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-navy-900 mb-2">Données collectées</h2>
            <p>
              À ce jour, le formulaire de contact de ce site n&apos;est pas encore relié
              à un service d&apos;envoi ou de stockage : aucune donnée saisie n&apos;est
              transmise ni conservée. Cette page sera mise à jour dès qu&apos;un service
              de messagerie sera activé, avec le détail des données alors collectées et
              leur finalité.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy-900 mb-2">Cookies</h2>
            <p>
              Ce site n&apos;utilise actuellement aucun cookie de suivi ni outil
              d&apos;analyse d&apos;audience. Si des outils de mesure d&apos;audience venaient à
              être ajoutés, cette politique serait mise à jour en conséquence et votre
              consentement vous serait demandé le cas échéant.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy-900 mb-2">Vos droits</h2>
            <p>
              Vous pouvez à tout moment nous contacter via la page Contact pour toute
              question relative à vos données personnelles.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy-900 mb-2">Contact</h2>
            <p>
              Pour toute question relative à cette politique, contactez Neema Holding
              International via la page Contact ou par téléphone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
