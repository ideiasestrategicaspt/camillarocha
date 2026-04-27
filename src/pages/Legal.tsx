import { useEffect } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { LangProvider, useLang } from "@/hooks/use-lang";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  LEGAL_LABELS,
  LEGAL_ORDER,
  LegalSlug,
  getLegalContent,
} from "@/lib/legal-content";

const isLegalSlug = (s: string | undefined): s is LegalSlug =>
  !!s && (LEGAL_ORDER as string[]).includes(s);

const LegalInner = ({ slug }: { slug: LegalSlug }) => {
  const { lang } = useLang();
  const label = LEGAL_LABELS[slug][lang];

  useEffect(() => {
    document.title = `${label} — Camilla Rocha Brows`;
    window.scrollTo(0, 0);
  }, [label]);

  return (
    <>
      <Header />
      <main className="pt-28 md:pt-32 pb-16 section-gradient min-h-screen">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-body text-[10px] md:text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-gold transition-colors mb-10"
          >
            <ArrowLeft size={14} />
            {lang === "fr" ? "Retour à l'accueil" : "Back to home"}
          </Link>

          <h1 className="font-display text-3xl md:text-4xl font-light text-foreground mb-4">
            {label}
          </h1>
          <div className="w-16 h-px bg-gradient-to-r from-gold via-gold/40 to-transparent mb-10" />

          <article className="font-body text-sm leading-relaxed text-muted-foreground">
            {getLegalContent(slug, lang)}
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
};

const Legal = () => {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\/+/, "").replace(/\/+$/, "");
  if (!isLegalSlug(slug)) return <Navigate to="/" replace />;
  return (
    <LangProvider>
      <LegalInner slug={slug} />
    </LangProvider>
  );
};

export default Legal;
