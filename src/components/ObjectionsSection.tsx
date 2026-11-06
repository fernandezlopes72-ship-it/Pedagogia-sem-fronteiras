import React from "react";
import { Check, HelpCircle, Sparkles, UserCheck, VideoOff, Clock, LayoutGrid, Printer } from "lucide-react";

export function ObjectionsSection() {
  const objections = [
    {
      icon: UserCheck,
      emoji: "🙋‍♀️",
      color: "bg-purple-100 text-[#7B3FE4]",
      question: "“Mas eu não trabalho com educação nem sou professora...”",
      answer: "Você não precisa ter nenhuma formação na área! Os materiais já estão todos criados por especialistas. O seu único papel é selecionar as atividades em PDF e enviar o link para os compradores pelo WhatsApp ou redes sociais.",
    },
    {
      icon: VideoOff,
      emoji: "📱",
      color: "bg-pink-100 text-[#E6407F]",
      question: "“Nunca vendi nada pela internet e tenho vergonha de gravar vídeos...”",
      answer: "Você não precisa aparecer nem gravar nenhum vídeo! Nós entregamos artes e roteiros prontos. Basta postar em grupos de mães, Marketplace do Facebook e WhatsApp. As pessoas procuram por necessidade dos filhos e alunos.",
    },
    {
      icon: Clock,
      emoji: "⏰",
      color: "bg-amber-100 text-amber-600",
      question: "“Tenho pouco tempo livre no meu dia...”",
      answer: "Não exige rotina fixa! Você pode dedicar apenas 20 a 30 minutos por dia enquanto descansa ou cuida de casa. Como os kits já estão prontos, basta enviar o arquivo digital quando alguém fechar uma compra.",
    },
    {
      icon: LayoutGrid,
      emoji: "🎨",
      color: "bg-emerald-100 text-[#13924F]",
      question: "“Não sei mexer em programas de design nem criar atividades...”",
      answer: "Você não terá que desenhar ou diagramar nenhuma folha do zero! As mais de 25.000 atividades já estão totalmente prontas, ilustradas e formatadas em alta resolução prontas para imprimir.",
    },
    {
      icon: Printer,
      emoji: "🖨️",
      color: "bg-blue-100 text-blue-600",
      question: "“Vou precisar comprar impressora ou tinta?”",
      answer: "Absolutamente não! O negócio é 100% digital. Você recebe o dinheiro via PIX e envia o link do arquivo digital (PDF). Quem compra faz a impressão em casa ou na papelaria mais próxima.",
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#FFF9F3] border-y border-[#F3E6DA]" id="duvidas-comuns">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-[#FFE4E8] text-[#E6407F] font-black text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
            <HelpCircle className="w-4 h-4" />
            <span>Fácil, Rápido e Seguro</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#24163D] tracking-tight font-heading">
            GOSTOU DA IDEIA?{" "}
            <span className="text-[#5B2BB5]">AQUI ESTÃO AS DÚVIDAS MAIS COMUNS:</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6E6482] max-w-xl mx-auto font-medium">
            Veja por que qualquer pessoa consegue ter uma renda extra com materiais pedagógicos digitais:
          </p>
        </div>

        {/* Objections Cards Grid */}
        <div className="mt-10 space-y-4">
          {objections.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-[#F3E6DA] shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                  <div className={`w-11 h-11 shrink-0 rounded-xl flex items-center justify-center font-bold text-lg ${item.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-black text-base sm:text-lg text-[#24163D]">
                      {item.question}
                    </h3>
                    <div className="mt-2 flex items-start gap-2 bg-[#F4EEFD]/50 rounded-xl p-3 border border-[#E9DEFB]/60 text-xs sm:text-sm text-[#4A3B66] leading-relaxed">
                      <div className="w-5 h-5 rounded-full bg-[#18A866] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <p className="font-semibold text-[#24163D]">{item.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
