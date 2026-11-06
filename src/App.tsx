import { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: "torcida-brasil",
    title: "Torcida Brasil",
    image: "torcida-brasil.png",
    featured: true,
    technologies: ["JavaScript", "HTML", "CSS", "LocalStorage"],
    liveUrl: "https://fsgui89.github.io/torcida-brasil/",
    repositoryUrl: "https://github.com/fsgui89/torcida-brasil",
  },
  {
    id: "taskflow-react",
    title: "TaskFlow",
    image: "taskflow-react.png",
    featured: true,
    technologies: ["React", "TypeScript", "Vite", "LocalStorage"],
    liveUrl: "https://fsgui89.github.io/todo-list-react/",
    repositoryUrl: "https://github.com/fsgui89/todo-list-react",
  },
  {
    id: "petcare",
    title: "PetCare",
    image: "petcare.png",
    featured: false,
    technologies: ["Next.js", "TypeScript", "CSS Modules", "LocalStorage"],
    liveUrl: "https://fsgui89.github.io/petcare/",
    repositoryUrl: "https://github.com/fsgui89/petcare",
  },
  {
    id: "stepzone",
    title: "StepZone",
    image: "stepzone.png",
    featured: false,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "LocalStorage"],
    liveUrl: "https://fsgui89.github.io/stepzone/",
    repositoryUrl: "https://github.com/fsgui89/stepzone",
  },
  {
    id: "agencia-aurora",
    title: "Agência Aurora",
    image: "agencia-aurora.png",
    featured: false,
    technologies: ["Next.js", "TypeScript", "CSS Modules", "Responsive UI"],
    liveUrl: "https://fsgui89.github.io/agencia-aurora/",
    repositoryUrl: "https://github.com/fsgui89/agencia-aurora",
  },
  {
    id: "refatorando-copa-viagens",
    title: "Refatorando Copa Viagens",
    image: "refatorando-copa-viagens.png",
    featured: false,
    technologies: ["JavaScript", "HTML", "CSS", "Product Thinking"],
    liveUrl: "https://fsgui89.github.io/refatorando-copa-viagens/",
    repositoryUrl: "https://github.com/fsgui89/refatorando-copa-viagens",
  },
  {
    id: "tela-de-login",
    title: "Login Interativo",
    image: "tela-de-login.png",
    featured: false,
    technologies: ["JavaScript", "HTML", "CSS", "LocalStorage"],
    liveUrl: "https://fsgui89.github.io/projeto-login-refatorando/",
    repositoryUrl: "https://github.com/fsgui89/projeto-login-refatorando",
  },
  {
    id: "portfolio-2.0",
    title: "Portfólio 2.0",
    image: "portfolio-2.0.webp",
    featured: false,
    technologies: ["React", "TypeScript", "Vite", "Multilingual UI"],
    liveUrl: "https://fsgui89.github.io/portfolio-guilherme-ferreira/",
    repositoryUrl: "https://github.com/fsgui89/portfolio-guilherme-ferreira",
  },
] as const;

const projectTranslations = {
  en: {
    eyebrow: "Projects",
    title: ["Projects that", "turn ideas", "into experiences."],
    intro: "Study projects and frontend interfaces demonstrating components, state, responsive layouts and user flows. Explore the demos and source code.",
    featured: "Featured project",
    moreProjects: "More selected projects",
    liveDemo: "View project",
    sourceCode: "Source code",
    technologies: "Technologies used",
    imageAlt: "Project preview",
    descriptions: {
      "torcida-brasil": "Study e-commerce built with JavaScript, HTML and CSS to explore product browsing: search, filters, favorites, a persistent cart and simulated checkout.",
      "taskflow-react": "Task management study app in React and TypeScript. Reusable interfaces, filters, progress indicators and local persistence support the daily task flow.",
      "petcare": "Pet appointment scheduling study project with Next.js and TypeScript: booking, confirmation, an administrative agenda and status management with local persistence.",
      "stepzone": "Sneaker e-commerce study project with Next.js, TypeScript and Tailwind CSS. Product search, filters and a persistent cart lead into a demonstration checkout.",
      "agencia-aurora": "Study landing page for a digital agency in Next.js and TypeScript. Reusable components, CSS Modules and responsive layouts organize services and calls to action.",
      "refatorando-copa-viagens": "Interactive travel study project using JavaScript, HTML and CSS. A visual world map connects destinations, national teams and World Cup stories.",
      "tela-de-login": "JavaScript, HTML and CSS login interface study with form validation, interaction states and local persistence, demonstrating user feedback in a responsive layout.",
      "portfolio-2.0": "React, TypeScript and Vite portfolio presenting experience and projects in three languages, with saved language preference, responsive navigation and a keyboard-controlled certificate viewer."
    },
  },
  pt: {
    eyebrow: "Projetos",
    title: ["Projetos que", "transformam ideias", "em experiências."],
    intro: "Projetos de estudo e interfaces frontend que demonstram componentes, estados, responsividade e fluxos de uso. Explore as demonstrações e o código-fonte.",
    featured: "Projeto em destaque",
    moreProjects: "Outros projetos selecionados",
    liveDemo: "Ver projeto",
    sourceCode: "Código-fonte",
    technologies: "Tecnologias utilizadas",
    imageAlt: "Prévia do projeto",
    descriptions: {
      "torcida-brasil": "E-commerce de estudo em JavaScript, HTML e CSS para explorar a navegação de produtos: busca, filtros, favoritos, carrinho persistente e checkout simulado.",
      "taskflow-react": "Aplicação de estudo de gestão de tarefas em React e TypeScript. Interfaces reutilizáveis, filtros, indicadores de progresso e persistência local apoiam o fluxo diário de tarefas.",
      "petcare": "Projeto de estudo de agendamento pet com Next.js e TypeScript: reserva, confirmação, agenda administrativa e gerenciamento de status com persistência local.",
      "stepzone": "E-commerce de estudo de sneakers com Next.js, TypeScript e Tailwind CSS. Busca, filtros e carrinho persistente conduzem a um checkout demonstrativo.",
      "agencia-aurora": "Landing page de estudo para uma agência digital em Next.js e TypeScript. Componentes reutilizáveis, CSS Modules e layouts responsivos organizam serviços e chamadas para ação.",
      "refatorando-copa-viagens": "Projeto de estudo de viagens em JavaScript, HTML e CSS. Um mapa-múndi visual conecta destinos, seleções e histórias da Copa.",
      "tela-de-login": "Estudo de interface de login em JavaScript, HTML e CSS, com validação de formulário, estados de interação e persistência local, demonstrando feedback em um layout responsivo.",
      "portfolio-2.0": "Portfólio em React, TypeScript e Vite que apresenta experiências e projetos em três idiomas, com preferência de idioma salva, navegação responsiva e visualizador de certificados operado por teclado."
    },
  },
  it: {
    eyebrow: "Progetti",
    title: ["Progetti che", "trasformano idee", "in esperienze."],
    intro: "Progetti di studio e interfacce frontend che mostrano componenti, stati, layout responsive e percorsi utente. Esplora le demo e il codice sorgente.",
    featured: "Progetto in evidenza",
    moreProjects: "Altri progetti selezionati",
    liveDemo: "Vedi progetto",
    sourceCode: "Codice sorgente",
    technologies: "Tecnologie utilizzate",
    imageAlt: "Anteprima del progetto",
    descriptions: {
      "torcida-brasil": "E-commerce di studio in JavaScript, HTML e CSS per esplorare la navigazione dei prodotti: ricerca, filtri, preferiti, carrello persistente e checkout simulato.",
      "taskflow-react": "Applicazione di studio per gestire attività in React e TypeScript. Interfacce riutilizzabili, filtri, indicatori di avanzamento e persistenza locale supportano il flusso quotidiano.",
      "petcare": "Progetto di studio per prenotare servizi per animali con Next.js e TypeScript: prenotazione, conferma, agenda amministrativa e gestione dello stato con persistenza locale.",
      "stepzone": "E-commerce di studio di sneakers con Next.js, TypeScript e Tailwind CSS. Ricerca, filtri e carrello persistente conducono a un checkout dimostrativo.",
      "agencia-aurora": "Landing page di studio per un’agenzia digitale in Next.js e TypeScript. Componenti riutilizzabili, CSS Modules e layout responsive organizzano servizi e inviti all’azione.",
      "refatorando-copa-viagens": "Progetto di studio sui viaggi in JavaScript, HTML e CSS. Una mappa visiva collega destinazioni, nazionali e storie dei Mondiali.",
      "tela-de-login": "Studio di un’interfaccia di accesso in JavaScript, HTML e CSS, con validazione del modulo, stati di interazione e persistenza locale, per mostrare il feedback in un layout responsive.",
      "portfolio-2.0": "Portfolio in React, TypeScript e Vite che presenta esperienze e progetti in tre lingue, con preferenza linguistica salvata, navigazione responsive e visualizzatore di certificati utilizzabile da tastiera."
    },
  },
} as const;

