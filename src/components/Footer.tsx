import { Link } from "react-router-dom";
import { useLang } from "@/hooks/use-lang";
import { LEGAL_LABELS, LEGAL_ORDER } from "@/lib/legal-content";

const Footer = () => {
  const { lang } = useLang();

  return (
    <div className="border-t border-gold/15 py-8">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-4">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {LEGAL_ORDER.map((slug) => (
            <Link
              key={slug}
              to={`/${slug}`}
              className="font-body text-[10px] md:text-xs tracking-[0.15em] uppercase text-foreground hover:text-gold transition-colors"
            >
              {LEGAL_LABELS[slug][lang]}
            </Link>
          ))}
        </div>
        <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
          © {new Date().getFullYear()} Camilla Rocha Brows
        </p>
      </div>
    </div>
  );
};

export default Footer;
