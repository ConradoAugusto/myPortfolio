import { Link } from "react-router-dom";
import styles from "./style.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <img src="./src/assets/logo.png" alt="" />
      </div>
      <nav>

        <Link to={"/"}><span className="secundaryColor">//</span> Home</Link>

        <Link to={"/about"}><span className="secundaryColor">//</span> Sobre</Link>

        <Link to={"/works"}><span className="secundaryColor">//</span> Projetos</Link>
        <li>
        <a href="mailto:conras.augusto@gmail.com?subject=Vamos trabalhar juntos?"><span className="secundaryColor">//</span> Contato</a>
        </li>

      </nav>

    </header>
  );
};