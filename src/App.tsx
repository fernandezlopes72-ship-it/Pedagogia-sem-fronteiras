import React, { useState, useEffect } from "react";
import { TopAlertBar } from "./components/TopAlertBar";
import { HeroSection } from "./components/HeroSection";
import { ObjectionsSection } from "./components/ObjectionsSection";
import { ProductMarquee } from "./components/ProductMarquee";
import { MarketSection } from "./components/MarketSection";
import { ProfitCalculator } from "./components/ProfitCalculator";
import { BonusSection } from "./components/BonusSection";
import { PricingSection } from "./components/PricingSection";
import { GuaranteeSection } from "./components/GuaranteeSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { FaqSection } from "./components/FaqSection";
import { FinalCtaSection } from "./components/FinalCtaSection";
import { FooterSection } from "./components/FooterSection";
import { OtoModal } from "./components/OtoModal";
import { FloatingMobileCta } from "./components/FloatingMobileCta";
import { RecentSalesNotification } from "./components/RecentSalesNotification";
import { CheckoutSettingsModal } from "./components/CheckoutSettingsModal";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { CheckoutConfig, DEFAULT_CHECKOUT_CONFIG } from "./config/checkout";
import { COLOR_THEMES, ColorTheme } from "./config/themes";

export default function App() {
  const [currentTheme, setCurrentTheme] = useState<ColorTheme>(() => {
    try {
      const savedThemeId = localStorage.getItem("pedagogia_theme_id");
      if (savedThemeId && savedThemeId !== "purple-original") {
        const matched = COLOR_THEMES.find((t) => t.id === savedThemeId);
        if (matched) return matched;
      }
    } catch {
      // ignore
    }
    return COLOR_THEMES[0]; // Verde Esmeralda & Ouro
  });

  const [checkoutConfig, setCheckoutConfig] = useState<CheckoutConfig>(() => {
    try {
      const saved = localStorage.getItem("portal_renda_extra_links_v2");
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return DEFAULT_CHECKOUT_CONFIG;
  });

  const [isOtoOpen, setIsOtoOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Apply theme CSS variables dynamically
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--theme-primary", currentTheme.primary);
    root.style.setProperty("--theme-primary-light", currentTheme.primaryLight);
    root.style.setProperty("--theme-accent", currentTheme.accent);
    root.style.setProperty("--theme-accent-light", currentTheme.accentLight);
    root.style.setProperty("--theme-cta", currentTheme.cta);
    root.style.setProperty("--theme-cta-hover", currentTheme.ctaHover);
    root.style.setProperty("--theme-topbar", currentTheme.topbarBg);
    root.style.setProperty("--theme-surface-light", currentTheme.surfaceLight);
    root.style.setProperty("--theme-surface-border", currentTheme.surfaceBorder);
    root.style.setProperty("--theme-chip-bg", currentTheme.chipBg);
  }, [currentTheme]);

  const handleSelectTheme = (theme: ColorTheme) => {
    setCurrentTheme(theme);
    try {
      localStorage.setItem("pedagogia_theme_id", theme.id);
    } catch {
      // ignore
    }
  };

  const handleSaveConfig = (newConfig: CheckoutConfig) => {
    setCheckoutConfig(newConfig);
    try {
      localStorage.setItem("portal_renda_extra_links_v2", JSON.stringify(newConfig));
    } catch {
      // ignore
    }
  };

  const handleResetConfig = () => {
    setCheckoutConfig(DEFAULT_CHECKOUT_CONFIG);
    try {
      localStorage.removeItem("portal_renda_extra_links_v2");
    } catch {
      // ignore
    }
  };

  const scrollToPricing = () => {
    const el = document.getElementById("planos");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDFB] text-[#24163D] flex flex-col font-sans selection:bg-[#E6407F] selection:text-white">
      {/* Interactive Theme Switcher */}
      <ThemeSwitcher
        currentTheme={currentTheme}
        onSelectTheme={handleSelectTheme}
      />

      {/* 1. Dynamic Urgency Alert Bar */}
      <TopAlertBar />

      {/* 2. Hero Section */}
      <HeroSection onCtaClick={scrollToPricing} />

      {/* 3. Handling Big Objections */}
      <ObjectionsSection />

      {/* 4. Products & Infinite Kit Showcase */}
      <ProductMarquee onSelectPlan={scrollToPricing} />

      {/* 5. Why Pedagogical Materials Market? */}
      <MarketSection />

      {/* 6. Interactive Profit Calculator & Comparison */}
      <ProfitCalculator onCtaClick={scrollToPricing} />

      {/* 7. 3 Exclusive Bonuses */}
      <BonusSection onCtaClick={scrollToPricing} />

      {/* 8. Pricing Plans (Basic & Premium) */}
      <PricingSection
        onSelectBasic={() => setIsOtoOpen(true)}
        premiumCheckoutUrl={checkoutConfig.premiumUrl}
      />

      {/* 9. 7-Day Unconditional Guarantee */}
      <GuaranteeSection />

      {/* 10. Testimonials & Social Proof */}
      <TestimonialsSection />

      {/* 11. FAQ Accordion */}
      <FaqSection />

      {/* 12. Final High Urgency Call to Action */}
      <FinalCtaSection onCtaClick={scrollToPricing} />

      {/* 13. Footer */}
      <FooterSection onOpenSettings={() => setIsSettingsOpen(true)} />

      {/* Floating Sticky CTA on Mobile */}
      <FloatingMobileCta onCtaClick={scrollToPricing} />

      {/* Live Sales Proof Toasts */}
      <RecentSalesNotification />

      {/* Upsell / OTO Modal for Basic Plan click */}
      <OtoModal
        isOpen={isOtoOpen}
        onClose={() => setIsOtoOpen(false)}
        otoUpgradeUrl={checkoutConfig.otoUpgradeUrl}
        basicUrl={checkoutConfig.basicUrl}
      />

      {/* Checkout Links Settings Modal */}
      <CheckoutSettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        config={checkoutConfig}
        onSave={handleSaveConfig}
        onReset={handleResetConfig}
      />
    </div>
  );
}