const certificates = [
  { id: "react", image: "react.png", category: "frontend", featured: true },
  {
    id: "typescript",
    image: "typescript.png",
    category: "frontend",
    featured: true,
  },
  {
    id: "javascript",
    image: "javascript.png",
    category: "frontend",
    featured: true,
  },
  { id: "nodejs", image: "nodejs.png", category: "backend", featured: true },
  {
    id: "postgresql",
    image: "postgresql.png",
    category: "data",
    featured: true,
  },
  {
    id: "git-github",
    image: "git-github.png",
    category: "tools",
    featured: true,
  },
  {
    id: "tailwind-css",
    image: "tailwind-css.png",
    category: "frontend",
    featured: true,
  },
  {
    id: "css-avancado",
    image: "css-avancado.png",
    category: "frontend",
    featured: true,
  },
  { id: "scrum", image: "scrum.png", category: "product", featured: true },
  {
    id: "inteligencia-artificial",
    image: "inteligencia-artificial.png",
    category: "tools",
    featured: false,
  },
  { id: "html5", image: "html5.png", category: "frontend", featured: false },
  { id: "css3", image: "css3.png", category: "frontend", featured: false },
  { id: "npm", image: "npm.png", category: "tools", featured: false },
  {
    id: "fundamentos-internet",
    image: "fundamentos-internet.png",
    category: "foundations",
    featured: false,
  },
  {
    id: "primeiros-passos",
    image: "primeiros-passos.png",
    category: "foundations",
    featured: false,
  },
  {
    id: "linkedin",
    image: "linkedin.png",
    category: "career",
    featured: false,
  },
] as const;

const certificateTranslations = {
  en: {
    eyebrow: "Certificates",
    title: ["Continuous learning.", "Growth", "through practice."],
    intro:
      "Certificates that mark stages of my learning journey and reinforce knowledge applied to real projects, products and challenges.",
    showAll: "View all certificates",
    showFeatured: "Show selected certificates",
    viewCertificate: "View certificate",
    dialogLabel: "Certificate viewer",
    close: "Close certificate",
    previous: "Previous certificate",
    next: "Next certificate",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      data: "Data",
      tools: "Tools",
      product: "Product",
      foundations: "Foundations",
      career: "Career",
    },
    names: {
      react: "React",
      typescript: "TypeScript",
      javascript: "JavaScript",
      nodejs: "Node.js",
      postgresql: "PostgreSQL",
      "git-github": "Git & GitHub",
      "tailwind-css": "Tailwind CSS",
      "css-avancado": "Advanced CSS",
      scrum: "Scrum",
      "inteligencia-artificial": "Programming with AI",
      html5: "HTML5",
      css3: "CSS3",
      npm: "NPM",
      "fundamentos-internet": "Internet Fundamentals",
      "primeiros-passos": "Programming Foundations",
      linkedin: "LinkedIn",
    },
  },
  pt: {
    eyebrow: "Certificados",
    title: ["Formação contínua.", "Evolução", "na prática."],
    intro:
      "Certificados que registram etapas da minha formação e reforçam conhecimentos aplicados em projetos, produtos e desafios reais.",
    showAll: "Ver todos os certificados",
    showFeatured: "Mostrar seleção principal",
    viewCertificate: "Visualizar certificado",
    dialogLabel: "Visualizador de certificado",
    close: "Fechar certificado",
    previous: "Certificado anterior",
    next: "Próximo certificado",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      data: "Dados",
      tools: "Ferramentas",
      product: "Produto",
      foundations: "Fundamentos",
      career: "Carreira",
    },
    names: {
      react: "React",
      typescript: "TypeScript",
      javascript: "JavaScript",
      nodejs: "Node.js",
      postgresql: "PostgreSQL",
      "git-github": "Git e GitHub",
      "tailwind-css": "Tailwind CSS",
      "css-avancado": "CSS Avançado",
      scrum: "Scrum",
      "inteligencia-artificial": "Programação com IA",
      html5: "HTML5",
      css3: "CSS3",
      npm: "NPM",
      "fundamentos-internet": "Fundamentos da Internet",
      "primeiros-passos": "Primeiros Passos",
      linkedin: "LinkedIn",
    },
  },
  it: {
    eyebrow: "Certificati",
    title: ["Formazione continua.", "Crescita", "nella pratica."],
    intro:
      "Certificati che documentano le tappe della mia formazione e rafforzano le conoscenze applicate a progetti, prodotti e sfide reali.",
    showAll: "Vedi tutti i certificati",
    showFeatured: "Mostra la selezione principale",
    viewCertificate: "Visualizza certificato",
    dialogLabel: "Visualizzatore di certificati",
    close: "Chiudi certificato",
    previous: "Certificato precedente",
    next: "Certificato successivo",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      data: "Dati",
      tools: "Strumenti",
      product: "Prodotto",
      foundations: "Fondamenti",
      career: "Carriera",
    },
    names: {
      react: "React",
      typescript: "TypeScript",
      javascript: "JavaScript",
      nodejs: "Node.js",
      postgresql: "PostgreSQL",
      "git-github": "Git e GitHub",
      "tailwind-css": "Tailwind CSS",
      "css-avancado": "CSS Avanzato",
      scrum: "Scrum",
      "inteligencia-artificial": "Programmazione con l’IA",
      html5: "HTML5",
      css3: "CSS3",
      npm: "NPM",
      "fundamentos-internet": "Fondamenti di Internet",
      "primeiros-passos": "Primi Passi",
      linkedin: "LinkedIn",
    },
  },
} as const;

const contactMethods = [
  {
    id: "email",
    href: "mailto:fsgui89@gmail.com",
    value: "fsgui89@gmail.com",
    external: false,
  },
  {
    id: "linkedin",
    href: "https://linkedin.com/in/guilhermefsdev",
    value: "linkedin.com/in/guilhermefsdev",
    external: true,
  },
  {
    id: "github",
    href: "https://github.com/fsgui89",
    value: "github.com/fsgui89",
    external: true,
  },
  {
    id: "whatsapp",
    href: "https://wa.me/5511964501819",
    value: null,
    external: true,
  },
] as const;

