import React, { useState } from "react";
import { Package, Eye, Sparkles, CheckCircle2, ChevronRight } from "lucide-react";
import { KitItem, KitModal } from "./KitModal";

const KITS_DATA: KitItem[] = [
  {
    id: "cartoes",
    title: "Kit de Cartões Educativos (Flashcards)",
    category: "Vocabulário & Memorização",
    image: "/IMAGES/carrossel/01-kit-cartoes-educativos.webp",
    description: "Centenas de flashcards coloridos e interativos com animais, números, cores, formas e objetos para fixação de vocabulário e estímulo cognitivo.",
    highlight: "Mais vendido para mães e creches",
    suggestedPrice: "R$ 19,90",
    itemsIncluded: [
      "Cards de animais da fazenda e selva",
      "Cards de números de 1 a 100 com ilustrações",
      "Cards de cores, formas geométricas e opostos",
      "Arquivos prontos para recortar e plastificar",
    ],
  },
  {
    id: "projetos",
    title: "Kit de 7 Projetos Educativos",
    category: "BNCC & Ensino Infantil",
    image: "/IMAGES/carrossel/02-kit-7-projetos-educativos.webp",
    description: "Projetos completos com plano de ação, objetivos pedagógicos, atividades práticas e registros para aplicação em sala de aula.",
    highlight: "Muito procurado por professoras",
    suggestedPrice: "R$ 29,90",
    itemsIncluded: [
      "Projeto Meio Ambiente & Sustentabilidade",
      "Projeto Identidade e Autonomia",
      "Projeto Alimentação Saudável",
      "Atividades práticas e sequências didáticas",
    ],
  },
  {
    id: "jogos",
    title: "Kit de Jogos Educativos",
    category: "Lúdico & Diversão",
    image: "/IMAGES/carrossel/03-kit-jogos-educativos.webp",
    description: "Jogos da memória, tabuleiros pedagógicos, dominós e quebra-cabeças para aprender brincando em casa ou na escola.",
    highlight: "Alto engajamento infantil",
    suggestedPrice: "R$ 24,90",
    itemsIncluded: [
      "Jogos da memória ilustrados",
      "Dominós de rimas e operações",
      "Tabuleiros com regras simples",
      "Quebra-cabeças progressivos",
    ],
  },
  {
    id: "alfabetizacao",
    title: "Kit de Alfabetização Infantil",
    category: "Campeão de Vendas",
    image: "/IMAGES/carrossel/04-kit-alfabetizacao-infantil.webp",
    description: "Atividades progressivas para coordenação motora fina, vogais, consoantes, famílias silábicas e leitura inicial.",
    highlight: "Produto com maior demanda no Brasil",
    suggestedPrice: "R$ 27,90",
    itemsIncluded: [
      "Treino motor e pontilhados",
      "Livretos de sílabas simples e complexas",
      "Pequenos textos para leitura",
      "Ditados visuais e cruzadinhas",
    ],
  },
  {
    id: "matematica",
    title: "Kit de Matemática Infantil",
    category: "Raciocínio Lógico",
    image: "/IMAGES/carrossel/05-kit-matematica-infantil.webp",
    description: "Atividades divertidas para ensinar contagem, numerais, adição, subtração, noções de grandeza e geometria.",
    highlight: "Ideal para reforço escolar",
    suggestedPrice: "R$ 22,90",
    itemsIncluded: [
      "Contagem ilustrada e conjuntos",
      "Continhas ilustradas e desafios",
      "Gráficos simples e resolução de problemas",
      "Tabelas de numerais até 1.000",
    ],
  },
  {
    id: "especial",
    title: "Kit de Educação Especial (Inclusão & Autismo)",
    category: "Alta Margem & Inclusão",
    image: "/IMAGES/carrossel/06-kit-educacao-especial.webp",
    description: "Atividades adaptadas com rotinas visuais, comunicação alternativa (PECS), estímulo sensorial e foco para crianças neuroatípicas.",
    highlight: "Procura diária por terapeutas e famílias",
    suggestedPrice: "R$ 34,90",
    itemsIncluded: [
      "Quadros de rotina diária ilustrados",
      "Atividades de pareamento visual",
      "Fichas de regulação emocional",
      "Exercícios de foco e coordenação adaptada",
    ],
  },
  {
    id: "datas",
    title: "Kit de Datas Comemorativas",
    category: "Vendas o Ano Todo",
    image: "/IMAGES/carrossel/07-kit-datas-comemorativas.webp",
    description: "Atividades completas e lembrancinhas para Páscoa, Dia das Mães, Festa Junina, Dia dos Pais, Dia das Crianças e Natal.",
    highlight: "Picos de vendas em todas as épocas",
    suggestedPrice: "R$ 24,90",
    itemsIncluded: [
      "Atividades e desenhos temáticos",
      "Moldes de lembrancinhas e cartões",
      "Murais escolares e painéis decorativos",
      "Textos explicativos de cada data",
    ],
  },
  {
    id: "planos",
    title: "Kit de Planos de Aula (BNCC)",
    category: "Professoras & Coordenadoras",
    image: "/IMAGES/carrossel/08-kit-planos-de-aula.webp",
    description: "Planos de aula prontos com objetivos de aprendizagem e códigos de habilidades da Base Nacional Comum Curricular.",
    highlight: "Economiza horas de planejamento",
    suggestedPrice: "R$ 39,90",
    itemsIncluded: [
      "Campos de experiências (Educação Infantil)",
      "Habilidades dos anos iniciais (Fundamental)",
      "Metodologia passo a passo e recursos",
      "Avaliação diagnóstica formativa",
    ],
  },
];

