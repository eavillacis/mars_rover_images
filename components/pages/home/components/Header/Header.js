import Navbar from "../Navbar/Navbar";

import styles from "./Header.module.css";

const Header = () => {
  const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: "https://eavillacis.github.io/cleanfolio",
    title: "Mars Rover Photos",
  };

  const { homepage, title } = header;
  return (
    <header className={`${styles.header} ${styles.center}`}>
      <h3>
        {homepage ? (
          <a href={homepage} className={styles.link}>
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
  );
};

export default Header;
