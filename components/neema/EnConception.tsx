interface EnConceptionProps {
  /** Nom de la page affiché dans le badge central. */
  label?: string;
}

export function EnConception({ label }: EnConceptionProps) {
  return (
    <section className="bg-white min-h-[70vh] flex items-center justify-center px-6">
      <span className="btn btn-primary cursor-default select-none text-center max-w-[24rem]">
        {label ? `${label} — En cours de conception` : "En cours de conception"}
      </span>
    </section>
  );
}
