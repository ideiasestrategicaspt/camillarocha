import { useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { useLang } from "@/hooks/use-lang";
import {
  LEGAL_LABELS,
  LegalSlug,
  getLegalContent,
} from "@/lib/legal-content";

type ModalSlug = Exclude<LegalSlug, "termes-et-conditions">;

const FOOTER_ORDER: LegalSlug[] = [
  "politique-de-confidentialite",
  "termes-et-conditions",
  "questions-frequentes",
];

const Footer = () => {
  const { lang } = useLang();
  const [open, setOpen] = useState<ModalSlug | null>(null);

  return (
    <>
      <div className="border-t border-gold/15 py-8">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {FOOTER_ORDER.map((slug) => {
              const label = LEGAL_LABELS[slug][lang];
              const className =
                "font-body text-[10px] md:text-xs tracking-[0.15em] uppercase text-foreground hover:text-gold transition-colors";

              if (slug === "termes-et-conditions") {
                return (
                  <Link key={slug} to={`/${slug}`} className={className}>
                    {label}
                  </Link>
                );
              }

              return (
                <button
                  key={slug}
                  onClick={() => setOpen(slug as ModalSlug)}
                  className={className}
                >
                  {label}
                </button>
              );
            })}
          </div>
          <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
            © {new Date().getFullYear()} Camilla Rocha Brows
          </p>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 backdrop-blur-sm p-6"
          onClick={() => setOpen(null)}
        >
          <div
            className="bg-background max-w-2xl w-full max-h-[80vh] overflow-y-auto p-10 md:p-14 relative animate-fade-in-scale shadow-2xl"
            style={{ boxShadow: "0 20px 60px -12px hsl(32 40% 72% / 0.2)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <h3 className="font-display text-2xl md:text-3xl font-light text-foreground mb-6">
              {LEGAL_LABELS[open][lang]}
            </h3>
            <div className="font-body text-sm leading-relaxed text-muted-foreground">
              {getLegalContent(open, lang)}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
