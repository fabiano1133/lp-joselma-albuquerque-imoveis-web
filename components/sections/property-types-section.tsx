"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SITE_IMOVEIS_URL } from "@/lib/constants";
import { trackButtonClick } from "@/lib/analytics";
import { 
  ShoppingCart, 
  Home, 
  Building2, 
  Key, 
  TrendingUp, 
  Heart 
} from "lucide-react";

export function TiposImoveisSection() {
  const goToImoveis = () => {
    trackButtonClick("tipos_imoveis_ver_todos");
    window.open(SITE_IMOVEIS_URL, "_blank");
  };
  const tipos = [
    {
      title: "Venda",
      description:
        "Imóveis novos e usados para compra. Análise criteriosa de cada opção.",
      icon: ShoppingCart,
      image: "/venda.jpg", // Adicione a imagem na pasta public
    },
    {
      title: "Aluguel",
      description:
        "Encontre o imóvel ideal para alugar, com segurança e transparência.",
      icon: Key,
      image: "/aluguel.jpg", // Adicione a imagem na pasta public
    },
    {
      title: "Novos",
      description:
        "Lançamentos e imóveis na planta. Análise de construtora e projeto.",
      icon: Building2,
      image: "/novos.jpg", // Adicione a imagem na pasta public
    },
    {
      title: "Usados",
      description:
        "Imóveis prontos para morar. Verificação completa de documentação.",
      icon: Home,
      image: "/usados.jpg", // Adicione a imagem na pasta public
    },
    {
      title: "Investimento",
      description:
        "Análise de potencial de valorização e retorno financeiro.",
      highlight: true, // Destacar com cor do Criador
      icon: TrendingUp,
      image: "/imovel-investimento.jpg", // Adicione a imagem na pasta public
    },
    {
      title: "Moradia",
      description:
        "Foco no seu projeto de vida e necessidades pessoais.",
      highlight: true, // Destacar com cor do Criador
      icon: Heart,
      image: "/imovel-moradia.jpg", // Adicione a imagem na pasta public
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#1F2933] via-[#0A2540] to-[#1F2933] py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl mb-4">
            Experiência consolidada em Consultoria Imobiliária em Belém, Pará
          </h2>
          <p className="text-xl text-gray-200">
            Compromisso com uma decisão segura e patrimoniada para imóveis em Belém
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tipos.slice(0, 4).map((tipo, index) => {
            return (
              <div
                key={index}
                className="group relative h-64 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                {/* Background gradiente de fallback */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200 via-amber-100 to-amber-200"></div>
                
                {/* Imagem de imóvel */}
                <div className="absolute inset-0">
                  <Image 
                    src={tipo.image} 
                    alt={`${tipo.title} de imóveis em Belém, Pará - ${tipo.description}`}
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/90 via-[#0A2540]/70 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h3 className="font-heading text-xl font-bold text-white">
                    {tipo.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" onClick={goToImoveis}>
            Ver todos os imóveis disponíveis
          </Button>
        </div>
      </div>
    </section>
  );
}
