interface ServicesProps {
  t: {
    services: string;
    serviceList: { title: string; desc: string }[];
  };
}

export default function Services({ t }: ServicesProps) {
  return (
    <section id="services" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-black mb-16 uppercase tracking-widest border-l-4 border-blue-500 pl-4 text-white">
          {t.services}
        </h2>
        <div className="grid md:grid-cols-2 gap-x-20 gap-y-12 text-zinc-400">
          {t.serviceList.map((s, i) => (
            <div key={i} className="group">
              <h3 className="text-white font-black mb-4 uppercase tracking-tighter text-lg group-hover:text-blue-500 transition-colors">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed tracking-wide">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
