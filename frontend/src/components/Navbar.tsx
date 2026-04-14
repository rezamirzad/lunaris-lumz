"use client";
import { useState } from "react";
import { Language, TranslationInterface } from "@/lib/translations";

interface NavbarProps {
  currentLang: Language;
  setLang: (l: Language) => void;
  t: TranslationInterface;
}

const Navbar = ({ currentLang, setLang, t }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const languages: Language[] = ["FR", "EN", "DE", "LU"];

  if (!t) return null;

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-lg border-b border-zinc-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-black tracking-tighter">
          LUM<span className="text-blue-500">Z</span>
        </div>

        <div className="flex items-center gap-4">
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
            <a href="#services" className="hover:text-white transition-colors">
              {t.services}
            </a>
            <a href="#tarifs" className="hover:text-white transition-colors">
              {t.tarifs}
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Language Selector */}
          <div className="flex gap-1 bg-zinc-950 p-1 rounded border border-zinc-800">
            {languages.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2 py-1 text-[9px] font-black rounded transition-all ${
                  currentLang === l
                    ? "bg-blue-500 text-white"
                    : "text-zinc-600 hover:text-zinc-300"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white flex flex-col gap-1.5 p-2"
            aria-label="Toggle Menu"
          >
            <div
              className={`w-5 h-0.5 bg-current transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            ></div>
            <div
              className={`w-5 h-0.5 bg-current transition-all ${isOpen ? "opacity-0" : ""}`}
            ></div>
            <div
              className={`w-5 h-0.5 bg-current transition-all ${isOpen ? "-rotate-45 -translate-y-1" : ""}`}
            ></div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col gap-6 py-6 text-center text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 border-t border-zinc-900">
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="hover:text-white"
          >
            {t.services}
          </a>
          <a
            href="#tarifs"
            onClick={() => setIsOpen(false)}
            className="hover:text-white"
          >
            {t.tarifs}
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
