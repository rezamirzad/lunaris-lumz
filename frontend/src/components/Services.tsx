interface ServicesProps {
  t: {
    services: string;
    serviceList: { title: string; desc: string }[];
  };
}

export default function Services({ t }: ServicesProps) {
  return (
    <section id="services" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-black mb-12 uppercase tracking-widest border-l-4 border-blue-500 pl-4">
          {t.services}
        </h2>
        <div className="grid md:grid-cols-2 gap-12 text-gray-400">
          {t.serviceList.map((s, i) => (
            <div key={i}>
              <h3 className="text-white font-bold mb-2">{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
