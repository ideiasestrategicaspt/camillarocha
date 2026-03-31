import { useLang } from "@/hooks/use-lang";
import { translations } from "@/lib/translations";
import workingImg from "@/assets/camilla-working.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const About = () => {
  const { lang } = useLang();
  const t = translations.about[lang];
  const impact = translations.impact[lang];
  const diff = translations.differentiator[lang];

  const { ref: aboutRef, visible: aboutVisible } = useScrollReveal();
  const { ref: impactRef, visible: impactVisible } = useScrollReveal();
  const { ref: diffRef, visible: diffVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 md:py-32 section-gradient">
      {/* About intro */}
      <div
        ref={aboutRef}
        className={`max-w-6xl mx-auto px-6 transition-all duration-1000 ${aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="aspect-[3/4] overflow-hidden relative rounded-sm img-glow">
            <img
              src={workingImg}
              alt="Camilla Rocha"
              loading="lazy"
              width={896}
              height={1184}
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-background/30" />
            {/* Subtle gold glow on edges */}
            <div className="absolute inset-0 rounded-sm ring-1 ring-gold/10" />
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
      <div
        ref={impactRef}
        className={`max-w-4xl mx-auto px-6 py-24 md:py-32 text-center transition-all duration-1000 delay-200 ${impactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <p className="font-display text-3xl md:text-4xl lg:text-5xl font-light italic text-foreground leading-snug glow-text">
          {impact}
        </p>
        <div className="mt-8 mx-auto w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      </div>

      {/* Differentiator */}
      <div
        ref={diffRef}
        className={`max-w-3xl mx-auto px-6 text-center transition-all duration-1000 delay-300 ${diffVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
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
