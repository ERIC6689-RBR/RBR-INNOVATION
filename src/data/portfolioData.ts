export const WHATSAPP_NUMBER = '5588981879429';
export const WHATSAPP_DISPLAY = '(88) 98187-9429';

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export interface ServiceItem {
  number: string;
  title: string;
  meta: string;
  description: string;
  outcome: string;
  span: 'wide' | 'standard';
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: 'Institucional' | 'Landing Page' | 'Catálogo & Vendas';
  segment: string;
  deliveryTime: string;
  metricHighlight: string;
  summary: string;
  challenge: string;
  solution: string;
  image: string;
  imageAlt: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  city: string;
  quote: string;
  result: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  deliveryNote: string;
  featured: boolean;
  features: string[];
  ctaLabel: string;
}

export const HERO_METRICS = [
  {
    value: 'Mesmo Dia',
    label: 'Entrega expressa com estrutura pronta para vender',
  },
  {
    value: '100% Geral',
    label: 'Projetos sob medida para qualquer segmento comercial',
  },
  {
    value: 'Todo Brasil',
    label: 'Atendimento nacional direto e sem intermediários',
  },
  {
    value: 'Conversão',
    label: 'Copywriting e UX orientados ao aumento de faturamento',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    number: '01.',
    title: 'Sites Institucionais de Autoridade',
    meta: 'Entrega no mesmo dia · Qualquer segmento',
    description:
      'Estruturas completas que posicionam sua empresa como líder de mercado desde o primeiro segundo de navegação, eliminando a desconfiança de quem pesquisa sua marca antes de comprar.',
    outcome: 'Ideal para escritórios, clínicas, indústrias e prestadores de serviço',
    span: 'wide',
  },
  {
    number: '02.',
    title: 'Landing Pages de Alta Conversão',
    meta: 'Foco em tráfego pago · WhatsApp direto',
    description:
      'Páginas enxutas, rápidas e persuasivas construídas para transformar cliques de Google Ads e Meta Ads em pedidos de orçamento imediatos no WhatsApp da sua equipe.',
    outcome: 'Reduz o custo por lead e acelera o fechamento comercial',
    span: 'standard',
  },
  {
    number: '03.',
    title: 'Vitrines e Catálogos Digitais',
    meta: 'Varejo, atacado e distribuidoras · Mobile-first',
    description:
      'Apresente sua linha de produtos ou serviços com clareza visual, especificações organizadas e botões de cotação direta que encurtam o caminho entre o interesse e o pagamento.',
    outcome: 'Estrutura preparada para vender pelo celular em todo o país',
    span: 'standard',
  },
  {
    number: '04.',
    title: 'Implantação Expressa em 24 Horas',
    meta: 'Do briefing à publicação · Sem burocracia',
    description:
      'Enquanto agências tradicionais levam semanas em reuniões lentas, a RBR INNOVATION desenha, escreve os textos de venda e coloca seu site no ar no mesmo dia para você não perder negócios hoje.',
    outcome: 'Publicação rápida com domínio configurado e suporte inicial',
    span: 'wide',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'clinica-aesthetica',
    title: 'Portal de Agendamento e Autoridade Médica',
    client: 'Clínica Prime Saúde & Estética',
    category: 'Institucional',
    segment: 'Saúde e Bem-Estar',
    deliveryTime: 'Entregue no mesmo dia',
    metricHighlight: '+162% em agendamentos pelo WhatsApp em 45 dias',
    summary:
      'Reposicionamento digital completo para clínica particular com foco em procedimentos de alto ticket e triagem imediata de pacientes.',
    challenge:
      'A clínica dependia apenas de indicações e redes sociais, perdendo pacientes particulares que pesquisavam no Google e encontravam concorrentes mais estruturados.',
    solution:
      'Criação de site institucional em alto contraste com apresentação clara do corpo clínico, protocolos detalhados e botão de pré-agendamento direto no WhatsApp.',
    image: '/src/assets/images/portfolio_clinica_prime_1794664202328.jpg',
    imageAlt: 'Recepção moderna de clínica médica com acabamento em pedra escura e aço escovado',
  },
  {
    id: 'aurora-engenharia',
    title: 'Plataforma Comercial para Engenharia e Logística',
    client: 'Atlas Engenharia & Operações',
    category: 'Institucional',
    segment: 'Indústria e B2B',
    deliveryTime: 'Entregue no mesmo dia',
    metricHighlight: 'R$ 480 mil em novos contratos B2B no primeiro trimestre',
    summary:
      'Site corporativo de alto impacto para empresa de infraestrutura industrial captar cotações de grandes embarcadores e construtoras.',
    challenge:
      'Empresa sólida no atendimento presencial, mas sem apresentação digital à altura do porte técnico das obras executadas.',
    solution:
      'Arquitetura visual sóbria em azul marinho e aço, ficha técnica de serviços, portfólio de capacidade operacional e canal rápido de solicitação de proposta.',
    image: '/src/assets/images/portfolio_atlas_engenharia_1794664208021.jpg',
    imageAlt: 'Sede corporativa de engenharia industrial em vidro escuro e estrutura metálica ao entardecer',
  },
  {
    id: 'verona-showroom',
    title: 'Catálogo de Alto Padrão e Captação de Lojistas',
    client: 'Verona Showroom & Atacado',
    category: 'Catálogo & Vendas',
    segment: 'Comércio e Varejo',
    deliveryTime: 'Entregue no mesmo dia',
    metricHighlight: '3,4x mais pedidos de catálogo na primeira semana',
    summary:
      'Vitrine digital responsiva para marca de artigos premium atender compradores finais e representantes comerciais em todo o Brasil.',
    challenge:
      'Envio manual de PDFs pesados no WhatsApp travava o atendimento e fazia o time comercial perder tempo com clientes fora do perfil.',
    solution:
      'Catálogo interativo filtrado por linha de produto, carregamento instantâneo no 4G e formulário de qualificação conectado diretamente ao vendedor.',
    image: '/src/assets/images/portfolio_verona_varejo_1794664203421.jpg',
    imageAlt: 'Showroom comercial minimalista com prateleiras escuras e expositores metálicos',
  },
  {
    id: 'rbr-express-lp',
    title: 'Landing Page de Campanha para Serviços Locais e Nacionais',
    client: 'Vértice Consultoria Empresarial',
    category: 'Landing Page',
    segment: 'Serviços Corporativos',
    deliveryTime: 'Entregue em 6 horas',
    metricHighlight: 'Taxa de conversão de 11,8% sobre tráfego pago',
    summary:
      'Página de aterrissagem desenhada para anúncios de pesquisa com argumento comercial direto, prova social e captura sem atrito.',
    challenge:
      'Anúncios ativos geravam cliques caros que caíam em um perfil comum sem argumento suficiente para convencer o decisor da empresa.',
    solution:
      'Copywriting orientado a ROI, hierarquia visual sem distrações e chamada única para diagnóstico comercial no WhatsApp.',
    image: '/src/assets/images/hero_rbr_showcase_1794664200968.jpg',
    imageAlt: 'Estação de trabalho corporativa exibindo landing page de alta conversão em tela escura',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Ricardo Alencar',
    role: 'Diretor Comercial',
    company: 'Atlas Engenharia & Operações',
    city: 'São Paulo, SP',
    quote:
      'Antes tínhamos vergonha de mandar o link antigo para compradores industriais. Fechamos o briefing de manhã e no fim da tarde o site novo já estava publicado. Na segunda semana recebemos duas cotações que pagaram o investimento dezenas de vezes.',
    result: '+34% na taxa de aprovação de orçamentos B2B',
  },
  {
    id: 't2',
    name: 'Dra. Camila Vasconcelos',
    role: 'Sócia-Fundadora',
    company: 'Clínica Prime Saúde & Estética',
    city: 'Fortaleza, CE',
    quote:
      'O que me impressionou foi a agilidade e a clareza dos textos. Não precisei ficar explicando o básico: a RBR INNOVATION entendeu como nossa paciente decide e entregou uma página pronta no mesmo dia que triplicou nossos agendamentos.',
    result: '3x mais contatos qualificados no WhatsApp',
  },
  {
    id: 't3',
    name: 'Henrique Bastos',
    role: 'Proprietário',
    company: 'Verona Showroom & Atacado',
    city: 'Belo Horizonte, MG',
    quote:
      'Eu precisava vender para lojistas de outros estados sem parecer amador. O visual escuro com detalhes metálicos trouxe outro nível de percepção para a marca e acelerou as vendas logo nos primeiros sete dias no ar.',
    result: '+118% no faturamento mensal vindo do digital',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'essencial-express',
    name: 'Essencial Express',
    subtitle: 'Landing page focada em conversão imediata para campanhas e WhatsApp.',
    price: 'R$ 150',
    deliveryNote: 'Entrega no mesmo dia · Pagamento único',
    featured: false,
    features: [
      'Página única estratégica orientada a vendas',
      'Copywriting persuasivo escrito para o seu nicho',
      'Integração direta com WhatsApp e formulário',
      'Design responsivo mobile-first de alto contraste',
      'Publicação e configuração inicial no mesmo dia',
    ],
    ctaLabel: 'Aumentar meu faturamento',
  },
  {
    id: 'autoridade-corporativa',
    name: 'Autoridade Corporativa',
    subtitle: 'Site completo para empresas que querem dominar o segmento e cobrar mais caro.',
    price: 'R$ 300',
    deliveryNote: 'Entrega no mesmo dia · Mais escolhido',
    featured: true,
    features: [
      'Estrutura completa com seções de prova, serviços e portfólio',
      'Visual premium em preto e dourado metálico',
      'Textos comerciais sob medida para elevar seu ticket médio',
      'SEO técnico inicial para posicionamento no Google',
      'Botão flutuante de WhatsApp e captura de leads validada',
      'Atendimento direto prioritário em todo o Brasil',
    ],
    ctaLabel: 'Aumentar meu faturamento',
  },
  {
    id: 'escala-comercial',
    name: 'Escala Comercial',
    subtitle: 'Catálogo, múltiplas ofertas e vitrine completa para acelerar o faturamento.',
    price: 'R$ 450',
    deliveryNote: 'Entrega expressa em até 24h · Estrutura avançada',
    featured: false,
    features: [
      'Catálogo interativo com filtros por categoria ou serviço',
      'Páginas e modais dedicados para detalhamento de ofertas',
      'Fluxo avançado de qualificação antes do contato no WhatsApp',
      'Otimização de performance e velocidade em redes móveis',
      'Treinamento rápido para sua equipe atualizar ofertas',
    ],
    ctaLabel: 'Aumentar meu faturamento',
  },
];
