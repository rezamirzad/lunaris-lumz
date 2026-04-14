"use client";

import { useState } from "react";
import { translations, Language } from "@/lib/translations";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  // État pour gérer la langue (FR par défaut)
  const [lang, setLang] = useState<Language>("FR");

  // Récupération des traductions correspondantes
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Barre de navigation avec sélecteur de langue */}
      <Navbar currentLang={lang} setLang={setLang} t={t} />

      <main>
        {/* Section d'accueil (Hero) */}
        <Hero t={t} />

        {/* Section des services proposés */}
        <Services t={t} />

        {/* Grille tarifaire "Prix Voisin" */}
        <Pricing t={t} />
      </main>

      {/* Pied de page technique */}
      <Footer />
    </div>
  );
}
