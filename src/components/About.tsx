import { useLang } from "@/hooks/use-lang";
import { translations } from "@/lib/translations";
import portraitImg from "@/assets/camilla-portrait.jpg";

const About = () => {
  const { lang } = useLang();
  const t = translations.about[lang];
  const impact = translations.impact[lang];
  const diff = translations.differentiator[lang];

  return (
    <section id="about" className="py-24 md:py-32">
      {/* About intro */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src={portraitImg}
              alt="Camilla Rocha"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-display text-2xl md:text-3xl font-light leading-relaxed text-foreground mb-6">
              {t.text1}
            </p>
            <p className="font-body text-sm leading-relaxed text-muted-foreground">
              {t.text2}
            </p>
          </div>
        </div>
      </div>

      {/* Impact phrase */}
      <div className="max-w-4xl mx-auto px-6 py-24 md:py-32 text-center">
        <p className="font-display text-3xl md:text-4xl lg:text-5xl font-light italic text-foreground leading-snug">
          {impact}
        </p>
      </div>

      {/* Differentiator */}
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-display text-2xl md:text-3xl font-light text-foreground mb-6">
          {diff.title}
        </h2>
        <p className="font-body text-sm leading-relaxed text-muted-foreground max-w-xl mx-auto">
          {diff.text}
        </p>
      </div>
    </section>
  );
};

export default About;
