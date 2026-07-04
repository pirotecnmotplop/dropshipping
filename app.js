const money = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const percent = new Intl.NumberFormat("pt-BR", {
  style: "percent",
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

const integer = new Intl.NumberFormat("pt-BR", {
  maximumFractionDigits: 0,
});

const STORAGE = {
  schedule: "dropshipping.schedule.v1",
  checklist: "dropshipping.checklist.v1",
};

const data = {
  niches: [
    {
      rank: 1,
      name: "Casa, organização e utilidades práticas",
      score: 9.7,
      demand: "Alto",
      competition: "Média",
      ticket: "R$ 40 a R$ 120",
      visual: "Alta",
      risk: "Baixo",
      examples: "Organizador de cabos, suporte adesivo, organizador de geladeira",
      audience: "Pessoas que querem praticidade em casa, escritório ou pequenos espaços",
      recommendation: "Sim",
      note: "Produtos simples, visuais, fáceis de demonstrar e com baixo risco técnico.",
    },
    {
      rank: 2,
      name: "Pet utilitário",
      score: 8.8,
      demand: "Alto",
      competition: "Média",
      ticket: "R$ 35 a R$ 100",
      visual: "Alta",
      risk: "Baixo",
      examples: "Escova removedora de pelos, tapete higiênico, bebedouro portátil",
      audience: "Tutores de pets que buscam higiene, passeio e organização",
      recommendation: "Sim",
      note: "Boa resposta em vídeos curtos; evitar ração, remédios e promessas veterinárias.",
    },
    {
      rank: 3,
      name: "Cozinha prática",
      score: 8.5,
      demand: "Médio/alto",
      competition: "Média",
      ticket: "R$ 30 a R$ 90",
      visual: "Alta",
      risk: "Médio",
      examples: "Cortador prático, porta-temperos, escorredor dobrável",
      audience: "Famílias, pessoas que cozinham e pequenos apartamentos",
      recommendation: "Sim",
      note: "Problemas cotidianos são claros; evitar itens frágeis ou elétricos complexos.",
    },
    {
      rank: 4,
      name: "Automotivo leve",
      score: 8.3,
      demand: "Médio/alto",
      competition: "Média",
      ticket: "R$ 35 a R$ 110",
      visual: "Média/alta",
      risk: "Médio",
      examples: "Suporte veicular, lixeira dobrável, organizador de banco",
      audience: "Motoristas, motoristas de aplicativo e famílias",
      recommendation: "Sim",
      note: "Funciona bem com antes/depois; evitar peças mecânicas e instalação técnica.",
    },
    {
      rank: 5,
      name: "Fitness leve e bem-estar sem promessa médica",
      score: 7.6,
      demand: "Médio",
      competition: "Alta",
      ticket: "R$ 30 a R$ 90",
      visual: "Média",
      risk: "Médio",
      examples: "Garrafas, bolsas, elásticos e organizadores de treino",
      audience: "Pessoas que treinam em casa ou buscam rotina mais organizada",
      recommendation: "Parcial",
      note: "Pode vender, mas exige cuidado para não prometer saúde, cura ou emagrecimento.",
    },
    {
      rank: 6,
      name: "Beleza não regulada",
      score: 7.4,
      demand: "Médio",
      competition: "Alta",
      ticket: "R$ 25 a R$ 90",
      visual: "Média",
      risk: "Médio",
      examples: "Organizador de maquiagem, nécessaire, espelho compacto",
      audience: "Pessoas interessadas em organização, rotina e estética sem cosméticos",
      recommendation: "Parcial",
      note: "Evitar cosméticos, dermocosméticos, clareadores e promessas reguladas pela Anvisa.",
    },
  ],
  products: [
    ["Casa, organização e utilidades práticas", "Organizador de cabos", "Reduz bagunça e risco de fios soltos.", "Residências, home office e escritórios", 14.9, 8.9, 49.9, 8, 7.5, 0.28, "Baixo", "Dropi", "Vídeo de instalação em menos de 10 segundos", "Produto simples, visual e fácil de explicar."],
    ["Casa, organização e utilidades práticas", "Suporte adesivo para tomada", "Organiza tomadas, carregadores e pequenos aparelhos.", "Famílias e pessoas com pouco espaço", 11.5, 8.5, 39.9, 7, 6.5, 0.3, "Baixo", "AliExpress + DSers", "Antes e depois na cozinha ou escritório", "Validar cola e acabamento com amostra."],
    ["Pet utilitário", "Escova removedora de pelos pet", "Remove pelos de sofá, roupa e tapete.", "Tutores de cães e gatos", 18.5, 9.5, 59.9, 8.5, 8, 0.27, "Baixo", "Dropi", "Demonstração real em tecido escuro", "Apelo visual forte; não fazer promessa veterinária."],
    ["Pet utilitário", "Luva removedora de pelos", "Ajuda a tirar pelos soltos durante carinho e escovação.", "Tutores de pets que soltam pelo", 13.9, 8.9, 49.9, 7.5, 7, 0.28, "Baixo", "AliExpress + DSers", "Uso real com pet calmo", "Evitar linguagem de tratamento veterinário."],
    ["Casa, organização e utilidades práticas", "Organizador de geladeira", "Melhora visualização dos alimentos e reduz desperdício.", "Famílias e pessoas que preparam refeições", 21.5, 9.5, 69.9, 9.5, 9, 0.26, "Médio", "DropNacional", "Transformação visual da geladeira", "Checar dimensão, material e embalagem."],
    ["Cozinha prática", "Cortador/descascador prático", "Economiza tempo no preparo de alimentos.", "Quem cozinha em casa", 16.8, 9.2, 54.9, 8.5, 8, 0.27, "Baixo", "Dropi", "Uso real com alimento comum", "Evitar prometer desempenho exagerado."],
    ["Automotivo leve", "Suporte veicular para celular", "Facilita visualização do celular com mais organização.", "Motoristas e motoristas de aplicativo", 17.4, 10, 59.9, 8.5, 8.5, 0.26, "Baixo", "AliExpress + DSers", "Instalação no painel com tomada curta", "Checar compatibilidade e fixação."],
    ["Automotivo leve", "Lixeira dobrável para carro", "Mantém o carro limpo e ocupa pouco espaço.", "Motoristas, famílias e viagens", 19.2, 9.8, 64.9, 8.5, 8.5, 0.26, "Baixo", "Dropi", "Antes/depois do interior do carro", "Boa demonstração para Reels."],
    ["Automotivo leve", "Organizador de banco de carro", "Evita objetos soltos no banco traseiro.", "Famílias, motoristas e pessoas que viajam", 22.3, 10.5, 69.9, 9, 9, 0.25, "Médio", "AliExpress + DSers", "Demonstração em carro real", "Validar costura e tamanho."],
    ["Pet utilitário", "Tapete higiênico lavável para pet", "Ajuda na rotina de higiene e reduz descartáveis.", "Tutores de cães em apartamento", 29.5, 12, 89.9, 10, 10, 0.25, "Médio", "DropNacional", "Rotina de limpeza sem promessa veterinária", "Amostra é essencial para validar absorção."],
    ["Pet utilitário", "Bebedouro portátil para pet", "Facilita hidratação em passeios e viagens.", "Tutores que passeiam com pets", 26, 11.5, 79.9, 9.5, 9.5, 0.25, "Médio", "Dropi", "Uso real em passeio", "Validar vedação e material."],
    ["Cozinha prática", "Porta-temperos organizador", "Organiza temperos e libera espaço.", "Famílias e cozinhas pequenas", 20, 9.2, 59.9, 8.5, 8, 0.26, "Baixo", "DropNacional", "Antes/depois do armário", "Boa aceitação em conteúdo de organização."],
    ["Casa, organização e utilidades práticas", "Escova de limpeza multifuncional", "Facilita limpeza de cantos e superfícies.", "Famílias e pessoas que limpam a casa", 18.3, 9, 54.9, 8, 7.5, 0.27, "Baixo", "AliExpress + DSers", "Demonstração rápida de sujeira real", "Produto barato, mas precisa de bom criativo."],
    ["Casa, organização e utilidades práticas", "Vedador de portas", "Ajuda a reduzir entrada de poeira, vento e ruído.", "Residências e apartamentos", 15.8, 9.5, 49.9, 8, 7, 0.28, "Baixo", "Dropi", "Problema cotidiano com antes/depois", "Não prometer isolamento absoluto."],
    ["Casa, organização e utilidades práticas", "Luminária sensor de presença simples", "Ilumina passagens e armários sem instalação complexa.", "Residências e pequenos espaços", 24.9, 11.5, 79.9, 9.5, 9.5, 0.25, "Médio", "Dropi", "Ambiente escuro antes/depois", "Evitar modelos elétricos complexos ou bateria ruim."],
    ["Casa, organização e utilidades práticas", "Saco organizador a vácuo", "Economiza espaço em armários e malas.", "Famílias, apartamentos e viagens", 19, 9.6, 64.9, 8.5, 8.5, 0.26, "Baixo", "Dropi", "Antes/depois com cobertor ou roupa", "Checar vedação e tamanho real."],
    ["Cozinha prática", "Escorredor dobrável", "Organiza a pia e ocupa menos espaço.", "Cozinhas pequenas", 16.2, 9.5, 54.9, 8, 7.5, 0.27, "Baixo", "AliExpress + DSers", "Demonstração na pia", "Validar material e peso suportado."],
    ["Casa, organização e utilidades práticas", "Bolsa organizadora de mala", "Facilita separar roupas e acessórios em viagens.", "Pessoas que viajam e famílias", 21.2, 10.5, 69.9, 9, 8.5, 0.26, "Baixo", "DropNacional", "Mala bagunçada versus organizada", "Boa pauta para conteúdo orgânico."],
    ["Beleza não regulada", "Espelho ou organizador de maquiagem sem cosmético", "Organiza itens de beleza sem envolver produto regulado.", "Pessoas com rotina de maquiagem", 18, 9.5, 59.9, 8.5, 8, 0.27, "Baixo", "Dropi", "Organização de bancada", "Não vender como cosmético ou item terapêutico."],
    ["Fitness leve e bem-estar sem promessa médica", "Garrafa ou shaker sem promessa de saúde", "Facilita transporte de bebida e rotina de treino.", "Pessoas que treinam ou trabalham fora", 19.5, 9.5, 64.9, 8.5, 8.5, 0.26, "Baixo", "Dropi", "Uso real na rotina", "Não associar a emagrecimento ou benefício médico."],
    ["Casa, organização e utilidades práticas", "Suporte de parede para vassouras", "Organiza área de serviço e evita itens caídos.", "Casas, apartamentos e lavanderias", 17.9, 9.9, 59.9, 8.5, 8, 0.27, "Baixo", "Fornecedor nacional direto", "Antes/depois da lavanderia", "Checar adesivo, parafusos e resistência."],
    ["Cozinha prática", "Tampa de silicone multiuso", "Ajuda a conservar alimentos e reduzir sujeira.", "Famílias e pessoas que cozinham", 13.8, 8.9, 44.9, 7.5, 6.5, 0.28, "Baixo", "DropNacional", "Teste real com potes de tamanhos diferentes", "Validar material e embalagem individual."],
  ].map((row, index) => ({
    id: `p${index + 1}`,
    niche: row[0],
    name: row[1],
    promise: row[2],
    audience: row[3],
    cost: row[4],
    freight: row[5],
    price: row[6],
    cpa: row[7],
    refund: row[8],
    margin: row[9],
    risk: row[10],
    supplier: row[11],
    creative: row[12],
    notes: row[13],
  })),
  suppliers: [
    ["Dropi", "Plataforma brasileira", "Centralizar operação de dropshipping no Brasil", "Integrações e operação mais simples para iniciantes", "Plano, catálogo e fornecedores disponíveis mudam com o tempo", "3 a 10 dias", "Nuvemshop, Shopify, WooCommerce, Yampi, AliExpress, CJdropshipping e SourcinBox", "Variável", "Alta", "Sim", "Validar plano atual, catálogo, logística, prazo e reputação"],
    ["DropNacional", "Rede de fornecedores nacionais", "Reduzir prazo e evitar longa importação", "Prazo menor e mais controle sobre entrega", "Catálogo pode ser menor e margem pode apertar", "1 a 7 dias", "Nuvemshop, Shopify, WooCommerce e operação manual", "Variável", "Alta", "Sim", "Verificar catálogo, margem, reputação e política de troca"],
    ["AliExpress + DSers", "Marketplace internacional + app de pedidos", "Testar produtos com grande variedade", "Muito conhecido, catálogo enorme e fácil de encontrar tendências", "Prazo pode ser alto, qualidade varia e exige análise rigorosa", "10 a 25 dias", "Shopify, WooCommerce e Nuvemshop conforme integração disponível", "Gratuito/variável", "Média", "Sim com cautela", "Analisar avaliações, pedidos, fotos reais, prazo para o Brasil e rastreio"],
    ["CJdropshipping", "Sourcing e fulfillment internacional", "Escalar produtos já validados", "Sourcing, fulfillment e variedade de produtos", "Prazo, frete e disponibilidade de armazém variam", "7 a 20 dias", "Shopify, WooCommerce e outras integrações", "Variável", "Média", "Parcial", "Validar prazo, frete, armazéns disponíveis e custo final para o Brasil"],
    ["SourcinBox", "Sourcing/fulfillment", "Encontrar fornecedores e melhorar logística", "Pode ajudar no sourcing e na operação quando há volume", "Menos útil antes da validação do produto", "7 a 20 dias", "Shopify, WooCommerce e operação conforme disponibilidade", "Variável", "Média", "Não", "Usar após validar produto, margem e demanda"],
    ["Zendrop", "Plataforma internacional", "Alternativa estruturada para dropshipping", "Boa estrutura operacional e automações", "Pode ter custo em dólar e logística menos vantajosa para Brasil", "7 a 20 dias", "Shopify, WooCommerce e integrações disponíveis", "Variável/dólar", "Média", "Parcial", "Comparar custo em reais, prazo e suporte ao Brasil"],
    ["Spocket", "Fornecedores EUA/Europa", "Alternativa internacional", "Catálogo curado e bons fornecedores em alguns mercados", "Pode não ser ideal para Brasil no começo", "7 a 25 dias", "Shopify, WooCommerce e integrações disponíveis", "Variável/dólar", "Média", "Não", "Verificar prazo, frete e custo final para clientes no Brasil"],
    ["Fornecedor nacional direto", "Fabricante/distribuidor", "Ter prazo menor e mais controle", "Negociação direta, melhor prazo e possível margem maior", "Exige prospecção, negociação e controle manual", "1 a 7 dias", "Manual, WhatsApp, planilha ou ERP simples", "Variável", "Alta", "Sim", "Confirmar CNPJ, reputação, nota fiscal, prazo, política de troca e estoque"],
    ["Mercado Livre atacado", "Marketplace B2B/atacado", "Testar produtos com envio mais rápido", "Acesso fácil a vendedores nacionais e entrega previsível", "Margem e reputação variam muito", "2 a 7 dias", "Manual", "Variável", "Média", "Parcial", "Verificar reputação, nota fiscal, estoque, margem e autorização de revenda"],
    ["Shopee fornecedores/atacado", "Marketplace com vendedores e atacadistas", "Buscar itens de baixo investimento", "Catálogo amplo e preços competitivos", "Qualidade, prazo e reputação precisam ser verificados com rigor", "5 a 15 dias", "Manual", "Variável", "Média", "Parcial", "Comprar amostra, verificar avaliações, reputação e documentação"],
  ].map((row) => ({
    name: row[0],
    type: row[1],
    bestUse: row[2],
    pros: row[3],
    cons: row[4],
    delivery: row[5],
    integrations: row[6],
    cost: row[7],
    reliability: row[8],
    starter: row[9],
    care: row[10],
  })),
  costs: [
    ["Loja", "Plataforma de loja", 29, 79, 299],
    ["Domínio", "Domínio", 40, 70, 120],
    ["Design", "Tema", 0, 150, 500],
    ["Apps", "Apps e integrações", 0, 120, 600],
    ["Integração", "Dropi ou ferramenta de integração", 0, 99, 299],
    ["Marketing", "Anúncios", 150, 800, 3000],
    ["Validação", "Compra de amostras", 80, 250, 600],
    ["Conteúdo", "Edição de vídeo", 0, 250, 1000],
    ["Conteúdo", "Criativos", 50, 200, 600],
    ["Operação", "Reserva para reembolso", 100, 300, 1000],
    ["Financeiro", "Taxas de pagamento", 20, 80, 200],
    ["Legal", "Contabilidade", 0, 120, 500],
    ["Legal", "CNPJ/MEI", 0, 200, 800],
    ["Ferramentas", "Ferramentas extras", 20, 100, 400],
    ["Capital de giro", "Capital de giro", 300, 1200, 2000],
  ].map(([category, item, low, mid, high]) => ({ category, item, low, mid, high })),
  scenarios: {
    Ruim: { visits: [1200, 1500, 1800], rate: [0.006, 0.008, 0.01], ticket: [59, 62, 65], adsPerVisit: 0.32, tools: 80 },
    Médio: { visits: [3000, 3800, 4600], rate: [0.014, 0.017, 0.02], ticket: [75, 79, 84], adsPerVisit: 0.28, tools: 120 },
    Bom: { visits: [5000, 6500, 8000], rate: [0.022, 0.026, 0.03], ticket: [85, 90, 95], adsPerVisit: 0.22, tools: 180 },
  },
  schedule: [
    ["Definir nicho e posicionamento", "Pesquisar dores, concorrentes e demanda", "Lista de 10 ideias de produto", "Google Trends, TikTok, Instagram", "2h"],
    ["Selecionar produtos", "Filtrar produtos com utilidade clara e baixo risco", "5 produtos priorizados", "Planilha, marketplaces", "2h"],
    ["Escolher fornecedores", "Comparar Dropi, DSers, DropNacional e opções diretas", "Fornecedor preferido e alternativa", "Dropi, DSers, DropNacional", "2h"],
    ["Validar margem", "Calcular custo, frete, taxas, CPA máximo e reserva", "Tabela de margem por produto", "Aba Precificação", "2h"],
    ["Comprar amostra", "Solicitar amostra do produto principal", "Pedido de amostra registrado", "Fornecedor", "1h"],
    ["Definir marca", "Nome, logo, paleta e tom de voz", "Branding básico", "Canva", "2h"],
    ["Montar estrutura da loja", "Criar conta, tema, menus e páginas principais", "Loja base pronta", "Nuvemshop/Shopify/Yampi", "3h"],
    ["Configurar pagamentos", "Ativar gateway, antifraude e dados de recebimento", "Checkout funcional", "Gateway de pagamento", "1h"],
    ["Criar políticas", "Troca, privacidade, termos e prazo de entrega", "Políticas publicadas", "Editor da loja", "2h"],
    ["Criar página de produto", "Texto, fotos, vídeo, preço, prazo e FAQ", "Página pronta", "Canva, CapCut, loja", "3h"],
    ["Criar criativos", "Produzir vídeos curtos e variações de gancho", "3 a 5 criativos", "CapCut", "3h"],
    ["Configurar pixel", "Instalar eventos e testar tracking", "Pixel funcionando", "Meta Ads, TikTok Ads", "1h"],
    ["Publicar conteúdo orgânico", "Postar primeiros vídeos e coletar sinais", "Conteúdo publicado", "TikTok, Reels, Shorts", "2h"],
    ["Criar campanha pequena", "Abrir teste com orçamento controlado", "Campanha ativa", "Meta Ads, TikTok Ads", "2h"],
    ["Analisar dados iniciais", "Ver CTR, CPC, retenção, checkout e conversão", "Resumo da primeira semana", "Analytics, Ads", "2h"],
    ["Ajustar criativos", "Trocar ganchos e formatos fracos", "Criativos novos", "CapCut", "2h"],
    ["Ajustar oferta", "Revisar CTA, preço, frete e prova social", "Oferta mais clara", "Loja", "2h"],
    ["Validar atendimento", "Testar WhatsApp, e-mail e respostas rápidas", "Fluxo de atendimento pronto", "WhatsApp Business", "1h"],
    ["Testar checkout", "Fazer pedido real e revisar todo o fluxo", "Checkout validado", "Loja", "1h"],
    ["Revisar logística", "Confirmar prazo, rastreio, embalagem e exceções", "Checklist de logística", "Fornecedor", "2h"],
    ["Criar reserva", "Separar reserva para reembolso e problemas", "Valor reservado", "Planilha financeira", "1h"],
    ["Escalar com cuidado", "Aumentar orçamento apenas no que tem margem", "Orçamento ajustado", "Anúncios", "2h"],
    ["Analisar margem real", "Comparar lucro real com projeção", "Relatório de margem", "Aba Financeiro", "2h"],
    ["Ajustar frete e prazo", "Revisar promessa de entrega e custo", "Frete ajustado", "Fornecedor, loja", "2h"],
    ["Criar mais conteúdo", "Publicar novos vídeos do melhor ângulo", "Novos conteúdos", "TikTok, Reels", "2h"],
    ["Revisar reputação", "Checar reclamações, mensagens e atrasos", "Plano de resposta", "Loja, atendimento", "2h"],
    ["Testar produto relacionado", "Adicionar item complementar com baixo risco", "Novo teste preparado", "Fornecedor, loja", "2h"],
    ["Avaliar pedidos", "Ver volume, prazo, satisfação e suporte", "Resumo operacional", "Analytics, planilha", "2h"],
    ["Repetir melhor criativo", "Escalar criativo vencedor com variações", "Criativo vencedor replicado", "CapCut, Ads", "2h"],
    ["Revisão final", "Decidir continuar, pausar ou trocar produto", "Decisão de continuidade", "Planilha e métricas", "2h"],
  ].map((row, index) => ({
    day: index + 1,
    goal: row[0],
    task: row[1],
    deliverable: row[2],
    tools: row[3],
    time: row[4],
  })),
  risks: [
    ["Atraso na entrega", "Fornecedor lento ou logística instável", "Cliente insatisfeito e pedido de reembolso", "Validar prazo realista e ter rastreio", "Comunicar rápido, oferecer solução e revisar fornecedor", "Alta", "Média"],
    ["Fornecedor ruim", "Baixa qualidade ou falta de estoque", "Reembolso, reclamação e perda de margem", "Comprar amostra e checar reputação", "Trocar fornecedor e pausar anúncio", "Alta", "Média"],
    ["Produto de baixa qualidade", "Material frágil ou acabamento ruim", "Devolução e reclamação pública", "Validar amostra e avaliações reais", "Substituir produto e atender cliente", "Alta", "Média"],
    ["Chargeback", "Pedido contestado ou atendimento ruim", "Perda financeira e risco no gateway", "Políticas claras, comprovantes e rastreio", "Responder com evidências e melhorar comunicação", "Alta", "Média"],
    ["Reembolso", "Cliente insatisfeito, atraso ou defeito", "Erosão de margem", "Manter reserva e prazo transparente", "Aplicar política de forma justa", "Média", "Alta"],
    ["Cliente insatisfeito", "Falta de informação ou expectativa errada", "Reclamação pública e queda de confiança", "Texto claro e atendimento em até 24h", "Responder com empatia e solução objetiva", "Alta", "Média"],
    ["Conta de anúncio bloqueada", "Promessa exagerada ou política violada", "Parada de tráfego", "Evitar claims sensíveis e revisar regras", "Reformular criativos e recorrer se aplicável", "Alta", "Baixa"],
    ["Produto saturado", "Concorrência alta e criativos iguais", "CPC alto e baixa conversão", "Testar ângulos e produtos relacionados", "Trocar oferta ou produto", "Média", "Média"],
    ["Margem baixa", "Frete, taxas e CPA acima do planejado", "Negócio sem lucro", "Calcular margem antes de anunciar", "Ajustar preço, oferta, fornecedor ou pausar", "Alta", "Alta"],
    ["Reclamação pública", "Atendimento lento ou promessa não cumprida", "Dano reputacional", "Responder rápido e documentar tudo", "Resolver com transparência e aprendizado", "Alta", "Média"],
    ["Problemas com importação", "Mercadoria internacional, taxa ou retenção", "Atraso, custo extra ou cancelamento", "Preferir fornecedor nacional no começo", "Usar alternativa nacional e informar cliente", "Alta", "Média"],
    ["Produto proibido", "Categoria restrita ou sem autorização", "Bloqueio, multa ou risco legal", "Validar categoria antes de vender", "Parar venda e buscar orientação", "Alta", "Baixa"],
    ["Falta de suporte", "Operação sem rotina", "Cliente sem resposta", "SLA e respostas rápidas", "Criar rotina diária e canal oficial", "Média", "Média"],
    ["Loja com aparência amadora", "Design, texto e checkout fracos", "Perda de confiança e baixa conversão", "Tema limpo, fotos reais e políticas claras", "Revisar página e teste de compra", "Média", "Alta"],
    ["Falta de capital de giro", "Crescimento sem reserva", "Pedidos atrasados e pausa forçada", "Separar caixa e reserva de reembolso", "Reduzir escala e reorganizar fluxo de caixa", "Alta", "Média"],
  ].map((row) => ({
    issue: row[0],
    cause: row[1],
    consequence: row[2],
    prevention: row[3],
    resolution: row[4],
    severity: row[5],
    probability: row[6],
  })),
  checklist: [
    ["Nicho", "Nicho escolhido", "Validar demanda, margem e risco."],
    ["Produto", "Produto validado", "Checar utilidade, amostra e defeitos."],
    ["Fornecedor", "Fornecedor analisado", "Confirmar prazo, estoque, rastreio e qualidade."],
    ["Validação", "Amostra comprada ou validada", "Testar antes do anúncio pago."],
    ["Finanças", "Margem calculada", "Usar a aba de precificação."],
    ["Loja", "Loja revisada", "Checar páginas, imagens, CTA e confiança."],
    ["Checkout", "Checkout testado", "Validar pagamento, e-mails e pedido."],
    ["Políticas", "Políticas criadas", "Troca, privacidade, termos e prazo."],
    ["Prazo", "Prazo de entrega claro", "Não prometer prazo curto sem base."],
    ["Atendimento", "Suporte configurado", "WhatsApp e e-mail com rotina diária."],
    ["Criativos", "Criativos prontos", "Vídeos curtos, claros e sem promessa exagerada."],
    ["Anúncios", "Anúncios configurados", "Testes pequenos com CPA máximo definido."],
    ["Tracking", "Pixel instalado", "Meta Pixel, TikTok Pixel e eventos quando aplicável."],
    ["Analytics", "Analytics instalado", "Google Analytics ou alternativa."],
    ["Finanças", "Reserva para reembolso", "Separar caixa antes de escalar."],
    ["Atendimento", "Plano de atendimento", "Responder em até 24h úteis."],
    ["Conteúdo", "Plano de conteúdo", "TikTok, Reels, Shorts e Pinterest se fizer sentido."],
    ["Escala", "Plano de escala", "Aumentar orçamento apenas com margem positiva."],
  ].map((row, index) => ({
    id: `c${index + 1}`,
    category: row[0],
    item: row[1],
    note: row[2],
  })),
  tools: [
    ["Loja", "Nuvemshop", "Loja simples e rápida para Brasil", "R$ 29 a R$ 119/mês", "Sim", "Boa para começar com operação nacional."],
    ["Loja", "Shopify", "Loja completa e ecossistema amplo", "R$ 39 a R$ 399/mês", "Sim", "Boa para crescer, mas validar custo em reais."],
    ["Loja", "WooCommerce", "Loja com WordPress", "Variável", "Parcial", "Mais controle, exige manutenção."],
    ["Loja", "Yampi", "Checkout e estrutura de loja", "Variável", "Sim", "Muito usada no mercado brasileiro."],
    ["Domínio", "Registro.br", "Comprar domínio próprio", "R$ 40 a R$ 80/ano", "Sim", "Domínio próprio melhora confiança."],
    ["Design", "Canva", "Criar posts, banners e identidade", "Grátis / pago", "Sim", "Excelente para MVP."],
    ["Vídeo", "CapCut", "Editar vídeos curtos", "Grátis / pago", "Sim", "Útil para TikTok/Reels."],
    ["Anúncios", "Meta Ads", "Campanhas no Facebook e Instagram", "Orçamento variável", "Sim", "Começar com orçamento pequeno."],
    ["Anúncios", "TikTok Ads", "Campanhas na plataforma TikTok", "Orçamento variável", "Sim", "Bom para vídeos curtos."],
    ["Atendimento", "WhatsApp Business", "Atendimento, catálogo e respostas rápidas", "Grátis", "Sim", "Canal essencial no Brasil."],
    ["Rastreio", "Melhor Envio", "Frete, rastreio e logística quando aplicável", "Grátis / variável", "Sim", "Útil para fornecedores nacionais."],
    ["E-mail marketing", "Brevo ou Mailchimp", "Fluxos de pós-venda e recuperação", "Grátis / pago", "Parcial", "Só usar quando houver tráfego suficiente."],
    ["Analytics", "Google Analytics", "Medir tráfego e conversão", "Grátis", "Sim", "Instalar desde o início."],
    ["Analytics", "Microsoft Clarity", "Mapas de calor e gravações", "Grátis", "Sim", "Ajuda a achar problemas no checkout."],
    ["Pesquisa", "Google Trends", "Entender interesse e sazonalidade", "Grátis", "Sim", "Bom para validar demanda."],
    ["Pesquisa", "Mercado Livre, Shopee, TikTok e Instagram", "Analisar preço, demanda e criativos", "Grátis", "Sim", "Não copiar marca ou promessa."],
    ["Fornecedores", "Dropi", "Integração e catálogo", "Variável", "Sim", "Validar plano no site oficial."],
    ["Fornecedores", "DSers", "Gestão de pedidos do AliExpress", "Grátis / pago", "Sim", "Útil para testes internacionais."],
    ["Fornecedores", "CJdropshipping", "Sourcing e fulfillment", "Variável", "Parcial", "Mais indicado após validação."],
    ["Automação", "Planilha + rotinas simples", "Controle inicial de pedidos e margem", "Grátis", "Sim", "Automatizar só depois de validar."],
  ].map((row) => ({
    category: row[0],
    name: row[1],
    purpose: row[2],
    price: row[3],
    starter: row[4],
    note: row[5],
  })),
};

const state = {
  activeView: "dashboard",
  visibleProducts: [],
  selectedProductId: "p1",
  scheduleStatus: loadJson(STORAGE.schedule, {}),
  checklistStatus: loadJson(STORAGE.checklist, {}),
};

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  renderDashboard();
  initProducts();
  initSuppliers();
  initPricing();
  initSchedule();
  initRisks();
  initChecklist();
  initTools();

  document.querySelector("#print-page")?.addEventListener("click", () => window.print());
});

