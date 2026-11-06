import React, { useState } from "react";
import { X, Link2, Check, RefreshCw, ExternalLink } from "lucide-react";
import { CheckoutConfig } from "../config/checkout";

interface CheckoutSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: CheckoutConfig;
  onSave: (newConfig: CheckoutConfig) => void;
  onReset: () => void;
}

export function CheckoutSettingsModal({
  isOpen,
  onClose,
  config,
  onSave,
  onReset,
}: CheckoutSettingsModalProps) {
  const [formData, setFormData] = useState<CheckoutConfig>(config);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-purple-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-[#FAF4FF]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#5B2BB5] text-white flex items-center justify-center">
              <Link2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-heading font-black text-lg text-[#24163D]">
                Configuração dos Links de Checkout
              </h3>
              <p className="text-xs text-[#6E6482]">
                Insira seus novos links de checkout para teste imediato
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="w-8 h-8 rounded-full bg-white text-gray-400 hover:text-gray-700 border border-gray-200 flex items-center justify-center cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="text-xs font-black text-[#24163D] uppercase tracking-wider block mb-1">
              Link do Plano Premium (R$ 27,90)
            </label>
            <input
              type="url"
              required
              value={formData.premiumUrl}
              onChange={(e) => setFormData({ ...formData, premiumUrl: e.target.value })}
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5B2BB5]"
              placeholder="https://pay.cakto.com.br/..."
            />
          </div>

          <div>
            <label className="text-xs font-black text-[#24163D] uppercase tracking-wider block mb-1">
              Link do Plano Básico (R$ 10,00)
            </label>
            <input
              type="url"
              required
              value={formData.basicUrl}
              onChange={(e) => setFormData({ ...formData, basicUrl: e.target.value })}
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5B2BB5]"
              placeholder="https://pay.cakto.com.br/..."
            />
          </div>

          <div>
            <label className="text-xs font-black text-[#24163D] uppercase tracking-wider block mb-1">
              Link do Upgrade OTO (+R$ 9,90 = R$ 19,90)
            </label>
            <input
              type="url"
              required
              value={formData.otoUpgradeUrl}
              onChange={(e) => setFormData({ ...formData, otoUpgradeUrl: e.target.value })}
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5B2BB5]"
              placeholder="https://pay.cakto.com.br/..."
            />
          </div>

          <div className="pt-2 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={onReset}
              className="px-4 py-2.5 rounded-xl border border-gray-300 text-xs font-bold text-gray-600 hover:bg-gray-50 flex items-center gap-1.5 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Restaurar Padrão
            </button>

            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-[#18A866] hover:bg-[#13924F] text-white text-xs sm:text-sm font-heading font-black flex items-center gap-2 cursor-pointer shadow"
            >
              {copied ? <Check className="w-4 h-4" /> : null}
              <span>{copied ? "Salvo com Sucesso!" : "Salvar Links"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
