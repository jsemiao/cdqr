const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
const year = document.querySelector("[data-year]");
const htmlRoot = document.documentElement;
const metaDescription = document.querySelector('meta[name="description"]');
const languageSwitch = document.querySelector(".lang-switch");
const languageButtons = [...document.querySelectorAll(".lang-switch button[data-lang]")];

const i18nNodes = {
  brand: document.querySelector(".brand"),
  brandLogoDefault: document.querySelector(".brand-logo-default"),
  brandLogoScrolled: document.querySelector(".brand-logo-scrolled"),
  menuSrOnly: document.querySelector(".menu-toggle .sr-only"),
  navAria: document.querySelector("#main-navigation"),
  navLinks: [...document.querySelectorAll("#main-navigation a")],
  heroEyebrow: document.querySelector(".hero .eyebrow"),
  heroTitleLine1: document.querySelector("#hero-title .title-line:first-child"),
  heroTitlePlace: [...document.querySelectorAll("#hero-title .title-line-place span")],
  heroCopy: document.querySelector(".hero-copy"),
  heroActions: document.querySelector(".hero-actions"),
  heroButtons: [...document.querySelectorAll(".hero-actions .button")],
  quickFacts: document.querySelector(".quick-facts"),
  quickFactsLabels: [...document.querySelectorAll(".facts-grid article span")],
  introKicker: document.querySelector(".intro-section .section-kicker"),
  introTitle: document.querySelector(".intro-grid h2"),
  introParagraphs: [...document.querySelectorAll(".intro-copy p")],
  clubKicker: document.querySelector("#clube .split-layout > div:first-child .section-kicker"),
  clubTitle: document.querySelector("#clube .split-layout > div:first-child h2"),
  clubParagraphs: [...document.querySelectorAll("#clube .split-layout > div:first-child > p:not(.section-kicker)")],
  timeline: document.querySelector("#clube .timeline"),
  timelineThirdTag: document.querySelector("#clube .timeline article:nth-child(3) span"),
  timelineTitles: [...document.querySelectorAll("#clube .timeline h3")],
  timelineParagraphs: [...document.querySelectorAll("#clube .timeline p")],
  valuesGrid: document.querySelector(".values-grid"),
  valueTitles: [...document.querySelectorAll(".values-grid h3")],
  valueParagraphs: [...document.querySelectorAll(".values-grid p")],
  infoKicker: document.querySelector("#info .section-kicker"),
  infoTitle: document.querySelector("#info h2"),
  infoPanelTitles: [...document.querySelectorAll("#info .info-panel h3")],
  infoAddress: document.querySelector("#info address"),
  infoGps: document.querySelector('#info a[href*="google.com/maps"]'),
  hoursDays: [...document.querySelectorAll(".hours-list dt")],
  facilitiesItems: [...document.querySelectorAll(".facilities li")],
  servicesKicker: document.querySelector("#servicos .section-kicker"),
  servicesTitle: document.querySelector("#servicos h2"),
  serviceTitles: [...document.querySelectorAll("#servicos .service-card h3")],
  serviceParagraphs: [...document.querySelectorAll("#servicos .service-card p")],
  programsKicker: document.querySelector("#programas .section-kicker"),
  programsTitle: document.querySelector("#programas h2"),
  programCardSpans: [...document.querySelectorAll("#programas .program-card span")],
  programCardTitles: [...document.querySelectorAll("#programas .program-card h3")],
  programCardParagraphs: [...document.querySelectorAll("#programas .program-card p")],
  programCardImages: [...document.querySelectorAll("#programas .program-card img")],
  programModalClose: document.querySelector("[data-program-close]"),
  galleryKicker: document.querySelector("#galeria .section-kicker"),
  galleryTitle: document.querySelector("#galeria h2"),
  galleryImages: [...document.querySelectorAll("#galeria .slide img")],
  galleryCaptions: [...document.querySelectorAll("#galeria .slide figcaption")],
  galleryPrev: document.querySelector("[data-prev]"),
  galleryNext: document.querySelector("[data-next]"),
  galleryDots: document.querySelector("[data-dots]"),
  partnersKicker: document.querySelector(".partners-section .section-kicker"),
  partnersTitle: document.querySelector("#partners-title"),
  partnerGroupTitles: [...document.querySelectorAll(".partner-group h3")],
  partnerFirstList: [...document.querySelectorAll(".partner-wrap .partner-group:first-child li")],
  contactKicker: document.querySelector("#contactos .section-kicker"),
  contactTitle: document.querySelector("#contactos h2"),
  contactText: document.querySelector("#contactos .contact-band p:last-of-type"),
  contactEmailButton: document.querySelector('#contactos a[href^="mailto:"]'),
  footerLogo: document.querySelector(".site-footer img"),
  footerText: document.querySelector(".footer-grid p:first-of-type"),
  footerCopyright: document.querySelector(".footer-grid p:last-of-type")
};

