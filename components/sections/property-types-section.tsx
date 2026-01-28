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
      path: "imoveis/a-venda",
    },
    {
      title: "Aluguel",
      description:
        "Encontre o imóvel ideal para alugar, com segurança e transparência.",
      icon: Key,
      image: "/aluguel.jpg",
      path: "imoveis/para-alugar",
    },
    {
      title: "Novos",
      description:
        "Lançamentos e imóveis na planta. Análise de construtora e projeto.",
      icon: Building2,
      image: "/novos.jpg", // Adicione a imagem na pasta public
      path: "apartamento-belem-2-quartos-70-m/AP0088-JOSP",
    },
    {
      title: "Usados",
      description:
        "Imóveis prontos para morar. Verificação completa de documentação.",
      icon: Home,
      image: "/usados.jpg", // Adicione a imagem na pasta public
      path: "imoveis/a-venda?caracteristicas=em-condominio-fechado",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#1F2933] via-[#0A2540] to-[#1F2933] py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl mb-4">
            Imóveis à Venda e para Alugar em Belém, Pará
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Venda, aluguel, novos, usados. Análise criteriosa em todos os casos.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tipos.slice(0, 4).map((tipo, index) => {
            const handleSaibaMais = (path: string) => {
              trackButtonClick(`tipos_imoveis_saiba_mais_${tipo.title.toLowerCase()}`);
              window.open(`${SITE_IMOVEIS_URL}/${path}`, "_blank");
            };

            return (
              <div
                key={index}
                className="relative h-64 rounded-lg overflow-hidden shadow-xl"
              >
                {/* Background gradiente de fallback */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A14A] via-[#B8913F] to-[#C9A14A]"></div>
                
                {/* Imagem de imóvel */}
                <div className="absolute inset-0">
                  <Image 
                    src={tipo.image} 
                    alt={`Imóveis ${tipo.title.toLowerCase()} em Belém, Pará - ${tipo.description}`}
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center' }}
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                {/* Badge no canto superior direito */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-[#C9A14A] text-white shadow-xl backdrop-blur-sm">
                    {tipo.title}
                  </span>
                </div>
                {/* Botão na parte inferior */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <Button
                    onClick={() => handleSaibaMais(tipo.path)}
                    className="bg-[#C9A14A] hover:bg-[#B8913F] text-white text-sm font-semibold w-full shadow-lg"
                    size="sm"
                  >
                    Saiba mais
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" onClick={goToImoveis} className="bg-[#C9A14A] hover:bg-[#B8913F] text-white">
            Ver todos os imóveis disponíveis
          </Button>
        </div>
      </div>
    </section>
  );
}
