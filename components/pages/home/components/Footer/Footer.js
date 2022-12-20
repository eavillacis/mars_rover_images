import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <a href="https://github.com/eavillacis" className={`${styles.link} ${styles.footer__link}`}>
      Created with &#10084;
    </a>
  </footer>
);

export default Footer;
