import { createContext, useContext, useState, ReactNode } from "react";
import { Lang } from "@/lib/translations";

const LangContext = createContext<{ lang: Lang; toggle: () => void }>({
  lang: "fr",
  toggle: () => {},
});

export const useLang = () => useContext(LangContext);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("fr");
  const toggle = () => setLang((l) => (l === "fr" ? "en" : "fr"));
  return (
    <LangContext.Provider value={{ lang, toggle }}>
      {children}
    </LangContext.Provider>
  );
};