const contactTranslations = {
  en: {
    eyebrow: "Contact",
    title: "Let's talk about technology, product and digital solutions?",
    intro:
      "If you would like to discuss an opportunity, a project or a good idea, choose the channel that works best for you.",
    availability: "Available for 100% remote Frontend and React opportunities",
    openContact: "Open contact",
    whatsappText: "Send a message",
    backToTop: "Back to top",
    developedBy: "Developed by",
    role: "Frontend Developer | React | Next.js | Node.js | AI Integration | UX",
    rights: "All rights reserved.",
    labels: {
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      whatsapp: "WhatsApp",
    },
  },
  pt: {
    eyebrow: "Contato",
    title: "Vamos conversar sobre tecnologia, produto e soluções digitais?",
    intro:
      "Se quiser conversar sobre uma oportunidade, um projeto ou uma boa ideia, escolha o canal que funciona melhor para você.",
    availability: "Disponível para oportunidades Frontend e React 100% remotas",
    openContact: "Abrir contato",
    whatsappText: "Enviar mensagem",
    backToTop: "Voltar ao topo",
    developedBy: "Desenvolvido por",
    role: "Frontend Developer | React | Next.js | Node.js | Integração de IA | UX",
    rights: "Todos os direitos reservados.",
    labels: {
      email: "E-mail",
      linkedin: "LinkedIn",
      github: "GitHub",
      whatsapp: "WhatsApp",
    },
  },
  it: {
    eyebrow: "Contatto",
    title: "Parliamo di tecnologia, prodotto e soluzioni digitali?",
    intro:
      "Se vuoi parlare di un'opportunità, di un progetto o di una buona idea, scegli il canale che preferisci.",
    availability: "Disponibile per opportunità Frontend e React interamente da remoto",
    openContact: "Apri contatto",
    whatsappText: "Invia un messaggio",
    backToTop: "Torna all'inizio",
    developedBy: "Sviluppato da",
    role: "Frontend Developer | React | Next.js | Node.js | Integrazione IA | UX",
    rights: "Tutti i diritti riservati.",
    labels: {
      email: "E-mail",
      linkedin: "LinkedIn",
      github: "GitHub",
      whatsapp: "WhatsApp",
    },
  },
} as const;