const translations = {
  pt: {
    htmlLang: "pt",
    pageTitle: "Centro Desportivo Quinta das Raposeiras | Ténis e Padel em Faro",
    pageDescription:
      "Centro Desportivo Quinta das Raposeiras, em Santa Bárbara de Nexe, Faro. Courts de ténis e padel, academia, eventos, programas sociais e Sports Bar.",
    languageSwitchAria: "Selecionar idioma",
    brandAria: "Centro Desportivo Quinta das Raposeiras",
    brandLogoDefaultAlt: "Logotipo Centro Desportivo Quinta das Raposeiras",
    brandLogoScrolledAlt: "Logotipo simplificado do Centro Desportivo Quinta das Raposeiras",
    menuSrOnly: "Abrir menu",
    navAria: "Navegação principal",
    navLinks: ["Clube", "Info", "Serviços", "Programas", "Fotos", "Contactos"],
    heroEyebrow: "Ténis • Padel • Faro, Algarve",
    heroTitleLine1: "Centro Desportivo",
    heroTitlePlace: ["Quinta das", "Raposeiras"],
    heroCopy:
      "No topo da Quinta das Raposeiras, um espaço de natureza, convívio e prática desportiva para todas as idades.",
    heroActionsAria: "Ações principais",
    heroButtons: ["Reservar court", "Ver programas"],
    quickFactsAria: "Resumo das instalações",
    quickFactsLabels: ["courts de ténis", "courts de padel", "segunda a sábado", "barrocal algarvio"],
    introKicker: "Boas-vindas",
    introTitle: "Desporto, lazer e comunidade no alto das Raposeiras.",
    introParagraphs: [
      "O Centro Desportivo da Quinta das Raposeiras insere-se numa zona essencialmente vocacionada para o lazer, onde a tranquilidade do silêncio se mistura com a natureza, criando uma condição privilegiada para a prática desportiva.",
      "Oferecemos um plano anual de eventos diversificado, serviços e programas específicos nas modalidades de ténis e padel, com o apoio social do nosso Sports Bar.",
      "Visite-nos. Estamos à sua espera."
    ],
    clubKicker: "CDQR",
    clubTitle: "Um clube com história, energia nova e vista para o futuro.",
    clubParagraphs: [
      "Os campos de ténis da Quinta das Raposeiras surgiram no final dos anos 70 e início dos anos 80, entre os primeiros courts existentes no Concelho de Faro. Fernando Martins criou uma zona vocacionada para a prática desportiva no topo da propriedade, oferecendo aos residentes uma área de lazer e convívio.",
      "Depois de anos de atividade e de um período de menor utilização, Ângelo Orge iniciou em 2006 um projeto de revitalização do Clube, recuperando o espaço e reforçando a organização de eventos, divulgação e novas infraestruturas, incluindo o padel."
    ],
    timelineAria: "Cronograma do clube",
    timelineThirdTag: "Hoje",
    timelineTitles: ["Primeiros courts", "Revitalização", "Ténis e padel"],
    timelineParagraphs: [
      "Nasce a área desportiva da Quinta das Raposeiras, dedicada ao ténis e ao convívio.",
      "Nova gestão, recuperação das estruturas e relançamento da vida desportiva do clube.",
      "Programas regulares, academia, torneios, Sports Bar e uma comunidade em crescimento."
    ],
    valuesAria: "Missão, visão e valores",
    valueTitles: ["Missão", "Visão", "Valores"],
    valueParagraphs: [
      "Promover e divulgar a prática desportiva, especialmente o desenvolvimento sustentado do ténis e do padel.",
      "Aliar saúde, hábitos físicos corretos e um envolvimento social forte, com serviço de excelência e diferenciação.",
      "Rigor, inovação, qualidade e competência em todas as ações prestadas pelo clube."
    ],
    infoKicker: "Info",
    infoTitle: "Localização, horários e instalações.",
    infoPanelTitles: ["Contactos", "Horário", "Instalações"],
    infoAddress:
      "Centro Desportivo da Quinta das Raposeiras<br>Quinta das Raposeiras, Rua do Ténis<br>8005-527 Faro, Algarve, Portugal",
    infoGps: "GPS: 37º08’01.2”N 7º56’07.8”W",
    hoursDays: ["Segunda a sábado", "Domingos"],
    facilitiesItems: [
      "3 courts de ténis em piso rápido",
      "2 courts de padel",
      "Parede bate-bolas e court mini ténis",
      "Sede social ténis e sede social padel",
      "Sports Bar e balneários"
    ],
    servicesKicker: "Serviços",
    servicesTitle: "Tudo o que precisas para jogar, treinar e conviver.",
    serviceTitles: ["Academia Ténis", "Academia Padel", "Eventos", "Pro Shop", "Sports Bar"],
    serviceParagraphs: [
      "Aluguer de courts, aulas de grupo, aulas individuais, raquetes, bolas, club supporters e encordoações.",
      "Courts de padel, aulas de grupo, treino individual, aluguer de material e acompanhamento para evolução técnica.",
      "Torneios, clínicas, férias desportivas, estágios, aniversários e programas para empresas.",
      "Merchandising do clube, raquetes, bolas, acessórios e têxtil para ténis e padel.",
      "Cafetaria, bebidas e snacks para prolongar o jogo com bons momentos fora do court."
    ],
    programsKicker: "Programas",
    programsTitle: "Agenda social e desportiva durante todo o ano.",
    programCardSpans: ["Social Tennis", "Social Padel", "Club Supporters", "Eventos", "Pro Shop", "Summer Camp"],
    programCardTitles: [
      "\"Foxes\"",
      "\"Rápido\"",
      "Praticantes do clube",
      "Tennis & Padel BBQ, Sunset Padel e mais",
      "Equipamento e merchandising",
      "Programa juvenil de verão"
    ],
    programCardParagraphs: [
      "Jogos amigáveis de pares às segundas, quartas e sextas de manhã.",
      "Mistos em formato round robin, aos domingos de manhã.",
      "Programa de donativo anual para apoiar a atividade e a comunidade CDQR.",
      "Momentos competitivos e sociais para diferentes escalões e níveis de jogo.",
      "Material de apoio para treinos, jogos, eventos e identidade do clube.",
      "Atividades de manhã durante o mês de julho, pensadas para jovens praticantes."
    ],
    programCardImageAlts: [
      "Poster do programa Social Tennis Foxes",
      "Poster do programa Social Padel Rápido",
      "Poster do programa Club Supporters",
      "Poster de eventos do Centro Desportivo Quinta das Raposeiras",
      "Poster da Pro Shop",
      "Poster do programa Summer Camp 2026"
    ],
    programModalCloseAria: "Fechar programa",
    programModalFallbackKicker: "Programa",
    programModalFallbackTitle: "Detalhes do programa",
    galleryKicker: "Fotos",
    galleryTitle: "Dentro e fora do court.",
    galleryImageAlts: [
      "Court de padel do Centro Desportivo Quinta das Raposeiras",
      "Vista aérea dos courts de padel",
      "Grupo de participantes em evento do clube",
      "Visita ao Centro Desportivo Quinta das Raposeiras",
      "Comemoração de dez anos de história do clube",
      "Encontro desportivo em Oeiras",
      "Court de ténis do Centro Desportivo Quinta das Raposeiras",
      "Instalações de ténis rodeadas por natureza",
      "Academia Champs no Centro Desportivo Quinta das Raposeiras",
      "Oferta de raquete a jovem praticante",
      "Atividade de campo de férias",
      "Participante do clube",
      "Aniversário no clube",
      "Carlos Vilas Boas no Centro Desportivo Quinta das Raposeiras",
      "Zona social com troféus e memórias do clube",
      "Imagem de capa do Centro Desportivo Quinta das Raposeiras"
    ],
    galleryCaptions: [
      "Padel nas Raposeiras",
      "Vista aérea dos courts",
      "Eventos e comunidade",
      "Visitas e encontros",
      "10 anos de história",
      "Momentos competitivos",
      "Ténis nas Raposeiras",
      "Natureza e prática desportiva",
      "Academia e treino",
      "Gerações em jogo",
      "Atividades juvenis",
      "Praticantes CDQR",
      "Aniversários e convívio",
      "Visitas especiais",
      "Memórias do clube",
      "Vista de apresentação do clube"
    ],
    galleryPrevAria: "Fotografia anterior",
    galleryNextAria: "Fotografia seguinte",
    galleryDotsAria: "Selecionar fotografia",
    galleryDotAriaPrefix: "Mostrar fotografia",
    partnersKicker: "Parcerias",
    partnersTitle: "Instituições, marcas e parceiros anuais.",
    partnerGroupTitles: ["Institucionais e oficiais", "Anuais"],
    partnerFirstList: [
      "ATA, Associação Ténis Algarve",
      "FPT, Federação Portuguesa Ténis",
      "FPP, Federação Portuguesa Padel"
    ],
    contactKicker: "Contactos",
    contactTitle: "Marca o teu próximo jogo nas Raposeiras.",
    contactText: "Quinta das Raposeiras, Rua do Ténis, 8005-527 Faro.",
    contactEmailButton: "Enviar email",
    footerLogoAlt: "Centro Desportivo Quinta das Raposeiras",
    footerText: "Centro Desportivo Quinta das Raposeiras, Faro, Algarve.",
    footerCopyright: "© {{year}} CDQR. Ténis, padel e comunidade."
  },
  en: {
    htmlLang: "en",
    pageTitle: "Quinta das Raposeiras Sports Center | Tennis and Padel in Faro",
    pageDescription:
      "Quinta das Raposeiras Sports Center, in Santa Barbara de Nexe, Faro. Tennis and padel courts, academy, events, social programs and Sports Bar.",
    languageSwitchAria: "Select language",
    brandAria: "Quinta das Raposeiras Sports Center",
    brandLogoDefaultAlt: "Quinta das Raposeiras Sports Center logo",
    brandLogoScrolledAlt: "Simplified Quinta das Raposeiras Sports Center logo",
    menuSrOnly: "Open menu",
    navAria: "Main navigation",
    navLinks: ["Club", "Info", "Services", "Programs", "Photos", "Contacts"],
    heroEyebrow: "Tennis • Padel • Faro, Algarve",
    heroTitleLine1: "Sports Center",
    heroTitlePlace: ["Quinta das", "Raposeiras"],
    heroCopy:
      "At the top of Quinta das Raposeiras, a space for nature, social life and sports for all ages.",
    heroActionsAria: "Main actions",
    heroButtons: ["Book a court", "View programs"],
    quickFactsAria: "Facilities overview",
    quickFactsLabels: ["tennis courts", "padel courts", "Monday to Saturday", "Algarve barrocal"],
    introKicker: "Welcome",
    introTitle: "Sport, leisure and community at the top of Raposeiras.",
    introParagraphs: [
      "Quinta das Raposeiras Sports Center is set in an area mainly designed for leisure, where calm silence meets nature, creating ideal conditions for sports practice.",
      "We offer a diverse annual events plan, services and dedicated tennis and padel programs, supported by our social Sports Bar.",
      "Visit us. We are waiting for you."
    ],
    clubKicker: "CDQR",
    clubTitle: "A club with history, renewed energy and a future focus.",
    clubParagraphs: [
      "The tennis courts at Quinta das Raposeiras date back to the late 1970s and early 1980s, among the first courts in the municipality of Faro. Fernando Martins created a sports area at the top of the estate, offering residents a place for leisure and social life.",
      "After years of activity and a period of lower use, Angelo Orge launched a club revitalization project in 2006, restoring the space and strengthening event planning, communication and new infrastructure, including padel."
    ],
    timelineAria: "Club timeline",
    timelineThirdTag: "Today",
    timelineTitles: ["First courts", "Revitalization", "Tennis and padel"],
    timelineParagraphs: [
      "The sports area at Quinta das Raposeiras was created, focused on tennis and social life.",
      "New management, structural recovery and a relaunch of the club's sports activity.",
      "Regular programs, academy, tournaments, Sports Bar and a growing community."
    ],
    valuesAria: "Mission, vision and values",
    valueTitles: ["Mission", "Vision", "Values"],
    valueParagraphs: [
      "Promote and share sports practice, especially the sustained development of tennis and padel.",
      "Combine health, proper physical habits and strong social engagement, with service excellence and differentiation.",
      "Rigor, innovation, quality and competence in every service delivered by the club."
    ],
    infoKicker: "Info",
    infoTitle: "Location, opening hours and facilities.",
    infoPanelTitles: ["Contacts", "Opening hours", "Facilities"],
    infoAddress:
      "Quinta das Raposeiras Sports Center<br>Quinta das Raposeiras, Rua do Tenis<br>8005-527 Faro, Algarve, Portugal",
    infoGps: "GPS: 37 08 01.2 N 7 56 07.8 W",
    hoursDays: ["Monday to Saturday", "Sundays"],
    facilitiesItems: [
      "3 hard-court tennis courts",
      "2 padel courts",
      "Practice wall and mini-tennis court",
      "Tennis clubhouse and padel clubhouse",
      "Sports Bar and changing rooms"
    ],
    servicesKicker: "Services",
    servicesTitle: "Everything you need to play, train and socialize.",
    serviceTitles: ["Tennis Academy", "Padel Academy", "Events", "Pro Shop", "Sports Bar"],
    serviceParagraphs: [
      "Court rental, group lessons, private lessons, rackets, balls, club supporters and stringing services.",
      "Padel courts, group lessons, private coaching, equipment rental and technical development support.",
      "Tournaments, clinics, sports camps, training stages, birthdays and corporate programs.",
      "Club merchandising, rackets, balls, accessories and apparel for tennis and padel.",
      "Coffee, drinks and snacks to extend the game with good moments off court."
    ],
    programsKicker: "Programs",
    programsTitle: "Social and sports agenda all year round.",
    programCardSpans: ["Social Tennis", "Social Padel", "Club Supporters", "Events", "Pro Shop", "Summer Camp"],
    programCardTitles: [
      "\"Foxes\"",
      "\"Rápido\"",
      "Club players",
      "Tennis and Padel BBQ, Sunset Padel and more",
      "Equipment and merchandising",
      "Summer youth program"
    ],
    programCardParagraphs: [
      "Friendly doubles matches on Monday, Wednesday and Friday mornings.",
      "Mixed round-robin format on Sunday mornings.",
      "Annual donation program to support CDQR activities and community.",
      "Competitive and social moments for different age groups and skill levels.",
      "Support materials for practice, matches, events and club identity.",
      "Morning activities throughout July, designed for young players."
    ],
    programCardImageAlts: [
      "Social Tennis Foxes program poster",
      "Social Padel Rapido program poster",
      "Club Supporters program poster",
      "Quinta das Raposeiras Sports Center events poster",
      "Pro Shop poster",
      "Summer Camp 2026 program poster"
    ],
    programModalCloseAria: "Close program",
    programModalFallbackKicker: "Program",
    programModalFallbackTitle: "Program details",
    galleryKicker: "Photos",
    galleryTitle: "On and off the court.",
    galleryImageAlts: [
      "Padel court at Quinta das Raposeiras Sports Center",
      "Aerial view of the padel courts",
      "Group of participants at a club event",
      "Visit to Quinta das Raposeiras Sports Center",
      "Celebration of ten years of club history",
      "Sports gathering in Oeiras",
      "Tennis court at Quinta das Raposeiras Sports Center",
      "Tennis facilities surrounded by nature",
      "Academia Champs at Quinta das Raposeiras Sports Center",
      "Racket gift to a young player",
      "Sports camp activity",
      "Club participant",
      "Birthday celebration at the club",
      "Carlos Vilas Boas at Quinta das Raposeiras Sports Center",
      "Social area with trophies and club memories",
      "Cover image of Quinta das Raposeiras Sports Center"
    ],
    galleryCaptions: [
      "Padel at Raposeiras",
      "Aerial view of the courts",
      "Events and community",
      "Visits and gatherings",
      "10 years of history",
      "Competitive moments",
      "Tennis at Raposeiras",
      "Nature and sport",
      "Academy and training",
      "Generations in play",
      "Youth activities",
      "CDQR players",
      "Birthdays and social life",
      "Special visits",
      "Club memories",
      "Club overview"
    ],
    galleryPrevAria: "Previous photo",
    galleryNextAria: "Next photo",
    galleryDotsAria: "Select photo",
    galleryDotAriaPrefix: "Show photo",
    partnersKicker: "Partners",
    partnersTitle: "Institutions, brands and annual partners.",
    partnerGroupTitles: ["Institutional and official", "Annual"],
    partnerFirstList: [
      "ATA, Algarve Tennis Association",
      "FPT, Portuguese Tennis Federation",
      "FPP, Portuguese Padel Federation"
    ],
    contactKicker: "Contacts",
    contactTitle: "Book your next match at Raposeiras.",
    contactText: "Quinta das Raposeiras, Rua do Tenis, 8005-527 Faro.",
    contactEmailButton: "Send email",
    footerLogoAlt: "Quinta das Raposeiras Sports Center",
    footerText: "Quinta das Raposeiras Sports Center, Faro, Algarve.",
    footerCopyright: "© {{year}} CDQR. Tennis, padel and community."
  }
};

