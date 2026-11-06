import React, { useState, useEffect } from "react";
import { X, Check, Sparkles, ArrowRight, ShieldCheck, Clock, Flame } from "lucide-react";

interface OtoModalProps {
  isOpen: boolean;
  onClose: () => void;
  otoUpgradeUrl: string;
  basicUrl: string;
}

export function OtoModal({ isOpen, onClose, otoUpgradeUrl, basicUrl }: OtoModalProps) {
  const [timeLeft, setTimeLeft] = useState(5 * 60 + 45);

  useEffect(() => {
    if (!isOpen) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timerFormatted = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-[#E6407F] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Urgency Header */}
        <div className="bg-gradient-to-r from-[#24163D] via-[#4A3B66] to-[#24163D] text-white p-5 sm:p-6 text-center">
          <div className="inline-flex items-center gap-1.5 bg-[#E6407F] text-white text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full mb-2">
            <Flame className="w-3.5 h-3.5" />
            <span>Oportunidade Única de Upgrade</span>
          </div>

          <h3 className="font-heading font-black text-xl sm:text-2xl text-white leading-tight">
            ESPERE! LEVE O <span className="text-[#FFD84D]">PREMIUM COMPLETO</span> POR APENAS{" "}
            <span className="text-[#FFD84D]">+R$ 9,90</span>
          </h3>
          <p className="text-xs sm:text-sm text-purple-200 mt-1">
            Receba todos os Kits prontos para revenda + os 3 Bônus exclusivos!
          </p>

          <div className="mt-3 inline-flex items-center gap-2 bg-white/10 border border-white/20 text-xs px-3 py-1 rounded-full text-pink-200">
            <Clock className="w-3.5 h-3.5 text-[#FFD84D]" />
            <span>Oferta expira em: </span>
            <span className="font-mono font-black text-white">{timerFormatted}</span>
          </div>
        </div>

        {/* Body & Value Stack */}
        <div className="p-6">
          <div className="bg-[#FAF4FF] border border-[#E9DEFB] rounded-2xl p-4 text-center">
            <div className="text-xs text-[#6E6482] font-bold">Por uma diferença de apenas:</div>
            <div className="font-heading font-black text-4xl text-[#5B2BB5] my-0.5">
              + R$ 9,90
            </div>
            <div className="text-xs font-bold text-[#18A866] bg-emerald-100 py-1 px-3 rounded-full inline-block">
              Total de apenas R$ 19,90 em pagamento único
            </div>
          </div>

          <div className="mt-5 space-y-2.5">
            <div className="text-xs font-black uppercase tracking-wider text-[#6E6482]">
              Veja tudo o que você desbloqueia:
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#24163D] font-bold">
              <div className="w-4 h-4 rounded-full bg-[#18A866] text-white flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span>Kits organizados e prontos para revenda imediata</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#24163D] font-bold">
              <div className="w-4 h-4 rounded-full bg-[#18A866] text-white flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span>Pack Canva Educacional Editável (capas e certificados)</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#24163D] font-bold">
              <div className="w-4 h-4 rounded-full bg-[#18A866] text-white flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span>Guia Passo a Passo para Revender PLR e faturar no PIX</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#24163D] font-bold">
              <div className="w-4 h-4 rounded-full bg-[#18A866] text-white flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span>Pack de Artes Prontas para Divulgação no WhatsApp e Insta</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#24163D] font-bold">
              <div className="w-4 h-4 rounded-full bg-[#18A866] text-white flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span>Suporte prioritário via WhatsApp</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col gap-3">
            <a
              href={otoUpgradeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-5 rounded-full bg-gradient-to-r from-[#18A866] to-[#13924F] hover:from-[#1fc276] hover:to-[#17a55a] text-white font-heading font-black text-base text-center shadow-lg transition-transform transform active:scale-95 flex items-center justify-center gap-2"
            >
              <span>SIM, QUERO O PREMIUM POR +R$9,90</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href={basicUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-xs text-[#6E6482] hover:text-[#24163D] font-semibold py-1 transition-colors"
            >
              Não, quero continuar com o Básico por R$ 10,00
            </a>
          </div>

          <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-center gap-2 text-[11px] text-[#6E6482]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#18A866]" />
            <span>Garantia de 7 dias incondicional • Pagamento 100% protegido</span>
          </div>
        </div>
      </div>
    </div>
  );
}
