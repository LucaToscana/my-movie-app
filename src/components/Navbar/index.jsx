import React from "react";
import { FcFilmReel } from "react-icons/fc";
import classNames from "classnames";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <span className={styles.logo}>
      { <FcFilmReel></FcFilmReel>
      }
      </span>
      <ul className={styles.navItems}>
        
          <a
            className={classNames([
              styles.navItem,
              window.location.pathname  === "/" && styles.selectedNavItem  ])}
           href="/"
          >
        Home
          </a>
          <a
            className={classNames([
              styles.navItem,
              window.location.pathname  === "/tv" && styles.selectedNavItem  ,
            ])}
           href="/tv"
          >
        Tv
          </a>
      </ul>
      <button className={styles.actions}>Favorite { window.location.pathname  }</button>
    </nav>
  );
};

export default Navbar;