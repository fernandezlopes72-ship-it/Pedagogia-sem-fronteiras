import React, { useState, useEffect } from "react";
import { CheckCircle2, X } from "lucide-react";

interface SaleNotification {
  name: string;
  city: string;
  plan: string;
  time: string;
}

const SALES: SaleNotification[] = [
  { name: "Ana Paula S.", city: "São Paulo - SP", plan: "Plano Premium + 3 Bônus", time: "há 2 minutos" },
  { name: "Mariana L.", city: "Belo Horizonte - MG", plan: "Plano Premium + 3 Bônus", time: "há 4 minutos" },
  { name: "Juliana R.", city: "Curitiba - PR", plan: "Plano Premium + 3 Bônus", time: "há 7 minutos" },
  { name: "Renata F.", city: "Rio de Janeiro - RJ", plan: "Plano Premium + 3 Bônus", time: "há 9 minutos" },
  { name: "Camila V.", city: "Porto Alegre - RS", plan: "Plano Premium + 3 Bônus", time: "há 12 minutos" },
  { name: "Beatriz M.", city: "Brasília - DF", plan: "Plano Premium + 3 Bônus", time: "há 15 minutos" },
];

export function RecentSalesNotification() {
  const [currentSale, setCurrentSale] = useState<SaleNotification | null>(null);
  const [visible, setVisible] = useState(false);
  const [closedManually, setClosedManually] = useState(false);

  useEffect(() => {
    if (closedManually) return;

    let index = 0;
    // Show first toast after 4 seconds
    const initialTimeout = setTimeout(() => {
      setCurrentSale(SALES[0]);
      setVisible(true);
    }, 4000);

    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        index = (index + 1) % SALES.length;
        setCurrentSale(SALES[index]);
        setVisible(true);
      }, 800);
    }, 14000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [closedManually]);

  if (!visible || !currentSale || closedManually) return null;

  return (
    <div className="fixed bottom-20 sm:bottom-6 left-4 z-40 max-w-xs sm:max-w-sm bg-white/95 backdrop-blur-md border border-purple-200/90 rounded-2xl p-3 shadow-xl flex items-center gap-3 animate-in slide-in-from-bottom-5 duration-300">
      <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#13924F] flex items-center justify-center shrink-0">
        <CheckCircle2 className="w-6 h-6" />
      </div>

      <div className="flex-1 min-w-0 pr-1">
        <div className="text-xs font-bold text-[#24163D] truncate">
          <strong>{currentSale.name}</strong> ({currentSale.city})
        </div>
        <div className="text-[11px] font-semibold text-[#5B2BB5] truncate">
          comprou o {currentSale.plan}
        </div>
        <div className="text-[10px] text-[#6E6482] mt-0.5">{currentSale.time} • Compra verificada</div>
      </div>

      <button
        onClick={() => setClosedManually(true)}
        type="button"
        className="w-5 h-5 text-gray-400 hover:text-gray-700 flex items-center justify-center cursor-pointer shrink-0"
        aria-label="Fechar"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
