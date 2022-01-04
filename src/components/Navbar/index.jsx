import React from "react";
import { FcFilmReel } from "react-icons/fc";
import classNames from "classnames";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <span className={styles.logo}>
      <a
           href="/"
          >  { <FcFilmReel></FcFilmReel>
      }</a>
      </span>
      <ul className={styles.navItems}>
        
          <a
            className={classNames([
              styles.navItem,
              window.location.pathname  === "/movies" && styles.selectedNavItem  ])}
           href="/movies"
          >
        movies
          </a>
          <a
            className={classNames([
              styles.navItem,
              window.location.pathname  === "/tv" && styles.selectedNavItem  ,
            ])}
           href="/tv"
          >
        tv
          </a>
      </ul>
      <button className={styles.actions}>Favorite { window.location.pathname  }</button>
    </nav>
  );
};

export default Navbar;