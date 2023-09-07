import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import logo from "../../assets/logo.png";
import pt from "../../assets/pt.jpg";
import en from "../../assets/en.jpg";
import { useState } from "react";

import { i18n } from "../../translate/i18n";

export const Header = () => {
  const I18N_STORAGE_KEY = "i18nextLng";

  const [language] = useState(localStorage.getItem(I18N_STORAGE_KEY));
  const handleSelectChange = (country) => {
    localStorage.setItem(I18N_STORAGE_KEY, country);
    window.location = window.location;
  };

  return (
    <header className={styles.header}>
      <div>
        <img className={styles.logo} src={logo} alt="" />
      </div>
      <nav>
        <Link to={"/"}>
          <span className="secundaryColor">//</span>
          {i18n.t("menu.home")}
        </Link>

        <Link to={"#"}>
          <span className="secundaryColor">//</span>
          {i18n.t("menu.aboutMe")}
        </Link>

        <Link to={"#"}>
          <span className="secundaryColor">//</span>
          {i18n.t("menu.projects")}
        </Link>
        <li>
          <a href="mailto:conras.augusto@gmail.com?subject=Vamos trabalhar juntos?">
            <span className="secundaryColor">//</span>
            {i18n.t("menu.contact")}
          </a>
        </li>
      </nav>

      <div className={styles.flags}>
        <button type="button" onClick={() => handleSelectChange("pt-BR")}>
          {language === "pt-BR" ? (
            <img className={styles.flag} src={pt} alt="" />
          ) : (
            <img className={styles.disabled} src={pt} alt="" />
          )}
        </button>

        <button type="button" onClick={() => handleSelectChange("en-US")}>
          {language === "en-US" ? (
            <img className={styles.flag} src={en} alt="" />
          ) : (
            <img className={styles.disabled} src={en} alt="" />
          )}
        </button>
      </div>
    </header>
  );
};