function initNavigation() {
  document.querySelectorAll("[data-view-target]").forEach((button) => {
    button.setAttribute("aria-current", button.classList.contains("is-active") ? "page" : "false");
    button.addEventListener("click", () => switchView(button.dataset.viewTarget));
  });
}

function switchView(viewId) {
  state.activeView = viewId;
  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("is-active", view.id === viewId);
  });
  document.querySelectorAll("[data-view-target]").forEach((button) => {
    const isActive = button.dataset.viewTarget === viewId;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-current", isActive ? "page" : "false");
    if (isActive) {
      document.querySelector("#page-title").textContent = button.textContent.trim();
    }
  });
  document.querySelector("#main")?.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderDashboard() {
  const avgMargin = average(data.products.map((product) => product.margin));
  const lowRiskCount = data.products.filter((product) => product.risk === "Baixo").length;
  const costTotals = getCostTotals();
  const topNiche = data.niches[0];

  document.querySelector("#metric-grid").innerHTML = [
    metricCard("Nicho recomendado", topNiche.name, topNiche.note),
    metricCard("Produtos mapeados", integer.format(data.products.length), `${lowRiskCount} com risco baixo`),
    metricCard("Margem média", percent.format(avgMargin), "Com CPA e reserva já considerados na planilha"),
    metricCard("Capital inicial", `${money.format(costTotals.low)} a ${money.format(costTotals.mid)}`, "Faixa econômica a intermediária"),
  ].join("");

  document.querySelector("#ranking-list").innerHTML = data.niches
    .map(
      (niche) => `
        <div class="ranking-row">
          <span>${escapeHtml(niche.rank)}. ${escapeHtml(niche.name)}</span>
          <div class="bar-track" aria-hidden="true">
            <div style="--value: ${niche.score * 10}%"></div>
          </div>
          <strong>${niche.score.toFixed(1)}</strong>
        </div>
      `,
    )
    .join("");

  const maxHigh = Math.max(...data.costs.map((cost) => cost.high));
  document.querySelector("#cost-bars").innerHTML = data.costs
    .slice()
    .sort((a, b) => b.mid - a.mid)
    .slice(0, 7)
    .map(
      (cost) => `
        <div class="cost-row">
          <strong>${escapeHtml(cost.item)}</strong>
          <div class="bar-track" aria-hidden="true">
            <div style="--value: ${(cost.high / maxHigh) * 100}%"></div>
          </div>
          <small>${money.format(cost.low)} - ${money.format(cost.high)}</small>
        </div>
      `,
    )
    .join("");

  document.querySelector("#scenario-grid").innerHTML = Object.entries(data.scenarios)
    .map(([name, scenario]) => {
      const month = computeScenarioMonth(scenario, 2);
      return `
        <div class="scenario-card">
          <strong>${escapeHtml(name)}</strong>
          <span class="money">${money.format(month.profit)}</span>
          <small>${percent.format(month.margin)} de margem no mês 3</small>
          <div class="bar-track" aria-hidden="true">
            <div style="--value: ${Math.max(8, Math.min(100, month.margin * 220))}%"></div>
          </div>
        </div>
      `;
    })
    .join("");
}

