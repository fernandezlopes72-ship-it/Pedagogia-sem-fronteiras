import React from "react";
import { X, Check, ShoppingBag, Eye, Sparkles } from "lucide-react";

export interface KitItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  highlight: string;
  suggestedPrice: string;
  itemsIncluded: string[];
}

interface KitModalProps {
  kit: KitItem | null;
  onClose: () => void;
  onSelectPlan: () => void;
}

export function KitModal({ kit, onClose, onSelectPlan }: KitModalProps) {
  if (!kit) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-purple-100 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar with close button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-purple-50 bg-[#FAF4FF]">
          <div className="flex items-center gap-2">
            <span className="bg-[#E6407F] text-white text-xs font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              {kit.category}
            </span>
            <span className="text-xs font-bold text-[#6E6482]">Visualização do Kit</span>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="w-8 h-8 rounded-full bg-white text-gray-500 hover:text-gray-900 border border-gray-200 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 space-y-5">
          <div className="rounded-2xl overflow-hidden border border-purple-100 bg-[#FAF4FF] flex items-center justify-center shadow-inner">
            <img
              src={kit.image}
              alt={kit.title}
              className="max-h-72 w-auto object-contain mx-auto"
            />
          </div>

          <div>
            <h3 className="text-xl font-black text-[#24163D] font-heading">{kit.title}</h3>
            <p className="mt-1 text-sm text-[#4A3B66] leading-relaxed">{kit.description}</p>
          </div>

          {/* Value callout */}
          <div className="bg-[#F4EEFD] rounded-2xl p-4 border border-[#E9DEFB] flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-[#6E6482] uppercase">Preço sugerido de revenda:</span>
              <div className="text-2xl font-black text-[#5B2BB5] font-heading">{kit.suggestedPrice}</div>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-[#13924F] bg-emerald-100 px-2.5 py-1 rounded-full">
                100% de Lucro Líquido
              </span>
            </div>
          </div>

          {/* What is included */}
          <div>
            <h4 className="text-xs font-black text-[#6E6482] uppercase tracking-wider mb-2">
              O que você recebe pronto para revender:
            </h4>
            <div className="space-y-1.5">
              {kit.itemsIncluded.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#24163D]">
                  <div className="w-4 h-4 rounded-full bg-[#18A866]/20 text-[#13924F] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-5 border-t border-purple-50 bg-[#FAF4FF] flex flex-col gap-2">
          <button
            onClick={() => {
              onClose();
              onSelectPlan();
            }}
            type="button"
            className="w-full bg-[#18A866] hover:bg-[#13924F] text-white font-heading font-black py-3.5 px-4 rounded-full text-base shadow-lg transition-transform transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5" />
            <span>QUERO ACESSO A ESTE E TODOS OS KITS</span>
          </button>
          <p className="text-center text-[11px] font-bold text-[#6E6482]">
            Incluso na licença comercial vitalícia • Pagamento único
          </p>
        </div>
      </div>
    </div>
  );
}
