"use client";

import { Button } from "@/components/ui/button";
import { SITE_IMOVEIS_URL } from "@/lib/constants";

export function CTAIntermediario() {
  const scrollToForm = () => {
    const formSection = document.getElementById("formulario-diagnostico");
    formSection?.scrollIntoView({ behavior: "smooth" });
  };

  const goToImoveis = () => {
    window.open(SITE_IMOVEIS_URL, "_blank");
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0A2540] via-[#1E4A6B] to-[#0A2540] py-20 px-4 sm:py-24 sm:px-6 lg:px-8">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C9A14A] opacity-5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative mx-auto max-w-4xl text-center">
        <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Quer entender qual imóvel faz sentido para você?
        </h2>
        <p className="mt-6 text-lg leading-7 text-gray-100 font-medium">
          Comece com uma conversa. Sem compromisso, sem pressão. Apenas
          orientação especializada.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#0A2540]"
            onClick={scrollToForm}
          >
            Quero orientação especializada
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#0A2540]"
            onClick={goToImoveis}
          >
            Ver imóveis disponíveis
          </Button>
        </div>
      </div>
    </section>
  );
}
