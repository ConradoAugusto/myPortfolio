import styles from "./style.module.scss";

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <p className="secundaryColor"> Oi, meu nome é</p>
        <h1 className="title1">Conrado Augusto</h1>
        <h2 className="title1 greyColor">Desenvolvedor Front_End</h2>
      </div>
    </div>
  );
};
