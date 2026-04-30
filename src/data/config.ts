export const siteConfig = {
  babyName: 'Luisa',
  dueDate: 'Julho de 2026',
  familySignature: 'Com carinho, Mamãe e Papai da Luisa',
  whatsappUrl: import.meta.env.VITE_WHATSAPP_URL ?? '',
  navigation: [
    { label: 'Sobre', href: '#sobre-luisa' },
    { label: 'Como participar', href: '#como-funciona' },
    { label: 'Sugestões', href: '#presentes' },
    { label: 'Contribuição', href: '#pix' },
    { label: 'Contato', href: '#agradecimento' },
  ],
  hero: {
    badge: 'Chá de bebê online',
    title: 'Luisa',
    lead: 'Estamos ansiosos pela sua chegada, mesmo um pouco longe de quem a gente gostaria de ter por perto.',
    description:
      'E por isso criamos essa página de forma simples para compartilhar esse momento com vocês. É o nosso jeitinho de aproximar todo mundo, mesmo à distância, e tornar cada gesto parte dessa espera tão especial.',
    image: '/images/hero-illustration.jpeg',
  },
  aboutLuisa: {
    badge: 'Sobre a Luisa',
    title: 'A Luisa já está sendo muito esperada por aqui.',
    familyMessage:
      'Mesmo antes de chegar, ela já mudou muita coisa na nossa rotina. Cada detalhe, cada preparação… tudo tem sido feito com muito carinho. E é muito bonito e gratificante ver como ela já está reunindo o carinho de tanta gente, inclusive de pessoas queridas que estão tão longe, do outro lado do mundo!',
    supportingText:
      'Gostariamos muito poder viver esse momento de forma mais próxima de todo mundo, mas como as condições não favorecem, encontramos nesse chá online um jeito de dividir um pouco dessa fase com vocês.',
    image: '/images/baby-photo.jpeg',
    highlights: [
      { label: 'Momento', value: 'Vivendo essa fase com muita expectativa' },
      { label: 'Com amor de', value: 'Mamãe, papai e toda a família' },
    ],
  },
  aboutTea: {
    badge: 'Como funciona',
    title: 'Uma maneira simples de participar desse momento único com a gente',
    intro:
      'Para tornar tudo prático e especial, separamos algumas sugestões de presentes para ajudar quem quiser participar da chegada da nossa Luisa.',
    points: [
      'Se quiser participar, temos alguns itens na lista para usar como referência. Tudo aqui foi pensado só para facilitar, fique totalmente à vontade.',
      'A opção principal que deixamos é o Pix, por ser mais simples, fácil e rápido, mas se preferir podemos gerar um link para contribuições no cartão de crédito.',
      'O mais importante pra gente é ter vocês, mesmo que de longe, fazendo parte disso. Cada mensagem, cada gesto e cada lembrança significa muito pra gente.',
    ],
  },
  pix: {
    badge: 'Contribuição',
    title: 'Se fizer sentido pra você participar com a gente, deixamos o Pix aqui.',
    description:
      'O QR code está logo abaixo, mas se preferir você pode usar a chave Pix também. E, caso queira fazer por cartão, é só mandar uma mensagem pra mamãe que ela envia o link!',
    qrCodeImage: '/images/qr-code.png',
    qrCodeHint: 'Use da forma que for mais prática pra você.',
    keyLabel: 'Chave Pix',
    keyValue: import.meta.env.VITE_PIX_KEY ?? '',
    copyButtonLabel: 'Copiar chave Pix',
    copiedLabel: 'Chave copiada',
    contactMomLabel: 'Fale com a mamãe',
  },
  closing: {
    badge: 'Com carinho',
    title: 'Obrigado por fazer parte desse momento tão especial com a gente.',
    message:
      'De verdade, cada mensagem, cada gesto e cada lembrança já significam muito pra nós. Estamos muito felizes em poder dividir esse momento com vocês, mesmo à distância.',
    ctaLabel: 'Fale com a gente',
  },
  footer: {
    lineOne: 'Chá da Luisa',
    lineTwo: 'Feito com muito amor para dividir esse momento com quem a gente gosta.',
  },
} as const
