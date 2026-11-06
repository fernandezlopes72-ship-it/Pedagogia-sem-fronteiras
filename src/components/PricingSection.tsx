import React from "react";
import { Check, X, ShieldCheck, Zap, Sparkles, Star, ArrowRight, Lock } from "lucide-react";

interface PricingSectionProps {
  onSelectBasic: () => void;
  premiumCheckoutUrl: string;
}

export function PricingSection({ onSelectBasic, premiumCheckoutUrl }: PricingSectionProps) {
  return (
    <section className="py-14 sm:py-24 bg-gradient-to-b from-[#F0FDF4] via-[#F6FEF9] to-white" id="planos">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center">
          <div
            style={{
              backgroundColor: "var(--theme-surface-light, #F0FDF4)",
              borderColor: "var(--theme-surface-border, #BBF7D0)",
              color: "var(--theme-primary, #065F46)",
            }}
            className="inline-flex items-center gap-2 border font-black text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-[var(--theme-accent,#D97706)]" />
            <span>Valores promocionais por tempo limitado</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#132A22] tracking-tight font-heading">
            COMECE SUA <span style={{ color: "var(--theme-primary, #065F46)" }}>RENDA EXTRA</span> AINDA HOJE
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6E6482] max-w-xl mx-auto font-medium">
            Pagamento único, sem mensalidades nem surpresas. Acesso imediato liberado no seu e-mail.
          </p>
        </div>

        {/* Pricing Cards Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto items-stretch">
          {/* Plano Básico */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-purple-100 shadow-md flex flex-col justify-between relative">
            <div>
              <div className="inline-block bg-gray-100 text-gray-700 text-xs font-black uppercase px-3 py-1 rounded-full mb-3">
                Plano Inicial
              </div>
              <h3 className="font-heading font-black text-2xl text-[#24163D]">Plano Básico</h3>
              <p className="text-xs text-[#6E6482] mt-1">Para quem quer apenas os arquivos soltos.</p>

              {/* Price */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <span className="text-xs text-gray-400 font-bold block">
                  De <span className="line-through">R$ 67,00</span> por apenas:
                </span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="font-heading font-black text-4xl sm:text-5xl text-[#24163D]">
                    R$ 10<span className="text-2xl">,00</span>
                  </span>
                  <span className="text-xs font-bold text-[#6E6482]">pagamento único</span>
                </div>
              </div>

              {/* Features list */}
              <ul className="mt-6 space-y-3 text-xs sm:text-sm">
                <li className="flex items-center gap-2.5 text-[#24163D] font-semibold">
                  <Check className="w-4 h-4 text-[#18A866] stroke-[3] shrink-0" />
                  <span>+25.000 materiais pedagógicos em PDF</span>
                </li>
                <li className="flex items-center gap-2.5 text-[#24163D] font-semibold">
                  <Check className="w-4 h-4 text-[#18A866] stroke-[3] shrink-0" />
                  <span>Licença PLR para revenda comercial</span>
                </li>
                <li className="flex items-center gap-2.5 text-[#24163D] font-semibold">
                  <Check className="w-4 h-4 text-[#18A866] stroke-[3] shrink-0" />
                  <span>Acesso vitalício e envio imediato</span>
                </li>
                <li className="flex items-center gap-2.5 text-gray-400 line-through">
                  <X className="w-4 h-4 text-gray-300 stroke-[3] shrink-0" />
                  <span>Kits organizados e prontos para revenda</span>
                </li>
                <li className="flex items-center gap-2.5 text-gray-400 line-through">
                  <X className="w-4 h-4 text-gray-300 stroke-[3] shrink-0" />
                  <span>3 bônus exclusivos (R$ 111 em valor)</span>
                </li>
                <li className="flex items-center gap-2.5 text-gray-400 line-through">
                  <X className="w-4 h-4 text-gray-300 stroke-[3] shrink-0" />
                  <span>Atualizações constantes de novos materiais</span>
                </li>
                <li className="flex items-center gap-2.5 text-gray-400 line-through">
                  <X className="w-4 h-4 text-gray-300 stroke-[3] shrink-0" />
                  <span>Suporte prioritário via WhatsApp</span>
                </li>
              </ul>
            </div>

            {/* Button */}
            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col gap-3">
              <button
                type="button"
                onClick={onSelectBasic}
                className="w-full py-4 px-6 rounded-full border-2 border-[#24163D] text-[#24163D] hover:bg-[#24163D] hover:text-white font-heading font-black text-base transition-all duration-200 cursor-pointer shadow-sm active:scale-95 text-center"
              >
                Quero o Básico por R$ 10
              </button>

              <div className="flex items-center justify-center gap-3 text-[11px] font-bold text-[#6E6482]">
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-[#18A866]" /> Compra Segura
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-amber-500" /> Acesso Imediato
                </span>
              </div>
            </div>
          </div>

          {/* Plano Premium (Featured / High Converting) */}
          <div
            style={{
              borderColor: "var(--theme-primary-light, #7B3FE4)",
              background: "linear-gradient(to bottom, #ffffff, var(--theme-surface-light, #FAF4FF))",
            }}
            className="rounded-3xl p-6 sm:p-8 border-2 shadow-2xl flex flex-col justify-between relative transform lg:-translate-y-2 glow-featured"
          >
            {/* Best Seller Ribbon */}
            <div
              style={{
                backgroundImage: "linear-gradient(to right, var(--theme-accent, #E6407F), var(--theme-primary-light, #7B3FE4))",
              }}
              className="absolute -top-4 left-1/2 -translate-x-1/2 text-white text-xs font-black uppercase px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap"
            >
              <Star className="w-3.5 h-3.5 fill-yellow-300 text-yellow-300" />
              <span>97% ESCOLHEM O PLANO PREMIUM</span>
            </div>

            <div>
              <div
                style={{
                  backgroundColor: "var(--theme-surface-light, #F4EEFD)",
                  color: "var(--theme-primary, #5B2BB5)",
                }}
                className="inline-block text-xs font-black uppercase px-3 py-1 rounded-full mb-3 mt-2"
              >
                Recomendado & Mais Completo
              </div>
              <h3 className="font-heading font-black text-3xl text-[#24163D]">
                Plano Premium
              </h3>
              <p
                style={{ color: "var(--theme-primary, #5B2BB5)" }}
                className="text-xs font-bold mt-1"
              >
                Tudo pronto para você começar a lucrar ainda hoje!
              </p>

              {/* Price & Savings */}
              <div className="mt-6 pt-6 border-t border-purple-100">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-bold">
                    De <span className="line-through">R$ 197,00</span> por apenas:
                  </span>
                  <span
                    style={{ backgroundColor: "var(--theme-accent, #E6407F)" }}
                    className="text-[11px] font-black text-white px-2.5 py-0.5 rounded-full uppercase"
                  >
                    Economize R$ 169,10
                  </span>
                </div>
                <div className="flex items-baseline gap-1 mt-1">
                  <span
                    style={{ color: "var(--theme-primary, #5B2BB5)" }}
                    className="font-heading font-black text-5xl sm:text-6xl"
                  >
                    R$ 27<span className="text-2xl">,90</span>
                  </span>
                  <span className="text-xs font-bold text-[#6E6482]">pagamento único</span>
                </div>
              </div>

              {/* Features list */}
              <ul className="mt-6 space-y-3 text-xs sm:text-sm">
                <li className="flex items-center gap-2.5 text-[#24163D] font-bold">
                  <div className="w-4 h-4 rounded-full bg-[#18A866] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span><strong>+25.000 materiais pedagógicos</strong> em PDF</span>
                </li>
                <li className="flex items-center gap-2.5 text-[#24163D] font-bold">
                  <div className="w-4 h-4 rounded-full bg-[#18A866] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span><strong>Licença PLR vitalícia</strong> para revenda comercial (100% seu)</span>
                </li>
                <li className="flex items-center gap-2.5 text-[#24163D] font-bold">
                  <div className="w-4 h-4 rounded-full bg-[#18A866] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span><strong className="text-[#5B2BB5]">Kits prontos e separados por tema e idade</strong></span>
                </li>
                <li className="flex items-center gap-2.5 text-[#24163D] font-bold">
                  <div className="w-4 h-4 rounded-full bg-[#18A866] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Acesso vitalício e envio imediato no seu e-mail</span>
                </li>
                <li className="flex items-center gap-2.5 text-[#24163D] font-bold">
                  <div className="w-4 h-4 rounded-full bg-[#18A866] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Atualizações constantes incluídas sem pagar mais nada</span>
                </li>
                <li className="flex items-center gap-2.5 text-[#24163D] font-bold">
                  <div className="w-4 h-4 rounded-full bg-[#18A866] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Suporte prioritário via WhatsApp</span>
                </li>
              </ul>

              {/* Bonus Highlight Box */}
              <div className="mt-5 bg-[#FAF4FF] border border-[#E9DEFB] rounded-2xl p-4 text-xs">
                <div className="font-heading font-black text-[#E6407F] text-sm flex items-center gap-1.5 mb-2">
                  <span>🎁 + 3 BÔNUS EXCLUSIVOS (<s>R$ 111</s> GRÁTIS):</span>
                </div>
                <div className="space-y-1 text-[#24163D] font-semibold">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#7B3FE4]">★</span> Pack Canva Educacional Editável
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#7B3FE4]">★</span> Guia Completo para Revender PLR
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#7B3FE4]">★</span> Pack de Artes Prontas para Divulgação
                  </div>
                </div>
              </div>
            </div>

            {/* Premium CTA Button */}
            <div className="mt-8 pt-6 border-t border-purple-100 flex flex-col gap-3">
              <a
                href={premiumCheckoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundImage: "linear-gradient(to right, var(--theme-cta, #18A866), var(--theme-cta-hover, #13924F))",
                }}
                className="w-full py-4 px-6 rounded-full text-white font-heading font-black text-lg transition-all duration-200 cursor-pointer shadow-[0_10px_25px_-5px_rgba(19,146,79,0.5)] active:scale-95 text-center flex items-center justify-center gap-2"
              >
                <span>QUERO O PREMIUM + 3 BÔNUS</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] font-bold text-[#4A3B66]">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#18A866]" /> Compra 100% Segura
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-amber-500" /> Liberação Imediata
                </span>
                <span>•</span>
                <span className="text-emerald-700 font-extrabold">PIX ou Cartão</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
