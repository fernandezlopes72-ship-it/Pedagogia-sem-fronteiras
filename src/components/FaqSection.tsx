import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Eu posso mesmo revender todos esses materiais?",
      a: "Sim, 100% legalizado! Os dois planos vêm com licença PLR (Private Label Rights) para revenda comercial. Junto com o seu acesso, você recebe o termo formal de licença detalhando tudo o que você pode fazer. No Plano Premium, você ainda recebe os kits já organizados e 3 bônus para começar a divulgar.",
    },
    {
      q: "Qual plano devo escolher entre o Básico e o Premium?",
      a: "Ambos contam com a licença de revenda. No entanto, mais de 97% das pessoas escolhem o Plano Premium porque a diferença de valor é irrisória e você já recebe os kits montados por temas, os 3 bônus completos (Pack Canva, Guia PLR e Artes de Divulgação) e suporte VIP via WhatsApp para tirar dúvidas.",
    },
    {
      q: "Por quanto eu posso vender cada kit?",
      a: "Quem define o preço é exclusivamente você! A maioria dos nossos alunos vende kits temáticos menores (ex: Alfabetização ou Cartões) por R$ 19,90 a R$ 29,90, e combos maiores por R$ 37,00 a R$ 47,00. Todo o valor cai direto no seu bolso, sem comissões para terceiros.",
    },
    {
      q: "Onde e para quem eu posso vender?",
      a: "Você pode vender tanto pela internet (grupos de mães no WhatsApp, Marketplace do Facebook, Instagram e TikTok) quanto no presencial diretamente para escolas do seu bairro, creches, professoras particulares e famílias de amigos.",
    },
    {
      q: "Como eu recebo o acesso depois de comprar?",
      a: "O envio é 100% automático e imediato. Assim que o pagamento (seja PIX ou cartão) for aprovado, você receberá um e-mail com o seu link de acesso exclusivo para baixar e usar todos os materiais no computador ou celular.",
    },
    {
      q: "Existe alguma mensalidade ou taxa oculta?",
      a: "Não! É pagamento único. Você paga uma única vez e garante o acesso vitalício sem data de expiração e sem cobranças mensais.",
    },
  ];

  return (
    <section
      style={{ backgroundColor: "var(--theme-surface-light, #F0FDF4)" }}
      className="py-14 sm:py-20 border-t border-gray-100"
      id="faq"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center">
          <div
            style={{ color: "var(--theme-primary, #065F46)" }}
            className="inline-flex items-center gap-2 bg-white font-black text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3 shadow-sm border border-gray-200"
          >
            <HelpCircle className="w-4 h-4 text-[var(--theme-primary,#065F46)]" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#132A22] tracking-tight font-heading">
            AINDA FICOU <span style={{ color: "var(--theme-primary, #065F46)" }}>ALGUMA PERGUNTA?</span>
          </h2>
          <p className="mt-2 text-sm text-[#6E6482] font-medium">
            Clique na pergunta para ver a resposta detalhada:
          </p>
        </div>

        {/* Accordion list */}
        <div className="mt-10 space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-sm transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left font-heading font-black text-sm sm:text-base text-[#132A22] flex items-center justify-between gap-4 cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <div
                    style={{
                      backgroundColor: isOpen ? "var(--theme-primary, #065F46)" : "var(--theme-surface-light, #F0FDF4)",
                      color: isOpen ? "#ffffff" : "var(--theme-primary, #065F46)",
                    }}
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-[#4A3B66] leading-relaxed border-t border-purple-50 pt-3">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
