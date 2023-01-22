import React from "react";
import Container from '../../components/Container/Container';

import styles from "./Solution.module.scss";

const items = [
  {
    title: 'Для тех, кто только начинает работать',
    btn: 'Подробнее'
  },
  {
    title: 'Для тех, кто уже знает, чего хочет',
    btn: 'Подробнее'
  },
  {
    title: 'Для особых задач крупного бизнеса',
    btn: 'Подробнее'
  }
]

const Solution = () => {
  return (
      <div className={styles.wrapper}>
        <Container>
        <h2 className={styles.title}>
          Выберите подходящее описание вашего бизнеса
        </h2>
        <div className={styles.itemsWrapper}>
          {items.map(({title, btn}) => (
            <div className={styles.item} key={title}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <div className={styles.btn}>
                <button className={styles.more}>{btn}</button>
              </div>
            </div>
          ))}
        </div>
        </Container>
      </div>
  );
};

export default Solution;
