import React from "react";
import styles from "./Navigation.module.scss";

import NAVLOGO_SVG from "../../assets/images/navlogo.svg";
import VK_SVG from "../../assets/images/vk.svg";
import FACEBOOK_SVG from "../../assets/images/facebook.svg";
import INSTA_SVG from "../../assets/images/insta.svg";
import YOUTUBE_SVG from "../../assets/images/youtube.svg";

const Navigation = () => {
  return (
    <div className={styles.navigationBlock}>
      <div className={styles.leftNav}>
        <img className={styles.navLogoImg} src={NAVLOGO_SVG} alt="Logo" />
      </div>

      <div className={styles.reightNav}>
        <div className={styles.menuItems}>
            <div className={styles.menuItem}>
                <h3 className={styles.navName}>Компания</h3>
                <ul>
                    <li className={styles.navList}>
                        <a className={styles.navItems}>История</a>
                    </li>
                </ul>
                <ul>
                    <li className={styles.navList}>
                        <a className={styles.navItems}>Пресса о нас</a>
                    </li>
                </ul>
                <ul>
                    <li className={styles.navList}>
                        <a className={styles.navItems}>Отзывы</a>
                    </li>
                </ul>
                <ul>
                    <li className={styles.navList}>
                        <a className={styles.navItems}>Вакансии</a>
                    </li>
                </ul>
                <ul>
                    <li className={styles.navList}>
                        <a className={styles.navItems}>Контакты</a>
                    </li>
                </ul>
            </div>

            <div className={styles.menuItem}>
                <h3 className={styles.navName}>Документы</h3>
                <ul>
                    <li className={styles.navList}>
                        <a className={styles.navItems}>Пользовательское соглашение</a>
                    </li>
                </ul>
                <ul>
                    <li className={styles.navList}>
                        <a className={styles.navItems}>Политика конфиденциальности</a>
                    </li>
                </ul>
            </div>
        </div>

        <div className={styles.menuItems}>
            <h3 className={styles.navName}>Партнерам</h3>
            <ul>
                <li className={styles.navList}>
                    <a className={styles.navItems}>Продавать</a>
                </li>
            </ul>
            <ul>
                <li className={styles.navList}>
                    <a className={styles.navItems}>Внедрять</a>
                </li>
            </ul>

            <ul>
                <li className={styles.navList}>
                    <a className={styles.navItems}>Дорабатывать</a>
                </li>
            </ul>

            <ul>
                <li className={styles.navList}>
                    <a className={styles.navItems}>Партнерский портал</a>
                </li>
            </ul>
        </div>

        <div className={styles.menuItems}>
            <h3 className={styles.navName}>С чего начать</h3>
            <ul>
                <li className={styles.navList}>
                    <a className={styles.navItems}>ERP – что это?</a>
                </li>
            </ul>
            <ul>
                <li className={styles.navList}>
                    <a className={styles.navItems}>CRM – что это?</a>
                </li>
            </ul>
            <ul>
                <li className={styles.navList}>
                    <a className={styles.navItems}>Отличия ERP и CRM</a>
                </li>
            </ul>
            <ul>
                <li className={styles.navList}>
                    <a className={styles.navItems}>Как выбрать</a>
                </li>
            </ul>
            <ul>
                <li className={styles.navList}>
                    <a className={styles.navItems}>Как внедрить</a>
                </li>
            </ul>

            <ul>
                <li className={styles.navList}>
                    <a className={styles.navItems}>Сравнение с конкурентами</a>
                </li>
            </ul>

            <ul>
                <li className={styles.navList}>
                    <a className={styles.navItems}>Тарифы и цены</a>
                </li>
            </ul>

            <ul>
                <li className={styles.navList}>
                    <a className={styles.navItems}>Виртуальный помощник</a>
                </li>
            </ul>

            <ul>
                <li className={styles.navList}>
                    <a className={styles.navItems}>Блог</a>
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
