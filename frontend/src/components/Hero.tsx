interface HeroProps {
  t: {
    heroTitle: string;
    heroSub: string;
    cta: string;
  };
}

export default function Hero({ t }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden pt-20">
      {/* Increased radial glow for a larger ambient feel */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto text-center px-6">
        {/* Larger Branding Badge */}
        <div className="inline-block px-6 py-2 mb-10 rounded-full border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm">
          <p className="text-[12px] font-black uppercase tracking-[0.4em] text-blue-500">
            Digital Craftsmanship • Luxembourg 2026
          </p>
        </div>

        {/* Massive Typography */}
        <h1 className="text-[10rem] md:text-[18rem] font-black tracking-tighter text-white leading-none mb-8 select-none">
          LUM
          <span className="text-transparent bg-clip-text bg-gradient-to-t from-blue-700 to-blue-400 italic">
            Z
          </span>
        </h1>

        <p className="text-zinc-400 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-16 font-medium">
          {t.heroSub}
        </p>

        {/* Larger, more prominent CTA buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <a
            href="#contact"
            className="px-16 py-6 bg-white text-black font-black uppercase text-sm tracking-[0.3em] hover:bg-blue-500 hover:text-white transition-all duration-300 w-full md:w-auto text-center"
          >
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
