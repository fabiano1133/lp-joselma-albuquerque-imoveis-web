import { HeroSection } from "@/components/sections/hero-section";
import { ProblemaSection } from "@/components/sections/problem-section";
import { MetodoSection } from "@/components/sections/method-section";
import { PorqueFuncionaSection } from "@/components/sections/why-it-works-section";
import { TiposImoveisSection } from "@/components/sections/property-types-section";
import { FormularioDiagnostico } from "@/components/sections/diagnostic-form-section";
import { ManifestoSection } from "@/components/sections/manifesto-section";
import { FooterSection } from "@/components/sections/footer-section";

export default function Home() {
  return (
    <>
      <header>
        <HeroSection />
      </header>
      <main className="min-h-screen">
        <article>
          <ProblemaSection />
          <MetodoSection />
          <PorqueFuncionaSection />
          <TiposImoveisSection />
        </article>
        <FormularioDiagnostico />
        <ManifestoSection />
      </main>
      <FooterSection />
    </>
  );
}
