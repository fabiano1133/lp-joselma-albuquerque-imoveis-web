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
                alt="Joselma Albuquerque CRECI-10611 PA/AP" 
                fill 
                className="object-cover" 
                style={{ objectPosition: 'center down' }}
              />
            </div>
          </div>
        </div>
        
        <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl mb-4">
          Decisões imobiliárias em Belém exigem critério e planejamento
        </h2>
        <p className="text-xl text-gray-200 mb-4">
          Construímos seu patrimônio em Belém, Pará, com segurança, responsabilidade e visão de futuro
        </p>
        <p className="text-lg text-[#C9A14A] font-medium mb-12">
          Joselma Albuquerque CRECI-10611 PA/AP
        </p>
        
        <div className="grid sm:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#C9A14A] to-[#B8913F] flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-heading text-xl font-bold text-white mb-2">
              Segurança
            </h3>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#C9A14A] to-[#B8913F] flex items-center justify-center">
              <Handshake className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-heading text-xl font-bold text-white mb-2">
              Responsabilidade
            </h3>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#C9A14A] to-[#B8913F] flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-heading text-xl font-bold text-white mb-2">
              Patrimônio
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
