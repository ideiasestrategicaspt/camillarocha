import { useLang } from "@/hooks/use-lang";
import { translations } from "@/lib/translations";
import { MapPin, Clock, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/352XXXXXXXXX?text=Bonjour%2C%20je%20souhaite%20prendre%20rendez-vous%20et%20avoir%20des%20informations%20sur%20vos%20prestations.";

const INSTAGRAM_URL = "https://instagram.com/camillarochabrows";

const Contact = () => {
  const { lang } = useLang();
  const loc = translations.location[lang];
  const cta = translations.finalCta[lang];

  return (
    <section id="contact" className="bg-warm-alt">
      {/* Location */}
      <div className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-light text-foreground text-center mb-16">
            {loc.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-muted-foreground mt-1 flex-shrink-0" />
                <p className="font-body text-sm text-muted-foreground">{loc.address}</p>
              </div>
              <div className="flex items-start gap-4">
                <Clock size={18} className="text-muted-foreground mt-1 flex-shrink-0" />
                <div>
                  <p className="font-body text-xs tracking-[0.15em] uppercase text-foreground mb-2">{loc.hoursTitle}</p>
                  <p className="font-body text-sm text-muted-foreground whitespace-pre-line">{loc.hours}</p>
                </div>
              </div>
              <div className="flex gap-6 pt-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-body text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>

            <div className="aspect-[4/3] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2585.4!2d6.1266!3d49.6167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDM3JzAwLjAiTiA2wrAwNycwMC4wIkU!5e0!3m2!1sfr!2slu!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Camilla Rocha Brows Location"
                className="grayscale"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-24 md:py-32 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-10">
          {cta.title}
        </h2>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-body text-xs tracking-[0.2em] uppercase bg-primary text-primary-foreground px-10 py-4 hover:opacity-90 transition-opacity"
        >
          {cta.cta}
        </a>
      </div>

      {/* Footer */}
      <div className="border-t border-border py-8 text-center">
        <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
          © {new Date().getFullYear()} Camilla Rocha Brows
        </p>
      </div>
    </section>
  );
};

export default Contact;
