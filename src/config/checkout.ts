/**
 * Links de Checkout para a página de vendas.
 * Quando você tiver seus novos links, basta alterá-los aqui ou usar a opção de configuração.
 */
export interface CheckoutConfig {
  premiumUrl: string;
  basicUrl: string;
  otoUpgradeUrl: string;
}

export const DEFAULT_CHECKOUT_CONFIG: CheckoutConfig = {
  // Plano Premium principal (R$ 27,90)
  premiumUrl: "https://pay.cakto.com.br/3qjhgt6",
  // Plano Básico (R$ 10,00)
  basicUrl: "https://pay.cakto.com.br/s464hfr_1288773",
  // Upgrade OTO no modal (R$ 19,90 = +R$ 9,90)
  otoUpgradeUrl: "https://pay.cakto.com.br/iix4t6o",
};
