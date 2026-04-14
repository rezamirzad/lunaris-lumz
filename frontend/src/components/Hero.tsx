interface HeroProps {
  t: {
    heroTitle: string;
    heroSub: string;
    cta: string;
  };
}

export default function Hero({ t }: HeroProps) {
  const titleWithoutZ = t.heroTitle.slice(0, -1);
  const lastLetter = t.heroTitle.slice(-1);
  return (
    <section className="h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-5xl md:text-7xl font-black mb-4 uppercase tracking-tighter">
        {titleWithoutZ}
        <span
          className="text-blue-500"
          style={{ WebkitTextStroke: "1px #3b82f6" }}
        >
          {lastLetter}
        </span>
      </h1>
      <p className="text-gray-400 max-w-lg mx-auto text-lg mb-8 italic">
        "{t.heroSub}"
      </p>
      <a
        href="#contact"
        className="bg-white text-black px-8 py-4 font-black uppercase text-[10px] tracking-[0.2em] hover:bg-blue-500 hover:text-white transition-all"
      >
        {t.cta}
      </a>
    </section>
  );
}