function metricCard(label, value, note) {
  return `
    <article class="metric-card">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
      <p>${escapeHtml(note)}</p>
    </article>
  `;
}

function initProducts() {
  fillSelect("#niche-filter", "Todos", unique(data.products.map((product) => product.niche)));
  fillSelect("#risk-filter", "Todos", unique(data.products.map((product) => product.risk)));
  fillSelect("#supplier-filter", "Todos", unique(data.products.map((product) => product.supplier)));

  ["#product-search", "#niche-filter", "#risk-filter", "#supplier-filter", "#product-sort"].forEach((selector) => {
    document.querySelector(selector)?.addEventListener("input", renderProducts);
  });

  document.querySelector("#reset-product-filters")?.addEventListener("click", () => {
    document.querySelector("#product-search").value = "";
    document.querySelector("#niche-filter").value = "all";
    document.querySelector("#risk-filter").value = "all";
    document.querySelector("#supplier-filter").value = "all";
    document.querySelector("#product-sort").value = "score";
    renderProducts();
  });

  document.querySelector("#export-products")?.addEventListener("click", () => {
    exportCsv(
      "produtos-dropshipping.csv",
      ["Produto", "Nicho", "Fornecedor", "Preço", "Margem", "Risco", "Criativo", "Observação"],
      state.visibleProducts.map((product) => [
        product.name,
        product.niche,
        product.supplier,
        product.price,
        product.margin,
        product.risk,
        product.creative,
        product.notes,
      ]),
    );
  });

  document.querySelector("#products-table tbody")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-use-product]");
    const row = event.target.closest("[data-select-product]");
    if (button) {
      const product = findProduct(button.dataset.useProduct);
      loadProductIntoCalculator(product);
      return;
    }
    if (row) {
      state.selectedProductId = row.dataset.selectProduct;
      renderProductDetail();
    }
  });

  document.querySelector("#product-detail")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-use-product]");
    if (!button) return;
    loadProductIntoCalculator(findProduct(button.dataset.useProduct));
  });

  renderProducts();
}

