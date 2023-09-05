import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import logo from "../../assets/logo.png"

export const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <img src={logo} alt="" />
      </div>
      <nav>

        <Link to={"/"}><span className="secundaryColor">//</span> Home</Link>

        <Link to={"#"}><span className="secundaryColor">//</span> Sobre</Link>

        <Link to={"#"}><span className="secundaryColor">//</span> Projetos</Link>
        <li>
        <a href="mailto:conras.augusto@gmail.com?subject=Vamos trabalhar juntos?"><span className="secundaryColor">//</span> Contato</a>
        </li>

      </nav>

    </header>
  );
};
