import { 
  Shield, 
  CheckSquare, 
  FileCheck, 
  Eye 
} from "lucide-react";

export function PorqueFuncionaSection() {
  const beneficios = [
    {
      title: "Redução de Risco",
      description:
        "Análise criteriosa reduz riscos financeiros e jurídicos. Você toma decisões informadas.",
      icon: Shield,
    },
    {
      title: "Organização da Decisão",
      description:
        "Método claro elimina improvisação. Cada etapa é planejada e executada com propósito.",
      icon: CheckSquare,
    },
    {
      title: "Segurança Jurídica e Financeira",
      description:
        "Documentação verificada, análise de viabilidade e transparência em todos os processos.",
      icon: FileCheck,
    },
    {
      title: "Clareza no Processo",
      description:
        "Você sabe exatamente o que está acontecendo, por que está acontecendo e qual o próximo passo.",
      icon: Eye,
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#1F2933] via-[#0A2540] to-[#1F2933] py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Por que esse método funciona?
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {beneficios.map((beneficio, index) => {
            const Icon = beneficio.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#C9A14A] flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-3">
                  {beneficio.title}
                </h3>
                <p className="text-gray-200 text-sm leading-6">
                  {beneficio.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
