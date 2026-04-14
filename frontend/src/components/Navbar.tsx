import { Language, TranslationInterface } from "@/lib/translations";

interface NavbarProps {
  currentLang: Language;
  setLang: (l: Language) => void;
  t: TranslationInterface;
}

const Navbar = ({ currentLang, setLang, t }: NavbarProps) => {
  const languages: Language[] = ["FR", "EN", "DE", "LU"];

  // Sécurité : si t n'est pas encore chargé
  if (!t) return null;

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-black tracking-tighter">
          LUNARIS <span className="text-blue-500">- LUMZ</span>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6 text-[10px] font-black uppercase tracking-widest text-gray-400">
            <a href="#services" className="hover:text-white transition-colors">
              {t.services} {/* L'erreur arrivait ici car t était undefined */}
            </a>
            <a href="#tarifs" className="hover:text-white transition-colors">
              {t.tarifs}
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          <div className="flex gap-2 bg-zinc-900 p-1 rounded border border-gray-800">
            {languages.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2 py-1 text-[10px] font-bold rounded transition-all ${
                  currentLang === l
                    ? "bg-blue-500 text-white"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
