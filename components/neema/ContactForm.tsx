"use client";

import { useState } from "react";
import { poles } from "@/lib/poles";

/**
 * Pas d'adresse email connue et pas de backend en V1 (voir AGENTS.md) :
 * ce formulaire ne part nulle part. Le submit affiche une invite claire à
 * utiliser le téléphone en attendant qu'un service d'envoi soit branché —
 * on n'affiche jamais une fausse confirmation d'envoi.
 */
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-navy-900 mb-1.5">
          Nom complet
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none"
          style={{ borderColor: "var(--color-border)" }}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-navy-900 mb-1.5">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none"
            style={{ borderColor: "var(--color-border)" }}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-navy-900 mb-1.5">
            Téléphone <span className="font-normal text-gray-400">(optionnel)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none"
            style={{ borderColor: "var(--color-border)" }}
          />
        </div>
      </div>

      <div>
        <label htmlFor="pole" className="block text-sm font-semibold text-navy-900 mb-1.5">
          Pôle concerné
        </label>
        <select
          id="pole"
          name="pole"
          className="w-full px-4 py-2.5 rounded-xl border text-sm bg-white focus:outline-none"
          style={{ borderColor: "var(--color-border)" }}
          defaultValue=""
        >
          <option value="" disabled>
            Sélectionnez un pôle
          </option>
          {poles.map((p) => (
            <option key={p.slug} value={p.slug}>
              {p.shortName}
            </option>
          ))}
          <option value="autre">Autre / question générale</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-navy-900 mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none resize-none"
          style={{ borderColor: "var(--color-border)" }}
        />
      </div>

      {submitted ? (
        <p className="text-sm rounded-xl px-4 py-3" style={{ backgroundColor: "#EFFCF3", color: "#0C7A38" }}>
          Merci pour votre message. Ce formulaire n&apos;est pas encore connecté à notre
          messagerie — en attendant, contactez-nous directement par téléphone
          ci-contre pour une réponse immédiate.
        </p>
      ) : (
        <button type="submit" className="btn btn-primary w-full sm:w-auto">
          Envoyer le message
        </button>
      )}
    </form>
  );
}
