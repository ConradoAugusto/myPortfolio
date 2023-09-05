import { useEffect } from "react";
import { Footer } from "../../componets/Footer";
import { Header } from "../../componets/Header";
import styles from "./style.module.scss";
import { FaHtml5, FaCss3Alt, FaSass, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { vercel } from "../../services";
import nuKenzie from "../../assets/nu.jpg";
import burguer from "../../assets/burguer.jpg";
import hub from "../../assets/hub.jpg";
import feed from "../../assets/feed.jpg";

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
      <Header />
      <main className={styles.main}>
        <div className={styles.allContainers}>
          <div className={styles.containerInitial}>
            <div className={styles.contents}>
              <p className="secundaryColor"> Oi, meu nome é</p>
              <h1 className="title1">Conrado Augusto</h1>
              <h2 className="title1 greyColor">Desenvolvedor Front_End</h2>
            </div>
          </div>

          <div className={styles.containerAbout}>
            <h1 className={styles.aboutMe}>Sobre mim</h1>
            <p className={styles.paragramAboutMe}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              dolores, rerum molestias optio temporibus dignissimos dolorem! Vel
              enim culpa ducimus exercitationem consequuntur molestiae beatae
              autem similique error praesentium, rerum repudiandae!
            </p>
            <h4 className="secundaryColor">
              Aqui estão algumas tecnologias com as quais tenho trabalhado
              recentemente:
            </h4>
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
          </div>

          <div className={styles.containerProjects}>
            <h1>Alguns Projetos Que Construi</h1>
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
                    <h1 className={styles.titleProject}>Finanças</h1>
                    <img className={styles.banner} src={nuKenzie} alt="" />
                  </div>
                </a>
              </li>

              <li className={styles.listProject}>
                <a href="https://conradoaugusto.vercel.app/" target="blank">
                  <div className={styles.containerBanner}>
                    <h1 className={styles.titleProject}>Hamburgueria</h1>
                    <img className={styles.banner} src={burguer} alt="" />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      <Footer />
      </main>
    </>
  );
};
