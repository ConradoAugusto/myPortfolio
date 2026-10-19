const messages = {
  en: {
    translations: {
      menu: {
        work: "Work",
        about: "About",
        skills: "Skills",
        contact: "Contact",
        cta: "Let's talk",
      },
      hero: {
        status: "Open to new opportunities",
        eyebrow: "Front-End · UX/UI · Marketing",
        line1: "Interfaces",
        line2: "that",
        words: ["work.", "convert.", "engage.", "sell."],
        lead:
          "I'm Conrado Augusto, a Front-End Developer with a UX eye. I build responsive, API-driven interfaces for SaaS products — and know enough marketing to make the screen sell.",
        ctaPrimary: "See my work",
        ctaSecondary: "Get in touch",
        location: "Piracicaba, Brazil — remote or hybrid",
        scroll: "Scroll",
        badge: "AVAILABLE · DEVELOPER · ",
        cardLine1: "Interfaces that",
        cardLine2: "make sense.",
        code: { role: "role" },
      },
      stats: [
        { value: "2008", label: "working with visuals since" },
        { value: "0→1", label: "HR SaaS built from scratch" },
        { value: "Front + Back", label: "React on the front, Laravel on the back" },
        { value: "2×", label: "CONARH — 2025 & 2026" },
      ],
      about: {
        kicker: "About",
        title:
          "I don't just build the screen. I think about who uses it, how it works and what it needs to deliver.",
        p1:
          "I started in graphic design for events, spent 5 years in hardware and networking, and in 2023 graduated as a Front-End Developer at Kenzie Academy Brasil. That mix gave me an eye for visuals and patience for the technical side.",
        p2:
          "At Outserv, I helped build Portal RH, an HR SaaS made from scratch in Laravel, owning UX and front-end. I also built, front to back, a social media management calendar with auto-posting, approval flows and automatic artwork generation.",
        p3:
          "I also work with the marketing team — landing pages, Google Ads and email automation. That's why I build screens with usability, performance and conversion in mind.",
      },
      services: {
        kicker: "What I do",
        title: "From layout to results.",
        items: [
          {
            title: "Front-End",
            text:
              "Responsive interfaces in React, TypeScript and SASS, integrated with APIs and validated with Zod. Clean code, faithful to the layout.",
          },
          {
            title: "UX/UI",
            text:
              "Screens for websites and systems focused on usability, accessibility and visual consistency. Keeping the user's path simple.",
          },
          {
            title: "Back-End with Laravel",
            text:
              "Full features in Laravel, PHP and MySQL when the project needs it — external API integrations, business rules and dashboards.",
          },
          {
            title: "Marketing & Growth",
            text:
              "Landing pages, Google Ads campaigns, prospecting with PhantomBuster and lead nurturing with ActiveCampaign and HubSpot.",
          },
        ],
      },
      cases: {
        kicker: "Cases",
        title: "Real product, in production.",
        tag: "Corporate case · Outserv",
        items: [
          {
            title: "Portal RH",
            role: "UX & Front-End",
            text:
              "HR SaaS built from scratch in Laravel. I was there from the start, responsible for UX and front-end — and I keep shipping new pages, features and fixes in production.",
            tags: ["SaaS", "Laravel", "UX", "Front-End"],
          },
          {
            title: "Social Calendar",
            role: "Front-End & Back-End",
            text:
              "Social media management calendar integrated with network APIs: auto-posting, approval flow, automatic artwork generation and a manager dashboard.",
            tags: ["APIs", "Automation", "Dashboard", "Laravel"],
          },
          {
            title: "CONARH 2025 & 2026",
            role: "Graphic design",
            text:
              "Graphic and print materials for Outserv's presence at CONARH, a corporate HR trade show.",
            tags: ["Graphic design", "Print", "Events"],
          },
        ],
      },
      projects: {
        kicker: "Projects",
        title: "Projects.",
        subtitle: "Where I practice and test interface and code ideas.",
        open: "Open",
        items: {
          rolesVeganos: { title: "Rolês Veganos", text: "Guide to vegan restaurants, cafés and shops with a map, reviews and city search." },
          website: { title: "Corporate Website", text: "Website for an HR & ERP consultancy, from layout to deploy." },
          analista: { title: "Marketing Dashboard", text: "Marketing dashboard with blog, Instagram and LinkedIn metrics, an editorial calendar and AI-powered insights." },
          photo: { title: "Photograph", text: "Portfolio of my photography work." },
        },
      },
      skills: {
        kicker: "Hard skills",
        title: "What I work with.",
        groups: [
          {
            title: "Front-End",
            items: ["JavaScript", "TypeScript", "React.js", "React Router", "Context API", "Axios", "Zod", "HTML5", "CSS3", "SASS", "API Integration"],
          },
          {
            title: "Back-End & Data",
            items: ["Laravel", "PHP", "MySQL", "Git"],
          },
          {
            title: "UX/UI",
            items: ["Responsive design", "Web accessibility", "Layouts for sites & systems", "Visual identity", "Figma (dev level)"],
          },
          {
            title: "Marketing",
            items: ["Landing pages", "Google Ads", "ActiveCampaign", "HubSpot", "PhantomBuster", "Email marketing", "Lead nurturing"],
          },
          {
            title: "Imaging & Tools",
            items: ["Photoshop", "Lightroom", "Premiere Pro", "Canva", "Photography"],
          },
        ],
      },
      experience: {
        kicker: "Journey",
        title: "From graphic design to digital product.",
        items: [
          { period: "2023 — now", role: "Front-End Developer & UX", company: "Outserv" },
          { period: "2018 — now", role: "Freelance photographer", company: "Clients & SESC Piracicaba" },
          { period: "2018 — now", role: "Actor", company: "Floreia Teatro" },
          { period: "2013 — 2018", role: "Hardware Technician", company: "Elite Plus Informática" },
          { period: "2008 — 2012", role: "Graphic Designer", company: "Prime Eventos" },
        ],
        edu: "Education: Front-End Developer — Kenzie Academy Brasil (2023)",
      },
      beyond: {
        kicker: "Off screen",
        title: "The stage taught me to think about the audience. The camera, about framing.",
        text:
          "I'm an actor at Floreia Teatro and a photographer, with work for SESC Piracicaba. Both help my interface work: understanding who's on the other side and caring about every visual detail.",
      },
      contact: {
        kicker: "Contact",
        title1: "Looking for a",
        title2: "Front-End or Full Stack dev?",
        text: "Open to Front-End, Full Stack and UX/UI roles. I reply fast.",
        mail: "Shall we work together?",
        copy: "Copy email",
        copied: "Email copied!",
      },
      footer: {
        made: "Built by Conrado Augusto",
        top: "Back to top",
      },
      error: {
        title: "Page not found.",
        back: "Back home",
      },
    },
  },
};

export { messages };
