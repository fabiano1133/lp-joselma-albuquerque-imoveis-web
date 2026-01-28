import Image from "next/image";
import { Shield, Handshake, TrendingUp } from "lucide-react";

export function ManifestoSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1F2933] via-[#0A2540] to-[#1F2933] py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-5xl text-center">
        {/* Imagem de Perfil no Topo */}
        <div className="flex justify-center mb-8">
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-[#C9A14A]/40 shadow-2xl">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image 
                src="/perfil-image-manifesto.jpeg" 
                alt="Joselma Albuquerque CRECI-10611 PA/AP - Corretora de imóveis comprometida com clientes em Belém, Pará" 
                fill 
                className="object-cover" 
                style={{ objectPosition: 'center down' }}
                loading="lazy"
                sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, 224px"
              />
            </div>
          </div>
        </div>
        
        <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl mb-4">
          Corretora de Imóveis em Belém: Compromisso com Você
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Joselma Albuquerque CRECI-10611 PA/AP
        </p>
        
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#C9A14A] to-[#B8913F] flex items-center justify-center">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-heading text-lg font-bold text-white mb-2">
              Documentação verificada
            </h3>
            <p className="text-sm text-gray-300 leading-6">
              Nenhum risco jurídico. Tudo checado antes de você decidir.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#C9A14A] to-[#B8913F] flex items-center justify-center">
              <Handshake className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-heading text-lg font-bold text-white mb-2">
              Transparência total
            </h3>
            <p className="text-sm text-gray-300 leading-6">
              Você sabe tudo. Nada escondido. Decisão informada.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#C9A14A] to-[#B8913F] flex items-center justify-center">
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-heading text-lg font-bold text-white mb-2">
              Imóvel que valoriza
            </h3>
            <p className="text-sm text-gray-300 leading-6">
              Análise de potencial. Investimento inteligente. Patrimônio que cresce.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
