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
    intro:
      "A selection of digital products where code, product thinking and UX come together to solve real problems with clarity and purpose.",
    featured: "Featured project",
    moreProjects: "More selected projects",
    liveDemo: "View project",
    sourceCode: "Source code",
    technologies: "Technologies used",
    imageAlt: "Project preview",
    descriptions: {
      "torcida-brasil":
        "A JavaScript e-commerce experience with search, filters, favorites, product variations, a persistent cart and a simulated checkout flow.",
      "taskflow-react":
        "A React and TypeScript productivity application with a customizable task list, filters, progress indicators, completed-task management and local persistence.",
      petcare:
        "A Next.js and TypeScript pet care scheduling system with a complete booking flow, confirmation, administrative agenda, metrics and status management.",
      stepzone:
        "A Next.js and TypeScript sneaker e-commerce experience with search, category filters, product pages, a persistent cart, automatic discounts and checkout.",
      "agencia-aurora":
        "A responsive Next.js and TypeScript landing page for a digital agency, built with reusable components and a clear, conversion-oriented visual hierarchy.",
      "refatorando-copa-viagens":
        "An interactive JavaScript travel experience connecting destinations, national teams and World Cup stories through a visual world map.",
      "tela-de-login":
        "A responsive JavaScript authentication interface with validation, local persistence, interaction states and clear user feedback.",
      "portfolio-2.0":
        "A multilingual React and TypeScript portfolio developed to present professional experience, technical skills, evidence and projects with clarity, organization and identity.",
    },
  },
  pt: {
    eyebrow: "Projetos",
    title: ["Projetos que", "transformam ideias", "em experiências."],
    intro:
      "Uma seleção de produtos digitais em que código, visão de produto e UX se encontram para resolver problemas reais com clareza e propósito.",
    featured: "Projeto em destaque",
    moreProjects: "Outros projetos selecionados",
    liveDemo: "Ver projeto",
    sourceCode: "Código-fonte",
    technologies: "Tecnologias utilizadas",
    imageAlt: "Prévia do projeto",
    descriptions: {
      "torcida-brasil":
        "E-commerce em JavaScript dedicado ao futebol brasileiro, com busca, filtros, favoritos, variações de produto, carrinho persistente e checkout simulado.",
      "taskflow-react":
        "Aplicação de produtividade em React e TypeScript com lista personalizável, filtros, indicadores de progresso, gerenciamento de tarefas concluídas e persistência local.",
      petcare:
        "Sistema em Next.js e TypeScript de agendamento para cuidados pet com fluxo completo, confirmação, agenda administrativa, métricas e gerenciamento de status.",
      stepzone:
        "E-commerce de sneakers em Next.js e TypeScript com pesquisa, filtros por categoria, páginas de produto, carrinho persistente, desconto automático e checkout.",
      "agencia-aurora":
        "Landing page responsiva em Next.js e TypeScript para uma agência digital, construída com componentes reutilizáveis e hierarquia visual orientada à conversão.",
      "refatorando-copa-viagens":
        "Experiência interativa de viagens em JavaScript que conecta destinos, seleções e histórias da Copa por meio de um mapa-múndi visual.",
      "tela-de-login":
        "Interface de autenticação responsiva em JavaScript com validações, persistência local, estados de interação e feedback claro para o usuário.",
      "portfolio-2.0":
        "Portfólio multilíngue em React e TypeScript desenvolvido para apresentar trajetória profissional, habilidades técnicas, evidências e projetos com clareza, organização e identidade.",
    },
  },
  it: {
    eyebrow: "Progetti",
    title: ["Progetti che", "trasformano idee", "in esperienze."],
    intro:
      "Una selezione di prodotti digitali in cui codice, visione di prodotto e UX si uniscono per risolvere problemi reali con chiarezza e intenzione.",
    featured: "Progetto in evidenza",
    moreProjects: "Altri progetti selezionati",
    liveDemo: "Vedi progetto",
    sourceCode: "Codice sorgente",
    technologies: "Tecnologie utilizzate",
    imageAlt: "Anteprima del progetto",
    descriptions: {
      "torcida-brasil":
        "Un’esperienza e-commerce in JavaScript dedicata al calcio brasiliano, con ricerca, filtri, preferiti, varianti di prodotto, carrello persistente e checkout simulato.",
      "taskflow-react":
        "Un’applicazione per la produttività in React e TypeScript con lista personalizzabile, filtri, indicatori di avanzamento, gestione delle attività completate e persistenza locale.",
      petcare:
        "Un sistema in Next.js e TypeScript di prenotazione per la cura degli animali con flusso completo, conferma, agenda amministrativa, metriche e gestione dello stato.",
      stepzone:
        "Un e-commerce di sneakers in Next.js e TypeScript con ricerca, filtri per categoria, pagine prodotto, carrello persistente, sconti automatici e checkout.",
      "agencia-aurora":
        "Una landing page responsive in Next.js e TypeScript per un’agenzia digitale, costruita con componenti riutilizzabili e una gerarchia visiva orientata alla conversione.",
      "refatorando-copa-viagens":
        "Un’esperienza di viaggio interattiva in JavaScript che collega destinazioni, nazionali e storie dei Mondiali attraverso una mappa visiva.",
      "tela-de-login":
        "Un’interfaccia di autenticazione responsive in JavaScript con validazione, persistenza locale, stati di interazione e feedback chiaro per l’utente.",
      "portfolio-2.0":
        "Un portfolio multilingue in React e TypeScript sviluppato per presentare esperienza professionale, competenze tecniche, evidenze e progetti con chiarezza, organizzazione e identità.",
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
    availability: "Available for new projects and professional connections",
    openContact: "Open contact",
    whatsappText: "Send a message",
    backToTop: "Back to top",
    developedBy: "Developed by",
    role: "React Developer • Node.js • Next.js • AI Integration • UX",
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
    availability: "Disponível para novos projetos e conexões profissionais",
    openContact: "Abrir contato",
    whatsappText: "Enviar mensagem",
    backToTop: "Voltar ao topo",
    developedBy: "Desenvolvido por",
    role: "Desenvolvedor React • Node.js • Next.js • Integração de IA • UX",
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
    availability: "Disponibile per nuovi progetti e connessioni professionali",
    openContact: "Apri contatto",
    whatsappText: "Invia un messaggio",
    backToTop: "Torna all'inizio",
    developedBy: "Sviluppato da",
    role: "Sviluppatore React • Node.js • Next.js • Integrazione AI • UX",
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
    navHome: "Home",
    navAbout: "About",
    navExperience: "Experience",
    navSkills: "Skills",
    navProjects: "Projects",
    navCertificates: "Certificates",
    navContact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    heroKicker: "React Developer",
    heroName: "Guilherme Ferreira",
    heroTitle: ["React • Node.js • Next.js • AI Integration • UX", "Building digital products with SaaS, AI and UX."],
    heroDescription: "I build web applications with React, Node.js and Next.js, integrating AI into both solutions and the development process. SaaS, UX and product thinking guide what I build.",
    viewProjects: "View projects",
    contactMe: "Let's talk",
    aboutEyebrow: "About",
    aboutTitle: "React development with product vision.",
    aboutLead: "I am a React Developer focused on web applications built with React, Next.js and Node.js.",
    aboutText: ["At nexso, I develop SaaS solutions, APIs, automations and AI integrations, also working with PostgreSQL, MongoDB and Azure DevOps.","UX and Product Discovery complement my technical work, helping turn real user needs into clear requirements and functional solutions.","My previous experience in leadership, operations and process improvement gives me a broader business perspective and shapes the way I build digital products."],
    metricYears: "years leading projects and improving processes",
    metricStudents: "students in an academic operation structured and scaled",
    metricFranchises: "franchises assessed for national expansion",
    experienceEyebrow: "Experience",
    experienceTitle: ["Products", "are built with", "code and context."],
    experienceIntro:
      "My trajectory connects technology, education and operations. Each stage strengthened the way I investigate problems, structure processes and turn complexity into practical solutions.",
    nexsoPeriod: "2025 - Present",
    nexsoRole: "Full Stack Developer",
    nexsoDescription:
      "I develop SaaS solutions with React, TypeScript, JavaScript, Node.js, APIs and databases such as PostgreSQL and MongoDB. I use Python for automations and experiments, integrate AI and use it in development, and organize work in Azure DevOps. UX and product discovery inform implementation, architecture and technical standards.",
    eipgPeriod: "2017 - 2024",
    eipgRole: "Coordinator & Process Engineering",
    eipgDescription:
      "I built from scratch and led an after-school operation that grew to more than 200 students and a team of 25+ professionals. I integrated academic, administrative and financial processes and created Google Sheets automations to improve control, communication and decision-making.",
    dekraPeriod: "2011 - 2013",
    dekraRole: "Business Process & Feasibility Analyst",
    dekraDescription:
      "I worked on the feasibility analysis for a nationwide expansion involving 102 franchises. I identified incomplete data, outdated information, calculation errors and usability issues; with Finance, I reviewed the data and calculations and redesigned the interface, making the model clearer and more reliable.",
    skillsEyebrow: "Skills",
    skillsTitle: ["Knowledge", "transformed into", "solutions."],
    skillsIntro:
      "Each skill is connected to real projects, products or challenges. The levels show how I currently use each one, not an abstract percentage.",
    skillsEvidence: "Evidence",
    skillGroups: [
    {
        "title": "Frontend",
        "skills": [
            {
                "name": "React",
                "level": 3,
                "levelLabel": "Professional practice",
                "evidence": "Component-based interfaces at nexso and in the public Portfolio 2.0."
            },
            {
                "name": "Next.js",
                "level": 3,
                "levelLabel": "Professional practice",
                "evidence": "Web applications at nexso; Agência Aurora, StepZone and PetCare are available publicly."
            },
            {
                "name": "TypeScript + JavaScript",
                "level": 3,
                "levelLabel": "Professional practice",
                "evidence": "Typed interfaces and application logic at nexso and in public projects."
            },
            {
                "name": "HTML5 + CSS3 + Tailwind CSS + Vite",
                "level": 3,
                "levelLabel": "Public projects",
                "evidence": "Responsive interfaces in public projects, including Portfolio 2.0 with Vite."
            }
        ]
    },
    {
        "title": "Backend & Data",
        "skills": [
            {
                "name": "Node.js + REST APIs + Express",
                "level": 3,
                "levelLabel": "Professional practice",
                "evidence": "Backend development, REST APIs and integrations at nexso."
            },
            {
                "name": "PostgreSQL + SQL",
                "level": 3,
                "levelLabel": "Professional practice",
                "evidence": "Relational persistence, SQL queries and SaaS solutions at nexso."
            },
            {
                "name": "MongoDB",
                "level": 3,
                "levelLabel": "Professional practice",
                "evidence": "Data persistence and SaaS product architecture at nexso."
            },
            {
                "name": "Integrations",
                "level": 3,
                "levelLabel": "Professional practice",
                "evidence": "API and service integrations in solutions and automations at nexso."
            }
        ]
    },
    {
        "title": "AI & Tools",
        "skills": [
            {
                "name": "Python",
                "level": 3,
                "levelLabel": "Professional practice",
                "evidence": "Automations and technical experiments at nexso."
            },
            {
                "name": "AI Integration",
                "level": 3,
                "levelLabel": "Professional practice",
                "evidence": "AI integrations in SaaS solutions and automations at nexso."
            },
            {
                "name": "AI-Assisted Development",
                "level": 3,
                "levelLabel": "Professional practice",
                "evidence": "AI-assisted implementation and automation, with human technical decisions and validation."
            },
            {
                "name": "Azure DevOps + Git + GitHub",
                "level": 3,
                "levelLabel": "Professional practice",
                "evidence": "Development workflows and technical deliveries at nexso; version control and project publishing."
            }
        ]
    },
    {
        "title": "Product & Experience",
        "skills": [
            {
                "name": "UX + Product Discovery",
                "level": 3,
                "levelLabel": "Professional practice",
                "evidence": "User needs, discovery and implementation decisions at nexso."
            },
            {
                "name": "SaaS",
                "level": 3,
                "levelLabel": "Professional practice",
                "evidence": "Development of SaaS solutions at nexso."
            },
            {
                "name": "Requirements + Business Rules",
                "level": 3,
                "levelLabel": "Professional practice",
                "evidence": "Clear requirements, business rules and technical delivery planning at nexso."
            },
            {
                "name": "Scrum",
                "level": 2,
                "levelLabel": "Certified",
                "evidence": "Scrum training and certification."
            }
        ]
    }
],
  },
  pt: {
    navHome: "Início",
    navAbout: "Sobre",
    navExperience: "Experiência",
    navSkills: "Habilidades",
    navProjects: "Projetos",
    navCertificates: "Certificados",
    navContact: "Contato",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    heroKicker: "Desenvolvedor React",
    heroName: "Guilherme Ferreira",
    heroTitle: ["React • Node.js • Next.js • Integração de IA • UX", "Construindo produtos digitais com SaaS, IA e UX."],
    heroDescription: "Desenvolvo aplicações web com React, Node.js e Next.js, integrando IA às soluções e ao desenvolvimento. SaaS, UX e visão de produto orientam o que construo.",
    viewProjects: "Ver projetos",
    contactMe: "Vamos conversar",
    aboutEyebrow: "Sobre",
    aboutTitle: "Desenvolvimento React com visão de produto.",
    aboutLead: "Sou Desenvolvedor React, com foco em aplicações web utilizando React, Next.js e Node.js.",
    aboutText: ["Na nexso, desenvolvo soluções SaaS, APIs, automações e integrações de IA, trabalhando também com PostgreSQL, MongoDB e Azure DevOps.","UX e Product Discovery complementam minha atuação técnica, ajudando a transformar necessidades reais em requisitos claros e soluções funcionais.","Minha experiência anterior em liderança, operações e melhoria de processos amplia minha visão de negócio e a forma como desenvolvo produtos digitais."],
    metricYears: "anos liderando projetos e aprimorando processos",
    metricStudents: "alunos em uma operação acadêmica estruturada e escalada",
    metricFranchises: "franquias analisadas para uma expansão nacional",
    experienceEyebrow: "Experiência",
    experienceTitle: ["Produtos são", "construídos com", "código e contexto."],
    experienceIntro:
      "Minha trajetória conecta tecnologia, educação e operações. Cada etapa fortaleceu minha forma de investigar problemas, estruturar processos e transformar complexidade em soluções práticas.",
    nexsoPeriod: "2025 - Atualmente",
    nexsoRole: "Desenvolvedor Full Stack",
    nexsoDescription:
      "Desenvolvo soluções SaaS com React, TypeScript, JavaScript, Node.js, APIs e bancos de dados como PostgreSQL e MongoDB. Utilizo Python em automações e experimentações, integro IA e a utilizo no desenvolvimento, e organizo o trabalho no Azure DevOps. UX e discovery de produto orientam a implementação, a arquitetura e a padronização técnica.",
    eipgPeriod: "2017 - 2024",
    eipgRole: "Coordenador e Engenharia de Processos",
    eipgDescription:
      "Estruturei do zero e liderei uma operação de contraturno que alcançou mais de 200 alunos e uma equipe com mais de 25 profissionais. Integrei processos acadêmicos, administrativos e financeiros e desenvolvi automações em Google Sheets para melhorar controle, comunicação e tomada de decisão.",
    dekraPeriod: "2011 - 2013",
    dekraRole: "Analista de Processos de Negócio e Viabilidade",
    dekraDescription:
      "Atuei na análise de viabilidade de uma expansão nacional envolvendo 102 franquias. Identifiquei dados incompletos, informações desatualizadas, erros de cálculo e problemas de usabilidade; em parceria com o Financeiro, revisei dados e cálculos e redesenhei a interface, tornando o modelo mais claro e confiável.",
    skillsEyebrow: "Habilidades",
    skillsTitle: ["Conhecimento", "que se transforma", "em solução."],
    skillsIntro:
      "Cada habilidade está ligada a projetos, produtos ou desafios reais. Os níveis mostram como utilizo cada uma hoje, não uma porcentagem abstrata.",
    skillsEvidence: "Evidência",
    skillGroups: [
    {
        "title": "Frontend",
        "skills": [
            {
                "name": "React",
                "level": 3,
                "levelLabel": "Prática profissional",
                "evidence": "Interfaces componentizadas na nexso e no Portfólio 2.0 público."
            },
            {
                "name": "Next.js",
                "level": 3,
                "levelLabel": "Prática profissional",
                "evidence": "Aplicações web na nexso; Agência Aurora, StepZone e PetCare disponíveis publicamente."
            },
            {
                "name": "TypeScript + JavaScript",
                "level": 3,
                "levelLabel": "Prática profissional",
                "evidence": "Interfaces tipadas e lógica de aplicações na nexso e em projetos públicos."
            },
            {
                "name": "HTML5 + CSS3 + Tailwind CSS + Vite",
                "level": 3,
                "levelLabel": "Projetos públicos",
                "evidence": "Interfaces responsivas em projetos públicos, incluindo Portfólio 2.0 com Vite."
            }
        ]
    },
    {
        "title": "Backend & Dados",
        "skills": [
            {
                "name": "Node.js + REST APIs + Express",
                "level": 3,
                "levelLabel": "Prática profissional",
                "evidence": "Desenvolvimento backend, APIs REST e integrações na nexso."
            },
            {
                "name": "PostgreSQL + SQL",
                "level": 3,
                "levelLabel": "Prática profissional",
                "evidence": "Persistência relacional, consultas SQL e soluções SaaS na nexso."
            },
            {
                "name": "MongoDB",
                "level": 3,
                "levelLabel": "Prática profissional",
                "evidence": "Persistência de dados e arquitetura de produtos SaaS na nexso."
            },
            {
                "name": "Integrações",
                "level": 3,
                "levelLabel": "Prática profissional",
                "evidence": "Integrações de APIs e serviços em soluções e automações na nexso."
            }
        ]
    },
    {
        "title": "IA & Ferramentas",
        "skills": [
            {
                "name": "Python",
                "level": 3,
                "levelLabel": "Prática profissional",
                "evidence": "Automações e experimentações técnicas na nexso."
            },
            {
                "name": "Integração de IA",
                "level": 3,
                "levelLabel": "Prática profissional",
                "evidence": "Integrações de IA em soluções SaaS e automações na nexso."
            },
            {
                "name": "Desenvolvimento Assistido por IA",
                "level": 3,
                "levelLabel": "Prática profissional",
                "evidence": "Implementações e automações assistidas por IA, com decisões técnicas e validação humana."
            },
            {
                "name": "Azure DevOps + Git + GitHub",
                "level": 3,
                "levelLabel": "Prática profissional",
                "evidence": "Fluxos de desenvolvimento e entregas técnicas na nexso; versionamento e publicação de projetos."
            }
        ]
    },
    {
        "title": "Produto & Experiência",
        "skills": [
            {
                "name": "UX + Product Discovery",
                "level": 3,
                "levelLabel": "Prática profissional",
                "evidence": "Necessidades dos usuários, discovery e decisões de implementação na nexso."
            },
            {
                "name": "SaaS",
                "level": 3,
                "levelLabel": "Prática profissional",
                "evidence": "Desenvolvimento de soluções SaaS na nexso."
            },
            {
                "name": "Requisitos + Regras de Negócio",
                "level": 3,
                "levelLabel": "Prática profissional",
                "evidence": "Requisitos claros, regras de negócio e planejamento de entregas técnicas na nexso."
            },
            {
                "name": "Scrum",
                "level": 2,
                "levelLabel": "Certificado",
                "evidence": "Formação e certificação em Scrum."
            }
        ]
    }
],
  },
  it: {
    navHome: "Home",
    navAbout: "Chi sono",
    navExperience: "Esperienza",
    navSkills: "Competenze",
    navProjects: "Progetti",
    navCertificates: "Certificati",
    navContact: "Contatti",
    openMenu: "Apri menu",
    closeMenu: "Chiudi menu",
    heroKicker: "Sviluppatore React",
    heroName: "Guilherme Ferreira",
    heroTitle: ["React • Node.js • Next.js • Integrazione AI • UX", "Creo prodotti digitali con SaaS, IA e UX."],
    heroDescription: "Sviluppo applicazioni web con React, Node.js e Next.js, integrando l’IA nelle soluzioni e nel processo di sviluppo. SaaS, UX e visione di prodotto guidano ciò che costruisco.",
    viewProjects: "Vedi progetti",
    contactMe: "Parliamo",
    aboutEyebrow: "Chi sono",
    aboutTitle: "Sviluppo React con visione di prodotto.",
    aboutLead: "Sono uno Sviluppatore React specializzato in applicazioni web realizzate con React, Next.js e Node.js.",
    aboutText: ["In nexso sviluppo soluzioni SaaS, API, automazioni e integrazioni di IA, lavorando anche con PostgreSQL, MongoDB e Azure DevOps.","UX e Product Discovery completano il mio lavoro tecnico, aiutandomi a trasformare esigenze reali in requisiti chiari e soluzioni funzionali.","La mia precedente esperienza in leadership, operazioni e miglioramento dei processi amplia la mia visione aziendale e influenza il modo in cui sviluppo prodotti digitali."],
    metricYears: "anni alla guida di progetti e nel miglioramento dei processi",
    metricStudents:
      "studenti in una struttura accademica organizzata e ampliata",
    metricFranchises: "franchising analizzati per un’espansione nazionale",
    experienceEyebrow: "Esperienza",
    experienceTitle: [
      "I prodotti",
      "si costruiscono con",
      "codice e contesto.",
    ],
    experienceIntro:
      "Il mio percorso collega tecnologia, educazione e operazioni. Ogni fase ha rafforzato il mio modo di analizzare i problemi, strutturare i processi e trasformare la complessità in soluzioni pratiche.",
    nexsoPeriod: "2025 - Presente",
    nexsoRole: "Sviluppatore Full Stack",
    nexsoDescription:
      "Sviluppo soluzioni SaaS con React, TypeScript, JavaScript, Node.js, API e database come PostgreSQL e MongoDB. Utilizzo Python per automazioni e sperimentazioni, integro IA e la uso nello sviluppo, e organizzo il lavoro in Azure DevOps. UX e product discovery guidano implementazione, architettura e standard tecnici.",
    eipgPeriod: "2017 - 2024",
    eipgRole: "Coordinatore e Ingegneria dei Processi",
    eipgDescription:
      "Ho strutturato da zero e guidato un programma extracurricolare che ha raggiunto oltre 200 studenti e un team di più di 25 professionisti. Ho integrato processi accademici, amministrativi e finanziari e creato automazioni in Google Sheets per migliorare controllo, comunicazione e processo decisionale.",
    dekraPeriod: "2011 - 2013",
    dekraRole: "Analista dei Processi Aziendali e di Fattibilità",
    dekraDescription:
      "Ho lavorato all’analisi di fattibilità di un’espansione nazionale che coinvolgeva 102 franchising. Ho individuato dati incompleti, informazioni obsolete, errori di calcolo e problemi di usabilità; insieme al team Finance ho revisionato dati e calcoli e ridisegnato l’interfaccia, rendendo il modello più chiaro e affidabile.",
    skillsEyebrow: "Competenze",
    skillsTitle: ["Conoscenze", "che si trasformano", "in soluzioni."],
    skillsIntro:
      "Ogni competenza è collegata a progetti, prodotti o sfide reali. I livelli mostrano come la utilizzo oggi, non una percentuale astratta.",
    skillsEvidence: "Evidenza",
    skillGroups: [
    {
        "title": "Frontend",
        "skills": [
            {
                "name": "React",
                "level": 3,
                "levelLabel": "Pratica professionale",
                "evidence": "Interfacce a componenti in nexso e nel Portfolio 2.0 pubblico."
            },
            {
                "name": "Next.js",
                "level": 3,
                "levelLabel": "Pratica professionale",
                "evidence": "Applicazioni web in nexso; Agência Aurora, StepZone e PetCare disponibili pubblicamente."
            },
            {
                "name": "TypeScript + JavaScript",
                "level": 3,
                "levelLabel": "Pratica professionale",
                "evidence": "Interfacce tipizzate e logica applicativa in nexso e nei progetti pubblici."
            },
            {
                "name": "HTML5 + CSS3 + Tailwind CSS + Vite",
                "level": 3,
                "levelLabel": "Progetti pubblici",
                "evidence": "Interfacce responsive nei progetti pubblici, incluso Portfolio 2.0 con Vite."
            }
        ]
    },
    {
        "title": "Backend & Dati",
        "skills": [
            {
                "name": "Node.js + REST APIs + Express",
                "level": 3,
                "levelLabel": "Pratica professionale",
                "evidence": "Sviluppo backend, API REST e integrazioni in nexso."
            },
            {
                "name": "PostgreSQL + SQL",
                "level": 3,
                "levelLabel": "Pratica professionale",
                "evidence": "Persistenza relazionale, query SQL e soluzioni SaaS in nexso."
            },
            {
                "name": "MongoDB",
                "level": 3,
                "levelLabel": "Pratica professionale",
                "evidence": "Persistenza dei dati e architettura di prodotti SaaS in nexso."
            },
            {
                "name": "Integrazioni",
                "level": 3,
                "levelLabel": "Pratica professionale",
                "evidence": "Integrazioni di API e servizi nelle soluzioni e automazioni in nexso."
            }
        ]
    },
    {
        "title": "IA & Strumenti",
        "skills": [
            {
                "name": "Python",
                "level": 3,
                "levelLabel": "Pratica professionale",
                "evidence": "Automazioni e sperimentazioni tecniche in nexso."
            },
            {
                "name": "Integrazione AI",
                "level": 3,
                "levelLabel": "Pratica professionale",
                "evidence": "Integrazioni di IA in soluzioni SaaS e automazioni in nexso."
            },
            {
                "name": "Sviluppo Assistito da IA",
                "level": 3,
                "levelLabel": "Pratica professionale",
                "evidence": "Implementazioni e automazioni assistite da IA, con decisioni tecniche e validazione umana."
            },
            {
                "name": "Azure DevOps + Git + GitHub",
                "level": 3,
                "levelLabel": "Pratica professionale",
                "evidence": "Flussi di sviluppo e consegne tecniche in nexso; controllo di versione e pubblicazione dei progetti."
            }
        ]
    },
    {
        "title": "Prodotto & Esperienza",
        "skills": [
            {
                "name": "UX + Product Discovery",
                "level": 3,
                "levelLabel": "Pratica professionale",
                "evidence": "Esigenze degli utenti, discovery e decisioni di implementazione in nexso."
            },
            {
                "name": "SaaS",
                "level": 3,
                "levelLabel": "Pratica professionale",
                "evidence": "Sviluppo di soluzioni SaaS in nexso."
            },
            {
                "name": "Requisiti + Regole di Business",
                "level": 3,
                "levelLabel": "Pratica professionale",
                "evidence": "Requisiti chiari, regole di business e pianificazione delle consegne tecniche in nexso."
            },
            {
                "name": "Scrum",
                "level": 2,
                "levelLabel": "Certificato",
                "evidence": "Formazione e certificazione Scrum."
            }
        ]
    }
],
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
    document.documentElement.lang = language;
    const title = `${copy.heroName} | ${copy.heroKicker}`;
    const description = `${copy.heroKicker} | ${copy.heroTitle[0]} — TypeScript, JavaScript, Python, APIs, PostgreSQL, MongoDB, Azure DevOps, SaaS.`;
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
            <nav className="main-nav" aria-label="Main navigation">
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

            <div className="language-switcher" aria-label="Language selector">
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

              <p className="hero-description">{copy.heroDescription}</p>

              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  {copy.viewProjects}
                </a>

                <a className="button button-secondary" href="#contact">
                  {copy.contactMe}
                </a>
              </div>

              <div className="hero-tags" aria-label="Areas of expertise">
                <span>React</span>
                <span>Node.js</span>
                <span>Next.js</span>
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
                  <div className="experience-tags">
                    <span>React + Node.js</span>
                    <span>TypeScript</span>
                    <span>APIs + SaaS</span>
                    <span>AI + UX</span>
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
                  <div className="experience-tags">
                    <span>Process Engineering</span>
                    <span>Operations</span>
                    <span>Automation</span>
                    <span>Leadership</span>
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
                  <div className="experience-tags">
                    <span>Business Processes</span>
                    <span>Data Analysis</span>
                    <span>Process Improvement</span>
                    <span>UX</span>
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
