import React, { useState } from "react";
import { Calculator, Check, X, Sparkles, TrendingUp, DollarSign } from "lucide-react";

interface ProfitCalculatorProps {
  onCtaClick: () => void;
}

export function ProfitCalculator({ onCtaClick }: ProfitCalculatorProps) {
  const [salesPerDay, setSalesPerDay] = useState(2);
  const [pricePerKit, setPricePerKit] = useState(19.90);

  const monthlyTotal = salesPerDay * pricePerKit * 30;
  const annualTotal = monthlyTotal * 12;

  return (
    <section className="py-14 sm:py-20 bg-[#24163D] text-white relative overflow-hidden" id="contas">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-[#FFD84D] font-black text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3 border border-white/10">
            <Calculator className="w-4 h-4" />
            <span>Simulador de Lucro Interativo</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-heading">
            E SE VOCÊ VENDER <span className="text-[#FFD84D]">TODO DIA?</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-purple-200 max-w-xl mx-auto font-medium">
            Arraste ou clique abaixo para ver o potencial de faturamento mensal dos seus kits pedagógicos digitais:
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <div className="mt-10 bg-white/5 border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-md max-w-3xl mx-auto shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Controls */}
            <div className="space-y-6">
              <div>
                <label className="text-xs sm:text-sm font-bold text-purple-200 block mb-2">
                  Quantas vendas por dia você pretende fazer?
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 5, 10].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setSalesPerDay(num)}
                      className={`flex-1 py-2 rounded-xl font-heading font-black text-sm sm:text-base transition-all cursor-pointer ${
                        salesPerDay === num
                          ? "bg-[#FFD84D] text-[#24163D] shadow-lg scale-105"
                          : "bg-white/10 hover:bg-white/20 text-white"
                      }`}
                    >
                      {num} {num === 1 ? "venda" : "vendas"}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs sm:text-sm font-bold text-purple-200 block mb-2">
                  Preço sugerido por kit vendido:
                </label>
                <div className="flex gap-2">
                  {[
                    { label: "R$ 14,90", val: 14.90 },
                    { label: "R$ 19,90", val: 19.90 },
                    { label: "R$ 29,90", val: 29.90 },
                  ].map((p) => (
                    <button
                      key={p.val}
                      type="button"
                      onClick={() => setPricePerKit(p.val)}
                      className={`flex-1 py-2 rounded-xl font-heading font-black text-xs sm:text-sm transition-all cursor-pointer ${
                        pricePerKit === p.val
                          ? "bg-[#E6407F] text-white shadow-lg scale-105"
                          : "bg-white/10 hover:bg-white/20 text-white"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-xs text-purple-300">
                💡 <span className="font-bold text-white">Lembre-se:</span> Quem define o preço final de cada kit é você! 100% do lucro vai para a sua conta.
              </div>
            </div>

            {/* Simulated Result Box */}
            <div className="bg-gradient-to-br from-[#5B2BB5] to-[#7B3FE4] rounded-2xl p-6 text-center border border-purple-400/30 shadow-xl flex flex-col justify-center items-center">
              <span className="text-xs font-black uppercase tracking-wider text-purple-200 bg-white/10 px-3 py-1 rounded-full">
                Lucro Líquido Estimado
              </span>

              <div className="mt-4">
                <span className="text-xs font-bold text-purple-200 block">Em 30 dias você pode lucrar:</span>
                <span className="font-heading font-black text-3xl sm:text-5xl text-[#FFD84D] tracking-tight block mt-1 drop-shadow-sm">
                  {monthlyTotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                </span>
                <span className="text-xs text-purple-200 font-semibold mt-1 block">
                  ({(salesPerDay * pricePerKit).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} por dia de lucro limpo)
                </span>
              </div>

              <div className="mt-5 pt-4 border-t border-purple-400/20 w-full text-center">
                <span className="text-[11px] text-purple-200 uppercase font-black tracking-wider">
                  Projeção anual de renda extra:
                </span>
                <span className="font-heading font-black text-lg text-white block mt-0.5">
                  {annualTotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} / ano
                </span>
              </div>
            </div>
          </div>

          <p className="mt-5 text-[11px] text-purple-300 text-center">
            *Exemplo ilustrativo. O preço é definido por você e os resultados dependem da sua dedicação e divulgação. Não há garantia de ganhos fixos.
          </p>
        </div>

        {/* Comparison Table ("Criar do zero" vs "Com Pedagogia sem fronteiras") */}
        <div className="mt-14 max-w-4xl mx-auto">
          <h3 className="text-center font-heading font-black text-xl sm:text-2xl text-white mb-6">
            Compare o seu caminho para lucrar:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* The Hard Way */}
            <div className="bg-white/5 border border-red-500/30 rounded-3xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4 text-red-300 font-heading font-black text-lg">
                <div className="w-7 h-7 rounded-full bg-red-500/20 flex items-center justify-center text-red-400">
                  <X className="w-4 h-4 stroke-[3]" />
                </div>
                <span>Criar um Produto do Zero Sozinho</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-purple-200">
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5 font-bold">✕</span>
                  <span>Semanas gastas criando e diagramando cada folha de atividade</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5 font-bold">✕</span>
                  <span>Pagar mensalidades de softwares caros ou contratar designers</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5 font-bold">✕</span>
                  <span>Catálogo pequeno e poucas opções para oferecer aos clientes</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5 font-bold">✕</span>
                  <span>Demora meses até conseguir montar a primeira oferta e vender</span>
                </li>
              </ul>
            </div>

            {/* The Smart Way (Pedagogia sem fronteiras) */}
            <div className="bg-gradient-to-b from-purple-900/60 to-purple-800/40 border-2 border-[#18A866] rounded-3xl p-6 backdrop-blur-sm shadow-xl relative">
              <div className="absolute -top-3 right-6 bg-[#18A866] text-white text-[10px] font-black uppercase px-3 py-1 rounded-full shadow">
                Caminho Inteligente
              </div>
              <div className="flex items-center gap-2 mb-4 text-emerald-300 font-heading font-black text-lg">
                <div className="w-7 h-7 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <span>Com Pedagogia sem fronteiras (PLR)</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-white">
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#18A866] text-white flex items-center justify-center shrink-0 mt-0.5 font-bold">✓</span>
                  <span><strong>+25.000 materiais prontos</strong> liberados de imediato no seu e-mail</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#18A866] text-white flex items-center justify-center shrink-0 mt-0.5 font-bold">✓</span>
                  <span><strong>Licença de revenda inclusa</strong>: você fica com 100% de cada venda</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#18A866] text-white flex items-center justify-center shrink-0 mt-0.5 font-bold">✓</span>
                  <span>Dezenas de kits temáticos para todas as idades infantis</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#18A866] text-white flex items-center justify-center shrink-0 mt-0.5 font-bold">✓</span>
                  <span><strong>Comece a divulgar e vender no mesmo dia</strong> em que entrar!</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
