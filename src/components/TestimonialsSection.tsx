import React, { useState } from "react";
import { MessageSquare, Star, CheckCircle, ZoomIn, X } from "lucide-react";

export function TestimonialsSection() {
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  const testimonials = [
    {
      name: "Juliana Mendes",
      role: "Mãe e Revendedora",
      city: "Campinas - SP",
      text: "Eu nunca tinha vendido nada na internet. Postei no status do WhatsApp para as outras mães da escolinha do meu filho e no mesmo dia vendi 4 kits de alfabetização! O retorno foi no mesmo dia.",
      rating: 5,
      profit: "R$ 380 na 1ª semana",
    },
    {
      name: "Carla Silveira",
      role: "Professora de Educação Infantil",
      city: "Belo Horizonte - MG",
      text: "Os materiais são lindos e de extrema qualidade. Eu uso com meus alunos particulares e ainda montei um pacote para as famílias do bairro. Valeu cada centavo do investimento!",
      rating: 5,
      profit: "R$ 640/mês de renda extra",
    },
    {
      name: "Mariana Costa",
      role: "Dona de Casa",
      city: "Curitiba - PR",
      text: "O melhor de tudo é que você não precisa de impressora nem de estoque. A pessoa me faz o PIX e eu mando o arquivo na mesma hora. Simples, rápido e honesto.",
      rating: 5,
      profit: "R$ 890 no 1º mês",
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-white via-[#FAF4FF] to-white border-t border-purple-100" id="depoimentos">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-[#F4EEFD] text-[#5B2BB5] font-black text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3 shadow-sm">
            <MessageSquare className="w-4 h-4 text-[#7B3FE4]" />
            <span>Resultados e Prova Social</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#24163D] tracking-tight font-heading">
            💬 Veja o Que Dizem Sobre{" "}
            <span className="text-[#5B2BB5]">Nossos Materiais!</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6E6482] max-w-xl mx-auto font-medium">
            Mensagens reais de revendedoras que já estão faturando suas primeiras vendas:
          </p>
        </div>

        {/* Original Depoimentos Graphic with Interactive Zoom */}
        <div className="mt-10 max-w-3xl mx-auto relative group">
          <div
            onClick={() => setIsZoomOpen(true)}
            className="cursor-pointer rounded-2xl overflow-hidden bg-white border border-purple-200/80 shadow-xl transition-all duration-300 hover:shadow-2xl relative"
          >
            <img
              src="/IMAGES/depoimentos.webp"
              alt="Mensagens de clientes contando suas primeiras vendas com os kits de Pedagogia sem fronteiras"
              className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-300"
              loading="lazy"
              width={1536}
              height={1024}
            />
            <div className="absolute inset-0 bg-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="bg-white/95 text-[#24163D] font-bold text-xs sm:text-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                <ZoomIn className="w-4 h-4 text-[#5B2BB5]" />
                Clique para ampliar os depoimentos
              </span>
            </div>
          </div>
        </div>

        {/* Testimonials Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-purple-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-[#18A866] bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> Verificada
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#4A3B66] leading-relaxed italic">
                  "{t.text}"
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-purple-50 flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-black text-sm text-[#24163D]">{t.name}</h4>
                  <span className="text-[11px] text-[#6E6482] block">{t.role} • {t.city}</span>
                </div>
                <span className="text-[11px] font-black text-[#5B2BB5] bg-purple-50 px-2.5 py-1 rounded-lg">
                  {t.profit}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Zoom Lightbox Modal */}
      {isZoomOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsZoomOpen(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh] overflow-auto bg-white rounded-2xl p-2 shadow-2xl">
            <button
              onClick={() => setIsZoomOpen(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 text-gray-800 flex items-center justify-center shadow-lg hover:bg-white"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src="/IMAGES/depoimentos.webp"
              alt="Depoimentos ampliados"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
