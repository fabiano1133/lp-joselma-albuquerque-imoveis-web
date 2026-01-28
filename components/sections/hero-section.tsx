"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SITE_IMOVEIS_URL } from "@/lib/constants";
import { trackButtonClick } from "@/lib/analytics";

export function HeroSection() {
  const scrollToForm = () => {
    trackButtonClick("hero_cta_orientacao");
    const formSection = document.getElementById("formulario-diagnostico");
    formSection?.scrollIntoView({ behavior: "smooth" });
  };

  const goToImoveis = () => {
    trackButtonClick("hero_cta_ver_imoveis");
    window.open(SITE_IMOVEIS_URL, "_blank");
  };

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image Placeholder - substitua por imagem real */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-amber-50 to-amber-100">
        {/* Placeholder para imagem de sala moderna */}
        <div className="absolute inset-0 bg-[url('/placeholder-living-room.jpg')] bg-cover bg-center blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/85 via-[#1F2933]/80 to-[#0A2540]/85"></div>
      </div>
      
      {/* Conteúdo */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Imagem de Perfil da Corretora */}
          <div className="flex-shrink-0">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl p-4">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image 
                  src="/perfil-image-hero.jpeg" 
                  alt="Joselma Albuquerque CRECI-10611 PA/AP - Corretora de Imóveis em Belém, Pará especializada em compra e aluguel de imóveis" 
                  fill 
                  className="object-cover" 
                  style={{ objectPosition: 'center top' }}
                  priority
                  sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 256px"
                />
              </div>
            </div>
          </div>
          
          {/* Texto */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge de Credibilidade */}
            <div className="flex justify-center lg:justify-start mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-white/10 backdrop-blur-sm text-white border border-white/20">
                CRECI-10611 PA/AP
              </span>
            </div>
            
            <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl mb-6">
              Comprar ou Alugar Imóvel em Belém{" "}
              <span className="text-[#C9A14A]">Sem Arrependimento</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg sm:text-xl leading-7 text-gray-100 mb-8 lg:mx-0">
              Método que elimina riscos. Análise criteriosa. Decisão segura. 
              Do diagnóstico à escolha final.
            </p>
            
            {/* Prova Social Sutil */}
            <p className="mx-auto max-w-2xl text-sm text-gray-300 mb-8 lg:mx-0">
              Corretora especializada em Belém, Pará
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={scrollToForm}
                className="bg-[#C9A14A] hover:bg-[#B8913F] text-white text-lg px-8 py-6 shadow-xl"
              >
                Quero encontrar meu imóvel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
