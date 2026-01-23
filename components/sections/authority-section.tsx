import Image from "next/image";

export function AutoridadeSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-[#E8F0F8] py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
          {/* Imagem de Perfil */}
          <div className="flex-shrink-0">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-3 border-[#0A2540]/20 shadow-lg">
              {/* Substitua por Image do Next.js: <Image src="/joselma-albuquerque.jpg" alt="Joselma Albuquerque CRECI-10611 PA/AP" fill className="object-cover" /> */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540] to-[#1E4A6B] flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white/80"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-heading text-3xl font-bold text-[#0A2540] sm:text-4xl lg:text-5xl">
              Por que confiar em meu método?
            </h2>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-2xl bg-white p-6 shadow-lg border border-gray-100">
            <p className="text-lg leading-7 text-gray-700">
              Trabalho com um método próprio, desenvolvido a partir de
              experiência real no mercado imobiliário. Não sigo receitas
              prontas — adapto o processo às suas necessidades.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-lg border border-gray-100">
            <p className="text-lg leading-7 text-gray-700">
              Minha atuação é responsável. Não prometo o impossível. Não
              crio urgência artificial. Ofereço orientação especializada e
              um compromisso genuíno com sua decisão segura.
            </p>
          </div>
          <div className="rounded-2xl bg-gradient-to-r from-[#0A2540] to-[#1E4A6B] p-6 shadow-xl">
            <p className="text-lg leading-7 text-white font-medium">
              Cada cliente é único. Cada decisão imobiliária é única. Por isso,
              cada processo é estruturado de forma personalizada, sempre com
              método, sempre com transparência.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
