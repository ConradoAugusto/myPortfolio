import styles from "./style.module.scss";
import logo from "../../assets/logo.png";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const EMAIL = "conras.augusto@gmail.com";

export const Header = () => {
  const { t, i18n } = useTranslation();
  const progress = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const lang = i18n.resolvedLanguage;

  useEffect(() => {
    document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
  }, [lang]);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      if (progress.current) progress.current.style.transform = `scaleX(${ratio})`;
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <span ref={progress} className={styles.progress} aria-hidden="true" />

      <a href="#home" className={styles.brand} aria-label="Conrado Augusto — início">
        <img className={styles.logo} src={logo} alt="" />
        <span className={styles.brandName}>
          Conrado<em>Augusto</em>
        </span>
      </a>

      <nav className={styles.nav} aria-label="Principal">
        <a href="#work">
          <span>01</span>
          {t("menu.work")}
        </a>
        <a href="#about">
          <span>02</span>
          {t("menu.about")}
        </a>
        <a href="#skills">
          <span>03</span>
          {t("menu.skills")}
        </a>
        <a href="#contact">
          <span>04</span>
          {t("menu.contact")}
        </a>
      </nav>

      <div className={styles.actions}>
        <div className={styles.lang} role="group" aria-label="Idioma / Language">
          <button
            type="button"
            className={lang === "pt" ? styles.active : ""}
            aria-pressed={lang === "pt"}
            onClick={() => i18n.changeLanguage("pt")}
          >
            PT
          </button>
          <button
            type="button"
            className={lang === "en" ? styles.active : ""}
            aria-pressed={lang === "en"}
            onClick={() => i18n.changeLanguage("en")}
          >
            EN
          </button>
        </div>

        <a
          className={styles.cta}
          href={`mailto:${EMAIL}?subject=${encodeURIComponent(t("contact.mail"))}`}
          data-magnetic
        >
          {t("menu.cta")}
        </a>
      </div>
    </header>
  );
};
