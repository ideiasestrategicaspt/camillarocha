import { useMemo, useState } from "react";
import { useLang } from "@/hooks/use-lang";
import { translations } from "@/lib/translations";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/result-carousel-1.jpeg",
  "/result-carousel-2.jpeg",
  "/result-carousel-3.png",
  "/result-carousel-4.jpg",
  "/result-carousel-5.jpg",
  "/result-carousel-6.jpeg",
  "/result-carousel-7.jpg",
];

const Results = () => {
  const { lang } = useLang();
  const title = translations.results[lang];
  const { ref, visible } = useScrollReveal();
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  const slides = useMemo(
    () => [images[(current - 1 + images.length) % images.length], images[current], images[(current + 1) % images.length]],
    [current],
  );

  return (
    <section id="results" className="py-24 md:py-32 section-gradient overflow-hidden" data-v="5">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="font-display text-3xl md:text-4xl font-light text-foreground text-center mb-4">
          {title}
        </h2>
        <div className="mx-auto w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mb-16" />

        <div className="relative flex items-center justify-center gap-3 px-1 sm:gap-4 md:gap-6">
          <button
            onClick={prev}
            className="z-10 flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border border-gold/30 bg-background/80 backdrop-blur-sm flex items-center justify-center text-gold hover:bg-gold/10 hover:border-gold/60 transition-all duration-300 hover:shadow-[0_0_20px_-4px_hsl(var(--gold-accent)/0.4)]"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-5 min-w-0">
            <div className="hidden sm:block w-24 md:w-44 lg:w-52 aspect-[4/5] overflow-hidden rounded-sm flex-shrink-0 opacity-45">
              <img
                src={slides[0]}
                alt="Resultado anterior"
                className="w-full h-full object-cover blur-[2px] scale-105"
                loading="lazy"
              />
            </div>

            <div className="w-56 sm:w-64 md:w-80 lg:w-96 aspect-[4/5] overflow-hidden rounded-sm relative flex-shrink-0 shadow-[0_12px_50px_-8px_hsl(var(--gold-accent)/0.35)]">
              <img
                src={slides[1]}
                alt="Resultado principal do carrossel"
                className="w-full h-full object-cover transition-all duration-500"
                loading="eager"
              />
              <div className="absolute inset-0 rounded-sm ring-1 ring-gold/20" />
            </div>

            <div className="hidden sm:block w-24 md:w-44 lg:w-52 aspect-[4/5] overflow-hidden rounded-sm flex-shrink-0 opacity-45">
              <img
                src={slides[2]}
                alt="Próximo resultado"
                className="w-full h-full object-cover blur-[2px] scale-105"
                loading="lazy"
              />
            </div>
          </div>

          <button
            onClick={next}
            className="z-10 flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border border-gold/30 bg-background/80 backdrop-blur-sm flex items-center justify-center text-gold hover:bg-gold/10 hover:border-gold/60 transition-all duration-300 hover:shadow-[0_0_20px_-4px_hsl(var(--gold-accent)/0.4)]"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-gold w-6"
                  : "bg-gold/30 hover:bg-gold/50"
              }`}
              aria-label={`Image ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
