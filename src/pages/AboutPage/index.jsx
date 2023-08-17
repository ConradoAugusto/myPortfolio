import styles from "./style.module.scss";
import { FaHtml5, FaCss3Alt, FaSass, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

export const AboutPage = () => {
  return (
    <div className={styles.container}>
      <h1 className="secundaryColor">Sobre mim</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolores,
        rerum molestias optio temporibus dignissimos dolorem! Vel enim culpa
        ducimus exercitationem consequuntur molestiae beatae autem similique
        error praesentium, rerum repudiandae!
      </p>
      <h4 className="secundaryColor">
        Aqui estão algumas tecnologias com as quais tenho trabalhado
        recentemente:
      </h4>
      <ul>
        <li className={styles.html}>
          <FaHtml5 />
        </li>
        <li className={styles.css}>
          <FaCss3Alt />
        </li>
        <li className={styles.scss}>
          <FaSass />
        </li>
        <li className={styles.react}>
          <FaReact />
        </li>
        <li className={styles.javascript}>
          <IoLogoJavascript />
        </li>
      </ul>
    </div>
  );
};
