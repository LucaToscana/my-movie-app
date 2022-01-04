
import React, { useCallback } from "react";
import classNames from "classnames";
import { AiFillHome, AiFillCompass } from "react-icons/ai";
//import { BsFillBagFill, BsFillPersonFill } from "react-icons/bs";
//import { CgInbox } from "react-icons/cg";
import { useHistory } from "react-router-dom";

import styles from "./Tabbar.module.css";

const Tabbar = ({ navigationData }) => {
  let history = useHistory();
  
  const getUrl = useCallback((item) => {
    switch (item) {
      case "Home":
        return "/";
      case "tv":
        return "/tv";
     
    }
  }, []);
  const getTabIcon = useCallback((item) => {
    switch (item) {
      case "Home":
        return <AiFillHome />;
      case "tv":
        return <AiFillCompass />;
     
    }
  }, []);

  return (
    <nav className={styles.tabbar}>
      {navigationData.map((item, index) => (
        <span
          key={index}
          className={classNames([
            styles.tabItem/*,
            currentRoute === item && styles.tabItemActive,*/
          ])}
          onClick={() => history.push(getUrl(item))}
        >
          <span className={styles.icon}>{getTabIcon(item)}</span>
        </span>
      ))}
    </nav>
  );
};

export default Tabbar;