const translations = {
  en: {
    nexsoTags: [
      "React + JavaScript",
      "REST APIs",
      "Azure DevOps + SaaS",
      "UX + Product Discovery"
    ],
    eipgTags: ["Google Sheets", "Operations", "Automation", "Leadership"],
    dekraTags: ["Microsoft Excel", "Data Analysis", "Feasibility Analysis", "Usability"],

    navHome: "Home",
    navAbout: "About",
    navExperience: "Experience",
    navSkills: "Skills",
    navProjects: "Projects",
    navCertificates: "Certificates",
    navContact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    heroKicker: "Frontend Developer",
    heroName: "Guilherme Ferreira",
    heroTitle: [
      "React • Next.js • Node.js • AI Integration • UX",
      "Interfaces built around real needs."
    ],
    heroDescription: [
      "I build responsive interfaces with React and Next.js,",
      "connecting APIs, reusable components and clear interactions.",
      "Code quality, UX and product thinking guide my work."
    ],
    viewProjects: "View projects",
    contactMe: "Let's talk",
    aboutEyebrow: "About",
    aboutTitle: "Frontend development with product vision.",
    aboutLead: "I am a Frontend Developer specializing in React, building web interfaces with Next.js, JavaScript and TypeScript.",
    aboutText: [
      "I connect requirements with responsive interfaces, reusable components and API integrations. UX and Product Discovery guide implementation decisions; complementary knowledge of Node.js and SQL supports collaboration with backend teams.",
      "At Nexso, I contributed to the completed omnichannel module and am now working on AI-powered customer service, still in development.",
      "My background in academic leadership, Google Sheets automation and feasibility analysis strengthens my ability to organize processes, understand needs and solve problems."
    ],
    metricYears: "years across process analysis, academic leadership and technology",
    metricStudents: "students in an academic operation structured and scaled",
    metricFranchises: "franchises covered by the requested feasibility reassessment",
    experienceEyebrow: "Experience",
    experienceTitle: ["Products", "are built with", "code and context."],
    experienceIntro:
      "My trajectory connects technology, education and operations. Each stage strengthened the way I investigate problems, structure processes and turn complexity into practical solutions.",
    nexsoPeriod: "2025 - Present",
    nexsoRole: "Frontend Developer",
    nexsoDescription: "I contribute to SaaS development, translating business requirements into React interfaces and API integrations.",
    eipgPeriod: "Jan 2017 – Dec 2024",
    eipgRole: "Academic Coordinator | Technology & Process Automation",
    eipgDescription: "I built the after-school program from the ground up, coordinating academic operations, educational technology and processes.",
    dekraPeriod: "2011 - 2013",
    dekraRole: "Business Process & Feasibility Analyst",
    dekraDescription: "I reviewed the economic and financial feasibility model used for franchise expansion, identifying outdated data and calculation inconsistencies.",
    skillsEyebrow: "Skills",
    skillsTitle: ["Knowledge", "transformed into", "solutions."],
    skillsIntro: "Frontend is my main focus. Related tools and complementary knowledge support API integration, product decisions and collaboration.",
    skillsEvidence: "Evidence",
    skillGroups: [
      {
        "title": "Frontend",
        "skills": [
          {
            "name": "React + TypeScript",
            "level": 3,
            "levelLabel": "Practical",
            "evidence": "Portfolio 2.0 and TaskFlow: reusable components and typed interfaces."
          },
          {
            "name": "JavaScript",
            "level": 3,
            "levelLabel": "Practical",
            "evidence": "Torcida Brasil, task lists and browser interactions."
          },
          {
            "name": "HTML + CSS",
            "level": 3,
            "levelLabel": "Practical",
            "evidence": "Responsive layouts, semantic markup and interaction states."
          }
        ]
      },
      {
        "title": "Related tools",
        "skills": [
          {
            "name": "Next.js",
            "level": 3,
            "levelLabel": "Practical",
            "evidence": "Agência Aurora, StepZone and PetCare study projects."
          },
          {
            "name": "Tailwind CSS",
            "level": 3,
            "levelLabel": "Practical",
            "evidence": "StepZone: responsive styles with utility classes."
          },
          {
            "name": "REST APIs",
            "level": 3,
            "levelLabel": "Practical",
            "evidence": "React interfaces connected to services at Nexso."
          },
          {
            "name": "Git + GitHub",
            "level": 3,
            "levelLabel": "Practical",
            "evidence": "Version control, branches and project publishing."
          }
        ]
      },
      {
        "title": "Complementary knowledge",
        "skills": [
          {
            "name": "Node.js + SQL",
            "level": 2,
            "levelLabel": "Complementary",
            "evidence": "Complementary knowledge for service integration; SQL, PostgreSQL and MongoDB studies."
          },
          {
            "name": "AI Integration",
            "level": 3,
            "levelLabel": "Practical",
            "evidence": "AI-powered customer service at Nexso, still in development; AI-assisted coding."
          },
          {
            "name": "UX + Product Discovery",
            "level": 3,
            "levelLabel": "Practical",
            "evidence": "Requirements, usability and product decisions at Nexso."
          },
          {
            "name": "Azure DevOps",
            "level": 3,
            "levelLabel": "Practical",
            "evidence": "Feature planning, user stories and delivery tracking."
          },
          {
            "name": "Python",
            "level": 2,
            "levelLabel": "Complementary",
            "evidence": "Existing automation and experimentation work; complementary to frontend."
          }
        ]
      }
    ],
    nexsoHighlights: [
      "Contributed to the completed omnichannel module, bringing communication channels into a unified customer service interface.",
      "Build reusable components with React, JavaScript and REST APIs; contribute to frontend architecture, UX and Product Discovery decisions.",
      "Organize features and user stories in Azure DevOps and contribute to AI-powered customer service, still in development."
    ],
    eipgHighlights: [
      "Defined workflows and built a Google Sheets management system, centralizing information and automating controls across teaching, leadership and Finance.",
      "Structured the program to serve more than 200 active students and led more than 25 professionals, supporting teacher hiring and team coordination.",
      "Improved communication and reduced manual work; managed digital resources and teacher training for the English Program with International School."
    ],
    dekraHighlights: [
      "Mapped interconnected spreadsheets and worked with Finance to validate assumptions, correct formulas and reorganize the analytical model.",
      "Applied the revised model to three planned franchise studies and updated previous studies with reviewed data.",
      "After the improvements were presented, management requested its use to reassess studies across the network of 102 franchises, supporting decisions with more consistent information."
    ],
    navigationLabel: "Main navigation",
    languageLabel: "Language selector",
    expertiseLabel: "Areas of expertise",
  },
  pt: {
    nexsoTags: [
      "React + JavaScript",
      "APIs REST",
      "Azure DevOps + SaaS",
      "UX + Descoberta de produto"
    ],
    eipgTags: ["Google Sheets", "Operações", "Automação", "Liderança"],
    dekraTags: ["Microsoft Excel", "Análise de dados", "Análise de viabilidade", "Usabilidade"],

    navHome: "Início",
    navAbout: "Sobre",
    navExperience: "Experiência",
    navSkills: "Habilidades",
    navProjects: "Projetos",
    navCertificates: "Certificados",
    navContact: "Contato",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    heroKicker: "Frontend Developer",
    heroName: "Guilherme Ferreira",
    heroTitle: [
      "React • Next.js • Node.js • Integração de IA • UX",
      "Interfaces construídas para necessidades reais."
    ],
    heroDescription: [
      "Desenvolvo interfaces responsivas com React e Next.js,",
      "conectando APIs, componentes reutilizáveis e interações claras.",
      "Qualidade do código, UX e visão de produto orientam meu trabalho."
    ],
    viewProjects: "Ver projetos",
    contactMe: "Vamos conversar",
    aboutEyebrow: "Sobre",
    aboutTitle: "Desenvolvimento frontend com visão de produto.",
    aboutLead: "Sou Frontend Developer especializado em React e desenvolvo interfaces web com Next.js, JavaScript e TypeScript.",
    aboutText: [
      "Conecto requisitos a interfaces responsivas, componentes reutilizáveis e integrações com APIs. UX e descoberta de produto orientam minhas decisões; conhecimentos complementares de Node.js e SQL apoiam a colaboração com backend.",
      "Na Nexso, contribuí para o módulo omnichannel concluído e participo do atendimento por IA, ainda em desenvolvimento.",
      "Minha trajetória em liderança acadêmica, automações em Google Sheets e análise de viabilidade fortalece minha capacidade de organizar processos, entender necessidades e resolver problemas."
    ],
    metricYears: "anos em análise de processos, liderança acadêmica e tecnologia",
    metricStudents: "alunos em uma operação acadêmica estruturada e escalada",
    metricFranchises: "franquias abrangidas pela reavaliação de viabilidade solicitada",
    experienceEyebrow: "Experiência",
    experienceTitle: ["Produtos são", "construídos com", "código e contexto."],
    experienceIntro:
      "Minha trajetória conecta tecnologia, educação e operações. Cada etapa fortaleceu minha forma de investigar problemas, estruturar processos e transformar complexidade em soluções práticas.",
    nexsoPeriod: "2025 - Atualmente",
    nexsoRole: "Frontend Developer",
    nexsoDescription: "Atuo no desenvolvimento de soluções SaaS, traduzindo requisitos de negócio em interfaces React e integrações com APIs.",
    eipgPeriod: "jan. 2017 – dez. 2024",
    eipgRole: "Coordenador Acadêmico | Tecnologia e Automação de Processos",
    eipgDescription: "Estruturei o programa de Contraturno desde o início, coordenando operações acadêmicas, tecnologia educacional e processos.",
    dekraPeriod: "2011 - 2013",
    dekraRole: "Analista de Processos e Viabilidade de Negócios",
    dekraDescription: "Revisei o modelo de viabilidade econômico-financeira utilizado na expansão de franquias, identificando dados desatualizados e inconsistências nos cálculos.",
    skillsEyebrow: "Habilidades",
    skillsTitle: ["Conhecimento", "que se transforma", "em solução."],
    skillsIntro: "Frontend é minha especialidade principal. Ferramentas relacionadas e conhecimentos complementares apoiam integrações, decisões de produto e colaboração.",
    skillsEvidence: "Evidência",
    skillGroups: [
      {
        "title": "Frontend",
        "skills": [
          {
            "name": "React + TypeScript",
            "level": 3,
            "levelLabel": "Prática",
            "evidence": "Portfólio 2.0 e TaskFlow: componentes reutilizáveis e interfaces tipadas."
          },
          {
            "name": "JavaScript",
            "level": 3,
            "levelLabel": "Prática",
            "evidence": "Torcida Brasil, listas de tarefas e interações no navegador."
          },
          {
            "name": "HTML + CSS",
            "level": 3,
            "levelLabel": "Prática",
            "evidence": "Layouts responsivos, marcação semântica e estados de interação."
          }
        ]
      },
      {
        "title": "Ferramentas relacionadas",
        "skills": [
          {
            "name": "Next.js",
            "level": 3,
            "levelLabel": "Prática",
            "evidence": "Projetos de estudo Agência Aurora, StepZone e PetCare."
          },
          {
            "name": "Tailwind CSS",
            "level": 3,
            "levelLabel": "Prática",
            "evidence": "StepZone: estilos responsivos com classes utilitárias."
          },
          {
            "name": "APIs REST",
            "level": 3,
            "levelLabel": "Prática",
            "evidence": "Interfaces React conectadas a serviços na Nexso."
          },
          {
            "name": "Git + GitHub",
            "level": 3,
            "levelLabel": "Prática",
            "evidence": "Controle de versão, branches e publicação dos projetos."
          }
        ]
      },
      {
        "title": "Conhecimentos complementares",
        "skills": [
          {
            "name": "Node.js + SQL",
            "level": 2,
            "levelLabel": "Complementar",
            "evidence": "Conhecimentos complementares para integração com serviços; estudos de SQL, PostgreSQL e MongoDB."
          },
          {
            "name": "Integração de IA",
            "level": 3,
            "levelLabel": "Prática",
            "evidence": "Atendimento por IA na Nexso ainda em desenvolvimento; programação assistida por IA."
          },
          {
            "name": "UX + Descoberta de produto",
            "level": 3,
            "levelLabel": "Prática",
            "evidence": "Requisitos, usabilidade e decisões de produto na Nexso."
          },
          {
            "name": "Azure DevOps",
            "level": 3,
            "levelLabel": "Prática",
            "evidence": "Organização de funcionalidades, histórias de usuário e acompanhamento de entregas."
          },
          {
            "name": "Python",
            "level": 2,
            "levelLabel": "Complementar",
            "evidence": "Automações e experimentações já realizadas; conhecimento complementar ao frontend."
          }
        ]
      }
    ],
    nexsoHighlights: [
      "Contribuí para o módulo omnichannel concluído, reunindo canais de comunicação em uma interface de atendimento.",
      "Desenvolvo componentes reutilizáveis com React, JavaScript e APIs REST; participo de decisões de arquitetura frontend, UX e descoberta de produto.",
      "Organizo funcionalidades e histórias de usuário no Azure DevOps e contribuo para o atendimento por IA, ainda em desenvolvimento."
    ],
    eipgHighlights: [
      "Defini fluxos e desenvolvi um sistema de gestão em Google Sheets, centralizando informações e automatizando controles entre professores, direção e financeiro.",
      "Estruturei o programa para mais de 200 alunos ativos e liderei mais de 25 profissionais, participando da contratação de professores e organização das equipes.",
      "Melhorei a comunicação e reduzi trabalho manual; gerenciei recursos digitais e formação de professores do Programa de Inglês com a International School."
    ],
    dekraHighlights: [
      "Mapeei planilhas interligadas e trabalhei com o Financeiro para validar premissas, corrigir fórmulas e reorganizar o modelo analítico.",
      "Apliquei o modelo revisado aos estudos de três novas franquias e atualizei estudos anteriores com dados conferidos.",
      "Após a apresentação das melhorias, a gestão solicitou seu uso na reavaliação dos estudos da rede de 102 franquias, apoiando decisões com informações mais consistentes."
    ],
    navigationLabel: "Navegação principal",
    languageLabel: "Seletor de idiomas",
    expertiseLabel: "Áreas de atuação",
  },
  it: {
    nexsoTags: [
      "React + JavaScript",
      "API REST",
      "Azure DevOps + SaaS",
      "UX + Analisi di prodotto"
    ],
    eipgTags: ["Google Sheets", "Operazioni", "Automazione", "Leadership"],
    dekraTags: ["Microsoft Excel", "Analisi dei dati", "Analisi di fattibilità", "Usabilità"],

    navHome: "Home",
    navAbout: "Chi sono",
    navExperience: "Esperienza",
    navSkills: "Competenze",
    navProjects: "Progetti",
    navCertificates: "Certificati",
    navContact: "Contatti",
    openMenu: "Apri menu",
    closeMenu: "Chiudi menu",
    heroKicker: "Frontend Developer",
    heroName: "Guilherme Ferreira",
    heroTitle: [
      "React • Next.js • Node.js • Integrazione IA • UX",
      "Interfacce pensate per esigenze reali."
    ],
    heroDescription: [
      "Sviluppo interfacce responsive con React e Next.js,",
      "collegando API, componenti riutilizzabili e interazioni chiare.",
      "Qualità del codice, UX e visione di prodotto guidano il mio lavoro."
    ],
    viewProjects: "Vedi progetti",
    contactMe: "Parliamo",
    aboutEyebrow: "Chi sono",
    aboutTitle: "Sviluppo frontend con visione di prodotto.",
    aboutLead: "Sono un Frontend Developer specializzato in React e sviluppo interfacce web con Next.js, JavaScript e TypeScript.",
    aboutText: [
      "Traduco i requisiti in interfacce responsive, componenti riutilizzabili e integrazioni con API. UX e analisi delle esigenze di prodotto guidano le mie scelte; le conoscenze complementari di Node.js e SQL facilitano la collaborazione con i team backend.",
      "In Nexso ho contribuito al modulo omnicanale completato e partecipo allo sviluppo dell’assistenza basata sull’IA, ancora in corso.",
      "Il mio percorso nella gestione didattica, nelle automazioni con Google Sheets e nell’analisi di fattibilità rafforza la mia capacità di organizzare processi, comprendere esigenze e risolvere problemi."
    ],
    metricYears: "anni tra analisi dei processi, coordinamento didattico e tecnologia",
    metricStudents:
      "studenti in una struttura accademica organizzata e ampliata",
    metricFranchises: "sedi in franchising incluse nel riesame di fattibilità richiesto",
    experienceEyebrow: "Esperienza",
    experienceTitle: [
      "I prodotti",
      "si costruiscono con",
      "codice e contesto.",
    ],
    experienceIntro:
      "Il mio percorso collega tecnologia, educazione e operazioni. Ogni fase ha rafforzato il mio modo di analizzare i problemi, strutturare i processi e trasformare la complessità in soluzioni pratiche.",
    nexsoPeriod: "2025 - Presente",
    nexsoRole: "Frontend Developer",
    nexsoDescription: "Contribuisco allo sviluppo di soluzioni SaaS, traducendo i requisiti aziendali in interfacce React e integrazioni con API.",
    eipgPeriod: "gen. 2017 – dic. 2024",
    eipgRole: "Coordinatore Accademico | Tecnologia e Automazione dei Processi",
    eipgDescription: "Ho creato da zero il programma di attività extrascolastiche, coordinando operazioni didattiche, tecnologia educativa e processi.",
    dekraPeriod: "2011 - 2013",
    dekraRole: "Analista dei Processi Aziendali e della Fattibilità Economica",
    dekraDescription: "Ho rivisto il modello di fattibilità economico-finanziaria per l’espansione delle sedi in franchising, individuando dati obsoleti e incongruenze nei calcoli.",
    skillsEyebrow: "Competenze",
    skillsTitle: ["Conoscenze", "che si trasformano", "in soluzioni."],
    skillsIntro: "Il frontend è la mia specializzazione principale. Strumenti correlati e conoscenze complementari supportano integrazioni, decisioni di prodotto e collaborazione.",
    skillsEvidence: "Evidenza",
    skillGroups: [
      {
        "title": "Frontend",
        "skills": [
          {
            "name": "React + TypeScript",
            "level": 3,
            "levelLabel": "Pratica",
            "evidence": "Portfolio 2.0 e TaskFlow: componenti riutilizzabili e interfacce tipizzate."
          },
          {
            "name": "JavaScript",
            "level": 3,
            "levelLabel": "Pratica",
            "evidence": "Torcida Brasil, liste di attività e interazioni nel browser."
          },
          {
            "name": "HTML + CSS",
            "level": 3,
            "levelLabel": "Pratica",
            "evidence": "Layout responsive, markup semantico e stati di interazione."
          }
        ]
      },
      {
        "title": "Strumenti correlati",
        "skills": [
          {
            "name": "Next.js",
            "level": 3,
            "levelLabel": "Pratica",
            "evidence": "Progetti di studio Agência Aurora, StepZone e PetCare."
          },
          {
            "name": "Tailwind CSS",
            "level": 3,
            "levelLabel": "Pratica",
            "evidence": "StepZone: stili responsive con classi di utilità."
          },
          {
            "name": "API REST",
            "level": 3,
            "levelLabel": "Pratica",
            "evidence": "Interfacce React collegate ai servizi in Nexso."
          },
          {
            "name": "Git + GitHub",
            "level": 3,
            "levelLabel": "Pratica",
            "evidence": "Controllo di versione, branch e pubblicazione dei progetti."
          }
        ]
      },
      {
        "title": "Conoscenze complementari",
        "skills": [
          {
            "name": "Node.js + SQL",
            "level": 2,
            "levelLabel": "Complementare",
            "evidence": "Conoscenze complementari per integrare servizi; studio di SQL, PostgreSQL e MongoDB."
          },
          {
            "name": "Integrazione IA",
            "level": 3,
            "levelLabel": "Pratica",
            "evidence": "Assistenza basata sull’IA in Nexso ancora in sviluppo; programmazione assistita dall’IA."
          },
          {
            "name": "UX + Analisi di prodotto",
            "level": 3,
            "levelLabel": "Pratica",
            "evidence": "Requisiti, usabilità e decisioni di prodotto in Nexso."
          },
          {
            "name": "Azure DevOps",
            "level": 3,
            "levelLabel": "Pratica",
            "evidence": "Pianificazione delle funzionalità, storie utente e monitoraggio delle consegne."
          },
          {
            "name": "Python",
            "level": 2,
            "levelLabel": "Complementare",
            "evidence": "Automazioni e sperimentazioni già svolte; conoscenza complementare al frontend."
          }
        ]
      }
    ],
    nexsoHighlights: [
      "Ho contribuito al modulo omnicanale completato, riunendo i canali di comunicazione in un’unica interfaccia per l’assistenza clienti.",
      "Sviluppo componenti riutilizzabili con React, JavaScript e API REST e contribuisco alle decisioni di architettura frontend, UX e analisi delle esigenze di prodotto.",
      "Organizzo funzionalità e storie utente in Azure DevOps e contribuisco all’assistenza basata sull’IA, ancora in fase di sviluppo."
    ],
    eipgHighlights: [
      "Ho definito i flussi e sviluppato un sistema gestionale in Google Sheets, centralizzando informazioni e automatizzando controlli tra docenti, direzione e amministrazione finanziaria.",
      "Ho strutturato il programma per oltre 200 studenti attivi e guidato più di 25 professionisti, contribuendo alla selezione dei docenti e all’organizzazione dei team.",
      "Ho migliorato la comunicazione e ridotto il lavoro manuale; ho gestito risorse digitali e formazione dei docenti del Programma di Inglese con International School."
    ],
    dekraHighlights: [
      "Ho analizzato i fogli di calcolo collegati e collaborato con il team finanziario per validare ipotesi, correggere formule e riorganizzare il modello analitico.",
      "Ho applicato il modello rivisto agli studi di tre nuove sedi e aggiornato gli studi precedenti con dati verificati.",
      "Dopo la presentazione delle migliorie, la direzione ne ha richiesto l’uso per riesaminare gli studi della rete di 102 sedi, supportando le decisioni con informazioni più coerenti."
    ],
    navigationLabel: "Navigazione principale",
    languageLabel: "Selettore della lingua",
    expertiseLabel: "Aree di competenza",
  },
} as const;

