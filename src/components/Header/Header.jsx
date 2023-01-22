import React from "react";
import styles from "./Header.module.scss";

import Container from '../../components/Container/Container';

import LOGO_SVG from "../../assets/images/logo.svg";
import CALL_SVG from "../../assets/images/call.svg";
import DOWNLOAD_SVG from "../../assets/images/download.svg";
import LOGIN_SVG from "../../assets/images/login.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
      <div className={styles.headerBlock}>
        <img className={styles.logoImg} src={LOGO_SVG} alt="Logo" />

        <div className={styles.menu}>
          <ul className={styles.upNav}>
            <li className={styles.upNavList}>
              <img className={styles.navSvg} src={CALL_SVG} alt="Call" />
              <a className={styles.upNavItem} href="#">
                Заказать звонок
              </a>
            </li>
            <li className={styles.upNavList}>
              <img
                className={styles.navSvg}
                src={DOWNLOAD_SVG}
                alt="Download"
              />
              <a className={styles.upNavItem} href="#">
                Скачать презентацию
              </a>
            </li>
            <li className={styles.upNavList}>
              <img className={styles.navSvg} src={LOGIN_SVG} alt="Login" />
              <a className={styles.upNavItem} href="#">
                Войти
              </a>
            </li>
          </ul>
        </div>
        <div>
          <button className={styles.tryBtn}>Попробовать бесплатно</button>
        </div>
      </div>
      </Container>
    </header>
  );
};

export default Header;
