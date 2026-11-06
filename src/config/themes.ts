export interface ColorTheme {
  id: string;
  name: string;
  subtitle: string;
  badge: string;
  primary: string;
  primaryLight: string;
  accent: string;
  accentLight: string;
  cta: string;
  ctaHover: string;
  topbarBg: string;
  surfaceLight: string;
  surfaceBorder: string;
  chipBg: string;
  swatchColors: [string, string, string];
}

export const COLOR_THEMES: ColorTheme[] = [
  {
    id: "emerald-gold",
    name: "Verde Esmeralda & Ouro",
    subtitle: "Foco em Renda, Lucro & Prosperidade",
    badge: "Selecionado",
    primary: "#065F46",
    primaryLight: "#059669",
    accent: "#D97706",
    accentLight: "#FEF3C7",
    cta: "#10B981",
    ctaHover: "#059669",
    topbarBg: "#064E3B",
    surfaceLight: "#F0FDF4",
    surfaceBorder: "#BBF7D0",
    chipBg: "#DCFCE7",
    swatchColors: ["#065F46", "#D97706", "#10B981"],
  },
  {
    id: "purple-original",
    name: "Roxo & Rosa Criativo",
    subtitle: "O modelo oficial inicial",
    badge: "Criativo",
    primary: "#5B2BB5",
    primaryLight: "#7B3FE4",
    accent: "#E6407F",
    accentLight: "#FFE4E8",
    cta: "#18A866",
    ctaHover: "#13924F",
    topbarBg: "#24163D",
    surfaceLight: "#FAF4FF",
    surfaceBorder: "#E9DEFB",
    chipBg: "#F4EEFD",
    swatchColors: ["#5B2BB5", "#E6407F", "#18A866"],
  },
  {
    id: "royal-blue",
    name: "Azul Safira & Laranja Coral",
    subtitle: "Estilo EdTech & Autoridade Educacional",
    badge: "Alta Confiança",
    primary: "#1E3A8A",
    primaryLight: "#2563EB",
    accent: "#EA580C",
    accentLight: "#FFEDD5",
    cta: "#16A34A",
    ctaHover: "#15803D",
    topbarBg: "#0F172A",
    surfaceLight: "#EFF6FF",
    surfaceBorder: "#BFDBFE",
    chipBg: "#DBEAFE",
    swatchColors: ["#1E3A8A", "#EA580C", "#16A34A"],
  },
  {
    id: "maternal-pink",
    name: "Rosa Maternal & Lilás",
    subtitle: "Super Acolhedor para Mães & Creches",
    badge: "Super Afetivo",
    primary: "#831843",
    primaryLight: "#BE185D",
    accent: "#7C3AED",
    accentLight: "#EDE9FE",
    cta: "#059669",
    ctaHover: "#047857",
    topbarBg: "#500724",
    surfaceLight: "#FDF2F8",
    surfaceBorder: "#FBCFE8",
    chipBg: "#FCE7F3",
    swatchColors: ["#831843", "#BE185D", "#7C3AED"],
  },
];
