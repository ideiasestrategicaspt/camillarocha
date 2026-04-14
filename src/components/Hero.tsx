import { useLang } from "@/hooks/use-lang";
import { translations } from "@/lib/translations";
import { MessageCircle } from "lucide-react";

const BOOKING_URL = "https://camilla-rocha-brows.salonized.com/widget_bookings/new";

const Hero = () => {
  const { lang } = useLang();
  const t = translations.hero[lang];
  const whatsappMsg = translations.whatsappMsg[lang];
  const whatsappUrl = `https://wa.me/352661114723?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <section id="top" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="/camilla-portrait.jpg"
          alt="Camilla Rocha"
          className="w-full h-full object-cover object-[center_15%] md:object-[center_25%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-gold/3 via-transparent to-gold/2" />
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

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-block"
            >
              {t.cta}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold inline-flex items-center gap-2 px-6 py-3"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
