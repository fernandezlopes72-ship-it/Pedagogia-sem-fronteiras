import React from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Sparkles, Star, TrendingUp, Smartphone, HeartHandshake } from "lucide-react";

interface HeroSectionProps {
  onCtaClick: () => void;
}

export function HeroSection({ onCtaClick }: HeroSectionProps) {
  return (
    <header className="relative overflow-hidden pt-8 pb-14 sm:pt-12 sm:pb-20 bg-gradient-to-b from-[#F0FDF4] via-[#F6FEF9] to-[#FCFDFD]">
      {/* Decorative blurred background orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-64 bg-emerald-100/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Eyebrow badge */}
        <div
          style={{
            backgroundColor: "var(--theme-surface-light, #F4EEFD)",
            borderColor: "var(--theme-surface-border, #E9DEFB)",
            color: "var(--theme-primary, #7B3FE4)",
          }}
          className="inline-flex items-center gap-2 border font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full shadow-sm mb-5 transform transition hover:scale-105"
        >
          <Sparkles className="w-4 h-4 text-[var(--theme-accent,#E6407F)]" />
          <span>Oportunidade de Renda Extra Lucrativa</span>
          <span
            style={{ backgroundColor: "var(--theme-primary-light, #7B3FE4)" }}
            className="hidden sm:inline text-white text-[10px] px-2 py-0.5 rounded-full font-black uppercase"
          >
            Licença PLR Inclusa
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#24163D] tracking-tight leading-[1.15] max-w-4xl mx-auto font-heading">
          RECEBA MAIS DE 25 MIL MATERIAIS PEDAGÓGICOS{" "}
          <span
            style={{
              backgroundImage: "linear-gradient(to right, var(--theme-primary, #7B3FE4), var(--theme-primary-light, #A838D6), var(--theme-accent, #E6407F))",
            }}
            className="text-transparent bg-clip-text"
          >
            PRONTOS PARA REVENDER!
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-5 text-base sm:text-xl text-[#4A3B66] max-w-2xl mx-auto font-medium leading-relaxed">
          Monte kits digitais pelo celular, no seu horário livre e{" "}
          <strong className="text-[#24163D] font-extrabold underline decoration-[#FFD84D] decoration-4 underline-offset-4">
            sem precisar aparecer em vídeos
          </strong>
          . Você vende o arquivo e o cliente imprime em casa!
        </p>

        {/* Hero Image Showcase with floating conversion badges */}
        <div className="relative mt-8 sm:mt-10 max-w-3xl mx-auto">
          {/* Subtle glow behind image */}
          <div className="absolute inset-4 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-3xl blur-2xl -z-10" />

          <div className="relative rounded-2xl overflow-hidden bg-white/70 p-2 sm:p-3 border border-purple-100 shadow-2xl">
            <picture>
              <source srcSet="/IMAGES/hero-renda-kits-900.webp" media="(max-width: 640px)" />
              <img
                src="/IMAGES/hero-renda-kits-v3.webp"
                alt="Catálogo completo de kits pedagógicos prontos para revenda no celular e tablet"
                className="w-full h-auto rounded-xl object-cover drop-shadow-md transition-transform duration-500 hover:scale-[1.01]"
                loading="eager"
                fetchPriority="high"
                width={1536}
                height={964}
              />
            </picture>

            {/* Floating Trust Badge 1 (Left on desktop) */}
            <div className="hidden sm:flex absolute -bottom-3 -left-3 bg-white/95 backdrop-blur-sm border border-purple-200/80 rounded-2xl p-3 shadow-xl items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-[#7B3FE4]">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#6E6482]">Trabalho 100% Digital</div>
                <div className="text-sm font-black text-[#24163D]">Venda pelo Celular</div>
              </div>
            </div>

            {/* Floating Trust Badge 2 (Right on desktop) */}
            <div className="hidden sm:flex absolute -top-3 -right-3 bg-white/95 backdrop-blur-sm border border-pink-200/80 rounded-2xl p-3 shadow-xl items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center text-[#E6407F]">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#6E6482]">Margem de Lucro</div>
                <div className="text-sm font-black text-[#13924F]">100% Para Você</div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Pill Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
          <span className="inline-flex items-center gap-1.5 bg-white border border-purple-100 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold text-[#4A3B66] shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-[#18A866]" />
            Sem gastar com impressora
          </span>
          <span className="inline-flex items-center gap-1.5 bg-white border border-purple-100 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold text-[#4A3B66] shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-[#18A866]" />
            Sem estoque e sem frete
          </span>
          <span className="inline-flex items-center gap-1.5 bg-white border border-purple-100 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold text-[#4A3B66] shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-[#18A866]" />
            Acesso vitalício imediato
          </span>
        </div>

        {/* Call to Action Button */}
        <div className="mt-8 flex flex-col items-center">
          <button
            onClick={onCtaClick}
            type="button"
            style={{
              backgroundImage: "linear-gradient(to right, var(--theme-cta, #18A866), var(--theme-cta-hover, #13924F))",
            }}
            className="group relative inline-flex items-center justify-center gap-3 text-white font-heading font-black text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-full shadow-[0_14px_30px_-8px_rgba(19,146,79,0.55)] transition-all duration-200 transform hover:-translate-y-1 active:scale-95 cursor-pointer glow-featured"
          >
            <span>QUERO COMEÇAR MINHA RENDA EXTRA</span>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Social Proof Star Rating */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-bold text-[#4A3B66]">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-[#24163D] font-extrabold">4.9/5</span>
            <span className="text-[#6E6482]">| Mais de 4.800 pessoas já garantiram seu acesso</span>
          </div>

          {/* Guarantee and Security micro-badges */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-[#6E6482]">
            <span className="inline-flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-[var(--theme-cta,#18A866)]" /> Compra Segura
            </span>
            <span className="inline-flex items-center gap-1">
              <Zap className="w-4 h-4 text-amber-500" /> Envio Imediato no E-mail
            </span>
            <span className="inline-flex items-center gap-1">
              <HeartHandshake className="w-4 h-4 text-[var(--theme-primary,#7B3FE4)]" /> Garantia de 7 Dias
            </span>
          </div>
        </div>

        {/* 4 Quick Impact Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-purple-100/80 shadow-md text-center transform transition hover:translate-y-[-2px]">
            <span
              style={{ color: "var(--theme-primary, #5B2BB5)" }}
              className="block font-heading font-black text-2xl sm:text-3xl"
            >
              +25.000
            </span>
            <span className="text-xs sm:text-sm font-bold text-[#6E6482]">
              Materiais Prontos
            </span>
          </div>
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-purple-100/80 shadow-md text-center transform transition hover:translate-y-[-2px]">
            <span
              style={{ color: "var(--theme-cta, #18A866)" }}
              className="block font-heading font-black text-2xl sm:text-3xl"
            >
              100%
            </span>
            <span className="text-xs sm:text-sm font-bold text-[#6E6482]">
              Lucro Todo Seu
            </span>
          </div>
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-purple-100/80 shadow-md text-center transform transition hover:translate-y-[-2px]">
            <span
              style={{ color: "var(--theme-accent, #E6407F)" }}
              className="block font-heading font-black text-2xl sm:text-3xl"
            >
              Zero
            </span>
            <span className="text-xs sm:text-sm font-bold text-[#6E6482]">
              Custo com Frete
            </span>
          </div>
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-purple-100/80 shadow-md text-center transform transition hover:translate-y-[-2px]">
            <span className="block font-heading font-black text-2xl sm:text-3xl text-amber-500">
              Vitalício
            </span>
            <span className="text-xs sm:text-sm font-bold text-[#6E6482]">
              Sem Mensalidade
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
