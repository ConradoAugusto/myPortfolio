import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import styles from "./style.module.scss";
import  { CopyToClipboard }  from 'react-copy-to-clipboard' ;
import { toast } from 'react-toastify';

export const Footer = () => {
  return (
    <footer>
      <div className={styles.social}>
        <ul>
          <li>
          <a href="https://github.com/ConradoAugusto" target="_blank">
            <FaGithub/>
            </a>
          </li>

          <li><a href="https://www.instagram.com/conradoaugusto/" target="_blank">
            <FaInstagram />
          </a>
          </li>

          <li>
          <a href="https://www.linkedin.com/in/conradoaugusto/" target="_blank">
            <FaLinkedinIn/>
            </a>
          </li>

          <li className={styles.lineSocial}></li>
        </ul>

        <h3 onCopy={() => CopyToClipboard("conras.augusto@gmail.com")} onClick={() => toast("Email Copiado")}>conras.augusto@gmail.com</h3>
      </div>
    </footer>
  );
};
