import Image from "next/image";
import { 
  UserSearch, 
  FileSearch, 
  CheckCircle2, 
  Handshake, 
  ShieldCheck 
} from "lucide-react";

export function MetodoSection() {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico do Perfil",
      description:
        "Entendo suas necessidades, objetivos e situação financeira. Sem pressa, sem pressão.",
      icon: UserSearch,
    },
    {
      number: "02",
      title: "Análise Estruturada",
      description:
        "Organizo critérios objetivos: localização, investimento, potencial de valorização e adequação ao seu perfil.",
      icon: FileSearch,
    },
    {
      number: "03",
      title: "Seleção Criteriosa",
      description:
        "Apresento opções que fazem sentido, com análise detalhada de cada imóvel e transparência total.",
      icon: CheckCircle2,
    },
    {
      number: "04",
      title: "Acompanhamento Especializado",
      description:
        "Oriento em cada etapa: visita, negociação, documentação e segurança jurídica.",
      icon: Handshake,
    },
    {
      number: "05",
      title: "Decisão Segura",
      description:
        "Você decide com clareza, método e confiança. Sem improvisação, sem arrependimento.",
      highlight: true, // Destacar com cor do Criador (projeto de vida)
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#1F2933] via-[#0A2540] to-[#1F2933] py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          {/* Imagem de Perfil */}
          <div className="flex-shrink-0">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-3 border-[#C9A14A]/30 shadow-xl p-2.5">
              <Image 
                src="/perfil_2.jpg" 
                alt="Joselma Albuquerque CRECI-10611 PA/AP" 
                fill 
                className="object-cover" 
                style={{ objectPosition: 'center top' }}
              />
            </div>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl mb-4">
              Conheça o Método Decisão Imobiliária Estruturada em Belém
            </h2>
            <p className="text-gray-200 text-lg">
              Joselma Albuquerque CRECI-10611 PA/AP - Corretora de Imóveis em Belém, Pará
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            return (
              <div key={index} className="flex items-start gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C9A14A] to-[#B8913F] flex items-center justify-center shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  {!isLast && (
                    <div className="w-0.5 h-16 bg-gradient-to-b from-[#C9A14A]/50 to-transparent my-2"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="font-heading text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-200 leading-7">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