let currentLanguage = "pt";

if (year) {
  year.textContent = new Date().getFullYear();
}

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
};

const setNodeText = (node, value) => {
  if (node) node.textContent = value;
};

const setNodeTexts = (nodes, values) => {
  nodes.forEach((node, index) => {
    if (node && values[index] !== undefined) {
      node.textContent = values[index];
    }
  });
};

const setImageAlts = (nodes, values) => {
  nodes.forEach((node, index) => {
    if (node && values[index] !== undefined) {
      node.alt = values[index];
    }
  });
};

const updateFooterCopyright = (template) => {
  if (!i18nNodes.footerCopyright || !year) return;
  i18nNodes.footerCopyright.textContent = template.replace("{{year}}", year.textContent);
};

const applyLanguage = (language) => {
  const selectedLanguage = translations[language] ? language : "pt";
  const t = translations[selectedLanguage];
  currentLanguage = selectedLanguage;

  htmlRoot.lang = t.htmlLang;
  document.title = t.pageTitle;
  metaDescription?.setAttribute("content", t.pageDescription);

  i18nNodes.brand?.setAttribute("aria-label", t.brandAria);
  i18nNodes.brandLogoDefault?.setAttribute("alt", t.brandLogoDefaultAlt);
  i18nNodes.brandLogoScrolled?.setAttribute("alt", t.brandLogoScrolledAlt);
  setNodeText(i18nNodes.menuSrOnly, t.menuSrOnly);
  i18nNodes.navAria?.setAttribute("aria-label", t.navAria);
  setNodeTexts(i18nNodes.navLinks, t.navLinks);

  setNodeText(i18nNodes.heroEyebrow, t.heroEyebrow);
  setNodeText(i18nNodes.heroTitleLine1, t.heroTitleLine1);
  setNodeTexts(i18nNodes.heroTitlePlace, t.heroTitlePlace);
  setNodeText(i18nNodes.heroCopy, t.heroCopy);
  i18nNodes.heroActions?.setAttribute("aria-label", t.heroActionsAria);
  setNodeTexts(i18nNodes.heroButtons, t.heroButtons);

  i18nNodes.quickFacts?.setAttribute("aria-label", t.quickFactsAria);
  setNodeTexts(i18nNodes.quickFactsLabels, t.quickFactsLabels);

  setNodeText(i18nNodes.introKicker, t.introKicker);
  setNodeText(i18nNodes.introTitle, t.introTitle);
  setNodeTexts(i18nNodes.introParagraphs, t.introParagraphs);

  setNodeText(i18nNodes.clubKicker, t.clubKicker);
  setNodeText(i18nNodes.clubTitle, t.clubTitle);
  setNodeTexts(i18nNodes.clubParagraphs, t.clubParagraphs);
  i18nNodes.timeline?.setAttribute("aria-label", t.timelineAria);
  setNodeText(i18nNodes.timelineThirdTag, t.timelineThirdTag);
  setNodeTexts(i18nNodes.timelineTitles, t.timelineTitles);
  setNodeTexts(i18nNodes.timelineParagraphs, t.timelineParagraphs);

  i18nNodes.valuesGrid?.setAttribute("aria-label", t.valuesAria);
  setNodeTexts(i18nNodes.valueTitles, t.valueTitles);
  setNodeTexts(i18nNodes.valueParagraphs, t.valueParagraphs);

  setNodeText(i18nNodes.infoKicker, t.infoKicker);
  setNodeText(i18nNodes.infoTitle, t.infoTitle);
  setNodeTexts(i18nNodes.infoPanelTitles, t.infoPanelTitles);
  if (i18nNodes.infoAddress) {
    i18nNodes.infoAddress.innerHTML = t.infoAddress;
  }
  setNodeText(i18nNodes.infoGps, t.infoGps);
  setNodeTexts(i18nNodes.hoursDays, t.hoursDays);
  setNodeTexts(i18nNodes.facilitiesItems, t.facilitiesItems);

  setNodeText(i18nNodes.servicesKicker, t.servicesKicker);
  setNodeText(i18nNodes.servicesTitle, t.servicesTitle);
  setNodeTexts(i18nNodes.serviceTitles, t.serviceTitles);
  setNodeTexts(i18nNodes.serviceParagraphs, t.serviceParagraphs);

  setNodeText(i18nNodes.programsKicker, t.programsKicker);
  setNodeText(i18nNodes.programsTitle, t.programsTitle);
  setNodeTexts(i18nNodes.programCardSpans, t.programCardSpans);
  setNodeTexts(i18nNodes.programCardTitles, t.programCardTitles);
  setNodeTexts(i18nNodes.programCardParagraphs, t.programCardParagraphs);
  setImageAlts(i18nNodes.programCardImages, t.programCardImageAlts);
  i18nNodes.programModalClose?.setAttribute("aria-label", t.programModalCloseAria);

  setNodeText(i18nNodes.galleryKicker, t.galleryKicker);
  setNodeText(i18nNodes.galleryTitle, t.galleryTitle);
  setImageAlts(i18nNodes.galleryImages, t.galleryImageAlts);
  setNodeTexts(i18nNodes.galleryCaptions, t.galleryCaptions);
  i18nNodes.galleryPrev?.setAttribute("aria-label", t.galleryPrevAria);
  i18nNodes.galleryNext?.setAttribute("aria-label", t.galleryNextAria);
  i18nNodes.galleryDots?.setAttribute("aria-label", t.galleryDotsAria);
  dotsContainer?.querySelectorAll("button").forEach((dot, index) => {
    dot.setAttribute("aria-label", `${t.galleryDotAriaPrefix} ${index + 1}`);
  });

  setNodeText(i18nNodes.partnersKicker, t.partnersKicker);
  setNodeText(i18nNodes.partnersTitle, t.partnersTitle);
  setNodeTexts(i18nNodes.partnerGroupTitles, t.partnerGroupTitles);
  setNodeTexts(i18nNodes.partnerFirstList, t.partnerFirstList);

  setNodeText(i18nNodes.contactKicker, t.contactKicker);
  setNodeText(i18nNodes.contactTitle, t.contactTitle);
  setNodeText(i18nNodes.contactText, t.contactText);
  setNodeText(i18nNodes.contactEmailButton, t.contactEmailButton);

  i18nNodes.footerLogo?.setAttribute("alt", t.footerLogoAlt);
  setNodeText(i18nNodes.footerText, t.footerText);
  updateFooterCopyright(t.footerCopyright);

  languageSwitch?.setAttribute("aria-label", t.languageSwitchAria);
  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === selectedLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (programModal?.classList.contains("is-open")) {
    closeProgramModal();
  }

  window.localStorage.setItem("cdqrLang", selectedLanguage);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  header.classList.toggle("menu-open", isOpen);
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    header?.classList.remove("menu-open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

const slideshow = document.querySelector("[data-slideshow]");
const slides = [...document.querySelectorAll(".slide")];
const dotsContainer = document.querySelector("[data-dots]");
const currentSlide = document.querySelector("[data-current-slide]");
let activeSlide = 0;
let slideTimer;

const formatSlideNumber = (index) => String(index + 1).padStart(2, "0");

const showSlide = (index) => {
  if (!slides.length) return;

  activeSlide = (index + slides.length) % slides.length;

  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === activeSlide);
  });

  dotsContainer?.querySelectorAll("button").forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === activeSlide);
    dot.setAttribute("aria-current", dotIndex === activeSlide ? "true" : "false");
  });

  if (currentSlide) {
    currentSlide.textContent = formatSlideNumber(activeSlide);
  }
};