function renderProducts() {
  const search = normalize(document.querySelector("#product-search")?.value ?? "");
  const niche = document.querySelector("#niche-filter")?.value ?? "all";
  const risk = document.querySelector("#risk-filter")?.value ?? "all";
  const supplier = document.querySelector("#supplier-filter")?.value ?? "all";
  const sort = document.querySelector("#product-sort")?.value ?? "score";

  let products = data.products.filter((product) => {
    const haystack = normalize(
      [product.name, product.niche, product.supplier, product.promise, product.audience, product.creative, product.notes].join(" "),
    );
    return (
      (!search || haystack.includes(search)) &&
      (niche === "all" || product.niche === niche) &&
      (risk === "all" || product.risk === risk) &&
      (supplier === "all" || product.supplier === supplier)
    );
  });

  products = products.slice().sort((a, b) => sortProducts(a, b, sort));
  state.visibleProducts = products;

  const avgMargin = average(products.map((product) => product.margin));
  const avgPrice = average(products.map((product) => product.price));
  const lowRisk = products.filter((product) => product.risk === "Baixo").length;
  const best = products[0]?.name ?? "Nenhum";
  document.querySelector("#product-summary").innerHTML = [
    summaryItem("Resultados", integer.format(products.length)),
    summaryItem("Margem média", products.length ? percent.format(avgMargin) : "0,0%"),
    summaryItem("Preço médio", products.length ? money.format(avgPrice) : money.format(0)),
    summaryItem("Risco baixo", `${lowRisk} itens`),
  ].join("");

  const tbody = document.querySelector("#products-table tbody");
  if (!products.length) {
    tbody.innerHTML = `<tr><td colspan="7">Nenhum produto encontrado para os filtros atuais.</td></tr>`;
    document.querySelector("#product-detail").innerHTML = `<h3>Sem seleção</h3><p>Ajuste os filtros para analisar um produto.</p>`;
    return;
  }

  if (!products.some((product) => product.id === state.selectedProductId)) {
    state.selectedProductId = products[0].id;
  }

  tbody.innerHTML = products
    .map(
      (product) => `
        <tr data-select-product="${product.id}" tabindex="0" aria-label="Selecionar ${escapeHtml(product.name)}">
          <td>
            <span class="cell-title">${escapeHtml(product.name)}</span>
            <span class="cell-subtitle">${escapeHtml(product.promise)}</span>
          </td>
          <td>${escapeHtml(product.niche)}</td>
          <td><span class="tag tag-neutral">${escapeHtml(product.supplier)}</span></td>
          <td>${money.format(product.price)}</td>
          <td><strong>${percent.format(product.margin)}</strong></td>
          <td><span class="tag ${riskTagClass(product.risk)}">${escapeHtml(product.risk)}</span></td>
          <td>
            <button class="button button-ghost" type="button" data-use-product="${product.id}">
              Calcular
            </button>
          </td>
        </tr>
      `,
    )
    .join("");

  renderProductDetail();
  if (products[0]?.name !== best) {
    showToast("Ordenação atualizada.");
  }
}

