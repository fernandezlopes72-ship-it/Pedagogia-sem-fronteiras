import React from "react";
import { ArrowRight, CheckCircle2, Sparkles, ShieldCheck, Zap } from "lucide-react";

interface FinalCtaSectionProps {
  onCtaClick: () => void;
}

export function FinalCtaSection({ onCtaClick }: FinalCtaSectionProps) {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#24163D] via-[#331C57] to-[#1E1133] text-white relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/10 text-[#FFD84D] font-black text-xs uppercase tracking-wider px-4 py-1.5 rounded-full mb-4 border border-white/10">
          <Sparkles className="w-4 h-4" />
          <span>Sua Nova Fonte de Renda Extra Começa Agora</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-heading max-w-3xl mx-auto leading-tight">
          💰 SEU CATÁLOGO DE{" "}
          <span className="text-[#FFD84D]">+25.000 PRODUTOS</span> PRONTO PARA VENDER!
        </h2>

        <p className="mt-4 sm:mt-5 text-sm sm:text-lg text-purple-200 max-w-2xl mx-auto font-medium leading-relaxed">
          Enquanto outras pessoas passam semanas tentando criar uma atividade do zero, você já começa com um acervo completo, kits organizados para revenda e 3 bônus exclusivos.
        </p>

        {/* CTA Button */}
        <div className="mt-8 flex flex-col items-center">
          <button
            onClick={onCtaClick}
            type="button"
            style={{
              backgroundImage: "linear-gradient(to right, var(--theme-cta, #18A866), var(--theme-cta-hover, #13924F))",
            }}
            className="group inline-flex items-center justify-center gap-3 text-white font-heading font-black text-lg sm:text-2xl px-8 sm:px-14 py-4 sm:py-5 rounded-full shadow-[0_15px_35px_-8px_rgba(19,146,79,0.7)] transition-all duration-200 transform hover:-translate-y-1 active:scale-95 cursor-pointer glow-featured"
          >
            <span>👉 QUERO O PREMIUM + 3 BÔNUS</span>
            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Guarantees */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-bold text-purple-200">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#18A866]" /> Pagamento Único
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-400" /> Acesso Imediato
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Garantia de 7 Dias
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
