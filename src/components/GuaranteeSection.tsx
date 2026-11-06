import React from "react";
import { ShieldCheck, Lock, CheckCircle2, RotateCcw } from "lucide-react";

export function GuaranteeSection() {
  return (
    <section className="py-14 sm:py-20 bg-white border-t border-purple-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        {/* Seal Icon */}
        <div className="w-20 h-20 mx-auto rounded-3xl bg-[#E8F8F0] text-[#18A866] flex items-center justify-center shadow-lg border-2 border-emerald-200 mb-6 transform transition hover:scale-110">
          <ShieldCheck className="w-12 h-12 stroke-[2.2]" />
        </div>

        {/* Title */}
        <h2 className="font-heading font-black text-2xl sm:text-4xl text-[#24163D] tracking-tight">
          Garantia Blindada de{" "}
          <span className="text-[#18A866]">7 Dias Incondicional</span>
        </h2>

        {/* Description */}
        <p className="mt-4 text-sm sm:text-base text-[#4A3B66] leading-relaxed font-medium">
          Acesse a plataforma, baixe os materiais, confira os kits e a licença comercial PLR. Se por qualquer motivo você achar que não valeu a pena ou se arrepender,{" "}
          <strong className="text-[#24163D] font-extrabold">devolvemos 100% do seu dinheiro</strong> com apenas um e-mail ou mensagem no WhatsApp. Sem perguntas, sem letras miúdas e sem burocracia.
        </p>

        {/* Reassurance Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          <span className="inline-flex items-center gap-1.5 bg-[#FAF4FF] text-[#5B2BB5] border border-[#E9DEFB] px-4 py-2 rounded-full text-xs sm:text-sm font-bold shadow-sm">
            <Lock className="w-4 h-4 text-[#7B3FE4]" /> Pagamento 100% Seguro
          </span>
          <span className="inline-flex items-center gap-1.5 bg-[#FAF4FF] text-[#5B2BB5] border border-[#E9DEFB] px-4 py-2 rounded-full text-xs sm:text-sm font-bold shadow-sm">
            <RotateCcw className="w-4 h-4 text-[#18A866]" /> Risco Zero Para Você
          </span>
          <span className="inline-flex items-center gap-1.5 bg-[#FAF4FF] text-[#5B2BB5] border border-[#E9DEFB] px-4 py-2 rounded-full text-xs sm:text-sm font-bold shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-[#E6407F]" /> Acesso Imediato
          </span>
        </div>
      </div>
    </section>
  );
}