function renderProductDetail() {
  const product = findProduct(state.selectedProductId) ?? state.visibleProducts[0] ?? data.products[0];
  if (!product) return;

  document.querySelector("#product-detail").innerHTML = `
    <span class="tag ${riskTagClass(product.risk)}">${escapeHtml(product.risk)}</span>
    <h3>${escapeHtml(product.name)}</h3>
    <p>${escapeHtml(product.promise)}</p>
    <dl class="detail-list">
      <div><dt>Nicho</dt><dd>${escapeHtml(product.niche)}</dd></div>
      <div><dt>Fornecedor</dt><dd>${escapeHtml(product.supplier)}</dd></div>
      <div><dt>Custo + frete</dt><dd>${money.format(product.cost + product.freight)}</dd></div>
      <div><dt>Preço sugerido</dt><dd>${money.format(product.price)}</dd></div>
      <div><dt>Margem</dt><dd>${percent.format(product.margin)}</dd></div>
      <div><dt>CPA previsto</dt><dd>${money.format(product.cpa)}</dd></div>
    </dl>
    <p><strong>Criativo:</strong> ${escapeHtml(product.creative)}</p>
    <p><strong>Cuidado:</strong> ${escapeHtml(product.notes)}</p>
    <button class="button button-primary" type="button" data-use-product="${product.id}">
      Usar na calculadora
    </button>
  `;
}

