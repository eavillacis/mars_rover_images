import React, { useEffect, useState } from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import styles from "./ScrollToTop.module.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return isVisible ? (
    <div className={styles.scrollTop}>
      <a href="#top">
        <ArrowUpwardIcon fontSize="large" />
      </a>
    </div>
  ) : null;
};

export default ScrollToTop;
