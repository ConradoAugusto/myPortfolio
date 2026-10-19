const messages = {
  pt: {
    translations: {
      menu: {
        work: "Trabalhos",
        about: "Sobre",
        skills: "Skills",
        contact: "Contato",
        cta: "Vamos conversar",
      },
      hero: {
        status: "Aberto a novas oportunidades",
        eyebrow: "Front-End · UX/UI · Marketing",
        line1: "Interfaces",
        line2: "que",
        words: ["funcionam.", "convertem.", "fazem sentido."],
        lead:
          "Sou Conrado Augusto, Desenvolvedor Front-End com olhar de UX. Construo interfaces responsivas e integradas a APIs para produtos SaaS — e entendo de marketing o suficiente para fazer a tela vender.",
        ctaPrimary: "Ver trabalhos",
        ctaSecondary: "Falar comigo",
        location: "Piracicaba, SP — remoto ou híbrido",
        scroll: "Role",
        badge: "DISPONÍVEL · DESENVOLVEDOR · ",
        cardLine1: "Interfaces que",
        cardLine2: "fazem sentido.",
        code: { role: "cargo" },
      },
      stats: [
        { value: "2008", label: "trabalhando com imagem desde" },
        { value: "0→1", label: "SaaS de RH construído do zero" },
        { value: "Front + Back", label: "React no front, Laravel no back" },
        { value: "2×", label: "CONARH — 2025 e 2026" },
      ],
      about: {
        kicker: "Sobre",
        title:
          "Não faço só a tela. Penso em quem usa, em como funciona e no que ela precisa entregar.",
        p1:
          "Comecei no design gráfico para eventos, passei 5 anos com hardware e redes, e em 2023 me formei Desenvolvedor Front-End pela Kenzie Academy Brasil. Essa mistura me deu olho para o visual e paciência para o técnico.",
        p2:
          "Na Outserv, participei do desenvolvimento do Portal RH, um SaaS em Laravel feito do zero, cuidando de UX e front-end. Também desenvolvi, do front ao back, um calendário de gestão de redes sociais com auto-postagem, fluxo de aprovação e geração automática de artes.",
        p3:
          "No dia a dia também atuo com o time de marketing — landing pages, Google Ads e automação de e-mail. Por isso entrego telas pensando em usabilidade, performance e conversão.",
      },
      services: {
        kicker: "O que eu faço",
        title: "Do layout ao resultado.",
        items: [
          {
            title: "Front-End",
            text:
              "Interfaces responsivas em React, TypeScript e SASS, integradas a APIs e validadas com Zod. Código organizado e fiel ao layout.",
          },
          {
            title: "UX/UI",
            text:
              "Telas para sites e sistemas pensadas em usabilidade, acessibilidade e consistência visual. Foco em deixar o caminho do usuário simples.",
          },
          {
            title: "Back-End com Laravel",
            text:
              "Funcionalidades completas em Laravel, PHP e MySQL quando o projeto pede — integrações com APIs externas, regras e dashboards.",
          },
          {
            title: "Marketing & Growth",
            text:
              "Landing pages, campanhas no Google Ads, prospecção com PhantomBuster e nutrição de leads com ActiveCampaign e HubSpot.",
          },
        ],
      },
      cases: {
        kicker: "Cases",
        title: "Produto real, em produção.",
        tag: "Case corporativo · Outserv",
        items: [
          {
            title: "Portal RH",
            role: "UX & Front-End",
            text:
              "SaaS de RH desenvolvido do zero em Laravel. Participei desde o início, responsável por UX e front-end — e sigo implementando novas páginas, funcionalidades e correções em produção.",
            tags: ["SaaS", "Laravel", "UX", "Front-End"],
          },
          {
            title: "Social Calendar",
            role: "Front-End & Back-End",
            text:
              "Calendário de gestão de redes sociais integrado às APIs das redes: auto-postagem, fluxo de aprovação, geração automática de artes e dashboard para gestores.",
            tags: ["APIs", "Automação", "Dashboard", "Laravel"],
          },
          {
            title: "CONARH 2025 & 2026",
            role: "Design gráfico",
            text:
              "Artes gráficas e materiais impressos para a participação da Outserv no CONARH, feira corporativa de RH.",
            tags: ["Design gráfico", "Impressos", "Eventos"],
          },
        ],
      },
      projects: {
        kicker: "Projetos",
        title: "Projetos.",
        subtitle: "Onde pratico e testo ideias de interface e código.",
        open: "Abrir",
        items: {
          rolesVeganos: { title: "Rolês Veganos", text: "Guia de restaurantes, cafés e lojas veganas com mapa, avaliações e busca por cidade." },
          website: { title: "Site Institucional", text: "Site de uma consultoria de RH e ERP, do layout ao deploy." },
          analista: { title: "Painel de Marketing", text: "Dashboard de marketing com métricas de blog, Instagram e LinkedIn, calendário editorial e análises com IA." },
          photo: { title: "Photograph", text: "Portfólio do meu trabalho como fotógrafo." },
        },
      },
      skills: {
        kicker: "Hard skills",
        title: "Com o que eu trabalho.",
        groups: [
          {
            title: "Front-End",
            items: ["JavaScript", "TypeScript", "React.js", "React Router", "Context API", "Axios", "Zod", "HTML5", "CSS3", "SASS", "Integração com APIs"],
          },
          {
            title: "Back-End & Dados",
            items: ["Laravel", "PHP", "MySQL", "Git"],
          },
          {
            title: "UX/UI",
            items: ["Design responsivo", "Acessibilidade web", "Layouts para sites e sistemas", "Identidade visual", "Figma (nível dev)"],
          },
          {
            title: "Marketing",
            items: ["Landing pages", "Google Ads", "ActiveCampaign", "HubSpot", "PhantomBuster", "E-mail marketing", "Nutrição de leads"],
          },
          {
            title: "Imagem & Ferramentas",
            items: ["Photoshop", "Lightroom", "Premiere Pro", "Canva", "Fotografia"],
          },
        ],
      },
      experience: {
        kicker: "Trajetória",
        title: "Do design gráfico ao produto digital.",
        items: [
          { period: "2023 — hoje", role: "Desenvolvedor Front-End & UX", company: "Outserv" },
          { period: "2018 — hoje", role: "Fotógrafo autônomo", company: "Clientes & SESC Piracicaba" },
          { period: "2018 — hoje", role: "Ator", company: "Floreia Teatro" },
          { period: "2013 — 2018", role: "Técnico em Hardware", company: "Elite Plus Informática" },
          { period: "2008 — 2012", role: "Designer Gráfico", company: "Prime Eventos" },
        ],
        edu: "Formação: Desenvolvedor Front-End — Kenzie Academy Brasil (2023)",
      },
      beyond: {
        kicker: "Fora da tela",
        title: "O palco me ensinou a pensar no público. A câmera, no enquadramento.",
        text:
          "Sou ator na Floreia Teatro e fotógrafo, com trabalhos para o SESC Piracicaba. Os dois me ajudam no trabalho com interface: entender quem está do outro lado e cuidar de cada detalhe visual.",
      },
      contact: {
        kicker: "Contato",
        title1: "Procurando alguém para",
        title2: "Front-End ou Full Stack?",
        text: "Estou aberto a vagas de Front-End, Full Stack e UX/UI. Respondo rápido.",
        mail: "Vamos trabalhar juntos?",
        copy: "Copiar e-mail",
        copied: "E-mail copiado!",
      },
      footer: {
        made: "Desenvolvido por Conrado Augusto",
        top: "Voltar ao topo",
      },
      error: {
        title: "Página não encontrada.",
        back: "Voltar ao início",
      },
    },
  },
};

export { messages };
