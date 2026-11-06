import React from "react";
import { Rocket, Calendar, Repeat, Coins, TrendingUp, CheckCircle, ShieldAlert } from "lucide-react";

export function MarketSection() {
  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-[#FFF9F3] to-[#FFF5EB] border-t border-[#F3E6DA]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-[#F4EEFD] text-[#5B2BB5] font-black text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
            <Rocket className="w-4 h-4 text-[#7B3FE4]" />
            <span>A Oportunidade do Mercado Digital</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#132A22] tracking-tight font-heading">
            POR QUE VENDER <span style={{ color: "var(--theme-primary, #065F46)" }}>MATERIAL PEDAGÓGICO?</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6E6482] max-w-2xl mx-auto font-medium">
            É um produto que nunca sai de moda: sempre tem crianças aprendendo e mães ou professoras procurando atividades novas para imprimir.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* Pillar 1 */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#F3E6DA] shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden">
            <div className="w-14 h-14 rounded-2xl bg-[#FFE4E8] text-[#E6407F] flex items-center justify-center font-bold text-2xl mb-5 group-hover:scale-110 transition-transform">
              <Calendar className="w-7 h-7" />
            </div>
            <h3 className="font-heading font-black text-xl text-[#24163D]">
              Procura o Ano Inteiro
            </h3>
            <p className="mt-2 text-sm text-[#4A3B66] leading-relaxed">
              Volta às aulas, alfabetização contínua, reforço escolar, férias e datas comemorativas (Páscoa, Dia das Mães, Festa Junina, Natal). Sempre há demanda aquecida.
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-[#E6407F]">
              <TrendingUp className="w-4 h-4" />
              <span>Demanda constante todo mês</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#F3E6DA] shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden">
            <div className="w-14 h-14 rounded-2xl bg-[#F4EEFD] text-[#5B2BB5] flex items-center justify-center font-bold text-2xl mb-5 group-hover:scale-110 transition-transform">
              <Repeat className="w-7 h-7" />
            </div>
            <h3 className="font-heading font-black text-xl text-[#24163D]">
              Venda o Mesmo Kit 100x
            </h3>
            <p className="mt-2 text-sm text-[#4A3B66] leading-relaxed">
              Você recebe o acervo com direito de revenda (PLR). Você pode vender o mesmo arquivo para 10, 50, 100 ou 1.000 clientes diferentes sem nenhum custo extra.
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-[#5B2BB5]">
              <CheckCircle className="w-4 h-4" />
              <span>Custo de reprodução ZERO</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#F3E6DA] shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden">
            <div className="w-14 h-14 rounded-2xl bg-[#E8F8F0] text-[#13924F] flex items-center justify-center font-bold text-2xl mb-5 group-hover:scale-110 transition-transform">
              <Coins className="w-7 h-7" />
            </div>
            <h3 className="font-heading font-black text-xl text-[#24163D]">
              Sem Custo a Cada Venda
            </h3>
            <p className="mt-2 text-sm text-[#4A3B66] leading-relaxed">
              Não existe estoque parado, risco de prejuízo, embalagem nem frete dos Correios. O dinheiro cai no seu PIX e você envia o PDF pelo WhatsApp.
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-[#13924F]">
              <Coins className="w-4 h-4" />
              <span>100% de margem no seu bolso</span>
            </div>
          </div>
        </div>

        {/* Big Truth Box */}
        <div className="mt-12 bg-[#24163D] text-white rounded-3xl p-6 sm:p-8 text-center max-w-3xl mx-auto shadow-xl border border-purple-900/50">
          <span className="font-heading font-black text-xl sm:text-2xl text-[#FFD84D] block mb-2">
            A Verdade que Ninguém te Conta:
          </span>
          <p className="text-sm sm:text-base text-purple-100 max-w-xl mx-auto leading-relaxed">
            As grandes lojas de materiais educativos faturam milhares de reais todos os meses vendendo exatamente estes mesmos tipos de arquivos em PDF. Agora, você também pode ter o seu próprio catálogo de produtos prontos!
          </p>
        </div>
      </div>
    </section>
  );
}