const startSlideshow = () => {
  window.clearInterval(slideTimer);
  slideTimer = window.setInterval(() => showSlide(activeSlide + 1), 5200);
};

if (slides.length && dotsContainer) {
  slides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", `Mostrar fotografia ${index + 1}`);
    dot.addEventListener("click", () => {
      showSlide(index);
      startSlideshow();
    });
    dotsContainer.appendChild(dot);
  });

  document.querySelector("[data-prev]")?.addEventListener("click", () => {
    showSlide(activeSlide - 1);
    startSlideshow();
  });

  document.querySelector("[data-next]")?.addEventListener("click", () => {
    showSlide(activeSlide + 1);
    startSlideshow();
  });

  slideshow?.addEventListener("mouseenter", () => window.clearInterval(slideTimer));
  slideshow?.addEventListener("mouseleave", startSlideshow);
  slideshow?.addEventListener("focusin", () => window.clearInterval(slideTimer));
  slideshow?.addEventListener("focusout", startSlideshow);

  showSlide(0);
  startSlideshow();
}

const programCards = [...document.querySelectorAll(".program-card")];
const programModal = document.querySelector("[data-program-modal]");
const programModalClose = document.querySelector("[data-program-close]");
const programModalFigure = document.querySelector("[data-program-modal-figure]");
const programModalImage = document.querySelector("[data-program-modal-image]");
const programModalKicker = document.querySelector("[data-program-modal-kicker]");
const programModalTitle = document.querySelector("[data-program-modal-title]");
const programModalDescription = document.querySelector("[data-program-modal-description]");

