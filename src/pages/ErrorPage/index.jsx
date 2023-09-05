import styles from "./style.module.scss";
import errorPage from "../../assets/errorPage.png";
import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate()
  return (
    <main className={styles.container}>
    <div className={styles.containerBanner}>
      <img className={styles.banner} src={errorPage} alt="" />
      <button onClick={() => navigate("/")}>Voltar para Home</button>
    </div>
    </main>
  );
};
