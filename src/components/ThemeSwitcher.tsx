import React, { useState } from "react";
import { Palette, Check, X, Sparkles, HelpCircle } from "lucide-react";
import { COLOR_THEMES, ColorTheme } from "../config/themes";

interface ThemeSwitcherProps {
  currentTheme: ColorTheme;
  onSelectTheme: (theme: ColorTheme) => void;
}

export function ThemeSwitcher({ currentTheme, onSelectTheme }: ThemeSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleSelect = (theme: ColorTheme) => {
    onSelectTheme(theme);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2500);
  };

  return (
    <>
      {/* Floating Trigger Button on Right Edge */}
      <div className="fixed top-24 right-4 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="group flex items-center gap-2 bg-white/95 hover:bg-white text-[#24163D] border-2 border-purple-200/90 shadow-xl px-3.5 py-2.5 rounded-full text-xs font-black transition-all transform hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md"
          title="Ver modelos de cores diferentes"
        >
          <div className="w-5 h-5 rounded-full flex items-center justify-center bg-gradient-to-tr from-purple-600 via-pink-500 to-amber-400 text-white shadow-sm">
            <Palette className="w-3.5 h-3.5" />
          </div>
          <span className="hidden sm:inline">Modelos de Cores</span>
          <span className="bg-[#E6407F] text-white text-[10px] px-1.5 py-0.5 rounded-full uppercase font-black">
            4 opções
          </span>
        </button>
      </div>

      {/* Floating Swatch Modal / Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-end p-4 sm:p-6 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
          <div
            className="w-full max-w-sm bg-white rounded-3xl shadow-2xl border border-purple-100 overflow-hidden flex flex-col mt-16 animate-in slide-in-from-right-10 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-4 sm:p-5 bg-gradient-to-r from-purple-50 to-pink-50 border-b border-purple-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow">
                  <Palette className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading font-black text-base text-[#24163D]">
                    Modelos de Cores
                  </h3>
                  <p className="text-[11px] text-[#6E6482]">
                    Clique para testar cada paleta no site ao vivo:
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="w-7 h-7 rounded-full bg-white text-gray-400 hover:text-gray-700 border border-gray-200 flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* List of Themes */}
            <div className="p-4 space-y-3 max-h-[70vh] overflow-y-auto">
              {COLOR_THEMES.map((theme) => {
                const isActive = currentTheme.id === theme.id;
                return (
                  <div
                    key={theme.id}
                    onClick={() => handleSelect(theme)}
                    className={`p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col gap-2 relative ${
                      isActive
                        ? "border-[#5B2BB5] bg-purple-50/60 shadow-md ring-2 ring-purple-200"
                        : "border-gray-200 hover:border-purple-300 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-heading font-black text-sm text-[#24163D]">
                          {theme.name}
                        </span>
                        <span
                          className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full ${
                            isActive
                              ? "bg-[#5B2BB5] text-white"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {theme.badge}
                        </span>
                      </div>
                      {isActive && (
                        <div className="w-5 h-5 rounded-full bg-[#18A866] text-white flex items-center justify-center">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      )}
                    </div>

                    <p className="text-[11px] text-[#6E6482] leading-tight">
                      {theme.subtitle}
                    </p>

                    {/* Color Swatches */}
                    <div className="flex items-center gap-1.5 pt-1">
                      {theme.swatchColors.map((color, idx) => (
                        <div
                          key={idx}
                          className="w-7 h-4 rounded-md shadow-xs border border-black/10"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                      <span className="text-[10px] text-gray-400 font-semibold ml-1">
                        Primária • Acento • Ação
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Tip Footer */}
            <div className="p-3 bg-gray-50 border-t border-gray-100 text-center">
              <p className="text-[11px] text-[#4A3B66] font-semibold flex items-center justify-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>O tema selecionado é aplicado instantaneamente em todo o site.</span>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Applied Theme Toast Notification */}
      {showNotification && (
        <div className="fixed top-16 right-4 z-50 bg-[#24163D] text-white px-4 py-2.5 rounded-2xl shadow-2xl border border-purple-400/40 flex items-center gap-2.5 animate-in slide-in-from-top-4 duration-200">
          <div
            className="w-4 h-4 rounded-full border border-white"
            style={{ backgroundColor: currentTheme.primary }}
          />
          <span className="text-xs font-bold">
            Modelo <strong>{currentTheme.name}</strong> ativado!
          </span>
        </div>
      )}
    </>
  );
}
