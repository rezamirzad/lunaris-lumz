import { TranslationInterface } from "@/lib/translations";

export default function Pricing({ t }: { t: TranslationInterface }) {
  return (
    <section id="tarifs" className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-black mb-16 uppercase tracking-widest text-center">
          {t.tarifs}
        </h2>

        {/* Grille des Forfaits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {t.pricing.map((tier, i) => (
            <div
              key={i}
              className="border border-gray-800 p-8 flex flex-col hover:border-blue-500 transition-all bg-zinc-950"
            >
              <div className="text-blue-500 font-bold uppercase tracking-widest text-[10px] mb-2">
                {tier.name}
              </div>
              <div className="text-3xl font-black mb-4">{tier.price}</div>
              <p className="text-gray-500 text-xs mb-8 italic">{tier.ideal}</p>

              <ul className="text-sm text-gray-400 space-y-3 mb-8 flex-grow">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Section Maintenance Recommandée */}
        <div className="max-w-2xl mx-auto border border-blue-900/30 bg-blue-950/10 p-8 rounded-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-white font-bold mb-2 uppercase tracking-tight">
                {t.maintenance.title}
              </h3>
              <ul className="text-xs text-gray-400 flex flex-wrap gap-x-4 gap-y-1">
                {t.maintenance.features.map((f, i) => (
                  <li key={i}>✓ {f}</li>
                ))}
              </ul>
            </div>
            <div className="text-xl font-black text-blue-500 whitespace-nowrap">
              {t.maintenance.price}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
