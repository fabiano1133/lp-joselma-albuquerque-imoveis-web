import { FileText, AlertCircle, ClipboardList } from "lucide-react";

export function ProblemaSection() {
  return (
    <section className="relative bg-white py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-[#0A2540] sm:text-4xl lg:text-5xl mb-4">
            Riscos ao Comprar ou Alugar Imóvel em Belém sem Orientação
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sem análise criteriosa, você perde tempo, dinheiro e pode tomar decisões que se tornam arrependimentos.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-red-50 flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="font-heading text-lg font-bold text-[#0A2540] mb-2">
              Você perde dinheiro
            </h3>
            <p className="text-gray-600 text-sm leading-6">
              Paga mais do que deveria. Não identifica problemas ocultos. Investe em imóvel que não valoriza.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-red-50 flex items-center justify-center">
              <FileText className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="font-heading text-lg font-bold text-[#0A2540] mb-2">
              Você perde tempo
            </h3>
            <p className="text-gray-600 text-sm leading-6">
              Visita imóveis que não atendem suas necessidades. Compara opções sem critério. Decide sem clareza.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-red-50 flex items-center justify-center">
              <ClipboardList className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="font-heading text-lg font-bold text-[#0A2540] mb-2">
              Você assume riscos
            </h3>
            <p className="text-gray-600 text-sm leading-6">
              Documentação não verificada. Problemas jurídicos não identificados. Surpresas depois da compra.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