type Language = keyof typeof translations;

const navItems = [
  ["home", "navHome"],
  ["about", "navAbout"],
  ["experience", "navExperience"],
  ["skills", "navSkills"],
  ["projects", "navProjects"],
  ["certificates", "navCertificates"],
  ["contact", "navContact"],
] as const;

const skillScale = [1, 2, 3, 4] as const;

type ContactMethod = (typeof contactMethods)[number]["id"];

function ContactIcon({ type }: { type: ContactMethod }) {
  if (type === "email") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg
        className="contact-brand-icon"
        viewBox="0 0 16 16"
        aria-hidden="true"
      >
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708C16 15.487 15.474 16 14.825 16H1.175C.526 16 0 15.487 0 14.854V1.146Zm4.943 12.248V6.169H2.542v7.225h2.401Zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.225 2.4 3.934c0 .694.521 1.248 1.327 1.248h.016Zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.765-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.401Z" />
      </svg>
    );
  }

  if (type === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7.4A5.8 5.8 0 0 0 19.3 3 5.4 5.4 0 0 0 19.1 0S17.9-.4 15 1.5a14 14 0 0 0-6 0C6.1-.4 4.9 0 4.9 0a5.4 5.4 0 0 0-.2 3A5.8 5.8 0 0 0 3.2 7.1c0 5.8 3.5 7 6.8 7.4A4.8 4.8 0 0 0 9 18v4" />
        <path d="M9 18c-4.5 2-5-2-7-2" />
      </svg>
    );
  }

  return (
    <svg
      className="contact-brand-icon"
      viewBox="0 0 16 16"
      aria-hidden="true"
    >
      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93a7.9 7.9 0 0 0-2.327-5.607ZM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592Zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.514.646-.627.775-.115.133-.23.148-.428.05-.197-.1-.836-.308-1.592-.984-.59-.525-.986-1.174-1.102-1.371-.116-.198-.013-.306.087-.404.09-.089.198-.23.296-.346.1-.116.133-.198.198-.33.065-.132.034-.247-.016-.346-.049-.1-.445-1.076-.61-1.47-.16-.389-.323-.335-.445-.34-.115-.007-.247-.007-.379-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.132 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.151.907.129 1.249.078.38-.058 1.171-.48 1.338-.943.164-.462.164-.86.114-.943-.049-.084-.181-.133-.38-.232Z" />
    </svg>
  );
}

