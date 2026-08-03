import { values } from "@/lib/values";
import { VALUE_ICONS } from "@/components/neema/ValueIcons";

export function ApproachSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-neema">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">Ce qui nous anime</h2>
          <p className="mt-3 text-gray-600">
            Chez Neema Holding International, nous croyons que le développement durable
            repose sur quatre piliers.
          </p>
        </div>

        <div className="relative max-w-2xl mx-auto">
          {/* Ligne verticale de la timeline */}
          <div
            className="absolute top-2 bottom-2 w-px"
            style={{ left: "27px", background: "linear-gradient(to bottom, var(--color-border), transparent)" }}
            aria-hidden="true"
          />

          <div className="space-y-6">
            {values.map((v, i) => (
              <div key={v.id} className="relative flex items-start gap-5">
                <div
                  className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ring-4 ring-white"
                  style={{ backgroundColor: "rgba(18,161,80,.1)", color: "#12A150" }}
                >
                  {VALUE_ICONS[v.id]}
                </div>
                <div className="card relative flex-1 p-5 sm:p-6">
                  <span
                    className="absolute top-4 right-5 text-xs font-black"
                    style={{ color: "var(--color-border)" }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-bold text-navy-900 pr-8">{v.label}</h3>
                  <p className="mt-1.5 text-gray-600 leading-relaxed">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
