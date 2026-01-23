import Link from "next/link";

export function FooterSection() {
  return (
    <footer className="bg-gradient-to-br from-[#1F2933] via-[#0A2540] to-[#1F2933] py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
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
