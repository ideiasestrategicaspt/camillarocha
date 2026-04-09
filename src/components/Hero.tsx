import { useLang } from "@/hooks/use-lang";
import { translations } from "@/lib/translations";

const WHATSAPP_URL =
  "https://wa.me/352661114723?text=Bonjour%2C%20je%20souhaite%20prendre%20rendez-vous%20et%20avoir%20des%20informations%20sur%20vos%20prestations.";

const HERO_IMAGE_URL = "/camilla-portrait.jpg";

const Hero = () => {
  const { lang } = useLang();
  const t = translations.hero[lang];

  return (
    <section id="top" className="relative min-h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE_URL}
          alt="Camilla Rocha"
          className="w-full h-full object-cover object-[center_15%] md:object-[center_25%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        {/* Warm glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/3" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 md:py-40">
        <div className="max-w-xl animate-fade-in">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-foreground mb-6 glow-text drop-shadow-lg">
            {t.headline}
          </h1>
          <p className="font-body text-base md:text-lg tracking-wide text-foreground/80 mb-2 font-medium">
            {t.sub}
          </p>
          <p className="font-body text-sm md:text-base tracking-wide text-muted-foreground mb-10">
            {t.experience}
          </p>

          <div className="flex items-center gap-6 mb-10">
            {[t.badge1, t.badge2, t.badge3].map((b) => (
              <span
                key={b}
                className="font-body text-[10px] tracking-[0.25em] uppercase text-gold-dark border-b border-gold/40 pb-1"
              >
                {b}
              </span>
            ))}
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-block"
          >
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
