import Link from "next/link";
import { SITE_IMOVEIS_URL } from "@/lib/constants";

export function FooterSection() {
  return (
    <footer className="bg-gradient-to-br from-[#1F2933] via-[#0A2540] to-[#1F2933] py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Links Rápidos para SEO */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={SITE_IMOVEIS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#C9A14A] transition-colors"
                >
                  Ver Imóveis Disponíveis
                </Link>
              </li>
              <li>
                <Link
                  href={`${SITE_IMOVEIS_URL}/imoveis/a-venda`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#C9A14A] transition-colors"
                >
                  Imóveis à Venda em Belém
                </Link>
              </li>
              <li>
                <Link
                  href={`${SITE_IMOVEIS_URL}/imoveis/para-alugar`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#C9A14A] transition-colors"
                >
                  Imóveis para Alugar em Belém
                </Link>
              </li>
            </ul>
          </div>

          {/* Informações de Contato */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>CRECI-10611 PA/AP</li>
              <li>Belém, Pará</li>
              <li>
                <Link
                  href="#formulario-diagnostico"
                  className="text-[#C9A14A] hover:text-[#B8913F] transition-colors"
                >
                  Solicitar Consultoria
                </Link>
              </li>
            </ul>
          </div>

          {/* Sobre */}
          <div>
            <h3 className="text-white font-semibold mb-4">Sobre</h3>
            <p className="text-sm text-gray-300">
              Corretora de imóveis especializada em Belém, Pará. Método estruturado para
              compra e aluguel de imóveis com segurança e transparência.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-300 text-sm">
            Desenvolvido por{" "}
            <Link
              href="https://dominusestrategico.sophos-tech-hub.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9A14A] hover:text-[#B8913F] underline transition-colors duration-200"
            >
              Dominus Estratégico
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
