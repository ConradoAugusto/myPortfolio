// import LogoOpen from "../../assets/logo.png";
import { useEffect } from "react";
import { Header } from "../../componets/Header";
import styles from "./style.module.scss";
import { FaHtml5, FaCss3Alt, FaSass, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { vercel } from "../../services";
import nuKenzie from "../../assets/nu.jpg";
import burguer from "../../assets/burguer.jpg";
import hub from "../../assets/hub.jpg";
import feed from "../../assets/feed.jpg";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { i18n } from "../../translate/i18n";

export const HomePage = () => {
  useEffect(() => {
    const getVercel = async () => {
      try {
        const { data } = await vercel.get("/projects", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        });
        setVercelProject(data.projects);
      } catch (error) {}
    };
    getVercel();
  }, []);

  return (
    <>
      {/* <div className="opening">
        <img src={LogoOpen} alt="" />
      </div> */}
      <Header />
      <div className={styles.containerMaster}>
        <div className={styles.social}>
          <ul>
            <li>
              <a href="https://github.com/ConradoAugusto" target="_blank">
                <FaGithub />
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/conradoaugusto/"
                target="_blank"
              >
                <FaInstagram />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/conradoaugusto/"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
            </li>

            <li className={styles.lineSocial}></li>
          </ul>
        </div>
        <main className={styles.main}>
          <div className={styles.allContainers}>
            <section className={styles.containerInitial} id="home">
              <div className={styles.contents}>
                <p className="secundaryColor">{i18n.t("titles.hi")}</p>
                <h1 className="title1">Conrado Augusto</h1>
                <h2 className="title1 greyColor">{i18n.t("titles.dev")}</h2>
              </div>
            </section>

            <section className={styles.containerAbout} id="about">
              <h1 className={styles.aboutMe}>{i18n.t("messages.aboutMe")}</h1>
              <p className={styles.paragramAboutMe}>
                {i18n.t("messages.paragraphAbout")}
              </p>
              <h4 className="secundaryColor">{i18n.t("messages.techsUsed")}</h4>
              <ul className={styles.technology}>
                <li className={styles.html}>
                  <h3 className={styles.titleTechs}>HTML</h3>
                  <FaHtml5 />
                </li>
                <li className={styles.css}>
                  <h3 className={styles.titleCss}>Css</h3>
                  <FaCss3Alt />
                </li>
                <li className={styles.scss}>
                  <h3 className={styles.titleTechs}>SASS</h3>
                  <FaSass />
                </li>
                <li className={styles.react}>
                  <h3 className={styles.titleTechs}>React</h3>
                  <FaReact />
                </li>
                <li className={styles.javascript}>
                  <h3 className={styles.titlejs}>Javascript</h3>
                  <IoLogoJavascript />
                </li>
              </ul>
            </section>

            <section className={styles.containerProjects} id="projects">
              <h1>{i18n.t("messages.projects")}</h1>
              <ul className={styles.containerList}>
                <li className={styles.listProject}>
                  <a
                    href="https://kenzie-feed-team4-v1-1.vercel.app/"
                    target="blank"
                  >
                    <div className={styles.containerBanner}>
                      <h1 className={styles.titleProject}>Kenzie Feed</h1>
                      <img className={styles.banner} src={feed} alt="" />
                    </div>
                  </a>
                </li>

                <li className={styles.listProject}>
                  <a
                    href="https://react-entrega-kenzie-hub-conradoaugusto-neon.vercel.app/"
                    target="blank"
                  >
                    <div className={styles.containerBanner}>
                      <h1 className={styles.titleProject}>Kenzie Hub</h1>
                      <img className={styles.banner} src={hub} alt="" />
                    </div>
                  </a>
                </li>

                <li className={styles.listProject}>
                  <a
                    href="https://react-entrega-s1-template-nu-kenzie-conradoaugusto.vercel.app/"
                    target="blank"
                  >
                    <div className={styles.containerBanner}>
                      <h1 className={styles.titleProject}>
                        {i18n.t("messages.finance")}
                      </h1>
                      <img className={styles.banner} src={nuKenzie} alt="" />
                    </div>
                  </a>
                </li>

                <li className={styles.listProject}>
                  <a href="https://conradoaugusto.vercel.app/" target="blank">
                    <div className={styles.containerBanner}>
                      <h1 className={styles.titleProject}>
                        {i18n.t("messages.burguer")}
                      </h1>
                      <img className={styles.banner} src={burguer} alt="" />
                    </div>
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </main>
        <div className={styles.containerFooter}>
          <h3 onCopy={() => CopyToClipboard("conras.augusto@gmail.com")}>
            <a href="mailto:conras.augusto@gmail.com?subject=Vamos trabalhar juntos?">
              conras.augusto@gmail.com
            </a>
          </h3>
          <li className={styles.lineEmail}></li>
        </div>
      </div>
    </>
  );
};
