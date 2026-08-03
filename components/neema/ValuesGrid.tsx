import { values } from "@/lib/values";
import { VALUE_ICONS } from "./ValueIcons";

export function ValuesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {values.map((v) => (
        <div key={v.id} className="card p-6 flex flex-col gap-3">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: "rgba(18,161,80,.1)", color: "#12A150" }}
          >
            {VALUE_ICONS[v.id]}
          </div>
          <h3 className="font-bold text-navy-900">{v.label}</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{v.description}</p>
        </div>
      ))}
    </div>
  );
}
