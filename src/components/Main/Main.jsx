import React from "react";
import styles from "./Main.module.scss";

import ABEUTE_PNG from "../../assets/images/companies/a3beute.png";
import ARATPARK_PNG from "../../assets/images/companies/aratpark.png";
import AUTOGAS_PNG from "../../assets/images/companies/autogas.png";
import DPO_PNG from "../../assets/images/companies/dpo.png";
import DZAGIGROW_PNG from "../../assets/images/companies/dzagigrow.png";
import EMIMAR_PNG from "../../assets/images/companies/emimar.png";
import GEEKBRAINS_PNG from "../../assets/images/companies/geekbrains.png";
import KONTUR_PNG from "../../assets/images/companies/kontur.png";
import LOGISTIC_PNG from "../../assets/images/companies/logistic.png";
import NRLI_PNG from "../../assets/images/companies/nrli.png";
import PMG_PNG from "../../assets/images/companies/pmg.png";
import RIT_PNG from "../../assets/images/companies/rit.png";
import SKILLBOX_PNG from "../../assets/images/companies/skillbox.png";
import SYNERGY_PNG from "../../assets/images/companies/synergy.png";
import TOGAS_PNG from "../../assets/images/companies/togas.png";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.leftMain}>
        <div className={styles.mainTextBlock}>
          <div className={styles.mainCategories}>
            <div className={styles.mainCategory}>CRM</div>
            <div className={styles.mainCategory}>EPR</div>
            <div className={styles.mainCategory}>Производство</div>
            <div className={styles.mainCategory}>Склад</div>
            <div className={styles.mainCategory}>Финансы</div>
            <div className={styles.mainCategory}>Проекты</div>
          </div>
          <div className={styles.aimBlock}>
            <span className={styles.solveText}>Решаем</span>
            <h1 className={styles.solveWhatText}>проблемы бизнеса</h1>
          </div>
        </div>

        <div className={styles.mainBtns}>
          <button className={styles.tryBtnMain}>Попробовать бесплатно</button>
          <button className={styles.callBtnMain}>Заказать звонок</button>
        </div>
      </div>

      <div className={styles.reightMain}>
        <img style={{width: "100px", height: "38px", padding: "8px"}} src={TOGAS_PNG} alt="company"/>
        <img style={{width: "212px", height: "36px", padding: "8px"}} src={GEEKBRAINS_PNG} alt="company"/>
        <img style={{width: "134px", height: "52px", padding: "8px"}} src={ARATPARK_PNG} alt="company"/>
        <img style={{width: "49px", height: "52px", padding: "8px"}} src={PMG_PNG} alt="company"/>
        <img style={{width: "276px", height: "40px", padding: "8px"}} src={LOGISTIC_PNG} alt="company"/>
        <img style={{width: "126px", height: "28px", padding: "8px"}} src={SKILLBOX_PNG} alt="company"/>
        <img style={{width: "222px", height: "52px", padding: "8px"}} src={RIT_PNG} alt="company"/>
        <img style={{width: "208px", height: "50px", padding: "8px"}} src={EMIMAR_PNG} alt="company"/>
        <img style={{width: "208px", height: "32px", padding: "8px"}} src={ABEUTE_PNG} alt="company"/>
        <img style={{width: "142px", height: "52px", padding: "8px"}} src={NRLI_PNG} alt="company"/>
        <img style={{width: "234px", height: "52px", padding: "8px"}} src={KONTUR_PNG} alt="company"/>
        <img style={{width: "119px", height: "52px", padding: "8px"}} src={DZAGIGROW_PNG} alt="company"/>
        <img style={{width: "216px", height: "38px", padding: "8px"}} src={SYNERGY_PNG} alt="company"/>
        <img style={{width: "206px", height: "52px", padding: "8px"}} src={AUTOGAS_PNG} alt="company"/>
        <img style={{width: "140px", height: "52px", padding: "8px"}} src={DPO_PNG} alt="company"/>
      </div>
    </div>
  );
};

export default Main;
