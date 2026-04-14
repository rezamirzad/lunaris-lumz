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
    heroSub: "Votre site web professionnel à prix abordable.",
    cta: "Démarrer un projet",
    services: "Services",
    tarifs: "Nos Forfaits",
    serviceList: [
      {
        title: "Design Moderne",
        desc: "Interfaces épurées et adaptées aux mobiles.",
      },
      {
        title: "Multilingue",
        desc: "Configuration FR / EN / DE / LU incluse.",
      },
    ],
    pricing: [
      {
        name: "Présence",
        price: "450€ - 600€",
        ideal: "Artisans, professions libérales, petits commerces.",
        features: [
          "Site One-page",
          "Design Mobile",
          "Domaine & Email Pro",
          "SEO Local de base",
        ],
      },
      {
        name: "Vitrine",
        price: "850€ - 1200€",
        ideal: "Petites entreprises ou associations.",
        features: [
          "3 à 5 pages",
          "Multilingue",
          "Formulaire personnalisé",
          "Formation 30 min",
        ],
      },
      {
        name: "Sur Mesure",
        price: "Dès 1500€",
        ideal: "Projets spécifiques et avancés.",
        features: [
          "E-commerce",
          "Système de réservation",
          "Base de données",
          "Espace membre",
        ],
      },
    ],
    maintenance: {
      title: "Option Maintenance Sérénité",
      price: "20€ - 30€ / mois",
      features: [
        "Mises à jour sécurité",
        "Sauvegardes régulières",
        "Modifs texte (15 min/mois)",
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
    heroSub: "Your professional website at an affordable price.",
    cta: "Start a project",
    services: "Services",
    tarifs: "Our Plans",
    serviceList: [
      {
        title: "Modern Design",
        desc: "Sleek interfaces, fully mobile-responsive.",
      },
      {
        title: "Multilingual",
        desc: "FR / EN / DE / LU configuration included.",
      },
    ],
    pricing: [
      {
        name: "Presence",
        price: "450€ - 600€",
        ideal: "Craftsmen, freelancers, small shops.",
        features: [
          "One-page site",
          "Mobile Design",
          "Domain & Pro Email",
          "Basic Local SEO",
        ],
      },
      {
        name: "Showcase",
        price: "850€ - 1200€",
        ideal: "Small businesses or associations.",
        features: [
          "3 to 5 pages",
          "Multilingual",
          "Custom form",
          "30 min training",
        ],
      },
      {
        name: "Custom",
        price: "From 1500€",
        ideal: "Specific and advanced projects.",
        features: ["E-commerce", "Booking system", "Database", "Member area"],
      },
    ],
    maintenance: {
      title: "Serenity Maintenance Option",
      price: "20€ - 30€ / month",
      features: [
        "Security updates",
        "Regular backups",
        "Text updates (15 min/month)",
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
    heroSub: "Ihre professionelle Website zum fairen Preis.",
    cta: "Projekt starten",
    services: "Leistungen",
    tarifs: "Preise",
    serviceList: [
      {
        title: "Modernes Design",
        desc: "Klare Interfaces, optimiert für Mobilgeräte.",
      },
      {
        title: "Mehrsprachig",
        desc: "FR / EN / DE / LU Konfiguration inklusive.",
      },
    ],
    pricing: [
      {
        name: "Präsenz",
        price: "450€ - 600€",
        ideal: "Handwerker, Freiberufler, kleine Läden.",
        features: [
          "One-Page-Website",
          "Mobile Design",
          "Domain & Pro-E-Mail",
          "Basis Lokales SEO",
        ],
      },
      {
        name: "Vitrine",
        price: "850€ - 1200€",
        ideal: "Kleine Unternehmen oder Vereine.",
        features: [
          "3 bis 5 Seiten",
          "Mehrsprachig",
          "Individuelles Formular",
          "30 Min. Schulung",
        ],
      },
      {
        name: "Individuell",
        price: "Ab 1500€",
        ideal: "Spezifische und fortgeschrittene Projekte.",
        features: [
          "E-Commerce",
          "Buchungssystem",
          "Datenbank",
          "Mitgliederbereich",
        ],
      },
    ],
    maintenance: {
      title: "Wartungsoption 'Serenity'",
      price: "20€ - 30€ / Monat",
      features: [
        "Sicherheits-Updates",
        "Regelmäßige Backups",
        "Textanpassungen (15 Min/Monat)",
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
    heroSub: "Är professionell Websäit zu engem bezuelbare Präis.",
    cta: "E Projet starten",
    services: "Servicer",
    tarifs: "Präisser",
    serviceList: [
      {
        title: "Modernen Design",
        desc: "Elegant an optimiséiert fir Smartphones.",
      },
      { title: "Méisproocheg", desc: "FR / EN / DE / LU Setup abegraff." },
    ],
    pricing: [
      {
        name: "Presenz",
        price: "450€ - 600€",
        ideal: "Handwierker, Freiberufler, kleng Geschäfter.",
        features: [
          "One-page Site",
          "Mobile Design",
          "Domain & Pro Email",
          "Basis Lokale SEO",
        ],
      },
      {
        name: "Vitrine",
        price: "850€ - 1200€",
        ideal: "Kleng Betriber oder Veräiner.",
        features: [
          "3 bis 5 Säiten",
          "Méisproocheg",
          "Custom Formular",
          "30 Minutten Training",
        ],
      },
      {
        name: "Op Mooss",
        price: "Vun 1500€",
        ideal: "Spezifesch an fortgeschratt Projeten.",
        features: [
          "E-commerce",
          "Booking System",
          "Datebank",
          "Member Beräich",
        ],
      },
    ],
    maintenance: {
      title: "Maintenance Optioun 'Serenity'",
      price: "20€ - 30€ / Mount",
      features: [
        "Sécherheets-Updates",
        "Regelméisseg Backups",
        "Text Ännerungen (15 Min/Mount)",
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
