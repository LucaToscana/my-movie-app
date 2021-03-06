import React from "react";
import { FcFilmReel, FcLike } from "react-icons/fc";
import classNames from "classnames";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <span className={styles.logo}>
        <a
          href="/"
        >  {<FcFilmReel></FcFilmReel>
          }</a>
      </span>
      <ul className={styles.navItems}>

        <a
          className={classNames([
            styles.navItem,
            window.location.pathname === "/movies" && styles.selectedNavItem])}
          href="/movies"
        >
          movies
        </a>
        <a
          className={classNames([
            styles.navItem,
            window.location.pathname === "/tv" && styles.selectedNavItem,
          ])}
          href="/tv"
        >
          tv
        </a>
        <a
          className={classNames([
            styles.navItem,
            window.location.pathname === "/actors" && styles.selectedNavItem,
          ])}
          href="/actors"
        >
          actors
        </a>

      </ul> <a
        className={classNames([
          styles.navItem,
          window.location.pathname === "/favorite" && styles.selectedNavItem,
        ])}
        href="/favorite"
      > <span className={styles.logo}>
          <FcLike />      </span>    </a>
      {// <button  href="/actors" className={styles.actions}><FcLike /> </button>
      }
    </nav>
  );
};

export default Navbar;