import React, { useState, useEffect } from "react";
import { Sparkles, Clock, ShieldCheck } from "lucide-react";

export function TopAlertBar() {
  const [timeLeft, setTimeLeft] = useState(14 * 60 + 32);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 15 * 60));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return (
    <div
      style={{ backgroundColor: "var(--theme-topbar, #24163D)" }}
      className="text-white text-xs sm:text-sm font-bold py-2.5 px-3 sticky top-0 z-40 border-b border-white/10 shadow-sm backdrop-blur-md transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center">
        <span className="inline-flex items-center gap-1.5 text-[#FFD84D]">
          <Sparkles className="w-4 h-4 animate-pulse text-[#FFD84D]" />
          <span>SUA OPORTUNIDADE DE RENDA EXTRA EM CASA</span>
        </span>
        <span className="hidden sm:inline text-purple-300">•</span>
        <span className="inline-flex items-center gap-1 text-pink-300">
          <Clock className="w-3.5 h-3.5" />
          <span>Licença PLR inclusa hoje:</span>
          <span className="bg-pink-600/30 text-pink-200 px-2 py-0.5 rounded font-mono font-black border border-pink-500/30">
            {formattedTime}
          </span>
        </span>
        <span className="hidden md:inline text-purple-300">•</span>
        <span className="hidden md:inline-flex items-center gap-1 text-emerald-300 font-semibold">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          Pagamento Único • Sem Mensalidade
        </span>
      </div>
    </div>
  );
}
