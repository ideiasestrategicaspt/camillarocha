export type Lang = "fr" | "en";

export const translations = {
  nav: {
    fr: { services: "Prestations", results: "Résultats", about: "À propos", contact: "Contact" },
    en: { services: "Services", results: "Results", about: "About", contact: "Contact" },
  },
  hero: {
    fr: {
      headline: "Sourcils naturels, précis et parfaitement adaptés à votre visage",
      sub: "Spécialiste en restructuration et correction des sourcils",
      experience: "Plus de 6 ans d'expérience",
      cta: "Prendre rendez-vous",
      badge1: "Expertise",
      badge2: "Naturalité",
      badge3: "Précision",
    },
    en: {
      headline: "Natural, precise eyebrows perfectly adapted to your face",
      sub: "Specialist in eyebrow restructuring and correction",
      experience: "Over 6 years of experience",
      cta: "Book an appointment",
      badge1: "Expertise",
      badge2: "Naturalness",
      badge3: "Precision",
    },
  },
  about: {
    fr: {
      text1: "Camilla Rocha est spécialiste en sourcils et micropigmentation naturelle depuis plus de 6 ans.",
      text2: "Son approche est basée sur la précision, la correction et l'adaptation parfaite à chaque visage.",
    },
    en: {
      text1: "Camilla Rocha has been a specialist in eyebrows and natural micropigmentation for over 6 years.",
      text2: "Her approach is based on precision, correction, and perfect adaptation to each face.",
    },
  },
  impact: {
    fr: "Chaque sourcil est unique. Mon travail est de révéler le vôtre.",
    en: "Every eyebrow is unique. My work is to reveal yours.",
  },
  differentiator: {
    fr: {
      title: "Une approche naturelle et personnalisée",
      text: "Chaque sourcil est étudié pour respecter l'harmonie du visage et révéler un résultat naturel, équilibré et élégant.",
    },
    en: {
      title: "A natural and personalized approach",
      text: "Each eyebrow is studied to respect the harmony of the face and reveal a natural, balanced, and elegant result.",
    },
  },
  servicesIntro: {
    fr: "Des techniques adaptées à chaque visage, pour un résultat naturel et équilibré",
    en: "Techniques adapted to each face, for a natural and balanced result",
  },
  services: {
    fr: [
      {
        name: "Nanoblading",
        short: "Poils ultra-fins tracés à la main pour un effet hyper naturel",
        description: "Le Nanoblading est une technique de micropigmentation manuelle qui consiste à tracer des poils ultra-fins dans l'épiderme à l'aide d'une lame nano. Chaque trait est dessiné individuellement pour reproduire l'apparence d'un poil naturel, en suivant le sens de pousse et la densité existante. Le résultat est un sourcil réaliste, précis et parfaitement adapté au visage. Idéal pour les peaux normales à sèches, cette méthode offre un rendu discret et élégant, sans effet maquillé.",
      },
      {
        name: "Soft Shading",
        short: "Effet poudré doux pour un résultat subtil et élégant",
        description: "Le Soft Shading est une technique de micropigmentation réalisée à la machine, qui dépose de fins points de pigment pour créer un effet poudré doux et homogène. Le rendu imite un maquillage léger et naturel, avec plus de densité visuelle que le Nanoblading. Cette technique est particulièrement adaptée aux peaux mixtes, grasses ou matures, et convient à celles qui recherchent un résultat subtil mais défini.",
      },
      {
        name: "Technique Hybride",
        short: "Combinaison de poils et ombrage pour un résultat complet",
        description: "La technique hybride combine le tracé de poils fins (Nanoblading) avec un léger ombrage en fond (Soft Shading), pour un résultat à la fois naturel et structuré. Elle permet de recréer de la matière là où les sourcils sont clairsemés, tout en ajoutant de la profondeur et de la définition. C'est la technique idéale pour obtenir un sourcil complet, équilibré et élégant, adapté à tous les types de peau.",
      },
      {
        name: "Design de Sourcils",
        short: "Restructuration personnalisée selon la morphologie du visage",
        description: "Le design de sourcils est une étude morphologique complète réalisée avant toute intervention. Camilla analyse les proportions du visage, la symétrie, le regard et les traits pour définir la forme, l'épaisseur et la courbure idéales des sourcils. Cette étape est essentielle pour garantir un résultat harmonieux, naturel et parfaitement adapté à chaque visage. Le design est réalisé au crayon, ajusté avec la cliente, et sert de base pour toute prestation de micropigmentation.",
      },
      {
        name: "Henné Sourcils",
        short: "Teinture naturelle pour des sourcils définis et structurés",
        description: "Le Henné sourcils est une coloration semi-permanente à base de henné naturel, qui teinte à la fois les poils et la peau pour un effet de remplissage visible et naturel. Il permet de redessiner la forme du sourcil, de combler les zones clairsemées et d'intensifier la couleur. Le résultat dure entre 2 et 4 semaines et constitue une alternative douce pour celles qui souhaitent structurer leurs sourcils sans micropigmentation.",
      },
      {
        name: "Brow Lamination",
        short: "Lissage et mise en forme longue durée des sourcils",
        description: "Le Brow Lamination est un traitement semi-permanent qui repositionne les poils du sourcil dans le sens souhaité, créant un effet lissé, volumineux et structuré. Il est idéal pour discipliner les poils rebelles, combler visuellement les zones éparses et donner un aspect soigné et uniforme. Le résultat dure environ 6 à 8 semaines. Peut être combiné avec une teinture pour un effet encore plus défini.",
      },
      {
        name: "Lash Lift",
        short: "Rehaussement naturel des cils pour un regard ouvert",
        description: "Le Lash Lift est un soin semi-permanent qui rehausse les cils naturels depuis la racine, leur donnant une courbure élégante et un effet d'ouverture du regard. Le traitement respecte la structure naturelle du cil et ne nécessite aucune extension. Le résultat dure entre 6 et 8 semaines. Peut être accompagné d'une teinture pour intensifier l'effet.",
      },
    ],
    en: [
      {
        name: "Nanoblading",
        short: "Ultra-fine hair strokes drawn by hand for a hyper-natural effect",
        description: "Nanoblading is a manual micropigmentation technique that involves drawing ultra-fine hair strokes into the epidermis using a nano blade. Each stroke is individually drawn to reproduce the appearance of natural hair, following the direction of growth and existing density. The result is a realistic, precise eyebrow perfectly adapted to the face. Ideal for normal to dry skin, this method offers a discreet and elegant finish without a makeup effect.",
      },
      {
        name: "Soft Shading",
        short: "Soft powdered effect for a subtle and elegant result",
        description: "Soft Shading is a micropigmentation technique performed with a machine, depositing fine dots of pigment to create a soft, homogeneous powdered effect. The finish imitates light, natural makeup with more visual density than Nanoblading. This technique is particularly suited to combination, oily, or mature skin and is ideal for those seeking a subtle yet defined result.",
      },
      {
        name: "Hybrid Technique",
        short: "Combination of hair strokes and shading for a complete result",
        description: "The hybrid technique combines fine hair stroke drawing (Nanoblading) with a light background shading (Soft Shading), for a result that is both natural and structured. It recreates volume where eyebrows are sparse while adding depth and definition. It is the ideal technique for achieving a complete, balanced, and elegant eyebrow, suitable for all skin types.",
      },
      {
        name: "Eyebrow Design",
        short: "Personalized restructuring according to facial morphology",
        description: "Eyebrow design is a complete morphological study carried out before any procedure. Camilla analyzes facial proportions, symmetry, gaze, and features to define the ideal shape, thickness, and curvature of the eyebrows. This step is essential to guarantee a harmonious, natural result perfectly adapted to each face. The design is drawn with pencil, adjusted with the client, and serves as the basis for any micropigmentation service.",
      },
      {
        name: "Henna Brows",
        short: "Natural tinting for defined and structured eyebrows",
        description: "Henna Brows is a semi-permanent coloring based on natural henna that tints both hair and skin for a visible, natural filling effect. It helps reshape the eyebrow, fill sparse areas, and intensify color. The result lasts between 2 and 4 weeks and is a gentle alternative for those who want to structure their eyebrows without micropigmentation.",
      },
      {
        name: "Brow Lamination",
        short: "Long-lasting smoothing and shaping of eyebrows",
        description: "Brow Lamination is a semi-permanent treatment that repositions eyebrow hairs in the desired direction, creating a smoothed, voluminous, and structured effect. It is ideal for taming unruly hairs, visually filling sparse areas, and giving a groomed, uniform appearance. The result lasts approximately 6 to 8 weeks. Can be combined with tinting for an even more defined effect.",
      },
      {
        name: "Lash Lift",
        short: "Natural lash lift for an open, wide-eyed look",
        description: "Lash Lift is a semi-permanent treatment that curls natural lashes from the root, giving them an elegant curve and an eye-opening effect. The treatment respects the natural lash structure and requires no extensions. The result lasts between 6 and 8 weeks. Can be accompanied by tinting to intensify the effect.",
      },
    ],
  },
  results: {
    fr: "Résultats naturels",
    en: "Natural results",
  },
  location: {
    fr: {
      title: "Localisation",
      address: "1, Rue d'Eich, L-1461 Eich, Luxembourg",
      hours: "Mardi à vendredi : 12h – 19h\nSamedi : 10h – 18h",
      hoursTitle: "Horaires",
    },
    en: {
      title: "Location",
      address: "1, Rue d'Eich, L-1461 Eich, Luxembourg",
      hours: "Tuesday to Friday: 12pm – 7pm\nSaturday: 10am – 6pm",
      hoursTitle: "Hours",
    },
  },
  finalCta: {
    fr: { title: "Réservez votre rendez-vous", cta: "Prendre rendez-vous" },
    en: { title: "Book your appointment", cta: "Book an appointment" },
  },
  discover: { fr: "Découvrir", en: "Discover" },
  bookBtn: { fr: "Prendre rendez-vous", en: "Book an appointment" },
} as const;
