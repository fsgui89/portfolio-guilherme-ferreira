# Portfólio 2.0 — Guilherme Ferreira

**Frontend Developer | React | Next.js | Node.js | AI Integration | UX**

[Live portfolio](https://fsgui89.github.io/portfolio-guilherme-ferreira/) · [LinkedIn](https://www.linkedin.com/in/guilhermefsdev/) · [GitHub](https://github.com/fsgui89)

[English](#english) · [Português](#português) · [Italiano](#italiano)

## English

A responsive frontend portfolio built with **React 19, TypeScript, Vite and CSS**, presenting professional experience, skills, projects and certificates in English, Brazilian Portuguese and Italian. The professional focus is frontend development specializing in React, supported by UX and product thinking.

### Features

- Three complete language versions; language preference persists in `localStorage` and updates document language, title and social metadata.
- Eight project cards with previews, actual technology lists, live demonstrations and source links. Study projects are identified as such.
- Concise professional experience and skill evidence, with Node.js and data knowledge presented as complementary.
- Six certificates initially, expandable selection and an image viewer with Escape/arrow-key controls and focus restoration.
- Responsive desktop/mobile navigation, contact links, back-to-top navigation and reduced-motion CSS.

This repository implements the portfolio frontend. Next.js, Tailwind CSS, Node.js, databases and AI mentioned in the content describe other projects or complementary knowledge; they are not frameworks or backend services used by this portfolio.

## Português

Portfólio frontend responsivo desenvolvido com **React 19, TypeScript, Vite e CSS**, com experiência profissional, habilidades, projetos e certificados em inglês, português brasileiro e italiano. O posicionamento é Frontend Developer especializado em React, com UX e visão de produto.

### Funcionalidades

- Três versões completas, com idioma persistido no `localStorage` e atualização do idioma do documento, título e metadados sociais.
- Oito projetos com prévias, tecnologias utilizadas, demonstrações e código-fonte. Projetos de estudo são identificados.
- Experiências concisas e evidências de competências; Node.js e conhecimentos de dados aparecem como complementares.
- Seis certificados na seleção inicial, expansão da lista e visualizador com Escape, setas e retorno do foco ao botão de origem.
- Navegação responsiva para desktop e mobile, contatos, retorno ao topo e CSS que respeita a preferência por menos animações.

Este repositório implementa o frontend do portfólio. Next.js, Tailwind CSS, Node.js, bancos de dados e IA citados nos textos representam outros projetos ou conhecimentos complementares; não são frameworks ou serviços de backend utilizados neste portfólio.

## Italiano

Portfolio frontend responsive realizzato con **React 19, TypeScript, Vite e CSS**, con esperienze professionali, competenze, progetti e certificati in inglese, portoghese brasiliano e italiano. Il profilo professionale è Frontend Developer specializzato in React, con attenzione alla UX e al prodotto.

### Funzionalità

- Tre versioni linguistiche complete, con preferenza salvata in `localStorage` e aggiornamento della lingua del documento, del titolo e dei metadati social.
- Otto progetti con anteprime, tecnologie utilizzate, demo e codice sorgente. I progetti di studio sono indicati esplicitamente.
- Esperienze concise e competenze documentate; Node.js e le conoscenze sui dati sono complementari.
- Sei certificati iniziali, elenco espandibile e visualizzatore con Escape, frecce e ripristino del focus.
- Navigazione responsive per desktop e dispositivi mobili, contatti, ritorno all’inizio e rispetto della preferenza per animazioni ridotte.

Questo repository implementa il frontend del portfolio. Next.js, Tailwind CSS, Node.js, database e IA citati nei testi riguardano altri progetti o conoscenze complementari; non sono framework o servizi backend utilizzati da questo portfolio.

## Local development / Execução local / Avvio locale

Use a current Node.js LTS version compatible with the locked dependencies (Node.js 22.12+ or 24 LTS) and npm.

```bash
git clone https://github.com/fsgui89/portfolio-guilherme-ferreira.git
cd portfolio-guilherme-ferreira
npm ci
npm run dev
```

Open the local URL printed by Vite, normally `http://localhost:5173/portfolio-guilherme-ferreira/`.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Development server with live updates |
| `npm run build` | TypeScript checks and production build in `dist/` |
| `npm run lint` | ESLint checks |
| `npm run preview` | Serve the production build locally |

## Structure

- `src/App.tsx`: typed project data, PT/EN/IT translations, sections, navigation and certificate viewer.
- `src/index.css`: responsive presentation, animations and component styles.
- `src/main.tsx`: React entry point and stylesheet import.
- `public/images/`: original profile photo, project previews and certificate images.
- `public/icons.svg` and `public/favicon.svg`: visual assets.
- `index.html`: default document and social metadata.
- `vite.config.ts`: React plugin and `/portfolio-guilherme-ferreira/` base path.
- `.github/workflows/deploy.yml`: existing GitHub Pages publication workflow.

## Publication

A push to `main` runs the existing GitHub Actions workflow: `npm ci`, TypeScript/Vite build, artifact upload and GitHub Pages deployment. Preserve the Vite base path when publishing at the repository URL.

**Guilherme Ferreira — Frontend Developer, specializing in React.**

[Portfolio](https://fsgui89.github.io/portfolio-guilherme-ferreira/) · [LinkedIn](https://www.linkedin.com/in/guilhermefsdev/) · [GitHub](https://github.com/fsgui89)
