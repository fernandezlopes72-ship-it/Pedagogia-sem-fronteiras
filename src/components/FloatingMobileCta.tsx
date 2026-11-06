import React, { useState, useEffect } from "react";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

interface FloatingMobileCtaProps {
  onCtaClick: () => void;
}

export function FloatingMobileCta({ onCtaClick }: FloatingMobileCtaProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down 450px
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-purple-200 p-3 sm:py-3.5 shadow-[0_-8px_25px_rgba(36,22,61,0.15)] animate-in slide-in-from-bottom duration-300">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-3 px-2 sm:px-4">
        <div className="hidden sm:block">
          <div className="flex items-center gap-1.5 text-xs font-black text-[#5B2BB5] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#E6407F]" />
            <span>Plano Premium + 3 Bônus Exclusivos</span>
          </div>
          <div className="text-sm font-bold text-[#24163D]">
            De R$ 197 por apenas <strong className="text-[#13924F] font-black text-base">R$ 27,90</strong>
          </div>
        </div>

        <button
          onClick={onCtaClick}
          type="button"
          style={{
            backgroundImage: "linear-gradient(to right, var(--theme-cta, #18A866), var(--theme-cta-hover, #13924F))",
          }}
          className="w-full sm:w-auto flex-1 sm:flex-initial text-white font-heading font-black text-sm sm:text-base py-3 sm:py-3.5 px-6 rounded-full shadow-lg flex items-center justify-center gap-2 transition-transform transform active:scale-95 cursor-pointer glow-featured"
        >
          <span>QUERO COMEÇAR MINHA RENDA EXTRA</span>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
}