const TARGET_AUDIENCE = [
  { icon: "👨‍👩‍👧", label: "Famílias e Pais", detail: "Querem reforço e diversão educativa sem telas" },
  { icon: "🏫", label: "Escolas & Creches", detail: "Precisam de material pedagógico constante" },
  { icon: "👩‍🏫", label: "Professoras", detail: "Compram para economizar horas de planejamento" },
  { icon: "📖", label: "Reforço Escolar", detail: "Profissionais que dão aulas particulares" },
  { icon: "🧠", label: "Terapeutas & Clínicas", detail: "Psicopedagogas e fonoaudiólogas" },
  { icon: "🖨️", label: "Papelarias", detail: "Imprimem e vendem apostilas encadernadas" },
];

interface ProductMarqueeProps {
  onSelectPlan: () => void;
}

export function ProductMarquee({ onSelectPlan }: ProductMarqueeProps) {
  const [selectedKit, setSelectedKit] = useState<KitItem | null>(null);

  return (
    <section className="py-14 sm:py-20 bg-white overflow-hidden" id="materiais">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Kicker */}
        <div
          style={{
            backgroundColor: "var(--theme-surface-light, #F0FDF4)",
            borderColor: "var(--theme-surface-border, #BBF7D0)",
            color: "var(--theme-primary, #065F46)",
          }}
          className="inline-flex items-center gap-2 border font-black text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3"
        >
          <Package className="w-4 h-4 text-[var(--theme-primary,#065F46)]" />
          <span>O que você vai receber e revender</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-2xl sm:text-4xl font-black text-[#132A22] tracking-tight font-heading max-w-3xl mx-auto">
          Atividades Bonitas, Prontas para Imprimir.{" "}
          <span
            style={{
              backgroundImage: "linear-gradient(to right, var(--theme-primary, #065F46), var(--theme-accent, #D97706))",
            }}
            className="text-transparent bg-clip-text"
          >
            E com Muita Gente Procurando Diariamente:
          </span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#6E6482] max-w-2xl mx-auto font-medium">
          Mais de 25 mil arquivos profissionais em PDF e Canva. Veja para quem você pode vender todos os dias:
        </p>

        {/* Target Audience Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-6 mb-10">
          {TARGET_AUDIENCE.map((aud, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 bg-[#FAF4FF] hover:bg-[#F4EEFD] border border-[#E9DEFB] text-[#24163D] text-xs sm:text-sm font-bold px-3 py-1.5 rounded-full transition-colors shadow-2xl"
            >
              <span>{aud.icon}</span>
              <span>{aud.label}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Infinite Horizontal Carousel (Marquee) */}
      <div className="relative w-full py-4 bg-gradient-to-r from-[#FAF4FF]/50 via-white to-[#FAF4FF]/50 border-y border-purple-50">
        {/* Gradient edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex gap-5 sm:gap-6 px-4">
          {/* First loop of 8 items */}
          {KITS_DATA.map((kit) => (
            <div
              key={kit.id}
              onClick={() => setSelectedKit(kit)}
              className="group w-52 sm:w-64 shrink-0 bg-white rounded-2xl border border-purple-100/90 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 p-3 flex flex-col justify-between cursor-pointer"
            >
              <div className="relative rounded-xl overflow-hidden bg-purple-50 aspect-[3/4] flex items-center justify-center">
                <img
                  src={kit.image}
                  alt={kit.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-purple-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs gap-1.5 backdrop-blur-[2px]">
                  <Eye className="w-4 h-4" />
                  <span>Clique para Ver</span>
                </div>
                <div className="absolute top-2 left-2 bg-[#E6407F] text-white text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider shadow">
                  PLR Inclusa
                </div>
              </div>

              <div className="mt-3">
                <span className="text-[10px] font-black uppercase text-[#7B3FE4] tracking-wider block">
                  {kit.category}
                </span>
                <h3 className="font-heading font-black text-sm text-[#24163D] leading-tight mt-1 line-clamp-1">
                  {kit.title}
                </h3>
                <div className="mt-2 flex items-center justify-between pt-2 border-t border-purple-50">
                  <span className="text-[11px] font-bold text-[#6E6482]">Preço sugerido:</span>
                  <span className="font-heading font-black text-sm text-[#18A866]">{kit.suggestedPrice}</span>
                </div>
              </div>
            </div>
          ))}

          {/* Duplicated loop for infinite scroll seamless effect */}
          {KITS_DATA.map((kit) => (
            <div
              key={`dup-${kit.id}`}
              onClick={() => setSelectedKit(kit)}
              className="group w-52 sm:w-64 shrink-0 bg-white rounded-2xl border border-purple-100/90 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 p-3 flex flex-col justify-between cursor-pointer"
            >
              <div className="relative rounded-xl overflow-hidden bg-purple-50 aspect-[3/4] flex items-center justify-center">
                <img
                  src={kit.image}
                  alt={kit.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-purple-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs gap-1.5 backdrop-blur-[2px]">
                  <Eye className="w-4 h-4" />
                  <span>Clique para Ver</span>
                </div>
                <div className="absolute top-2 left-2 bg-[#E6407F] text-white text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider shadow">
                  PLR Inclusa
                </div>
              </div>

              <div className="mt-3">
                <span className="text-[10px] font-black uppercase text-[#7B3FE4] tracking-wider block">
                  {kit.category}
                </span>
                <h3 className="font-heading font-black text-sm text-[#24163D] leading-tight mt-1 line-clamp-1">
                  {kit.title}
                </h3>
                <div className="mt-2 flex items-center justify-between pt-2 border-t border-purple-50">
                  <span className="text-[11px] font-bold text-[#6E6482]">Preço sugerido:</span>
                  <span className="font-heading font-black text-sm text-[#18A866]">{kit.suggestedPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Helper tip below marquee */}
      <div className="max-w-2xl mx-auto px-4 mt-6 text-center">
        <p className="text-xs sm:text-sm text-[#4A3B66] font-semibold bg-[#FAF4FF] py-2 px-4 rounded-full border border-purple-100 inline-flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#E6407F]" />
          <span>Dica: Clique em qualquer capa acima para abrir os detalhes e conteúdo de cada kit!</span>
        </p>
      </div>

      {/* Kit Lightbox Modal */}
      <KitModal
        kit={selectedKit}
        onClose={() => setSelectedKit(null)}
        onSelectPlan={onSelectPlan}
      />
    </section>
  );
}
