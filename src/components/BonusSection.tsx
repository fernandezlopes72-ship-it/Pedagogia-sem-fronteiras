import React from "react";
import { Gift, Sparkles, Check, ArrowRight } from "lucide-react";

interface BonusSectionProps {
  onCtaClick: () => void;
}

export function BonusSection({ onCtaClick }: BonusSectionProps) {
  const bonuses = [
    {
      badge: "BÔNUS 1",
      image: "/IMAGES/bonus-2.webp",
      title: "Pack Canva Educacional Editável",
      originalPrice: "R$ 47,00",
      description: "Modelos 100% prontos no Canva para você personalizar capas atraentes para os seus kits, certificados, etiquetas infantis e colocar a sua própria logo ou marca com poucos cliques.",
      features: [
        "Templates prontos para capas de apostilas",
        "Etiquetas escolares e certificados infantis",
        "Totalmente editável pelo celular ou computador",
      ],
    },
    {
      badge: "BÔNUS 2",
      image: "/IMAGES/bonus-1.webp",
      title: "Guia Completo para Revender PLR",
      originalPrice: "R$ 37,00",
      description: "O roteiro prático do zero às primeiras vendas. Aprenda a separar os materiais em kits de alto valor, precificar, receber pagamentos no PIX e automatizar a entrega para seus clientes.",
      features: [
        "Estratégia de vendas no WhatsApp e grupos",
        "Como cobrar e receber no PIX na hora",
        "Roteiro de mensagens prontas para responder clientes",
      ],
    },
    {
      badge: "BÔNUS 3",
      image: "/IMAGES/bonus-3.webp",
      title: "Pack de Artes Prontas para Divulgação",
      originalPrice: "R$ 27,00",
      description: "Posts, banners e stories profissionais já prontos para divulgar seus kits nas redes sociais. Não perca tempo criando designs: basta salvar e postar para atrair mães e professoras.",
      features: [
        "Artes prontas para feed e stories do Instagram",
        "Criativos para Marketplace do Facebook",
        "Chamadas persuasivas testadas que geram cliques",
      ],
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-[#FFFDFB] via-[#FAF4FF] to-[#FFF5FA] border-t border-purple-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center">
          <div
            style={{
              backgroundColor: "var(--theme-surface-light, #F0FDF4)",
              borderColor: "var(--theme-surface-border, #BBF7D0)",
              color: "var(--theme-accent, #D97706)",
            }}
            className="inline-flex items-center gap-2 border font-black text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3 shadow-sm"
          >
            <Gift className="w-4 h-4" />
            <span>Exclusivo para quem entrar hoje</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#132A22] tracking-tight font-heading">
            E PARA VOCÊ VENDER AINDA MAIS RÁPIDO:{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(to right, var(--theme-accent, #D97706), var(--theme-primary, #065F46))",
              }}
              className="text-transparent bg-clip-text"
            >
              3 BÔNUS EXCLUSIVOS
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6E6482] max-w-xl mx-auto font-medium">
            Ferramentas profissionais para montar, divulgar e acelerar suas primeiras vendas sem complicação.
          </p>
        </div>

        {/* 3 Bonuses Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {bonuses.map((bonus, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl border border-purple-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative group"
            >
              {/* Ribbon */}
              <div
                style={{ backgroundColor: "var(--theme-accent, #D97706)" }}
                className="absolute top-4 left-4 z-10 text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow"
              >
                {bonus.badge}
              </div>

              <div>
                <div className="p-4 sm:p-5 bg-gradient-to-b from-gray-50/60 to-white flex items-center justify-center">
                  <img
                    src={bonus.image}
                    alt={bonus.title}
                    className="w-48 h-48 object-contain rounded-2xl drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-heading font-black text-lg text-[#132A22] leading-tight">
                    {bonus.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#4A3B66] leading-relaxed">
                    {bonus.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-gray-100 space-y-1.5">
                    {bonus.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#132A22] font-semibold">
                        <Check className="w-3.5 h-3.5 text-[var(--theme-cta,#10B981)] stroke-[3] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price Tag Footer */}
              <div
                style={{ backgroundColor: "var(--theme-surface-light, #F0FDF4)" }}
                className="p-4 sm:p-5 border-t border-gray-100 flex items-center justify-between"
              >
                <div>
                  <span className="text-[11px] text-[#6E6482] block">Valor original:</span>
                  <span className="text-sm font-bold text-gray-400 line-through">
                    {bonus.originalPrice}
                  </span>
                </div>
                <div
                  style={{ backgroundColor: "var(--theme-cta, #10B981)" }}
                  className="text-white text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm"
                >
                  Grátis no Premium
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Value Banner */}
        <div
          style={{
            backgroundImage: "linear-gradient(to right, var(--theme-primary, #065F46), var(--theme-primary-light, #059669))",
          }}
          className="mt-10 text-white rounded-3xl p-6 sm:p-8 text-center max-w-2xl mx-auto shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="text-left">
            <span className="text-xs font-black uppercase text-[#FFD84D] tracking-wider block">
              Presente Especial
            </span>
            <div className="text-lg sm:text-xl font-heading font-black mt-0.5">
              Total em Bônus: <span className="line-through opacity-80">R$ 111,00</span>
            </div>
            <span className="text-xs text-emerald-100 block">
              Inclusos gratuitamente ao garantir o Plano Premium
            </span>
          </div>

          <button
            onClick={onCtaClick}
            type="button"
            style={{
              backgroundColor: "var(--theme-accent, #D97706)",
            }}
            className="w-full sm:w-auto hover:brightness-110 text-white font-heading font-black text-sm sm:text-base px-6 py-3.5 rounded-full shadow-lg transition-transform transform active:scale-95 cursor-pointer whitespace-nowrap"
          >
            QUERO MEUS BÔNUS GRÁTIS
          </button>
        </div>
      </div>
    </section>
  );
}
