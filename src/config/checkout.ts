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
  premiumUrl: "https://checkout.wiven.com.br/checkout/cmw9hxex10cf101oknm3jocqe?offer=XX7WI8G",
  // Plano Básico (R$ 10,00)
  basicUrl: "https://checkout.wiven.com.br/checkout/cmw9hxex10cf101oknm3jocqe?offer=H08EEBF",
  // Upgrade OTO no modal (R$ 19,90 = +R$ 9,90)
  otoUpgradeUrl: "https://checkout.wiven.com.br/checkout/cmw9hxex10cf101oknm3jocqe?offer=71CLOKO",
};
