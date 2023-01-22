import React from "react";
import Container from "../../components/Container/Container";

import styles from "./Navigation.module.scss";

import NAVLOGO_SVG from "../../assets/images/navlogo.svg";
import { company, documents, partners, start } from "./consts";

const Navigation = () => {
  return (
    <div className={styles.background}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.leftNav}>
            <img className={styles.navLogoImg} src={NAVLOGO_SVG} alt="Logo" />
          </div>

          <div className={styles.reightNav}>
            <div className={styles.menuItems}>
              <div className={styles.menuItem}>
                <h3 className={styles.navName}>Компания</h3>
                <ul>
                  {company.map(({ title }, i) => (
                    <li key={i} className={styles.navList}>
                      <a className={styles.navItems}>{title}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.menuItem}>
                <h3 className={styles.navName}>Документы</h3>
                <ul>
                  {documents.map(({ title }, i) => (
                    <li key={i} className={styles.navList}>
                      <a className={styles.navItems}>{title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.menuItems}>
              <h3 className={styles.navName}>Партнерам</h3>
              <ul>
                {partners.map(({ title }, i) => (
                  <li key={i} className={styles.navList}>
                    <a className={styles.navItems}>{title}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.menuItems}>
              <h3 className={styles.navName}>С чего начать</h3>
              <ul>
                {start.map(({ title }, i) => (
                  <li key={i} className={styles.navList}>
                    <a className={styles.navItems}>{title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navigation;
