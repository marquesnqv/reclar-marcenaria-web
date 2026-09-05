export const siteConfig = {
  name: "Reclar Marcenaria LTDA",
  shortName: "Reclar",
  description:
    "Marcenaria sob medida em Sao Bernardo do Campo para moveis planejados, ambientes residenciais e projetos comerciais.",
  address: "Alameda Minas Gerais 929, Parque Sao Bernardo, Sao Bernardo do Campo, Sao Paulo",
  hours: "Aberto das 8h as 17h",
  phone: "11 95894-3182",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511958943182",
  email: "orcamentos@reclarmarcenaria.com.br",
  nav: [
    { label: "Inicio", href: "/" },
    { label: "Projetos", href: "/projetos" },
    { label: "Orcamento", href: "/orcamento" },
    { label: "Contato", href: "/contato" },
  ],
};

export const services = [
  {
    title: "Moveis planejados",
    text: "Projetos sob medida para cozinhas, quartos, salas, escritorios e areas de servico.",
  },
  {
    title: "Ambientes comerciais",
    text: "Balcões, paineis, armarios, recepcoes e estruturas pensadas para uso diario.",
  },
  {
    title: "Reformas e ajustes",
    text: "Ajustes, renovacao de pecas e melhorias em moveis existentes quando o projeto permite.",
  },
];

export const projectCards = [
  {
    title: "Cozinhas planejadas",
    category: "Residencial",
    text: "Armarios, bancadas e aproveitamento inteligente de espacos.",
  },
  {
    title: "Quartos e closets",
    category: "Sob medida",
    text: "Guarda-roupas, paineis, cabeceiras e organizacao personalizada.",
  },
  {
    title: "Escritorios",
    category: "Funcional",
    text: "Mesas, estantes e superficies pensadas para trabalho e estudo.",
  },
  {
    title: "Comercial",
    category: "Empresa",
    text: "Marcenaria para atendimento, exposicao, estoque e operacao.",
  },
];

export const processSteps = [
  "Voce envia medidas, fotos ou uma descricao do ambiente.",
  "A equipe entende o uso do espaco e prepara uma proposta inicial.",
  "O projeto e alinhado com materiais, acabamento, prazo e instalacao.",
  "A producao segue com acompanhamento ate a entrega final.",
];

export function buildWhatsappUrl(message: string) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedMessage}`;
}

export const defaultQuoteMessage =
  "Ola, gostaria de solicitar um orçamento com a Reclar Marcenaria.";
