import { values } from "@/lib/values";
import { VALUE_ICONS } from "@/components/neema/ValueIcons";
import { cn } from "@/lib/utils";

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

        <div className="space-y-10 max-w-3xl mx-auto">
          {values.map((v, i) => (
            <div
              key={v.id}
              className={cn(
                "flex items-start gap-5",
                i % 2 === 1 && "sm:flex-row-reverse sm:text-right"
              )}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: "rgba(18,161,80,.1)", color: "#12A150" }}
              >
                {VALUE_ICONS[v.id]}
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy-900">{v.label}</h3>
                <p className="mt-1.5 text-gray-600 leading-relaxed">{v.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