const closeProgramModal = () => {
  if (!programModal) return;
  programModal.classList.remove("is-open");
  programModal.setAttribute("hidden", "");
  document.body.classList.remove("program-modal-open");
};

const openProgramModal = (card) => {
  if (!programModal || !programModalKicker || !programModalTitle || !programModalDescription) {
    return;
  }

  const selectedTranslation = translations[currentLanguage] ?? translations.pt;
  const kicker = card.querySelector("span")?.textContent?.trim() ?? selectedTranslation.programModalFallbackKicker;
  const title =
    card.querySelector("h3")?.textContent?.trim() ?? selectedTranslation.programModalFallbackTitle;
  const description = card.querySelector("p")?.textContent?.trim() ?? "";
  const image = card.querySelector("img");

  programModalKicker.textContent = kicker;
  programModalTitle.textContent = title;
  programModalDescription.textContent = description;

  if (image && programModalImage && programModalFigure) {
    programModalImage.src = image.src;
    programModalImage.alt = image.alt;
    programModalFigure.removeAttribute("hidden");
  } else if (programModalImage && programModalFigure) {
    programModalImage.src = "";
    programModalImage.alt = "";
    programModalFigure.setAttribute("hidden", "");
  }

  programModal.removeAttribute("hidden");
  programModal.classList.add("is-open");
  document.body.classList.add("program-modal-open");
};

if (programCards.length && programModal) {
  programCards.forEach((card) => {
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");

    card.addEventListener("click", () => {
      openProgramModal(card);
    });

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openProgramModal(card);
      }
    });
  });

  programModalClose?.addEventListener("click", closeProgramModal);

  programModal.addEventListener("click", (event) => {
    if (event.target === programModal) {
      closeProgramModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && programModal.classList.contains("is-open")) {
      closeProgramModal();
    }
  });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang ?? "pt");
  });
});

const savedLanguage = window.localStorage.getItem("cdqrLang") ?? "pt";
applyLanguage(savedLanguage);
