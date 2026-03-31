import { useState } from "react";
import { useLang } from "@/hooks/use-lang";
import { translations } from "@/lib/translations";
import { X } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/352XXXXXXXXX?text=Bonjour%2C%20je%20souhaite%20prendre%20rendez-vous%20et%20avoir%20des%20informations%20sur%20vos%20prestations.";

const Services = () => {
  const { lang } = useLang();
  const services = translations.services[lang];
  const intro = translations.servicesIntro[lang];
  const discoverLabel = translations.discover[lang];
  const bookLabel = translations.bookBtn[lang];
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 md:py-32 bg-warm-alt">
      <div className="max-w-4xl mx-auto px-6">
        <p className="font-display text-2xl md:text-3xl font-light text-foreground text-center mb-20">
          {intro}
        </p>

        <div className="space-y-12">
          {services.map((s, i) => (
            <div
              key={s.name}
              className="border-b border-border pb-10"
            >
              <h3 className="font-display text-xl md:text-2xl font-light text-foreground mb-2">
                {s.name}
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-6">
                {s.short}
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setOpenIdx(i)}
                  className="font-body text-xs tracking-[0.15em] uppercase border border-foreground text-foreground px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {discoverLabel}
                </button>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-xs tracking-[0.15em] uppercase bg-primary text-primary-foreground px-6 py-3 hover:opacity-90 transition-opacity"
                >
                  {bookLabel}
                </a>
              </div>
            </div>
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
            className="bg-background max-w-lg w-full p-10 md:p-14 relative animate-fade-in"
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
              className="inline-block font-body text-xs tracking-[0.2em] uppercase bg-primary text-primary-foreground px-8 py-4 hover:opacity-90 transition-opacity"
            >
              {bookLabel}
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
