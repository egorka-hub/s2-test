import React from "react";
import styles from "./Solution.module.scss";

const Solution = () => {
  return (
    <div className={styles.solutionBlock}>
      <h2 className={styles.chooseTitle}>
        Выберите подходящее описание вашего бизнеса
      </h2>
      <div className={styles.solutionItems}>
        <div className={styles.solutionItem}>
          <h3 className={styles.solutionTextOne}>Для тех, кто только</h3>
          <h3 className={styles.solutionTextTwo}>начинает работать</h3>
          <div className={styles.solutionBtn}>
            <button className={styles.detailed}>Подробнее</button>
          </div>
        </div>

        <div className={styles.solutionItem}>
          <h3 className={styles.solutionTextOne}>Для тех, кто уже</h3>
          <h3 className={styles.solutionTextTwo}>знает, чего хочет</h3>
          <div className={styles.solutionBtn}>
            <button className={styles.detailed}>Подробнее</button>
          </div>
        </div>

        <div className={styles.solutionItem}>
          <h3 className={styles.solutionTextOne}>Для особых задач</h3>
          <h3 className={styles.solutionTextTwo}>крупного бизнеса</h3>
          <div className={styles.solutionBtn}>
            <button className={styles.detailed}>Подробнее</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
