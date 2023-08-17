import { useEffect, useState } from "react";
import { vercel } from "../../services";
import styles from "./style.module.scss";


export const WorksPage = () => {
  const TOKEN = "TikUXDVrKmUB124oUdeCQZ3V";
  const [vercelProject, setVercelProject] = useState([]);

  useEffect(() => {
    const getVercel = async () => {
      try {
        const { data } = await vercel.get("/projects", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        });
        console.log(data);
        setVercelProject(data.projects);
      } catch (error) {
        console.log(error);
      }
    };
    getVercel();
  }, []);
  return (
    <div className={styles.container}>
      <h1>Alguns Projetos Que Construi</h1>
      <ul className={styles.containerList} key={vercelProject.accountId}>
        {vercelProject.map((element) => {
          return (
            <li className={styles.listProject} key={element.id}>
              <h1>{element.name}</h1>
              <a
                href={`https://${element.targets.production.alias[0]}`}
                target="blank"
              >
                Link
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
