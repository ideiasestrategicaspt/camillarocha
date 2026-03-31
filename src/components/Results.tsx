import { useLang } from "@/hooks/use-lang";
import { translations } from "@/lib/translations";
import beforeAfter from "@/assets/before-after.jpeg";
import procedureDetail from "@/assets/procedure-detail.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Results = () => {
  const { lang } = useLang();
  const title = translations.results[lang];
  const { ref, visible } = useScrollReveal();

  return (
    <section id="results" className="py-24 md:py-32 section-gradient">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-6 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="font-display text-3xl md:text-4xl font-light text-foreground text-center mb-4">
          {title}
        </h2>
        <div className="mx-auto w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mb-16" />

        <div className="grid md:grid-cols-2 gap-6">
          <div className="aspect-[4/3] overflow-hidden rounded-sm img-glow relative group">
            <img
              src={beforeAfter}
              alt="Avant / Après"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 rounded-sm ring-1 ring-gold/10" />
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-sm img-glow relative group">
            <img
              src={procedureDetail}
              alt="Procédure"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 rounded-sm ring-1 ring-gold/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
