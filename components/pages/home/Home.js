import { useContext, useState } from "react";

import { ThemeContext } from "../../../context/theme";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PhotosList from "./components/PhotosList/PhotosList";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import styles from "./Home.module.css";

const Home = () => {
  const [{ themeName }] = useContext(ThemeContext);

  const [cnt, setCnt] = useState(1);

  const pages = [];
  for (let i = 0; i < cnt; i++) {
    pages.push(<PhotosList index={i} key={i} />);
  }

  return (
    <div id="top" className={`${themeName} app`}>
      <Header />

      <main className="main">
        {pages}
        <div className={styles.loadMoreWrapper}>
          <button className={styles.btnLoad} onClick={() => setCnt(cnt + 1)}>
            Load More
          </button>
        </div>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Home;
