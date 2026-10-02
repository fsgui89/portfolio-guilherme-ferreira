# Portfolio 2.0

[English](#english) | [Português](#portugues)

[Live Demo](https://fsgui89.github.io/portfolio-guilherme-ferreira/) · [Repository](https://github.com/fsgui89/portfolio-guilherme-ferreira)

<a id="english"></a>

## English

A multilingual developer portfolio presenting Guilherme Ferreira's work, technical skills and professional experience.

### Overview

Built to help visitors explore projects, inspect source code and find relevant professional information in English, Portuguese or Italian. The application presents Guilherme Ferreira as a React Developer, with product thinking and UX supporting the way the work is organized.

### Tech Stack

React • TypeScript • Vite • CSS

### Features

- English, Portuguese and Italian interfaces, with the selected language saved in localStorage.
- Eight project cards with previews, technology lists, live demos and repository links.
- Experience and skills sections, including evidence attached to individual skills.
- Six certificates shown initially, an option to view all, and a certificate viewer with previous/next controls.
- Responsive navigation, mobile menu, contact links and a back-to-top link.

### Technical Highlights

- Typed project data and translation objects drive the interface from src/App.tsx.
- React state controls language selection, mobile navigation and certificate visibility.
- The certificate viewer supports Escape and arrow keys, focuses its close button and restores the trigger's focus when closed.
- CSS media queries adapt the layout; Vite's base path and import.meta.env.BASE_URL support GitHub Pages asset URLs.

### Getting Started

Prerequisites: Git, Node.js 22.12 or later compatible with the dependencies, and npm.

```bash
git clone https://github.com/fsgui89/portfolio-guilherme-ferreira.git
cd portfolio-guilherme-ferreira
npm ci
npm run dev
```

Open [http://localhost:5173/portfolio-guilherme-ferreira/](http://localhost:5173/portfolio-guilherme-ferreira/) (or the port reported by Vite).

Available commands:

```bash
npm run build
npm run lint
npm run preview
```

The build produces `dist/`; `preview` serves that build locally. The existing workflow publishes `dist/` to GitHub Pages.

### Project Structure

- `src/App.tsx`: sections, translations, project data and certificate viewer.
- `src/index.css` and `src/App.css`: presentation styles.
- `public/images/`: profile, project previews and certificates.
- `vite.config.ts`: build configuration and repository base path.

### Implementation Scope

The portfolio itself is a frontend application. Node.js, Python, databases and AI mentioned in the professional content describe the author's wider work and skills; they are not backend services or AI features implemented in this repository.

### Preview

Existing project preview maintained in the portfolio repository.

![Portfolio 2.0 preview](https://raw.githubusercontent.com/fsgui89/portfolio-guilherme-ferreira/main/public/images/projects/portfolio-2.0.webp)

### Author

**Guilherme Ferreira**  
React Developer

[GitHub](https://github.com/fsgui89) · [LinkedIn](https://linkedin.com/in/guilhermefsdev) · [Portfolio](https://fsgui89.github.io/portfolio-guilherme-ferreira/)

---

<a id="portugues"></a>

## Português

Portfólio multilíngue que apresenta os projetos, as habilidades técnicas e a experiência profissional de Guilherme Ferreira.

### Visão geral

Desenvolvido para facilitar a exploração dos projetos, o acesso ao código e a consulta de informações profissionais em inglês, português ou italiano. A aplicação apresenta Guilherme Ferreira como React Developer, com visão de produto e UX orientando a organização do conteúdo.

### Tecnologias

React • TypeScript • Vite • CSS

### Funcionalidades

- Interface em inglês, português e italiano, com preferência de idioma salva no localStorage.
- Oito cards de projetos com prévias, tecnologias, demonstrações e links dos repositórios.
- Seções de experiência e habilidades, com evidências associadas às competências.
- Seis certificados na seleção inicial, opção de ver todos e visualizador com navegação anterior/próximo.
- Navegação responsiva, menu para telas menores, links de contato e retorno ao topo.

### Destaques técnicos

- Dados tipados dos projetos e objetos de tradução alimentam a interface em src/App.tsx.
- Estados do React controlam idioma, menu e exibição dos certificados.
- O visualizador aceita Escape e setas, direciona o foco para o botão de fechar e devolve o foco ao elemento de origem ao fechar.
- Media queries adaptam o layout; o base path do Vite e import.meta.env.BASE_URL ajustam os caminhos de assets para o GitHub Pages.

### Como executar

Pré-requisitos: Git, Node.js 22.12 ou superior compatível com as dependências, e npm.

```bash
git clone https://github.com/fsgui89/portfolio-guilherme-ferreira.git
cd portfolio-guilherme-ferreira
npm ci
npm run dev
```

Abra [http://localhost:5173/portfolio-guilherme-ferreira/](http://localhost:5173/portfolio-guilherme-ferreira/) (ou a porta indicada pelo Vite).

Comandos disponíveis:

```bash
npm run build
npm run lint
npm run preview
```

O build gera `dist/`; `preview` serve o build localmente. O workflow existente publica `dist/` no GitHub Pages.

### Estrutura do projeto

- `src/App.tsx`: seções, traduções, dados de projetos e visualizador de certificados.
- `src/index.css` e `src/App.css`: estilos da interface.
- `public/images/`: perfil, prévias dos projetos e certificados.
- `vite.config.ts`: configuração de build e caminho base do repositório.

### Escopo da implementação

O portfólio é uma aplicação frontend. Node.js, Python, bancos de dados e IA citados no conteúdo profissional representam outras atuações e habilidades do autor; não são serviços de backend ou recursos de IA implementados neste repositório.

### Prévia

A imagem existente na seção Preview acima é mantida no repositório do portfólio. A versão interativa está no link Live Demo no início deste README.

### Autor

**Guilherme Ferreira**  
React Developer

[GitHub](https://github.com/fsgui89) · [LinkedIn](https://linkedin.com/in/guilhermefsdev) · [Portfolio](https://fsgui89.github.io/portfolio-guilherme-ferreira/)