function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("portfolio-language");

    if (
      savedLanguage === "en" ||
      savedLanguage === "pt" ||
      savedLanguage === "it"
    ) {
      return savedLanguage;
    }

    return "en";
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [activeCertificateIndex, setActiveCertificateIndex] = useState<
    number | null
  >(null);
  const certificateCloseButtonRef = useRef<HTMLButtonElement>(null);
  const copy = translations[language];
  const projectCopy = projectTranslations[language];
  const certificateCopy = certificateTranslations[language];
  const contactCopy = contactTranslations[language];
  const featuredProjects = projects.filter((project) => project.featured);
  const selectedProjects = projects.filter((project) => !project.featured);
  const visibleCertificates = showAllCertificates
    ? certificates
    : certificates.slice(0, 6);
  const activeCertificate =
    activeCertificateIndex === null
      ? null
      : certificates[activeCertificateIndex];
  const isCertificateModalOpen = activeCertificateIndex !== null;

  useEffect(() => {
    localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language === "pt" ? "pt-BR" : language;
    const title = `${copy.heroName} | ${copy.heroKicker}`;
    const description = `${copy.heroKicker} | ${copy.heroTitle[0]} — ${copy.aboutLead}`;
    document.title = title;
    for (const selector of ['meta[name="title"]', 'meta[property="og:title"]', 'meta[name="twitter:title"]']) {
      document.querySelector(selector)?.setAttribute("content", title);
    }
    for (const selector of ['meta[name="description"]', 'meta[property="og:description"]', 'meta[name="twitter:description"]']) {
      document.querySelector(selector)?.setAttribute("content", description);
    }
  }, [language, copy]);

  useEffect(() => {
    if (!isCertificateModalOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const certificateTrigger =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    document.body.style.overflow = "hidden";
    certificateCloseButtonRef.current?.focus();

    function handleCertificateKeyboard(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveCertificateIndex(null);
      }

      if (event.key === "ArrowLeft") {
        setActiveCertificateIndex((current) =>
          current === null
            ? null
            : (current - 1 + certificates.length) % certificates.length,
        );
      }

      if (event.key === "ArrowRight") {
        setActiveCertificateIndex((current) =>
          current === null ? null : (current + 1) % certificates.length,
        );
      }
    }

    window.addEventListener("keydown", handleCertificateKeyboard);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleCertificateKeyboard);
      certificateTrigger?.focus();
    };
  }, [isCertificateModalOpen]);

  function changeLanguage(selectedLanguage: Language) {
    setLanguage(selectedLanguage);
    setMenuOpen(false);
  }

  function showPreviousCertificate() {
    setActiveCertificateIndex((current) =>
      current === null
        ? null
        : (current - 1 + certificates.length) % certificates.length,
    );
  }

  function showNextCertificate() {
    setActiveCertificateIndex((current) =>
      current === null ? null : (current + 1) % certificates.length,
    );
  }

  return (
    <div className="app">
      <header className="site-header">
        <div className="header-container">
          <a className="brand" href="#home" aria-label="Guilherme Ferreira">
            Guilherme<span> Ferreira</span>
          </a>

          <button
            className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
            type="button"
            aria-label={menuOpen ? copy.closeMenu : copy.openMenu}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>

          <div className={`header-content ${menuOpen ? "is-open" : ""}`}>
            <nav className="main-nav" aria-label={copy.navigationLabel}>
              {navItems.map(([section, label]) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {copy[label]}
                </a>
              ))}
            </nav>

            <div className="language-switcher" aria-label={copy.languageLabel}>
              {(["en", "pt", "it"] as Language[]).map((item) => (
                <button
                  key={item}
                  type="button"
                  className={language === item ? "active" : ""}
                  aria-pressed={language === item}
                  onClick={() => changeLanguage(item)}
                >
                  {item.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-glow hero-glow-blue" />
          <div className="hero-glow hero-glow-gold" />

          <div className="hero-container">
            <div className="hero-copy">
              <p className="hero-kicker">{copy.heroKicker}</p>

              <h1>{copy.heroName}</h1>

              <h2 className="hero-title">
                {copy.heroTitle.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h2>

              <p className="hero-description">
                {copy.heroDescription.map((line) => (
                  <span key={line}>{line}{" "}</span>
                ))}
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  {copy.viewProjects}
                </a>

                <a className="button button-secondary" href="#contact">
                  {copy.contactMe}
                </a>
              </div>

              <div className="hero-tags" aria-label={copy.expertiseLabel}>
                <span>React</span>
                <span>Next.js</span>
                <span>Node.js</span>
                <span>{copy.heroTitle[0].split(" • ")[3]}</span>
                <span>UX</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-grid" aria-hidden="true" />

              <img
                className="hero-portrait"
                src={`${import.meta.env.BASE_URL}images/guilherme-profile.png`}
                alt="Guilherme Ferreira"
              />
            </div>
          </div>

          <a
            className="scroll-indicator"
            href="#about"
            aria-label={copy.navAbout}
          >
            <span />
          </a>
        </section>

        <section className="content-section about-section" id="about">
          <div className="section-container">
            <div className="about-content">
              <div className="section-heading">
                <p className="section-eyebrow">{copy.aboutEyebrow}</p>
                <h2>{copy.aboutTitle}</h2>
              </div>

              <div className="about-copy">
                <p className="about-lead">{copy.aboutLead}</p>
                {copy.aboutText.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="impact-grid">
              <article className="impact-card">
                <strong>12+</strong>
                <span>{copy.metricYears}</span>
              </article>

              <article className="impact-card">
                <strong>200+</strong>
                <span>{copy.metricStudents}</span>
              </article>

              <article className="impact-card">
                <strong>102</strong>
                <span>{copy.metricFranchises}</span>
              </article>
            </div>
          </div>
        </section>

        <section className="content-section experience-section" id="experience">
          <div className="section-container">
            <div className="experience-header">
              <div className="section-heading">
                <p className="section-eyebrow">{copy.experienceEyebrow}</p>
                <h2 className="experience-title">
                  {copy.experienceTitle.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </h2>
              </div>

              <p className="section-intro">{copy.experienceIntro}</p>
            </div>

            <div className="experience-list">
              <article className="experience-item">
                <span className="experience-number">01</span>

                <div className="experience-meta">
                  <span className="experience-period">{copy.nexsoPeriod}</span>
                  <h3>nexso</h3>
                  <p>{copy.nexsoRole}</p>
                </div>

                <div className="experience-details">
                  <p>{copy.nexsoDescription}</p>
                  <ul className="experience-highlights">
                    {copy.nexsoHighlights.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <div className="experience-tags">
                    {copy.nexsoTags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
              </article>

              <article className="experience-item">
                <span className="experience-number">02</span>

                <div className="experience-meta">
                  <span className="experience-period">{copy.eipgPeriod}</span>
                  <h3>EIPG</h3>
                  <p>{copy.eipgRole}</p>
                </div>

                <div className="experience-details">
                  <p>{copy.eipgDescription}</p>
                  <ul className="experience-highlights">
                    {copy.eipgHighlights.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <div className="experience-tags">
                    {copy.eipgTags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
              </article>

              <article className="experience-item">
                <span className="experience-number">03</span>

                <div className="experience-meta">
                  <span className="experience-period">{copy.dekraPeriod}</span>
                  <h3>DEKRA Brasil</h3>
                  <p>{copy.dekraRole}</p>
                </div>

                <div className="experience-details">
                  <p>{copy.dekraDescription}</p>
                  <ul className="experience-highlights">
                    {copy.dekraHighlights.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <div className="experience-tags">
                    {copy.dekraTags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="content-section skills-section" id="skills">
          <div className="section-container">
            <div className="skills-header">
              <div className="section-heading">
                <p className="section-eyebrow">{copy.skillsEyebrow}</p>
                <h2 className="skills-title">
                  {copy.skillsTitle.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </h2>
              </div>

              <p className="section-intro">{copy.skillsIntro}</p>
            </div>

            <div className="skills-grid">
              {copy.skillGroups.map((group, groupIndex) => (
                <article className="skill-group" key={group.title}>
                  <div className="skill-group-heading">
                    <span>{String(groupIndex + 1).padStart(2, "0")}</span>
                    <h3>{group.title}</h3>
                  </div>

                  <div className="skill-list">
                    {group.skills.map((skill) => (
                      <div className="skill-item" key={skill.name}>
                        <div className="skill-name-row">
                          <strong>{skill.name}</strong>
                          <span className="skill-level">
                            {skill.levelLabel}
                          </span>
                        </div>

                        <div
                          className="skill-meter"
                          aria-label={`${skill.name}: ${skill.levelLabel}`}
                        >
                          {skillScale.map((step) => (
                            <span
                              className={step <= skill.level ? "is-active" : ""}
                              key={step}
                            />
                          ))}
                        </div>

                        <p className="skill-evidence">
                          <span>{copy.skillsEvidence}</span>
                          {skill.evidence}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section projects-section" id="projects">
          <div className="section-container">
            <div className="projects-header">
              <div className="section-heading">
                <p className="section-eyebrow">{projectCopy.eyebrow}</p>
                <h2 className="projects-title">
                  {projectCopy.title.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </h2>
              </div>

              <p className="section-intro">{projectCopy.intro}</p>
            </div>

            <div className="featured-projects">
              {featuredProjects.map((project) => (
                <article className="project-card featured-project" key={project.id}>
                  <a
                    className="project-media"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${projectCopy.liveDemo}: ${project.title}`}
                  >
                    <img
                      src={`${import.meta.env.BASE_URL}images/projects/${project.image}`}
                      alt={`${projectCopy.imageAlt}: ${project.title}`}
                      loading="lazy"
                    />
                    <span className="project-featured-label">
                      {projectCopy.featured}
                    </span>
                  </a>

                  <div className="project-card-content">
                    <h3>{project.title}</h3>
                    <p>{projectCopy.descriptions[project.id]}</p>

                    <div
                      className="project-technologies"
                      aria-label={projectCopy.technologies}
                    >
                      {project.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>

                    <div className="project-links">
                      <a
                        className="project-link project-link-primary"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {projectCopy.liveDemo}
                        <span aria-hidden="true">↗</span>
                      </a>

                      <a
                        className="project-link project-link-secondary"
                        href={project.repositoryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {projectCopy.sourceCode}
                        <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="projects-divider">
              <span>{projectCopy.moreProjects}</span>
            </div>

            <div className="projects-grid">
              {selectedProjects.map((project) => (
                <article className="project-card compact-project" key={project.id}>
                  <a
                    className="project-media"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${projectCopy.liveDemo}: ${project.title}`}
                  >
                    <img
                      src={`${import.meta.env.BASE_URL}images/projects/${project.image}`}
                      alt={`${projectCopy.imageAlt}: ${project.title}`}
                      loading="lazy"
                    />
                  </a>

                  <div className="project-card-content">
                    <h3>{project.title}</h3>
                    <p>{projectCopy.descriptions[project.id]}</p>

                    <div
                      className="project-technologies"
                      aria-label={projectCopy.technologies}
                    >
                      {project.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>

                    <div className="project-links">
                      <a
                        className="project-link project-link-primary"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {projectCopy.liveDemo}
                        <span aria-hidden="true">↗</span>
                      </a>

                      <a
                        className="project-link project-link-secondary"
                        href={project.repositoryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {projectCopy.sourceCode}
                        <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="content-section certificates-section"
          id="certificates"
        >
          <div className="section-container">
            <div className="certificates-header">
              <div className="section-heading">
                <p className="section-eyebrow">{certificateCopy.eyebrow}</p>
                <h2 className="certificates-title">
                  {certificateCopy.title.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </h2>
              </div>

              <p className="section-intro">{certificateCopy.intro}</p>
            </div>

            <div className="certificates-grid">
              {visibleCertificates.map((certificate) => {
                const certificateIndex = certificates.findIndex(
                  (item) => item.id === certificate.id,
                );

                return (
                  <article className="certificate-card" key={certificate.id}>
                    <button
                      className="certificate-card-button"
                      type="button"
                      aria-label={`${certificateCopy.viewCertificate}: ${certificateCopy.names[certificate.id]}`}
                      onClick={() =>
                        setActiveCertificateIndex(certificateIndex)
                      }
                    >
                      <span className="certificate-media">
                        <img
                          src={`${import.meta.env.BASE_URL}images/certificates/${certificate.image}`}
                          alt=""
                          loading="lazy"
                        />
                        <span
                          className="certificate-view-indicator"
                          aria-hidden="true"
                        >
                          +
                        </span>
                      </span>

                      <span className="certificate-card-content">
                        <span className="certificate-category">
                          {certificateCopy.categories[certificate.category]}
                        </span>
                        <strong>{certificateCopy.names[certificate.id]}</strong>
                        <span className="certificate-view-label">
                          {certificateCopy.viewCertificate}
                          <span aria-hidden="true">↗</span>
                        </span>
                      </span>
                    </button>
                  </article>
                );
              })}
            </div>

            <div className="certificates-actions">
              <button
                className="certificates-toggle"
                type="button"
                aria-expanded={showAllCertificates}
                onClick={() =>
                  setShowAllCertificates((current) => !current)
                }
              >
                {showAllCertificates
                  ? certificateCopy.showFeatured
                  : certificateCopy.showAll}
                <span aria-hidden="true">
                  {showAllCertificates ? "−" : "+"}
                </span>
              </button>
            </div>
          </div>
        </section>

        <section className="content-section contact-section" id="contact">
          <div className="contact-glow contact-glow-left" />
          <div className="contact-glow contact-glow-right" />

          <div className="section-container contact-container">
            <header className="contact-header">
              <p className="section-eyebrow">{contactCopy.eyebrow}</p>
              <h2>{contactCopy.title}</h2>
              <p className="contact-intro">{contactCopy.intro}</p>

              <p className="contact-availability">
                <span aria-hidden="true" />
                {contactCopy.availability}
              </p>
            </header>

            <div className="contact-grid">
              {contactMethods.map((method) => (
                <a
                  className={`contact-card contact-card-${method.id}`}
                  href={method.href}
                  key={method.id}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noopener noreferrer" : undefined}
                  aria-label={`${contactCopy.openContact}: ${contactCopy.labels[method.id]}`}
                >
                  <span className="contact-icon">
                    <ContactIcon type={method.id} />
                  </span>

                  <span className="contact-card-copy">
                    <span>{contactCopy.labels[method.id]}</span>
                    <strong>
                      {method.value ?? contactCopy.whatsappText}
                    </strong>
                  </span>

                  <span className="contact-card-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              ))}
            </div>

            <div className="back-to-top-wrapper">
              <a
                className="back-to-top"
                href="#home"
                aria-label={contactCopy.backToTop}
              >
                <span aria-hidden="true">↑</span>
              </a>
              <span>{contactCopy.backToTop}</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-container">
          <a className="brand footer-brand" href="#home">
            Guilherme<span> Ferreira</span>
          </a>

          <div className="footer-signature">
            <p>
              {contactCopy.developedBy}{" "}
              <strong>Guilherme Ferreira</strong>
            </p>
            <span>{contactCopy.role}</span>
          </div>

          <p className="footer-copyright">
            © {new Date().getFullYear()} Guilherme Ferreira.
            <span>{contactCopy.rights}</span>
          </p>
        </div>
      </footer>

      {activeCertificate && activeCertificateIndex !== null && (
        <div
          className="certificate-modal"
          role="presentation"
          onClick={() => setActiveCertificateIndex(null)}
        >
          <div
            className="certificate-modal-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-modal-title"
            aria-label={certificateCopy.dialogLabel}
            onClick={(event) => event.stopPropagation()}
          >
            <header className="certificate-modal-header">
              <div>
                <span>
                  {certificateCopy.categories[activeCertificate.category]}
                </span>
                <h2 id="certificate-modal-title">
                  {certificateCopy.names[activeCertificate.id]}
                </h2>
              </div>

              <button
                ref={certificateCloseButtonRef}
                className="certificate-modal-close"
                type="button"
                aria-label={certificateCopy.close}
                onClick={() => setActiveCertificateIndex(null)}
              >
                <span aria-hidden="true">×</span>
              </button>
            </header>

            <div className="certificate-modal-body">
              <button
                className="certificate-modal-navigation certificate-modal-previous"
                type="button"
                aria-label={certificateCopy.previous}
                onClick={showPreviousCertificate}
              >
                <span aria-hidden="true">←</span>
              </button>

              <figure>
                <img
                  src={`${import.meta.env.BASE_URL}images/certificates/${activeCertificate.image}`}
                  alt={`${certificateCopy.viewCertificate}: ${certificateCopy.names[activeCertificate.id]}`}
                />
                <figcaption>
                  <span>
                    {String(activeCertificateIndex + 1).padStart(2, "0")}
                  </span>
                  <span aria-hidden="true">/</span>
                  <span>{String(certificates.length).padStart(2, "0")}</span>
                </figcaption>
              </figure>

              <button
                className="certificate-modal-navigation certificate-modal-next"
                type="button"
                aria-label={certificateCopy.next}
                onClick={showNextCertificate}
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
