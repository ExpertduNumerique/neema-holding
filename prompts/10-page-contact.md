# Prompt 10 — Page Contact

Prérequis : prompts 00–09 exécutés. Lis `AGENTS.md` §1 (contact) et §5
(style header/footer, pour rester cohérent).

## Objectif

Créer `app/contact/page.tsx`.

## Contenu attendu

1. **Coordonnées officielles** (les seules connues — ne rien inventer) :
   - Adresse : Koudougou / Ouagadougou, Burkina Faso
   - Téléphones : (+226) 66 08 18 96 · 70 42 05 66 · 68 73 39 69
   - Facebook : « Neema Holding International »
   - Pas d'adresse email connue à ce jour — ne pas en inventer une. Soit tu
     omets la ligne email, soit tu prévois un champ clairement marqué comme
     "à compléter" côté contenu (pas visible utilisateur final tant qu'il
     n'y a pas de vraie adresse).

2. **Formulaire de contact** : nom, email, téléphone (optionnel), pôle
   concerné (select avec les 6 pôles + "Autre / question générale"),
   message. Comme il n'y a pas de backend en V1 (pas de DB, pas d'API de
   contact), deux options possibles — choisis celle qui te semble la plus
   simple à maintenir et documente ton choix en commentaire dans le code :
   - (a) Formulaire `mailto:` qui pré-remplit un email vers une adresse
     de contact (si une adresse existe déjà dans le projet — sinon,
     n'implémente pas cette option) ;
   - (b) Formulaire visuel non fonctionnel (UI complète) avec une note
     claire "à connecter à un service d'envoi d'email" — acceptable pour
     une V1 vitrine, à condition de ne pas laisser croire à l'utilisateur
     que le message part réellement si ce n'est pas le cas.
   Ne fabrique pas de fausse confirmation d'envoi trompeuse.

3. **Carte ou visuel de localisation** : si tu n'as pas de coordonnées GPS
   précises, n'intègre pas une fausse carte Google Maps pointant un lieu
   arbitraire — préfère un simple bloc texte/visuel avec l'adresse, ou une
   carte générique du Burkina Faso/de la zone Koudougou-Ouagadougou sans
   pin précis inventé.

4. **Liens rapides vers les pôles** : pour les visiteurs qui cherchent un
   pôle précis, rappelle les 6 liens `/poles/<slug>` en bas de page.

## Metadata

Titre de page « Contact » (+ suffixe du template), description invitant à
contacter le groupe.

## Contraintes

- Cohérence visuelle avec les autres pages (mêmes tokens, mêmes patterns
  de section).
- Formulaire accessible (labels associés, messages d'erreur clairs,
  navigation clavier).
- Aucune donnée de contact fictive : si une info manque, omets-la plutôt
  que de l'inventer.

## Vérification

- `npm run dev`, relis l'intégralité du site (header, footer, accueil,
  notre-groupe, les 6 pôles, contact) pour une dernière passe de cohérence
  visuelle et éditoriale avant de considérer la V1 terminée.
