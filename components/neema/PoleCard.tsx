import Link from "next/link";
import Image from "next/image";
import type { Pole } from "@/lib/poles";

export function PoleCard({ pole }: { pole: Pole }) {
  return (
    <Link href={`/poles/${pole.slug}`} className="card p-6 flex flex-col gap-3 group">
      <Image
        src={pole.logo}
        alt={pole.name}
        width={56}
        height={56}
        className="shrink-0"
      />
      <h3 className="text-lg font-bold text-navy-900 group-hover:text-accent-700 transition-colors">
        {pole.shortName}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">{pole.description}</p>
      <span className="mt-auto text-sm font-semibold text-accent-600 inline-flex items-center gap-1">
        En savoir plus
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </Link>
  );
}
