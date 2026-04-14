export type Language = "FR" | "EN" | "DE" | "LU";

export interface TranslationInterface {
  heroTitle: string;
  heroSub: string;
  cta: string;
  services: string;
  tarifs: string;
  serviceList: {
    title: string;
    desc: string;
  }[];
  pricing: {
    name: string;
    price: string;
    ideal: string;
    features: string[];
  }[];
  maintenance: {
    title: string;
    price: string;
    features: string[];
  };
  recommendedBadge: string;
  contact: {
    title: string;
    name: string;
    email: string;
    message: string;
    send: string;
    success: string;
  };
}

export const translations: Record<Language, TranslationInterface> = {
  FR: {
    heroTitle: "LUMZ",
    heroSub: "Votre partenaire digital de proximité au Luxembourg.",
    cta: "Démarrer un projet",
    services: "Services",
    tarifs: "Tarifs",
    recommendedBadge: "Recommandé",
    serviceList: [
      {
        title: "Performance & Design",
        desc: "Sites ultra-rapides, épurés et optimisés pour mobiles.",
      },
      {
        title: "Expertise Multilingue",
        desc: "Configuration native FR / EN / DE / LU pour le marché local.",
      },
    ],
    pricing: [
      {
        name: "Start",
        price: "450€",
        ideal: "Artisans & Indépendants. Idéal pour un lancement rapide.",
        features: [
          "Livré en 7 jours",
          "Site One-Page ultra-rapide",
          "Optimisation SEO Local",
          "Propriété totale du site & domaine",
          "Support de proximité (Luxembourg)",
        ],
      },
      {
        name: "Business",
        price: "1250€",
        ideal: "Le standard pour les PME luxembourgeoises.",
        features: [
          "Multi-pages (jusqu'à 5)",
          "Multilingue (FR/EN/DE/LU)",
          "Formulaire de contact avancé",
          "Propriété totale du site & domaine",
          "Support de proximité (Luxembourg)",
        ],
      },
      {
        name: "Custom",
        price: "Sur devis",
        ideal: "Projets spécifiques et outils métiers.",
        features: [
          "E-commerce & Paiements",
          "Système de réservation",
          "Base de données sur mesure",
          "Propriété totale du site & domaine",
          "Support de proximité (Luxembourg)",
        ],
      },
    ],
    maintenance: {
      title: "Pack Sérénité & Évolution",
      price: "29€ / mois",
      features: [
        "Mises à jour sécurité",
        "Sauvegardes quotidiennes",
        "Modifications illimitées (Textes/Photos)",
      ],
    },
    contact: {
      title: "Contactez-moi",
      name: "Nom",
      email: "Email",
      message: "Message",
      send: "Envoyer",
      success: "Message envoyé avec succès !",
    },
  },
  EN: {
    heroTitle: "LUMZ",
    heroSub: "Your local digital partner in Luxembourg.",
    cta: "Start a project",
    services: "Services",
    tarifs: "Pricing",
    recommendedBadge: "Recommended",
    serviceList: [
      {
        title: "Performance & Design",
        desc: "Ultra-fast, sleek, and mobile-optimized websites.",
      },
      {
        title: "Multilingual Expertise",
        desc: "Native FR / EN / DE / LU setup for the local market.",
      },
    ],
    pricing: [
      {
        name: "Start",
        price: "450€",
        ideal: "Freelancers & Small Biz. Perfect for a quick launch.",
        features: [
          "Delivered in 7 days",
          "Ultra-fast One-Page site",
          "Local SEO Optimization",
          "Full ownership (Site & Domain)",
          "Local support (Luxembourg)",
        ],
      },
      {
        name: "Business",
        price: "1250€",
        ideal: "The standard for Luxembourgish SMEs.",
        features: [
          "Multi-page (up to 5)",
          "Multilingual (FR/EN/DE/LU)",
          "Advanced contact form",
          "Full ownership (Site & Domain)",
          "Local support (Luxembourg)",
        ],
      },
      {
        name: "Custom",
        price: "On Quote",
        ideal: "Specific projects and business tools.",
        features: [
          "E-commerce & Payments",
          "Booking system",
          "Custom database",
          "Full ownership (Site & Domain)",
          "Local support (Luxembourg)",
        ],
      },
    ],
    maintenance: {
      title: "Serenity & Evolution Pack",
      price: "29€ / month",
      features: [
        "Security updates",
        "Daily backups",
        "Unlimited edits (Text/Photos)",
      ],
    },
    contact: {
      title: "Contact Me",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send",
      success: "Message sent successfully!",
    },
  },
  DE: {
    heroTitle: "LUMZ",
    heroSub: "Ihr lokaler Digitalpartner in Luxemburg.",
    cta: "Projekt starten",
    services: "Leistungen",
    tarifs: "Preise",
    recommendedBadge: "Empfohlen",
    serviceList: [
      {
        title: "Performance & Design",
        desc: "Ultraschnelle, moderne und mobil-optimierte Websites.",
      },
      {
        title: "Mehrsprachige Expertise",
        desc: "FR / EN / DE / LU Setup für den lokalen Markt.",
      },
    ],
    pricing: [
      {
        name: "Start",
        price: "450€",
        ideal: "Handwerker & Freiberufler. Ideal für den schnellen Start.",
        features: [
          "Geliefert in 7 Tagen",
          "Ultraschnelle One-Page-Website",
          "Lokale SEO-Optimierung",
          "Volles Eigentum (Site & Domain)",
          "Lokaler Support (Luxemburg)",
        ],
      },
      {
        name: "Business",
        price: "1250€",
        ideal: "Der Standard für luxemburgische KMU.",
        features: [
          "Mehrseitig (bis zu 5)",
          "Mehrsprachig (FR/EN/DE/LU)",
          "Erweitertes Kontaktformular",
          "Volles Eigentum (Site & Domain)",
          "Lokaler Support (Luxemburg)",
        ],
      },
      {
        name: "Custom",
        price: "Auf Anfrage",
        ideal: "Spezifische Projekte und Business-Tools.",
        features: [
          "E-Commerce & Zahlungen",
          "Buchungssystem",
          "Individuelle Datenbank",
          "Volles Eigentum (Site & Domain)",
          "Lokaler Support (Luxemburg)",
        ],
      },
    ],
    maintenance: {
      title: "Sorglos- & Wartungspaket",
      price: "29€ / Monat",
      features: [
        "Sicherheits-Updates",
        "Tägliche Backups",
        "Unbegrenzte Änderungen (Text/Bild)",
      ],
    },
    contact: {
      title: "Kontaktieren Sie mich",
      name: "Name",
      email: "Email",
      message: "Nachricht",
      send: "Senden",
      success: "Nachricht erfolgreich gesendet!",
    },
  },
  LU: {
    heroTitle: "LUMZ",
    heroSub: "Ären digitale Partner hei zu Lëtzebuerg.",
    cta: "E Projet starten",
    services: "Servicer",
    tarifs: "Präisser",
    recommendedBadge: "Recommandéiert",
    serviceList: [
      {
        title: "Performance & Design",
        desc: "Ultraschnell an elegant Websäiten, optimiséiert fir Mobile.",
      },
      {
        title: "Méisproocheg Expertise",
        desc: "FR / EN / DE / LU Setup fir de lëtzebuerger Maart.",
      },
    ],
    pricing: [
      {
        name: "Start",
        price: "450€",
        ideal: "Handwierker & Freelancer. Ideal fir séier unzefänken.",
        features: [
          "Geliwwert a 7 Deeg",
          "Ultraschnell One-Page Websäit",
          "Lokale SEO Setup",
          "Voll Proprietéit (Site & Domain)",
          "Support vu hei (Lëtzebuerg)",
        ],
      },
      {
        name: "Business",
        price: "1250€",
        ideal: "De Standard fir lëtzebuerger Betriber (PME).",
        features: [
          "Méisäiteg (bis zu 5 Säiten)",
          "Méisproocheg (FR/EN/DE/LU)",
          "Erweiderten Kontaktformular",
          "Voll Proprietéit (Site & Domain)",
          "Support vu hei (Lëtzebuerg)",
        ],
      },
      {
        name: "Custom",
        price: "Op Devis",
        ideal: "Spezifesch Projeten an Business Tools.",
        features: [
          "E-Commerce & Bezuelungen",
          "Booking System",
          "Datebank op Mooss",
          "Voll Proprietéit (Site & Domain)",
          "Support vu hei (Lëtzebuerg)",
        ],
      },
    ],
    maintenance: {
      title: "Sérénité & Evolutioun Pack",
      price: "29€ / Mount",
      features: [
        "Sécherheets-Updates",
        "Deeglech Backups",
        "Onlimitéiert Ännerungen (Text/Foto)",
      ],
    },
    contact: {
      title: "Kontaktéiert mech",
      name: "Numm",
      email: "Email",
      message: "Noricht",
      send: "Schécken",
      success: "Noricht gouf geschéckt!",
    },
  },
};
