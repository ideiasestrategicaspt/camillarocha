import { LangProvider } from "@/hooks/use-lang";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Results from "@/components/Results";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <LangProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Results />
        <Contact />
      </main>
    </LangProvider>
  );
};

export default Index;
