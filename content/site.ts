export const siteConfig = {
  name: "Reclar Marcenaria LTDA",
  shortName: "Reclar",
  description:
    "Marcenaria sob medida em São Bernardo do Campo para móveis planejados, ambientes residenciais e projetos comerciais.",
  address: "Alameda Minas Gerais, 929, Parque São Bernardo, São Bernardo do Campo, São Paulo",
  hours: "Aberto das 8h às 17h",
  phone: "11 95894-3182",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511958943182",
  email: "orcamentos@reclarmarcenaria.com",
  nav: [
    { label: "Início", href: "/" },
    { label: "Projetos", href: "/projetos" },
    { label: "Orçamento", href: "/orcamento" },
    { label: "Contato", href: "/contato" },
  ],
};

export const services = [
  {
    title: "Móveis planejados",
    text: "Projetos sob medida para cozinhas, quartos, salas, escritórios e áreas de serviço.",
  },
  {
    title: "Ambientes comerciais",
    text: "Balcões, painéis, armários, recepções e estruturas pensadas para uso diário.",
  },
  {
    title: "Reformas e ajustes",
    text: "Ajustes, renovação de peças e melhorias em móveis existentes quando o projeto permite.",
  },
];

export const projectCards = [
  {
    title: "Cozinhas planejadas",
    category: "Residencial",
    text: "Armários, bancadas e aproveitamento inteligente de espaços.",
  },
  {
    title: "Quartos e closets",
    category: "Sob medida",
    text: "Guarda-roupas, painéis, cabeceiras e organização personalizada.",
  },
  {
    title: "Escritórios",
    category: "Funcional",
    text: "Mesas, estantes e superfícies pensadas para trabalho e estudo.",
  },
  {
    title: "Comercial",
    category: "Empresa",
    text: "Marcenaria para atendimento, exposição, estoque e operação.",
  },
];

export const processSteps = [
  "Você envia medidas, fotos ou uma descrição do ambiente.",
  "A equipe entende o uso do espaço e prepara uma proposta inicial.",
  "O projeto é alinhado com materiais, acabamento, prazo e instalação.",
  "A produção segue com acompanhamento até a entrega final.",
];

export function buildWhatsappUrl(message: string) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedMessage}`;
}

export const defaultQuoteMessage =
  "Olá, gostaria de solicitar um orçamento com a Reclar Marcenaria.";