function initSuppliers() {
  ["#supplier-starter-filter", "#supplier-reliability-filter"].forEach((selector) => {
    document.querySelector(selector)?.addEventListener("input", renderSuppliers);
  });
  renderSuppliers();
}

function renderSuppliers() {
  const starter = document.querySelector("#supplier-starter-filter")?.value ?? "all";
  const reliability = document.querySelector("#supplier-reliability-filter")?.value ?? "all";
  const suppliers = data.suppliers.filter((supplier) => {
    const starterMatch =
      starter === "all" ||
      supplier.starter === starter ||
      (starter === "Sim" && supplier.starter === "Sim com cautela");
    return starterMatch && (reliability === "all" || supplier.reliability === reliability);
  });

  document.querySelector("#supplier-grid").innerHTML = suppliers
    .map(
      (supplier) => `
        <article class="supplier-card">
          <div class="panel-header">
            <div>
              <p class="eyebrow">${escapeHtml(supplier.type)}</p>
              <h3>${escapeHtml(supplier.name)}</h3>
            </div>
            <span class="tag ${starterTagClass(supplier.starter)}">${escapeHtml(supplier.starter)}</span>
          </div>
          <p>${escapeHtml(supplier.bestUse)}</p>
          <div class="supplier-meta">
            <span class="tag ${reliabilityTagClass(supplier.reliability)}">${escapeHtml(supplier.reliability)}</span>
            <span class="tag tag-neutral">${escapeHtml(supplier.delivery)}</span>
            <span class="tag tag-neutral">${escapeHtml(supplier.cost)}</span>
          </div>
          <dl>
            <div><dt>Vantagem</dt><dd>${escapeHtml(supplier.pros)}</dd></div>
            <div><dt>Limite</dt><dd>${escapeHtml(supplier.cons)}</dd></div>
            <div><dt>Integrações</dt><dd>${escapeHtml(supplier.integrations)}</dd></div>
            <div><dt>Cuidado</dt><dd>${escapeHtml(supplier.care)}</dd></div>
          </dl>
        </article>
      `,
    )
    .join("");
}

function initPricing() {
  document.querySelector("#pricing-form")?.addEventListener("input", updatePricing);
  document.querySelector("#pricing-form")?.addEventListener("reset", () => {
    window.setTimeout(updatePricing, 0);
  });

  document.querySelector("#product-load-buttons").innerHTML = data.products
    .slice()
    .sort((a, b) => sortProducts(a, b, "score"))
    .slice(0, 8)
    .map(
      (product) => `
        <button class="button button-ghost" type="button" data-load-product="${product.id}">
          ${escapeHtml(product.name)}
        </button>
      `,
    )
    .join("");

  document.querySelector("#product-load-buttons")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-load-product]");
    if (!button) return;
    loadProductIntoCalculator(findProduct(button.dataset.loadProduct), false);
  });

  updatePricing();
}

