import { useState } from "react";
import { useLang } from "@/hooks/use-lang";
import { translations } from "@/lib/translations";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/results/result-1.jpeg",
  "/results/result-2.jpeg",
  "/results/result-3.png",
  "/results/result-4.jpg",
  "/results/result-5.jpg",
  "/results/result-6.jpeg",
  "/results/result-7.jpg",
];

const Results = () => {
  const { lang } = useLang();
  const title = translations.results[lang];
  const { ref, visible } = useScrollReveal();
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  const getIndex = (offset: number) => (current + offset + images.length) % images.length;

  return (
    <section id="results" className="py-24 md:py-32 section-gradient overflow-hidden" data-v="3">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="font-display text-3xl md:text-4xl font-light text-foreground text-center mb-4">
          {title}
        </h2>
        <div className="mx-auto w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mb-16" />

        {/* Carousel */}
        <div className="relative flex items-center justify-center gap-2 sm:gap-4 md:gap-6 px-2">
          {/* Left arrow */}
          <button
            onClick={prev}
            className="z-10 flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border border-gold/30 bg-background/80 backdrop-blur-sm flex items-center justify-center text-gold hover:bg-gold/10 hover:border-gold/60 transition-all duration-300 hover:shadow-[0_0_20px_-4px_hsl(var(--gold-accent)/0.4)]"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Images row */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-5 min-w-0">
            {/* Left image (blurred) — hidden on small mobile */}
            <div className="hidden sm:block w-24 md:w-48 lg:w-56 aspect-square overflow-hidden rounded-sm flex-shrink-0 opacity-50">
              <img
                src={images[getIndex(-1)]}
                alt="Résultat"
                className="w-full h-full object-cover filter blur-[2px] scale-105"
              />
            </div>

            {/* Center image (highlighted) */}
            <div className="w-56 sm:w-64 md:w-80 lg:w-96 aspect-square overflow-hidden rounded-sm relative flex-shrink-0 shadow-[0_12px_50px_-8px_hsl(var(--gold-accent)/0.35)]">
              <img
                src={images[current]}
                alt="Résultat avant/après"
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 rounded-sm ring-1 ring-gold/20" />
            </div>

            {/* Right image (blurred) — hidden on small mobile */}
            <div className="hidden sm:block w-24 md:w-48 lg:w-56 aspect-square overflow-hidden rounded-sm flex-shrink-0 opacity-50">
              <img
                src={images[getIndex(1)]}
                alt="Résultat"
                className="w-full h-full object-cover filter blur-[2px] scale-105"
              />
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            className="z-10 flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border border-gold/30 bg-background/80 backdrop-blur-sm flex items-center justify-center text-gold hover:bg-gold/10 hover:border-gold/60 transition-all duration-300 hover:shadow-[0_0_20px_-4px_hsl(var(--gold-accent)/0.4)]"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Dots */}
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
