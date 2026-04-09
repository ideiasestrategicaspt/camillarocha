import { useLang } from "@/hooks/use-lang";
import { translations } from "@/lib/translations";
import { MapPin, Clock, MessageCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const BOOKING_URL = "https://camilla-rocha-brows.salonized.com/widget_bookings/new";
const INSTAGRAM_URL = "https://instagram.com/camillarochabrows";

const Contact = () => {
  const { lang } = useLang();
  const loc = translations.location[lang];
  const cta = translations.finalCta[lang];
  const whatsappMsg = translations.whatsappMsg[lang];
  const whatsappUrl = `https://wa.me/352661114723?text=${encodeURIComponent(whatsappMsg)}`;

  const { ref: locRef, visible: locVisible } = useScrollReveal();
  const { ref: ctaRef, visible: ctaVisible } = useScrollReveal();

  return (
    <section id="contact" className="section-gradient-alt">
      {/* Location */}
      <div className="py-24 md:py-32">
        <div
          ref={locRef}
          className={`max-w-5xl mx-auto px-6 transition-all duration-1000 ${locVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="font-display text-3xl md:text-4xl font-light text-foreground text-center mb-4">
            {loc.title}
          </h2>
          <div className="mx-auto w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mb-16" />

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-gold mt-1 flex-shrink-0" />
                <p className="font-body text-sm text-muted-foreground">{loc.address}</p>
              </div>
              <div className="flex items-start gap-4">
                <Clock size={18} className="text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-body text-xs tracking-[0.15em] uppercase text-foreground mb-2">{loc.hoursTitle}</p>
                  <p className="font-body text-sm text-muted-foreground whitespace-pre-line">{loc.hours}</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 pt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-body tracking-[0.15em] uppercase text-muted-foreground hover:text-gold transition-colors text-sm"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-body tracking-[0.15em] uppercase text-muted-foreground hover:text-gold transition-colors text-sm"
                >
                  Instagram
                </a>
              </div>
            </div>

            <div className="aspect-[4/3] w-full rounded-sm overflow-hidden img-glow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2585.4!2d6.1266!3d49.6167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDM3JzAwLjAiTiA2wrAwNycwMC4wIkU!5e0!3m2!1sfr!2slu!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Camilla Rocha Brows Location"
                className=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div
        ref={ctaRef}
        className={`py-24 md:py-32 text-center transition-all duration-1000 ${ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-10 glow-text">
          {cta.title}
        </h2>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold inline-block"
        >
          {cta.cta}
        </a>
      </div>

      {/* Footer */}
      <div className="border-t border-gold/15 py-8 text-center">
        <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
          © {new Date().getFullYear()} Camilla Rocha Brows
        </p>
      </div>
    </section>
  );
};

export default Contact;
