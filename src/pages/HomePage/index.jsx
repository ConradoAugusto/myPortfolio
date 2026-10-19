import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiArrowUpRight, FiArrowDown, FiCopy } from "react-icons/fi";
import { Header } from "../../componets/Header";
import { Cursor } from "../../componets/Cursor";
import styles from "./style.module.scss";
import photo from "../../assets/photo.jpg";
import website from "../../assets/website.png";
import rolesVeganos from "../../assets/rolesveganos.png";
import analista from "../../assets/analista.png";

const EMAIL = "conras.augusto@gmail.com";

const SOCIALS = [
  { href: "https://www.linkedin.com/in/conradoaugusto/", label: "LinkedIn", icon: <FaLinkedinIn /> },
  { href: "https://github.com/ConradoAugusto", label: "GitHub", icon: <FaGithub /> },
  { href: "https://www.instagram.com/conradoaugusto/", label: "Instagram", icon: <FaInstagram /> },
];

const PROJECTS = [
  { key: "rolesVeganos", img: rolesVeganos, url: "https://rolesveganos.vercel.app/", tags: ["React", "Vite", "React Router", "Supabase", "Leaflet", "OpenStreetMap"] },
  { key: "website", img: website, url: "https://web-site-theta-three.vercel.app/", tags: ["React", "Vite", "React Router", "Bootstrap", "CSS Modules", "React Slick", "CountUp.js", "Lucide Icons", "jQuery", "Odometer.js"] },
  { key: "analista", img: analista, url: "https://analista-marketing.vercel.app/", tags: ["React", "Vite", "Bootstrap", "Recharts", "Gemini API"] },
  { key: "photo", img: photo, url: "https://fotografia-alpha.vercel.app/", tags: ["React", "Vite", "React Router", "CSS Modules"] },
];

const MARQUEE = [
  "Front-End",
  "UX/UI",
  "React",
  "TypeScript",
  "Laravel",
  "Landing Pages",
  "Google Ads",
  "Acessibilidade",
];

const tilt = (e) => {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const px = (e.clientX - r.left) / r.width - 0.5;
  const py = (e.clientY - r.top) / r.height - 0.5;
  el.style.setProperty("--rx", `${-py * 8}deg`);
  el.style.setProperty("--ry", `${px * 10}deg`);
  el.style.setProperty("--mx", `${(px + 0.5) * 100}%`);
  el.style.setProperty("--my", `${(py + 0.5) * 100}%`);
};

const untilt = (e) => {
  e.currentTarget.style.setProperty("--rx", "0deg");
  e.currentTarget.style.setProperty("--ry", "0deg");
};

const Kicker = ({ n, children }) => (
  <p className={styles.kicker} data-reveal>
    <span>{n}</span>
    {children}
  </p>
);

