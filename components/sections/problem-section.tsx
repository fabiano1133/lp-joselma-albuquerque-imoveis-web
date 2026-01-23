import { FileText, AlertCircle, ClipboardList } from "lucide-react";

export function ProblemaSection() {
  return (
    <section className="relative bg-white py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl font-bold text-[#0A2540] sm:text-4xl lg:text-5xl mb-4">
            O problema não está na falta de imóveis...
          </h2>
          <p className="text-xl italic text-[#1F2933]">
            Está na falta de critério e análise.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br from-[#C9A14A]/20 to-[#C9A14A]/10 flex items-center justify-center">
              <FileText className="w-8 h-8 text-[#C9A14A]" />
            </div>
            <h3 className="font-heading text-xl font-bold text-[#0A2540] mb-3">
              Escolhas sem Planejamento
            </h3>
            <p className="text-gray-600 text-sm">
              Decisões tomadas sem análise criteriosa e método estruturado.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br from-[#C9A14A]/20 to-[#C9A14A]/10 flex items-center justify-center">
              <AlertCircle className="w-8 h-8 text-[#C9A14A]" />
            </div>
            <h3 className="font-heading text-xl font-bold text-[#0A2540] mb-3">
              Riscos Ocultos
            </h3>
            <p className="text-gray-600 text-sm">
              Riscos financeiros e jurídicos que não são identificados a tempo.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br from-[#C9A14A]/20 to-[#C9A14A]/10 flex items-center justify-center">
              <ClipboardList className="w-8 h-8 text-[#C9A14A]" />
            </div>
            <h3 className="font-heading text-xl font-bold text-[#0A2540] mb-3">
              Processo Desorganizado
            </h3>
            <p className="text-gray-600 text-sm">
              Falta de método e organização na busca e seleção de imóveis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
