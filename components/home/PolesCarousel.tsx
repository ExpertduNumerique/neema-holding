"use client";

import { useRef } from "react";
import { poles } from "@/lib/poles";
import { PoleCard } from "@/components/neema/PoleCard";

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
      aria-hidden="true"
    >
      <path d={direction === "left" ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"} />
    </svg>
  );
}

export function PolesCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: dir * 336, behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
        <div className="text-center sm:text-left max-w-2xl mx-auto sm:mx-0">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">Nos pôles</h2>
          <p className="mt-3 text-gray-600">
            Six secteurs complémentaires réunis au sein d&apos;une même vision : contribuer
            à la croissance des entreprises, accompagner les communautés et favoriser un
            développement responsable.
          </p>
        </div>
        <div className="hidden sm:flex gap-2 shrink-0">
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Pôle précédent"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-gray-100"
            style={{ border: "1px solid var(--color-border)", color: "#0B2A66", background: "#fff" }}
          >
            <ChevronIcon direction="left" />
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Pôle suivant"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-gray-100"
            style={{ border: "1px solid var(--color-border)", color: "#0B2A66", background: "#fff" }}
          >
            <ChevronIcon direction="right" />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="no-scrollbar flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 -mx-4 px-4 sm:mx-0 sm:px-0"
      >
        {poles.map((pole, i) => (
          <div key={pole.slug} className="snap-start shrink-0 w-[78vw] sm:w-80">
            <PoleCard pole={pole} index={i} />
          </div>
        ))}
      </div>
    </div>
  );
}
