"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SITE_IMOVEIS_URL, OFFICE_INFO } from "@/lib/constants";
import { contactService } from "@/lib/api/contact-service";
import { MapPin, Clock, Phone, Mail, ExternalLink } from "lucide-react";
import { trackConversion } from "@/lib/analytics";

const formSchema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  telefone: z
    .string()
    .min(10, "Telefone inválido")
    .regex(/^[\d\s\(\)\-]+$/, "Telefone inválido"),
  mensagem: z.string().optional().or(z.literal("")),
});

type FormData = z.infer<typeof formSchema>;

export function FormularioDiagnostico() {
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const goToImoveis = () => {
    trackButtonClick("formulario_explorar_imoveis");
    window.open(SITE_IMOVEIS_URL, "_blank");
  };

  const onSubmit = async (data: FormData) => {
    // Limpa status anterior
    setSubmitStatus({ type: null, message: "" });

    try {
      // Chama o serviço de contato (lógica desacoplada)
      const response = await contactService.submitContactForm({
        fullname: data.nome,
        email: data.email,
        mobileNumber: data.telefone,
        message: data.mensagem || "",
      });

      if (response.success) {
        // Trackear conversão no Google Analytics
        trackConversion();
        
        // Sucesso: limpa o formulário e mostra mensagem
        reset();
        setSubmitStatus({
          type: "success",
          message: response.message || "Formulário enviado com sucesso! Entraremos em contato em breve.",
        });
      } else {
        // Erro do serviço
        setSubmitStatus({
          type: "error",
          message: response.error || "Erro ao enviar formulário. Por favor, tente novamente.",
        });
      }
    } catch (error) {
      // Erro inesperado - captura qualquer erro que não foi tratado pelo serviço
      console.error("Erro ao enviar formulário:", error);
      setSubmitStatus({
        type: "error",
        message: error instanceof Error 
          ? error.message 
          : "Erro inesperado. Por favor, tente novamente mais tarde.",
      });
    }
  };

  return (
    <section
      id="formulario-diagnostico"
      className="relative bg-[#F5F3F0] py-24 px-4 sm:py-32 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          {/* Imagem de Perfil */}
          <div className="flex justify-center mb-6">
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
          
          <h2 className="font-heading text-3xl font-bold text-[#0A2540] sm:text-4xl lg:text-5xl mb-4">
            Qual o imóvel perfeito para seu perfil em Belém?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Solicite sua orientação especializada ou visite nosso escritório para um atendimento presencial
          </p>
        </div>

        {/* Grid: Formulário e Atendimento Presencial */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Formulário Online */}
          <div className="rounded-3xl bg-white p-8 sm:p-12 shadow-xl border border-gray-100">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <Label htmlFor="nome">Nome completo</Label>
            <Input
              id="nome"
              type="text"
              {...register("nome")}
              className="mt-2"
              placeholder="Seu nome completo"
              aria-invalid={errors.nome ? "true" : "false"}
            />
            {errors.nome && (
              <p className="mt-1 text-sm text-red-600" role="alert">
                {errors.nome.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              className="mt-2"
              placeholder="seu@email.com"
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600" role="alert">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="telefone">Telefone</Label>
            <Input
              id="telefone"
              type="tel"
              {...register("telefone")}
              className="mt-2"
              placeholder="(00) 00000-0000"
              aria-invalid={errors.telefone ? "true" : "false"}
            />
            {errors.telefone && (
              <p className="mt-1 text-sm text-red-600" role="alert">
                {errors.telefone.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="mensagem">Mensagem (Opcional)</Label>
            <Textarea
              id="mensagem"
              {...register("mensagem")}
              className="mt-2"
              placeholder="Olá, gostaria de agendar um atendimento"
              rows={4}
              aria-invalid={errors.mensagem ? "true" : "false"}
            />
            {errors.mensagem && (
              <p className="mt-1 text-sm text-red-600" role="alert">
                {errors.mensagem.message}
              </p>
            )}
          </div>

          {/* Mensagens de feedback */}
          {submitStatus.type && (
            <div
              className={`rounded-xl p-4 ${
                submitStatus.type === "success"
                  ? "bg-green-50 border border-green-200 text-green-800"
                  : "bg-red-50 border border-red-200 text-red-800"
              }`}
              role="alert"
            >
              <p className="text-sm font-medium">{submitStatus.message}</p>
            </div>
          )}

          <div className="pt-4 space-y-4">
            <Button
              type="submit"
              size="lg"
              className="w-full bg-[#C9A14A] hover:bg-[#B8913F] text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Solicitar orientação"}
            </Button>
            <div className="text-center">
              <button
                type="button"
                onClick={goToImoveis}
                className="text-sm text-[#0A2540] hover:underline font-medium"
              >
                Ou explore os imóveis disponíveis →
              </button>
            </div>
          </div>
        </form>
          </div>

          {/* Atendimento Presencial */}
          <div className="rounded-3xl bg-gradient-to-br from-[#0A2540] via-[#1E4A6B] to-[#0A2540] p-8 sm:p-12 shadow-xl border border-[#0A2540]/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#C9A14A]/20 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-[#C9A14A]" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white">
                Atendimento Presencial
              </h3>
            </div>

            <p className="text-gray-200 mb-8 leading-relaxed">
              Prefere um atendimento presencial? Visite nosso escritório em Belém. 
              Oferecemos um ambiente acolhedor e organizado para discutir seu projeto imobiliário com segurança e método.
            </p>

            {/* Informações do Escritório */}
            <div className="space-y-6 mb-8">
              {/* Endereço */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#C9A14A]/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#C9A14A]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-[#C9A14A] mb-1">Endereço</p>
                  <p className="text-gray-200 leading-relaxed">{OFFICE_INFO.address}</p>
                  <a
                    href={OFFICE_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-2 text-sm text-[#C9A14A] hover:text-[#B8913F] transition-colors font-medium"
                  >
                    Ver no Google Maps
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Horários */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#C9A14A]/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#C9A14A]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-[#C9A14A] mb-1">Horário de Funcionamento</p>
                  <div className="text-gray-200 space-y-1 text-sm">
                    <p>{OFFICE_INFO.hours.weekdays}</p>
                    <p>{OFFICE_INFO.hours.saturday}</p>
                    <p>{OFFICE_INFO.hours.sunday}</p>
                  </div>
                </div>
              </div>

              {/* Telefone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#C9A14A]/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#C9A14A]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-[#C9A14A] mb-1">Telefone</p>
                  <a
                    href={`tel:${OFFICE_INFO.phone.replace(/\D/g, "")}`}
                    className="text-gray-200 hover:text-[#C9A14A] transition-colors"
                  >
                    {OFFICE_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#C9A14A]/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#C9A14A]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-[#C9A14A] mb-1">E-mail</p>
                  <a
                    href={`mailto:${OFFICE_INFO.email}`}
                    className="text-gray-200 hover:text-[#C9A14A] transition-colors break-all"
                  >
                    {OFFICE_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Benefícios do Atendimento Presencial */}
            <div className="pt-6 border-t border-[#C9A14A]/20">
              <p className="text-sm font-semibold text-[#C9A14A] mb-4">Por que escolher atendimento presencial?</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C9A14A] mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-200">
                    <span className="font-semibold">Segurança:</span> Documentos verificados pessoalmente
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C9A14A] mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-200">
                    <span className="font-semibold">Clareza:</span> Discussão detalhada de cada etapa do processo
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C9A14A] mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-200">
                    <span className="font-semibold">Confiança:</span> Ambiente profissional e organizado
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
