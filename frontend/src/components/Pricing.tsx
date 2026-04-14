import { TranslationInterface } from "@/lib/translations";

export default function Pricing({ t }: { t: TranslationInterface }) {
  return (
    <section id="tarifs" className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-black mb-16 uppercase tracking-widest border-l-4 border-blue-500 pl-4">
          {t.tarifs}
        </h2>

        {/* Grille des Forfaits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 items-start">
          {t.pricing.map((tier, i) => (
            <div
              key={i}
              className={`relative border p-8 flex flex-col transition-all duration-500 bg-zinc-950 ${
                i === 1
                  ? "border-blue-500 scale-105 z-10 shadow-2xl shadow-blue-500/10"
                  : "border-gray-800"
              }`}
            >
              {/* Badge Traduit - S'affiche uniquement sur le plan Business (index 1) */}
              {i === 1 && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[9px] font-black uppercase tracking-[0.2em] px-4 py-1 whitespace-nowrap">
                  {t.recommendedBadge}
                </div>
              )}

              <div className="text-blue-500 font-bold uppercase tracking-widest text-[10px] mb-2">
                {tier.name}
              </div>
              <div className="text-3xl font-black mb-4">{tier.price}</div>
              <p className="text-gray-150 text-[11px] mb-8 italic leading-relaxed min-h-[40px]">
                {tier.ideal}
              </p>

              <ul className="text-[12px] text-gray-300 space-y-4 mb-8 flex-grow font-medium">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-start">
                    <span className="text-blue-500 mr-3 text-lg leading-none">
                      •
                    </span>
                    <span className="uppercase tracking-wide">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full py-4 text-center text-[10px] font-black uppercase tracking-[0.2em] transition-all ${
                  i === 1
                    ? "bg-blue-500 text-white hover:bg-white hover:text-black"
                    : "bg-white text-black hover:bg-blue-500 hover:text-white"
                }`}
              >
                Démarrer
              </a>
            </div>
          ))}
        </div>

        {/* Section Maintenance - Style épuré */}
        <div className="max-w-3xl mx-auto border border-gray-900 bg-zinc-950/50 p-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h3 className="text-white font-black mb-3 uppercase tracking-widest text-sm italic">
                {t.maintenance.title}
              </h3>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {t.maintenance.features.map((f, i) => (
                  <span
                    key={i}
                    className="text-[10px] text-zinc-300 uppercase font-black tracking-[0.15em] flex items-center group"
                  >
                    <span className="text-blue-400 mr-2.5 text-xs shadow-blue-500/50 drop-shadow-[0_0_3px_rgba(59,130,246,0.5)]">
                      ✓
                    </span>
                    {f}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-2xl font-black text-blue-500 whitespace-nowrap pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-gray-800 md:pl-8 w-full md:w-auto text-center">
              {t.maintenance.price}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
