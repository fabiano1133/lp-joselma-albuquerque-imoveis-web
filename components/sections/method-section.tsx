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
      number: "1",
      title: "Você me conta o que precisa",
      description:
        "Conversa rápida. Entendo seu objetivo, orçamento e preferências. Sem pressão.",
      icon: UserSearch,
    },
    {
      number: "2",
      title: "Eu analiso e seleciono",
      description:
        "Busco imóveis que fazem sentido. Verifico documentação. Analiso riscos. Elimino opções ruins.",
      icon: FileSearch,
    },
    {
      number: "3",
      title: "Você escolhe com clareza",
      description:
        "Apresento opções validadas. Você decide sabendo exatamente o que está comprando. Sem surpresas.",
      icon: CheckCircle2,
    },
    {
      number: "4",
      title: "Acompanho até o final",
      description:
        "Negociação, documentação, segurança jurídica. Você fecha o negócio protegido.",
      highlight: true,
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
                alt="Joselma Albuquerque CRECI-10611 PA/AP - Corretora de imóveis especializada em Belém, Pará" 
                fill 
                className="object-cover" 
                style={{ objectPosition: 'center top' }}
                loading="lazy"
                sizes="(max-width: 640px) 96px, 112px"
              />
            </div>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl mb-4">
              Método para Comprar ou Alugar Imóvel em Belém
            </h2>
            <p className="text-gray-200 text-lg">
              4 passos simples. Resultado garantido.
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
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg ${
                    step.highlight 
                      ? 'bg-gradient-to-br from-[#C9A14A] to-[#B8913F]' 
                      : 'bg-white/10 backdrop-blur-sm border-2 border-[#C9A14A]/30'
                  }`}>
                    <Icon className={`w-7 h-7 ${step.highlight ? 'text-white' : 'text-[#C9A14A]'}`} />
                  </div>
                  {!isLast && (
                    <div className="w-0.5 h-12 bg-gradient-to-b from-[#C9A14A]/30 to-transparent my-3"></div>
                  )}
                </div>
                <div className="flex-1 pb-6">
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-200 text-sm sm:text-base leading-6">
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