function loadProductIntoCalculator(product, navigate = true) {
  if (!product) return;
  document.querySelector("#calc-cost").value = product.cost.toFixed(2);
  document.querySelector("#calc-freight").value = product.freight.toFixed(2);
  document.querySelector("#calc-price").value = product.price.toFixed(2);
  document.querySelector("#calc-cpa").value = product.cpa.toFixed(2);
  document.querySelector("#calc-refund").value = product.refund.toFixed(2);
  updatePricing();
  showToast(`${product.name} carregado na calculadora.`);
  if (navigate) switchView("precificacao");
}

function updatePricing() {
  const cost = readNumber("#calc-cost");
  const freight = readNumber("#calc-freight");
  const price = readNumber("#calc-price");
  const cpa = readNumber("#calc-cpa");
  const platform = readNumber("#calc-platform");
  const payment = readNumber("#calc-payment");
  const tax = readNumber("#calc-tax");
  const refund = readNumber("#calc-refund");
  const target = readNumber("#calc-target");
  const feeRate = platform + payment + tax;
  const variableFees = price * feeRate;
  const profit = price - cost - freight - cpa - refund - variableFees;
  const margin = price > 0 ? profit / price : 0;
  const breakEvenCpa = price - cost - freight - refund - variableFees;
  const cpaForTarget = price * (1 - feeRate - target) - cost - freight - refund;
  const denominator = Math.max(0.01, 1 - feeRate - target);
  const minimumPrice = (cost + freight + cpa + refund) / denominator;

  const badge = document.querySelector("#margin-badge");
  let badgeText = "Abaixo da meta";
  let badgeClass = "tag-bad";
  if (margin >= target) {
    badgeText = "Dentro da meta";
    badgeClass = "tag-good";
  } else if (margin >= 0.18) {
    badgeText = "Ajustável";
    badgeClass = "tag-warn";
  }
  badge.textContent = badgeText;
  badge.className = `result-badge ${badgeClass}`;

  document.querySelector("#pricing-results").innerHTML = [
    resultCard("Lucro líquido", money.format(profit), "Após produto, frete, taxas, CPA e reserva."),
    resultCard("Margem líquida", percent.format(margin), `Meta atual: ${percent.format(target)}.`),
    resultCard("CPA máximo zero a zero", money.format(Math.max(0, breakEvenCpa)), "Acima disso a venda tende a virar prejuízo."),
    resultCard("CPA para bater meta", money.format(cpaForTarget), "Valor máximo de anúncio para manter a margem alvo."),
    resultCard("Preço mínimo na meta", money.format(minimumPrice), "Preço necessário mantendo o CPA informado."),
    resultCard("Taxas variáveis", money.format(variableFees), `${percent.format(feeRate)} sobre a venda.`),
  ].join("");
}

function resultCard(label, value, note) {
  return `
    <article class="result-card">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
      <small>${escapeHtml(note)}</small>
    </article>
  `;
}

function initSchedule() {
  document.querySelector("#schedule-filter")?.addEventListener("input", renderSchedule);
  document.querySelector("#reset-schedule")?.addEventListener("click", () => {
    state.scheduleStatus = {};
    saveJson(STORAGE.schedule, state.scheduleStatus);
    renderSchedule();
    showToast("Cronograma restaurado.");
  });

  document.querySelector("#schedule-list")?.addEventListener("change", (event) => {
    const select = event.target.closest("[data-schedule-day]");
    if (!select) return;
    state.scheduleStatus[select.dataset.scheduleDay] = select.value;
    saveJson(STORAGE.schedule, state.scheduleStatus);
    renderSchedule();
  });

  renderSchedule();
}

function renderSchedule() {
  const filter = document.querySelector("#schedule-filter")?.value ?? "all";
  const schedule = data.schedule
    .map((item) => ({
      ...item,
      status: state.scheduleStatus[item.day] ?? "Pendente",
    }))
    .filter((item) => filter === "all" || item.status === filter);

  const done = data.schedule.filter((item) => state.scheduleStatus[item.day] === "Concluído").length;
  const progress = data.schedule.length ? done / data.schedule.length : 0;
  document.querySelector("#schedule-progress-label").textContent = `${percent.format(progress)} concluído`;
  document.querySelector("#schedule-progress-bar").style.setProperty("--value", `${progress * 100}%`);

  document.querySelector("#schedule-list").innerHTML = schedule
    .map(
      (item) => `
        <article class="timeline-item">
          <div class="timeline-day">${item.day}</div>
          <div class="timeline-body">
            <h3>${escapeHtml(item.goal)}</h3>
            <p>${escapeHtml(item.task)}</p>
            <div class="timeline-meta">
              <span class="tag tag-neutral">${escapeHtml(item.deliverable)}</span>
              <span class="tag tag-neutral">${escapeHtml(item.tools)}</span>
              <span class="tag tag-neutral">${escapeHtml(item.time)}</span>
            </div>
          </div>
          <label class="field">
            <span>Status</span>
            <select data-schedule-day="${item.day}">
              ${statusOptions(item.status)}
            </select>
          </label>
        </article>
      `,
    )
    .join("");
}

function initRisks() {
  ["#risk-severity-filter", "#risk-probability-filter"].forEach((selector) => {
    document.querySelector(selector)?.addEventListener("input", renderRisks);
  });
  renderRisks();
}

function renderRisks() {
  const severity = document.querySelector("#risk-severity-filter")?.value ?? "all";
  const probability = document.querySelector("#risk-probability-filter")?.value ?? "all";
  const risks = data.risks.filter(
    (risk) =>
      (severity === "all" || risk.severity === severity) &&
      (probability === "all" || risk.probability === probability),
  );

  renderRiskMatrix();
  document.querySelector("#risk-list").innerHTML = risks
    .map(
      (risk) => `
        <article class="risk-card">
          <h3>${escapeHtml(risk.issue)}</h3>
          <p><strong>Causa:</strong> ${escapeHtml(risk.cause)}</p>
          <p><strong>Prevenir:</strong> ${escapeHtml(risk.prevention)}</p>
          <p><strong>Resolver:</strong> ${escapeHtml(risk.resolution)}</p>
          <footer>
            <span class="tag ${riskLevelClass(risk.severity)}">Gravidade ${escapeHtml(risk.severity)}</span>
            <span class="tag ${riskLevelClass(risk.probability)}">Probabilidade ${escapeHtml(risk.probability)}</span>
          </footer>
        </article>
      `,
    )
    .join("");
}

function renderRiskMatrix() {
  const severities = ["Alta", "Média", "Baixa"];
  const probabilities = ["Baixa", "Média", "Alta"];
  const header = `
    <div class="matrix-row">
      <span></span>
      ${probabilities.map((probability) => `<span class="matrix-label">${escapeHtml(probability)}</span>`).join("")}
    </div>
  `;
  const rows = severities
    .map(
      (severity) => `
        <div class="matrix-row">
          <span class="matrix-label">${escapeHtml(severity)}</span>
          ${probabilities
            .map((probability) => {
              const count = data.risks.filter(
                (risk) => risk.severity === severity && risk.probability === probability,
              ).length;
              return `
                <div class="matrix-cell">
                  <strong>${count}</strong>
                  <span>riscos</span>
                </div>
              `;
            })
            .join("")}
        </div>
      `,
    )
    .join("");
  document.querySelector("#risk-matrix").innerHTML = header + rows;
}

