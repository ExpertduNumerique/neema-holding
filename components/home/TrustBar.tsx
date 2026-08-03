function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5 shrink-0" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

const ITEMS = [
  { label: "Multisectoriel", detail: "6 pôles d'activité complémentaires" },
  { label: "Ancré en Afrique", detail: "Burkina Faso, ambition internationale" },
  { label: "Impact durable", detail: "innovation, intégrité, excellence" },
  { label: "Une seule vision", detail: "unir les forces, créer la valeur" },
];

export function TrustBar() {
  return (
    <div className="py-5" style={{ backgroundColor: "#0B2A66", borderTop: "1px solid rgba(255,255,255,.06)" }}>
      <div className="container-neema">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {ITEMS.map(({ label, detail }) => (
            <div key={label} className="flex items-center gap-2">
              <span style={{ color: "#22B863" }}>
                <CheckIcon />
              </span>
              <span>
                <strong className="text-white text-xs font-bold">{label}</strong>
                <span className="text-xs ml-1" style={{ color: "rgba(255,255,255,.55)" }}>
                  {detail}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
