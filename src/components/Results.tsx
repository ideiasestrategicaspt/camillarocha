import { useLang } from "@/hooks/use-lang";
import { translations } from "@/lib/translations";
import beforeAfter from "@/assets/before-after.jpeg";
import procedureDetail from "@/assets/procedure-detail.jpg";

const Results = () => {
  const { lang } = useLang();
  const title = translations.results[lang];

  return (
    <section id="results" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl font-light text-foreground text-center mb-16">
          {title}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={beforeAfter}
              alt="Avant / Après"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={procedureDetail}
              alt="Procédure"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
