/**
 * =============================================================================
 * CLIENT CONFIG — SINGLE SOURCE OF TRUTH
 * =============================================================================
 * Clínica Dental Adanze — Tegucigalpa, Honduras
 *
 * Edit THIS FILE ONLY when customizing practice content.
 * Empty strings / empty arrays hide the related UI automatically.
 *
 * IMAGE ASSETS — drop files under /assets/images/ (see comments below).
 * =============================================================================
 */

const config = {
  // ---------------------------------------------------------------------------
  // SITE DEFAULTS
  // ---------------------------------------------------------------------------
  defaultLanguage: "es",

  // OPTIONAL — overrides auto-generated meta description (used in <meta> + SEO)
  metadata: {
    es: "Clínica Dental Adanze en Plaza Savannah, Tegucigalpa — odontología integral para toda la familia. Agenda tu cita hoy.",
    en: "Clínica Dental Adanze at Plaza Savannah, Tegucigalpa — comprehensive dentistry for the whole family. Book your appointment today.",
  },

  // ---------------------------------------------------------------------------
  // PRACTICE INFO
  // ---------------------------------------------------------------------------
  practice: {
    name: "Clínica Dental Adanze",

    tagline: {
      en: "Comprehensive Dentistry Clinic",
      es: "Clínica de Odontología Integral",
    },

    phone: "+504 9420-2011",
    phoneTel: "50494202011",

    address: {
      street: "Blvd. Morazán, Plaza Savannah",
      city: "Tegucigalpa",
      state: "Francisco Morazán, Honduras",
      zip: "",
      // Pin for embedded map (lat/lng from Google Maps link)
      mapsCoords: { lat: 14.1009319, lng: -87.183418, zoom: 16 },
      // Directions button opens this link
      mapsLink: "https://maps.app.goo.gl/gJWWfuv2JzjDZVQMA",
      // Fallback search query if coords are omitted
      mapsQuery: "",
    },

    hours: {
      mon: "8:00 AM – 6:00 PM",
      tue: "8:00 AM – 6:00 PM",
      wed: "8:00 AM – 6:00 PM",
      thu: "8:00 AM – 6:00 PM",
      fri: "8:00 AM – 6:00 PM",
      sat: "8:00 AM – 6:00 PM",
      sun: "", // Dom — Cerrado
    },

    // OPTIONAL — leave blank to hide email in footer
    email: "",

    // OPTIONAL — leave blank to hide trust-bar stats (entire bar hidden when all empty)
    yearsInPractice: "",
    patientRating: "",
  },

  // ---------------------------------------------------------------------------
  // BRANDING
  // ---------------------------------------------------------------------------
  branding: {
    // OPTIONAL — leave blank to use template default colors from styles.css
    primaryColor: "",
    accentColor: "",
    primaryDark: "",
    softBg: "",
    logoUrl: "assets/images/Logo.jpeg",
    heroImageUrl: "assets/images/hero.jpeg",
  },

  // ---------------------------------------------------------------------------
  // UI COPY (labels, nav, section headers, buttons) — per language
  // ---------------------------------------------------------------------------
  ui: {
    en: {
      nav: {
        home: "Home",
        services: "Services",
        dentists: "Our Team",
        gallery: "Gallery",
        testimonials: "Reviews",
        financing: "Financing",
        location: "Location",
        book: "Book Appointment",
        openMenu: "Open menu",
        closeMenu: "Close menu",
      },
      hero: {
        badge: "New Patients Welcome",
        cta: "Book Appointment",
      },
      trust: {
        years: "Years in practice",
        rating: "Patient rating",
        licensed: "Licensed & certified",
      },
      sections: {
        services: "Our Services",
        servicesLead: "Comprehensive care for every smile.",
        dentists: "Meet Our Team",
        dentistsLead: "Experienced specialists dedicated to your oral health.",
        gallery: "Smile Gallery",
        galleryLead: "Real results from patients like you.",
        testimonials: "What Patients Say",
        testimonialsLead: "Trusted by families in our community.",
        financing: "Financing",
        financingLead: "Flexible payment options to fit your budget.",
        location: "Visit Us",
        locationLead: "Plaza Savannah, Tegucigalpa — we look forward to seeing you.",
      },
      services: {
        expand: "Learn more",
        collapse: "Show less",
      },
      location: {
        hours: "Hours",
        call: "Call Us",
        directions: "Get Directions",
        mapInteract: "Tap to interact with the map",
        closed: "Closed",
        days: {
          mon: "Monday",
          tue: "Tuesday",
          wed: "Wednesday",
          thu: "Thursday",
          fri: "Friday",
          sat: "Saturday",
          sun: "Sunday",
        },
      },
      stickyBar: {
        cta: "Book Appointment",
      },
      footer: {
        contact: "Contact",
        hours: "Hours",
        follow: "Follow Us",
        rights: "All rights reserved.",
        developedBy: "Developed by",
      },
      langToggle: {
        label: "Language",
        en: "EN",
        es: "ES",
      },
    },
    es: {
      nav: {
        home: "Inicio",
        services: "Servicios",
        dentists: "Nuestro Equipo",
        gallery: "Galería",
        testimonials: "Opiniones",
        financing: "Financiamiento",
        location: "Ubicación",
        book: "Agendar Cita",
        openMenu: "Abrir menú",
        closeMenu: "Cerrar menú",
      },
      hero: {
        badge: "Nuevos Pacientes Bienvenidos",
        cta: "Agendar Cita",
      },
      trust: {
        years: "Años de experiencia",
        rating: "Calificación de pacientes",
        licensed: "Licenciados y certificados",
      },
      sections: {
        services: "Nuestros Servicios",
        servicesLead: "Cuidado integral para cada sonrisa.",
        dentists: "Conoce a Nuestro Equipo",
        dentistsLead: "Especialistas con experiencia dedicadas a tu salud bucal.",
        gallery: "Galería de Sonrisas",
        galleryLead: "Resultados reales de pacientes como tú.",
        testimonials: "Lo Que Dicen Nuestros Pacientes",
        testimonialsLead: "La confianza de familias de nuestra comunidad.",
        financing: "Financiamiento",
        financingLead: "Opciones de pago flexibles que se adaptan a tu presupuesto.",
        location: "Visítanos",
        locationLead: "Plaza Savannah, Tegucigalpa — te esperamos con gusto.",
      },
      services: {
        expand: "Ver más",
        collapse: "Ver menos",
      },
      location: {
        hours: "Horario",
        call: "Llámanos",
        directions: "Cómo Llegar",
        mapInteract: "Toca para interactuar con el mapa",
        closed: "Cerrado",
        days: {
          mon: "Lunes",
          tue: "Martes",
          wed: "Miércoles",
          thu: "Jueves",
          fri: "Viernes",
          sat: "Sábado",
          sun: "Domingo",
        },
      },
      stickyBar: {
        cta: "Agendar Cita",
      },
      footer: {
        contact: "Contacto",
        hours: "Horario",
        follow: "Síguenos",
        rights: "Todos los derechos reservados.",
        developedBy: "Desarrollado por",
      },
      langToggle: {
        label: "Idioma",
        en: "EN",
        es: "ES",
      },
    },
  },

  // ---------------------------------------------------------------------------
  // DENTISTS
  // ---------------------------------------------------------------------------
  dentists: [
    {
      name: "Dra. Nadyne Reyes",
      title: {
        en: "Specialist in Orthopedics and Maxillofacial Orthodontics",
        es: "Especialista en ortopedia y Ortodoncia Maxilofacial",
      },
      bio: {
        en: "Dr. Reyes specializes in orthodontic and maxillofacial care, helping patients achieve balanced, healthy smiles with personalized treatment plans.",
        es: "La Dra. Reyes se especializa en ortopedia y ortodoncia maxilofacial, ayudando a los pacientes a lograr sonrisas equilibradas y saludables con planes personalizados.",
      },
      photoUrl: "assets/images/dentists/nadyne-reyes.jpeg",
    },
    {
      name: "Dra. Jessica Flores",
      title: {
        en: "Dental Surgeon",
        es: "Cirujano dentista",
      },
      bio: {
        en: "Dr. Flores provides comprehensive dental surgery and restorative care with a gentle, patient-focused approach.",
        es: "La Dra. Flores ofrece cirugía dental integral y cuidado restaurativo con un enfoque gentil y centrado en el paciente.",
      },
      photoUrl: "assets/images/dentists/jessica-flores.jpeg",
    },
    {
      name: "Dra. Florencia Andino",
      title: {
        en: "Endodontics Specialist",
        es: "Especialista en Endodoncia",
      },
      bio: {
        en: "Dr. Andino focuses on endodontic treatments to relieve pain and preserve natural teeth whenever possible.",
        es: "La Dra. Andino se especializa en tratamientos de endodoncia para aliviar el dolor y preservar los dientes naturales siempre que sea posible.",
      },
      photoUrl: "assets/images/dentists/florencia-andino.jpeg",
    },
    {
      name: "Dra. Zury Flores",
      title: {
        en: "MD · Specialist in Aesthetic, Regenerative & Anti-Aging Medicine",
        es: "Dra. en medicina y cirugía · Especialista en Medicina Estética, Regenerativa y Anti envejecimiento",
      },
      bio: {
        en: "Dr. Zury Flores combines medical and surgical expertise with aesthetic and regenerative treatments for natural, lasting results.",
        es: "La Dra. Zury Flores combina experiencia médica y quirúrgica con tratamientos estéticos y regenerativos para resultados naturales y duraderos.",
      },
      photoUrl: "assets/images/dentists/zury-flores.jpeg",
    },
  ],

  // ---------------------------------------------------------------------------
  // SERVICES
  // ---------------------------------------------------------------------------
  services: [
    {
      name: { en: "General Dentistry", es: "Odontología General" },
      description: {
        en: "Preventive exams, cleanings, fillings, and everyday care to keep your whole family's smiles healthy.",
        es: "Exámenes preventivos, limpiezas, resinas y cuidado diario para mantener sonrisas sanas en toda la familia.",
      },
      icon: "general",
    },
    {
      name: { en: "Orthodontics", es: "Ortodoncia" },
      description: {
        en: "Braces and aligners to straighten teeth and correct bite issues — tailored plans for children and adults.",
        es: "Brackets y alineadores para enderezar dientes y corregir la mordida — planes personalizados para niños y adultos.",
      },
      icon: "aligners",
    },
    {
      name: { en: "Oral Surgery", es: "Cirugía Oral" },
      description: {
        en: "Extractions, wisdom teeth, and surgical procedures performed with care and clear follow-up guidance.",
        es: "Extracciones, muelas del juicio y procedimientos quirúrgicos con cuidado y seguimiento claro.",
      },
      icon: "implants",
    },
    {
      name: { en: "Endodontics", es: "Endodoncia" },
      description: {
        en: "Root canal therapy and pulp treatments to save infected teeth and relieve discomfort.",
        es: "Tratamientos de conducto y terapia pulpar para salvar dientes infectados y aliviar el malestar.",
      },
      icon: "cleaning",
    },
    {
      name: { en: "Cosmetic Dentistry", es: "Odontología Cosmética" },
      description: {
        en: "Whitening, veneers, and aesthetic treatments designed for a natural, confident smile.",
        es: "Blanqueamiento, carillas y tratamientos estéticos diseñados para una sonrisa natural y segura.",
      },
      icon: "cosmetic",
    },
  ],

  // ---------------------------------------------------------------------------
  // TESTIMONIALS — empty array hides the section
  // ---------------------------------------------------------------------------
  testimonials: [],

  // ---------------------------------------------------------------------------
  // FINANCING IMAGES
  // ---------------------------------------------------------------------------
  financingImages: [
    {
      src: "assets/images/financing/Bac.png",
      alt: {
        en: "BAC Credomatic financing",
        es: "Financiamiento BAC Credomatic",
      },
    },
    {
      src: "assets/images/financing/Ficohsa.png",
      alt: {
        en: "Ficohsa financing",
        es: "Financiamiento Ficohsa",
      },
    },
  ],

  // ---------------------------------------------------------------------------
  // SMILE GALLERY
  // ---------------------------------------------------------------------------
  gallery: [
    "assets/images/gallery/IMG_0348.jpeg",
    "assets/images/gallery/IMG_0349.jpeg",
    "assets/images/gallery/IMG_0350.jpeg",
    "assets/images/gallery/IMG_0351.jpeg",
    "assets/images/gallery/IMG_0352.jpeg",
    "assets/images/gallery/IMG_0353.jpeg",
  ],

  // ---------------------------------------------------------------------------
  // SOCIAL LINKS — leave blank to hide that icon
  // ---------------------------------------------------------------------------
  socials: {
    instagram: "https://www.instagram.com/dentaladanze",
    facebook: "https://www.facebook.com/DentalAdanze",
  },
};

// Expose globally for app.js (no bundler / no modules required)
window.SITE_CONFIG = config;
