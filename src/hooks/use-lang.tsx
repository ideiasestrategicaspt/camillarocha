import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Lang } from "@/lib/translations";

const STORAGE_KEY = "crb-lang";

const getInitialLang = (): Lang => {
  if (typeof window === "undefined") return "fr";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "en" || stored === "fr" ? stored : "fr";
};

const LangContext = createContext<{ lang: Lang; toggle: () => void }>({
  lang: "fr",
  toggle: () => {},
});

export const useLang = () => useContext(LangContext);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(getInitialLang);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore storage errors */
    }
  }, [lang]);

  // Sync language across tabs and across multiple LangProvider instances
  // (Index and Legal pages each mount their own provider).
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && (e.newValue === "fr" || e.newValue === "en")) {
        setLang(e.newValue);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const toggle = () => setLang((l) => (l === "fr" ? "en" : "fr"));

  return (
    <LangContext.Provider value={{ lang, toggle }}>
      {children}
    </LangContext.Provider>
  );
};
