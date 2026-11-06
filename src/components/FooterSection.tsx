import React from "react";
import { Settings, ShieldCheck, Heart } from "lucide-react";

interface FooterSectionProps {
  onOpenSettings: () => void;
}

export function FooterSection({ onOpenSettings }: FooterSectionProps) {
  return (
    <footer className="bg-[#190E2C] text-[#A69BB9] text-xs py-12 border-t border-purple-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6 text-center">
        <div className="flex flex-wrap items-center justify-center gap-6 text-white font-bold text-sm">
          <a href="#materiais" className="hover:text-[#FFD84D] transition-colors">
            Materiais
          </a>
          <a href="#contas" className="hover:text-[#FFD84D] transition-colors">
            Simulador de Lucro
          </a>
          <a href="#planos" className="hover:text-[#FFD84D] transition-colors">
            Planos
          </a>
          <a href="#depoimentos" className="hover:text-[#FFD84D] transition-colors">
            Depoimentos
          </a>
          <a href="#faq" className="hover:text-[#FFD84D] transition-colors">
            Perguntas Frequentes
          </a>
        </div>

        <p className="font-heading font-black text-sm text-white">
          © {new Date().getFullYear()} Pedagogia sem fronteiras. Todos os direitos reservados.
        </p>

        <p className="max-w-3xl mx-auto text-[11px] leading-relaxed text-[#8E82A3]">
          Este produto é 100% digital. Após a confirmação do pagamento, você recebe os dados de acesso imediatamente no seu e-mail. Nenhum item físico será enviado pelos Correios.
        </p>

        <p className="max-w-3xl mx-auto text-[11px] leading-relaxed text-[#8E82A3]">
          Os valores de faturamento e simulações mostrados nesta página são exemplos ilustrativos para demonstrar o potencial do mercado de arquivos digitais e não representam promessa ou garantia de ganhos fixos. Seus resultados dependem unicamente da sua divulgação e esforço. As condições completas de uso comercial constam no Termo de Licença PLR entregue junto ao acervo.
        </p>

        <div className="pt-4 border-t border-purple-900/40 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenSettings}
            type="button"
            className="inline-flex items-center gap-1.5 text-xs text-purple-300 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full border border-purple-800 transition-colors cursor-pointer"
          >
            <Settings className="w-3.5 h-3.5" />
            <span>Configurar Links de Checkout</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