function initChecklist() {
  document.querySelector("#checklist-list")?.addEventListener("change", (event) => {
    const checkbox = event.target.closest("[data-checklist-id]");
    if (!checkbox) return;
    state.checklistStatus[checkbox.dataset.checklistId] = checkbox.checked;
    saveJson(STORAGE.checklist, state.checklistStatus);
    renderChecklistProgress();
  });

  document.querySelector("#reset-checklist")?.addEventListener("click", () => {
    state.checklistStatus = {};
    saveJson(STORAGE.checklist, state.checklistStatus);
    renderChecklist();
    showToast("Checklist limpo.");
  });

  document.querySelector("#export-checklist")?.addEventListener("click", () => {
    exportCsv(
      "checklist-dropshipping.csv",
      ["Categoria", "Item", "Status", "Observação"],
      data.checklist.map((item) => [
        item.category,
        item.item,
        state.checklistStatus[item.id] ? "Concluído" : "Pendente",
        item.note,
      ]),
    );
  });

  renderChecklist();
}

function renderChecklist() {
  document.querySelector("#checklist-list").innerHTML = data.checklist
    .map(
      (item) => `
        <label class="checklist-item">
          <input
            type="checkbox"
            data-checklist-id="${item.id}"
            ${state.checklistStatus[item.id] ? "checked" : ""}
          >
          <span>
            <span class="tag tag-neutral">${escapeHtml(item.category)}</span>
            <h3>${escapeHtml(item.item)}</h3>
            <p>${escapeHtml(item.note)}</p>
          </span>
        </label>
      `,
    )
    .join("");
  renderChecklistProgress();
}

function renderChecklistProgress() {
  const done = data.checklist.filter((item) => Boolean(state.checklistStatus[item.id])).length;
  const progress = data.checklist.length ? done / data.checklist.length : 0;
  document.querySelector("#checklist-progress-label").textContent = `${percent.format(progress)} concluído`;
  document.querySelector("#checklist-progress-bar").style.setProperty("--value", `${progress * 100}%`);
}

function initTools() {
  ["#tool-search", "#tool-starter-filter"].forEach((selector) => {
    document.querySelector(selector)?.addEventListener("input", renderTools);
  });
  renderTools();
}

function renderTools() {
  const search = normalize(document.querySelector("#tool-search")?.value ?? "");
  const starter = document.querySelector("#tool-starter-filter")?.value ?? "all";
  const tools = data.tools.filter((tool) => {
    const haystack = normalize([tool.category, tool.name, tool.purpose, tool.price, tool.note].join(" "));
    return (!search || haystack.includes(search)) && (starter === "all" || tool.starter === starter);
  });

  document.querySelector("#tools-table tbody").innerHTML = tools
    .map(
      (tool) => `
        <tr>
          <td>${escapeHtml(tool.category)}</td>
          <td><span class="cell-title">${escapeHtml(tool.name)}</span></td>
          <td>${escapeHtml(tool.purpose)}</td>
          <td>${escapeHtml(tool.price)}</td>
          <td><span class="tag ${starterTagClass(tool.starter)}">${escapeHtml(tool.starter)}</span></td>
          <td>${escapeHtml(tool.note)}</td>
        </tr>
      `,
    )
    .join("");
}

function summaryItem(label, value) {
  return `
    <div class="summary-item">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
    </div>
  `;
}

function statusOptions(selected) {
  return ["Pendente", "Em andamento", "Concluído"]
    .map((status) => `<option value="${status}" ${status === selected ? "selected" : ""}>${status}</option>`)
    .join("");
}

function sortProducts(a, b, sort) {
  if (sort === "margin-desc") return b.margin - a.margin;
  if (sort === "price-asc") return a.price - b.price;
  if (sort === "risk-asc") return riskRank(a.risk) - riskRank(b.risk) || b.margin - a.margin;
  if (sort === "supplier") return a.supplier.localeCompare(b.supplier, "pt-BR") || b.margin - a.margin;
  return productScore(b) - productScore(a);
}

function productScore(product) {
  const nicheScore = data.niches.find((niche) => niche.name === product.niche)?.score ?? 7;
  const riskBonus = product.risk === "Baixo" ? 1.2 : 0.4;
  const supplierBonus = ["Dropi", "DropNacional", "Fornecedor nacional direto"].includes(product.supplier) ? 0.6 : 0.2;
  return nicheScore + product.margin * 10 + riskBonus + supplierBonus;
}

function riskRank(risk) {
  if (risk === "Baixo") return 1;
  if (risk === "Médio") return 2;
  return 3;
}

function findProduct(id) {
  return data.products.find((product) => product.id === id);
}

function riskTagClass(risk) {
  if (risk === "Baixo") return "tag-low";
  if (risk === "Médio") return "tag-mid";
  return "tag-high";
}

function riskLevelClass(level) {
  if (level === "Baixa") return "tag-good";
  if (level === "Média") return "tag-warn";
  return "tag-bad";
}

function reliabilityTagClass(level) {
  return level === "Alta" ? "tag-good" : "tag-warn";
}

function starterTagClass(value) {
  if (value === "Sim" || value === "Sim com cautela") return "tag-good";
  if (value === "Parcial") return "tag-warn";
  return "tag-bad";
}

function fillSelect(selector, allLabel, values) {
  const select = document.querySelector(selector);
  if (!select) return;
  select.innerHTML = [
    `<option value="all">${escapeHtml(allLabel)}</option>`,
    ...values.map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`),
  ].join("");
}

function unique(values) {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b, "pt-BR"));
}

function average(values) {
  const valid = values.filter((value) => Number.isFinite(value));
  if (!valid.length) return 0;
  return valid.reduce((sum, value) => sum + value, 0) / valid.length;
}

function getCostTotals() {
  return data.costs.reduce(
    (totals, cost) => ({
      low: totals.low + cost.low,
      mid: totals.mid + cost.mid,
      high: totals.high + cost.high,
    }),
    { low: 0, mid: 0, high: 0 },
  );
}

function computeScenarioMonth(scenario, index) {
  const visits = scenario.visits[index];
  const orders = Math.round(visits * scenario.rate[index]);
  const revenue = orders * scenario.ticket[index];
  const productsCost = revenue * 0.42;
  const freight = revenue * 0.1;
  const fees = revenue * 0.075;
  const ads = visits * scenario.adsPerVisit;
  const refunds = revenue * 0.04;
  const profit = revenue - productsCost - freight - fees - ads - scenario.tools - refunds;
  return {
    orders,
    revenue,
    profit,
    margin: revenue > 0 ? profit / revenue : 0,
  };
}

function readNumber(selector) {
  const value = Number.parseFloat(document.querySelector(selector)?.value);
  return Number.isFinite(value) ? value : 0;
}

function normalize(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function loadJson(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function saveJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function exportCsv(filename, headers, rows) {
  const csv = [headers, ...rows].map((row) => row.map(csvCell).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast(`${filename} exportado.`);
}

function csvCell(value) {
  const text = String(value ?? "");
  if (/[",\n]/.test(text)) {
    return `"${text.replace(/"/g, '""')}"`;
  }
  return text;
}

let toastTimeout;
function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2600);
}
