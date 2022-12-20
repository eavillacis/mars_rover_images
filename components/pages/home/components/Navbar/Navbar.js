import { useContext, useState } from "react";

import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

import { ThemeContext } from "../../../../../context/theme";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  const contact = {
    // email is optional - if left empty Contact section won't show up
    email: "esteban.andres.villacis@gmail.com",
  };

  return (
    <nav className={`center nav`}>
      <ul
        style={{ display: showNavList ? "flex" : null }}
        className={styles.nav__list}
      >
        {contact.email ? (
          <li className={styles.nav__list_item}>
            <a
              href={`mailto:${contact.email}`}
              onClick={toggleNavList}
              className={`link link__nav`}
            >
              Contact
            </a>
          </li>
        ) : null}
      </ul>

      <button
        type="button"
        onClick={toggleTheme}
        className={`center btn btn__icon`}
        aria-label="toggle theme"
      >
        {themeName === "dark" ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>

      <button
        type="button"
        onClick={toggleNavList}
        className={`btn btn--icon ${styles.nav__hamburger}`}
        aria-label="toggle navigation"
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  );
};

export default Navbar;
