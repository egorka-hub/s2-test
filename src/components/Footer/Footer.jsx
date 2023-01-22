import React from "react";

import Container from '../../components/Container/Container';

import styles from "./Footer.module.scss";

import VK_SVG from "../../assets/images/vk.svg";
import FACEBOOK_SVG from "../../assets/images/facebook.svg";
import INSTA_SVG from "../../assets/images/insta.svg";
import YOUTUBE_SVG from "../../assets/images/youtube.svg";

const socials = [
    {
        styles: {width: "22px", height: "14px", padding: "6px", cursor: "pointer"},
        image: VK_SVG,
        label: 'Vk',
    },
    {
        styles: {width: "18px", height: "18px", padding: "6px", cursor: "pointer"},
        image: FACEBOOK_SVG,
        label: 'Facebook',
    },
    {
        styles: {width: "18px", height: "18px", padding: "6px", cursor: "pointer"},
        image: INSTA_SVG,
        label: 'Instagram',
    },
    {
        styles: {width: "22px", height: "14px", padding: "6px", cursor: "pointer"},
        image: YOUTUBE_SVG,
        label: 'YouTube',
    }
]

const Footer = () => {
  return (
    <div className={styles.copyright}>
    <Container>
      <div className={styles.container}>
        <div className={styles.crText}>© Salesapiens 2015–2023. Все права защищены</div>
        <div className={styles.media}>
            {socials.map(({styles, image, label}) => (
              <a key={label}>
                  <img style={styles} src={image} alt={label} />
              </a>
            ))}
        </div>
      </div>
    </Container>
  </div>
  );
};

export default Footer;
