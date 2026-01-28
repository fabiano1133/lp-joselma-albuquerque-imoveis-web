import { 
  Shield, 
  CheckSquare, 
  FileCheck, 
  Eye 
} from "lucide-react";

export function PorqueFuncionaSection() {
  const beneficios = [
    {
      title: "Você economiza dinheiro",
      description:
        "Não paga mais do que deveria. Identifica problemas antes de comprar. Escolhe imóvel que valoriza.",
      icon: Shield,
    },
    {
      title: "Você economiza tempo",
      description:
        "Visita apenas imóveis que fazem sentido. Compara opções validadas. Decide rápido e certo.",
      icon: CheckSquare,
    },
    {
      title: "Você evita riscos",
      description:
        "Documentação verificada. Problemas jurídicos identificados. Nenhuma surpresa depois.",
      icon: FileCheck,
    },
    {
      title: "Você tem clareza total",
      description:
        "Sabe exatamente o que está comprando. Por que é a melhor opção. O que fazer em cada etapa.",
      icon: Eye,
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#1F2933] via-[#0A2540] to-[#1F2933] py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl mb-4">
            Benefícios da Consultoria Imobiliária em Belém
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Resultados concretos. Não promessas.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {beneficios.map((beneficio, index) => {
            const Icon = beneficio.icon;
            return (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
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
