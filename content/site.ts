export const siteConfig = {
  name: "Reclar Marcenaria LTDA",
  shortName: "Reclar",
  description:
    "Marcenaria sob medida em São Bernardo do Campo para móveis planejados, ambientes residenciais e projetos comerciais.",
  address: "Alameda Minas Gerais, 929, Parque São Bernardo, São Bernardo do Campo, São Paulo",
  serviceArea: "Atendemos no ABC e região.",
  hours: "Aberto das 8h às 17h",
  phone: "11 95894-3182",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511958943182",
  email: "rodrigues.regio@yahoo.com.br",
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
    text: "Móveis sob medida para cozinhas, quartos, salas, escritórios e áreas de serviço.",
  },
  {
    title: "Ambientes comerciais",
    text: "Balcões, painéis, armários, recepções e estruturas desenhadas para a rotina do seu negócio.",
  },
  {
    title: "Reformas e ajustes",
    text: "Ajustes, renovação de peças e melhorias em móveis existentes, sempre que o projeto permitir.",
  },
];

export const projectCards = [
  {
    title: "Cozinhas planejadas",
    category: "Residencial",
    text: "Armários, bancadas e aproveitamento inteligente de espaços.",
    image: "/images/cozinha-planejada.png",
    imageAlt: "Cozinha planejada com armários de madeira sob medida.",
  },
  {
    title: "Quartos e closets",
    category: "Sob medida",
    text: "Guarda-roupas, painéis, cabeceiras e organização personalizada.",
    image: "/images/quarto-closet-planejado.png",
    imageAlt: "Quarto com guarda-roupa e closet planejados em madeira.",
  },
  {
    title: "Escritórios",
    category: "Funcional",
    text: "Mesas, estantes e superfícies pensadas para trabalho e estudo.",
    image: "/images/home-office-planejado.png",
    imageAlt: "Home office com mesa, armários e prateleiras planejadas.",
  },
  {
    title: "Comercial",
    category: "Empresa",
    text: "Marcenaria para atendimento, exposição, estoque e operação.",
  },
];

export const portfolioProjects = [
  {
    src: "/images/portfolio-cozinha-planejada-1.png",
    alt: "Cozinha planejada compacta com armários superiores, bancada e nicho para micro-ondas.",
    title: "Cozinha planejada compacta",
    category: "Cozinhas",
    text: "Armários superiores, bancada funcional e aproveitamento completo da parede para organizar o dia a dia.",
  },
  {
    src: "/images/portfolio-sala-cozinha-integrada-1.png",
    alt: "Painel ripado com bancada e cozinha integrada ao fundo.",
    title: "Sala e cozinha integradas",
    category: "Residencial",
    text: "Marcenaria clara com painel ripado, bancada e integração visual entre os ambientes.",
  },
  {
    src: "/images/portfolio-dormitorio-planejado-1.png",
    alt: "Dormitório com armários planejados, painel de madeira e gaveteiros laterais.",
    title: "Dormitório planejado",
    category: "Quartos",
    text: "Armários altos, painel central e gaveteiros laterais para criar um quarto funcional e bem acabado.",
  },
  {
    src: "/images/portfolio-cozinha-cinza-1.png",
    alt: "Cozinha com armários cinza, bancada em madeira e puxadores pretos.",
    title: "Cozinha com acabamento cinza",
    category: "Cozinhas",
    text: "Armários inferiores e superiores com bancada em madeira, puxadores pretos e layout prático.",
  },
  {
    src: "/images/portfolio-armario-iluminado-1.png",
    alt: "Armário sob medida com portas de vidro e iluminação interna.",
    title: "Armário com iluminação",
    category: "Residencial",
    text: "Portas de vidro, iluminação interna e acabamento em madeira para valorizar o ambiente.",
  },
  {
    src: "/images/portfolio-armario-iluminado-2.png",
    alt: "Armário planejado em madeira com portas abertas e iluminação.",
    title: "Armário planejado",
    category: "Sob medida",
    text: "Projeto em madeira com portas em vidro e nichos iluminados para organização do espaço.",
  },
  {
    src: "/images/portfolio-armario-espelho-1.png",
    alt: "Armário planejado com portas espelhadas em ambiente residencial.",
    title: "Portas espelhadas",
    category: "Quartos",
    text: "Solução com portas espelhadas e laterais em madeira, pensada para ampliar visualmente o cômodo.",
  },
  {
    src: "/images/portfolio-armario-espelho-2.png",
    alt: "Detalhe de armário planejado com portas espelhadas e acabamento em madeira.",
    title: "Acabamento em madeira",
    category: "Residencial",
    text: "Detalhe do encontro entre madeira, espelho e iluminação em um projeto sob medida.",
  },
  {
    src: "/images/portfolio-armario-espelho-3.png",
    alt: "Armário em L com portas espelhadas e laterais em madeira.",
    title: "Armário em L",
    category: "Sob medida",
    text: "Aproveitamento de canto com portas espelhadas e estrutura em madeira para uso diário.",
  },
  {
    src: "/images/portfolio-armario-espelho-4.png",
    alt: "Vista lateral de armário planejado com porta espelhada.",
    title: "Vista lateral do projeto",
    category: "Instalação",
    text: "Projeto executado com atenção ao encaixe, proporção e integração com o ambiente.",
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