export const HomePage = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage;
  const words = t("hero.words", { returnObjects: true });
  const [word, setWord] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setWord((w) => (w + 1) % words.length), 2400);
    return () => clearInterval(id);
  }, [words.length]);

  // Reveal on scroll
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]:not(.is-visible)");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }),
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [lang]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      toast.success(t("contact.copied"));
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(t("contact.mail"))}`;

  return (
    <>
      <Header />

      <main className={styles.page}>
        {/* HERO */}
        <section className={styles.hero} id="home">
          <div className={styles.heroText}>
            <p className={styles.status}>
              <i aria-hidden="true" />
              {t("hero.status")}
            </p>

            <p className={styles.eyebrow}>{t("hero.eyebrow")}</p>

            <h1 className={styles.headline}>
              <span className={styles.mask}>
                <span style={{ "--d": "100ms" }}>{t("hero.line1")}</span>
              </span>
              <span className={styles.mask}>
                <span style={{ "--d": "220ms" }}>{t("hero.line2")}</span>
              </span>
              <span className={`${styles.mask} ${styles.maskWord}`}>
                <span style={{ "--d": "340ms" }}>
                  <em className={styles.rotator} aria-live="polite">
                    <span key={`${word}-${words[word]}`}>{words[word]}</span>
                  </em>
                </span>
              </span>
            </h1>

            <p className={styles.lead}>{t("hero.lead")}</p>

            <div className={styles.heroCtas}>
              <a href="#work" className={styles.btnPrimary} data-magnetic>
                {t("hero.ctaPrimary")}
                <FiArrowDown />
              </a>
              <a href={mailto} className={styles.btnGhost} data-magnetic>
                {t("hero.ctaSecondary")}
                <FiArrowUpRight />
              </a>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <span className={styles.orbit} aria-hidden="true" />
            <span className={styles.orbitDashed} aria-hidden="true" />

            <div className={styles.blob} onMouseMove={tilt} onMouseLeave={untilt}>
              <div className={styles.caseGlow} aria-hidden="true" />
              <div className={styles.blobContent}>
                <pre className={styles.code} aria-hidden="true">
                  <code>
                    <span className={styles.kw}>const</span> dev = {"{"}
                    {"\n  "}{t("hero.code.role")}: <span className={styles.str}>'Dev'</span>,
                    {"\n  "}stack: <span className={styles.str}>'React+TS'</span>,
                    {"\n  "}extra: <span className={styles.str}>'UX/UI'</span>
                    {"\n};"}
                  </code>
                </pre>
                <p className={styles.blobTitle}>
                  {t("hero.cardLine1")}
                  <br />
                  {t("hero.cardLine2")}
                </p>
              </div>
            </div>

            <svg className={styles.badge} viewBox="0 0 200 200" aria-hidden="true">
              <defs>
                <path id="circle" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
              </defs>
              <text>
                <textPath href="#circle" textLength="462" lengthAdjust="spacing">
                  {t("hero.badge")}
                </textPath>
              </text>
            </svg>
            <span className={styles.badgeCore} aria-hidden="true">✦</span>

            <span className={`${styles.chip} ${styles.chip1}`}>React</span>
            <span className={`${styles.chip} ${styles.chip2}`}>TypeScript</span>
            <span className={`${styles.chip} ${styles.chip3}`}>{"</> Front-End"}</span>
          </div>

          <div className={styles.heroFoot}>
            <span>{t("hero.location")}</span>
            <a href="#about" className={styles.scrollHint}>
              {t("hero.scroll")}
              <i aria-hidden="true" />
            </a>
          </div>
        </section>

        {/* MARQUEE */}
        <div className={styles.marquee} aria-hidden="true">
          <div className={styles.track}>
            {[...MARQUEE, ...MARQUEE].map((item, i) => (
              <span key={i}>
                {item}
                <b>✦</b>
              </span>
            ))}
          </div>
        </div>

        {/* STATS */}
        <section className={styles.stats}>
          {t("stats", { returnObjects: true }).map((s, i) => (
            <div key={s.label} className={styles.stat} data-reveal style={{ "--d": `${i * 90}ms` }}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </section>

        {/* ABOUT */}
        <section className={`${styles.section} ${styles.about}`} id="about">
          <Kicker n="01">{t("about.kicker")}</Kicker>
          <h2 className={styles.statement} data-reveal>
            {t("about.title")}
          </h2>
          <div className={styles.aboutCols}>
            <p data-reveal>{t("about.p1")}</p>
            <p data-reveal style={{ "--d": "120ms" }}>{t("about.p2")}</p>
            <p data-reveal style={{ "--d": "240ms" }} className={styles.highlight}>
              {t("about.p3")}
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section className={styles.section}>
          <Kicker n="02">{t("services.kicker")}</Kicker>
          <h2 className={styles.sectionTitle} data-reveal>
            {t("services.title")}
          </h2>
          <ol className={styles.services}>
            {t("services.items", { returnObjects: true }).map((s, i) => (
              <li key={s.title} data-reveal style={{ "--d": `${i * 80}ms` }}>
                <span className={styles.serviceNum}>0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <FiArrowUpRight className={styles.serviceArrow} aria-hidden="true" />
              </li>
            ))}
          </ol>
        </section>

        {/* CASES */}
        <section className={styles.section} id="work">
          <Kicker n="03">{t("cases.kicker")}</Kicker>
          <h2 className={styles.sectionTitle} data-reveal>
            {t("cases.title")}
          </h2>
          <div className={styles.cases}>
            {t("cases.items", { returnObjects: true }).map((c, i) => (
              <div
                key={c.title}
                className={i === 0 ? styles.caseCellFeatured : undefined}
                data-reveal="scale"
                style={{ "--d": `${i * 100}ms` }}
              >
              <article
                className={`${styles.case} ${i === 0 ? styles.caseFeatured : ""}`}
                onMouseMove={tilt}
                onMouseLeave={untilt}
              >
                <div className={styles.caseGlow} aria-hidden="true" />
                <p className={styles.caseTag}>{t("cases.tag")}</p>
                <h3>{c.title}</h3>
                <p className={styles.caseRole}>{c.role}</p>
                <p className={styles.caseText}>{c.text}</p>
                <ul className={styles.tags}>
                  {c.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <span className={styles.caseIndex} aria-hidden="true">
                  0{i + 1}
                </span>
              </article>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className={styles.section}>
          <Kicker n="04">{t("projects.kicker")}</Kicker>
          <div className={styles.titleRow}>
            <h2 className={styles.sectionTitle} data-reveal>
              {t("projects.title")}
            </h2>
            <p className={styles.subtitle} data-reveal>
              {t("projects.subtitle")}
            </p>
          </div>
          <ul className={styles.projects}>
            {PROJECTS.map((p, i) => (
              <li key={p.key} data-reveal style={{ "--d": `${(i % 2) * 90}ms` }}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.project}
                  data-cursor={t("projects.open")}
                  onMouseMove={tilt}
                  onMouseLeave={untilt}
                >
                  <div className={styles.projectMedia}>
                    <img src={p.img} alt="" loading="lazy" />
                  </div>
                  <div className={styles.projectInfo}>
                    <div>
                      <h3>{t(`projects.items.${p.key}.title`)}</h3>
                      <p>{t(`projects.items.${p.key}.text`)}</p>
                    </div>
                    <FiArrowUpRight className={styles.projectArrow} aria-hidden="true" />
                  </div>
                  <ul className={styles.tags}>
                    {p.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* SKILLS */}
        <section className={styles.section} id="skills">
          <Kicker n="05">{t("skills.kicker")}</Kicker>
          <h2 className={styles.sectionTitle} data-reveal>
            {t("skills.title")}
          </h2>
          <div className={styles.skills}>
            {t("skills.groups", { returnObjects: true }).map((g, i) => (
              <div key={g.title} className={styles.skillGroup} data-reveal style={{ "--d": `${i * 70}ms` }}>
                <h3>
                  <span>0{i + 1}</span>
                  {g.title}
                </h3>
                <ul>
                  {g.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE + BEYOND */}
        <section className={`${styles.section} ${styles.split}`}>
          <div>
            <Kicker n="06">{t("experience.kicker")}</Kicker>
            <h2 className={styles.sectionTitle} data-reveal>
              {t("experience.title")}
            </h2>
            <ol className={styles.timeline}>
              {t("experience.items", { returnObjects: true }).map((e, i) => (
                <li key={e.role} data-reveal style={{ "--d": `${i * 70}ms` }}>
                  <span className={styles.period}>{e.period}</span>
                  <strong>{e.role}</strong>
                  <span className={styles.company}>{e.company}</span>
                </li>
              ))}
            </ol>
            <p className={styles.edu} data-reveal>
              {t("experience.edu")}
            </p>
          </div>

          <aside className={styles.beyond} data-reveal="scale">
            <p className={styles.kickerLight}>{t("beyond.kicker")}</p>
            <h3>{t("beyond.title")}</h3>
            <p>{t("beyond.text")}</p>
            <span className={styles.beyondMark} aria-hidden="true">
              ✦
            </span>
          </aside>
        </section>

        {/* CONTACT */}
        <section className={styles.contact} id="contact">
          <p className={styles.kickerLight} data-reveal>
            <span>07</span>
            {t("contact.kicker")}
          </p>
          <h2 data-reveal>
            {t("contact.title1")}
            <br />
            <em>{t("contact.title2")}</em>
          </h2>
          <p className={styles.contactText} data-reveal>
            {t("contact.text")}
          </p>

          <div className={styles.contactRow} data-reveal>
            <a href={mailto} className={styles.email} data-cursor="✉">
              {EMAIL}
              <FiArrowUpRight />
            </a>
            <button type="button" className={styles.copy} onClick={copyEmail} data-magnetic>
              <FiCopy />
              {t("contact.copy")}
            </button>
          </div>

          <ul className={styles.socials} data-reveal>
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" data-magnetic>
                  {s.icon}
                  {s.label}
                </a>
              </li>
            ))}
          </ul>

          <footer className={styles.footer}>
            <span>
              © {new Date().getFullYear()} — {t("footer.made")}
            </span>
            <a href="#home">{t("footer.top")} ↑</a>
          </footer>

          <span className={styles.giant} aria-hidden="true">
            Conrado
          </span>
        </section>
      </main>

      <Cursor />
    </>
  );
};
