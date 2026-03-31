import { useLang } from "@/hooks/use-lang";
import { translations } from "@/lib/translations";
import logo from "@/assets/logo.png";

const WHATSAPP_URL =
  "https://wa.me/352XXXXXXXXX?text=Bonjour%2C%20je%20souhaite%20prendre%20rendez-vous%20et%20avoir%20des%20informations%20sur%20vos%20prestations.";

const Header = () => {
  const { lang, toggle } = useLang();
  const nav = translations.nav[lang];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-gold/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top">
          <img src={logo} alt="Camilla Rocha Brows" className="h-6 md:h-8" />
        </a>

        <nav className="hidden md:flex items-center gap-8 font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
          <a href="#services" className="hover:text-gold transition-colors">{nav.services}</a>
          <a href="#results" className="hover:text-gold transition-colors">{nav.results}</a>
          <a href="#about" className="hover:text-gold transition-colors">{nav.about}</a>
          <a href="#contact" className="hover:text-gold transition-colors">{nav.contact}</a>
        </nav>

        <button
          onClick={toggle}
          className="font-body text-xs tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className={lang === "fr" ? "text-gold font-medium" : ""}>FR</span>
          <span className="mx-1.5 text-gold/40">|</span>
          <span className={lang === "en" ? "text-gold font-medium" : ""}>EN</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
