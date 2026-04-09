import { useState } from "react";
import { useLang } from "@/hooks/use-lang";
import { translations } from "@/lib/translations";
import { X } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const WHATSAPP_URL =
  "https://wa.me/352661114723?text=Bonjour%2C%20je%20souhaite%20prendre%20rendez-vous%20et%20avoir%20des%20informations%20sur%20vos%20prestations.";

const Services = () => {
  const { lang } = useLang();
  const services = translations.services[lang];
  const intro = translations.servicesIntro[lang];
  const discoverLabel = translations.discover[lang];
  const bookLabel = translations.bookBtn[lang];
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const { ref: introRef, visible: introVisible } = useScrollReveal();

  return (
    <section id="services" className="py-24 md:py-32 section-gradient-alt">
      <div className="max-w-4xl mx-auto px-6">
        <div
          ref={introRef}
          className={`transition-all duration-1000 ${introVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="font-display text-lg md:text-3xl font-light text-foreground text-center mb-20">
            {intro}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-1 md:space-y-12 md:gap-0">
          {services.map((s, i) => (
            <ServiceItem
              key={s.name}
              name={s.name}
              short={s.short}
              index={i}
              discoverLabel={discoverLabel}
              bookLabel={bookLabel}
              onDiscover={() => setOpenIdx(i)}
              whatsappUrl={WHATSAPP_URL}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {openIdx !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 backdrop-blur-sm p-6"
          onClick={() => setOpenIdx(null)}
        >
          <div
            className="bg-background max-w-lg w-full p-10 md:p-14 relative animate-fade-in-scale shadow-2xl"
            style={{ boxShadow: "0 20px 60px -12px hsl(32 40% 72% / 0.2)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpenIdx(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={20} />
            </button>
            <h3 className="font-display text-2xl md:text-3xl font-light text-foreground mb-6">
              {services[openIdx].name}
            </h3>
            <p className="font-body text-sm leading-relaxed text-muted-foreground mb-8">
              {services[openIdx].description}
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-block"
            >
              {bookLabel}
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

interface ServiceItemProps {
  name: string;
  short: string;
  index: number;
  discoverLabel: string;
  bookLabel: string;
  onDiscover: () => void;
  whatsappUrl: string;
}

const ServiceItem = ({ name, short, discoverLabel, bookLabel, onDiscover, whatsappUrl }: ServiceItemProps) => {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={`bg-card/60 md:bg-transparent border border-gold/15 md:border-0 md:border-b md:border-gold/20 rounded-lg md:rounded-none p-3 md:p-0 md:pb-10 transition-all duration-700 active:scale-[0.97] md:active:scale-100 shadow-sm md:shadow-none active:shadow-lg md:active:shadow-none flex flex-row md:flex-col items-center md:items-start gap-3 md:gap-0 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      <div className="flex-1 min-w-0">
        <h3 className="font-display text-base md:text-2xl font-light text-foreground mb-0.5 md:mb-2 text-left">
          {name}
        </h3>
        <p className="font-body text-xs md:text-sm text-muted-foreground text-left line-clamp-2 md:line-clamp-none md:mb-6">
          {short}
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-1 md:gap-4 flex-shrink-0">
        <button
          onClick={onDiscover}
          className="btn-outline-gold text-[8px] md:text-xs px-2 py-1 md:px-6 md:py-3 active:scale-95 transition-transform whitespace-nowrap"
        >
          {discoverLabel}
        </button>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold text-[8px] md:text-xs px-2 py-1 md:px-10 md:py-5 active:scale-95 transition-transform text-center whitespace-nowrap"
        >
          {bookLabel}
        </a>
      </div>
    </div>
  );
};

export default Services;
