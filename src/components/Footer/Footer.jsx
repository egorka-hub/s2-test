import React from "react";
import styles from "./Footer.module.scss";

import VK_SVG from "../../assets/images/vk.svg";
import FACEBOOK_SVG from "../../assets/images/facebook.svg";
import INSTA_SVG from "../../assets/images/insta.svg";
import YOUTUBE_SVG from "../../assets/images/youtube.svg";

const Footer = () => {
  return (
    <div className={styles.copyright}>
      <div className={styles.container}>
        <div className={styles.crTetx}>© Salesapiens 2015–2023. Все права защищены</div>
            <div className={styles.meadia}>
                <div>
                    <a>
                        <img style={{width: "22px", height: "14px", padding: "6px"}} src={VK_SVG} alt="Vk"/>
                    </a>
                </div>

                <div>
                    <a>
                        <img style={{width: "18px", height: "18px", padding: "6px"}} src={FACEBOOK_SVG} alt="Facebook"/>
                    </a>
                </div>

                <div>
                    <a>
                        <img style={{width: "18px", height: "18px", padding: "6px"}} src={INSTA_SVG} alt="Instagram"/>
                    </a>
                </div>

                <div>
                    <a>
                        <img style={{width: "22px", height: "14px", padding: "6px"}} src={YOUTUBE_SVG} alt="YouTube"/>
                    </a>
                </div>
            </div>
      </div>
    </div>
  );
};

export default Footer;
