
import React, { useCallback } from "react";
import classNames from "classnames";
import { BsPeopleFill } from "react-icons/bs";
import { FiMonitor } from "react-icons/fi";
import { GiFilmProjector } from "react-icons/gi";
import { useHistory } from "react-router-dom";
 

import styles from "./Tabbar.module.css";
import { FcFilmReel, FcLike } from "react-icons/fc";

const Tabbar = ({ navigationData }) => {
  let history = useHistory();
  
  const getUrl = useCallback((item) => {
    switch (item) {
      case "Home":
        return "/";
      case "tv":
        return "/tv";
        case "movies":
          return "/movies";
        case "actors":
            return "/actors";
            case "favorite":
            return "/favorite";
     
    }
  }, []);
  const getTabIcon = useCallback((item) => {
    switch (item) {
      case "Home":
        return <FcFilmReel></FcFilmReel>;
      case "tv":
        return <FiMonitor />;
     
    
    case "movies":
      return <GiFilmProjector />;
    case "actors":
      return <BsPeopleFill />;
      case "favorite":
        return  <FcLike />;
   
  }
    
  }, []);

  return (
    <nav className={styles.tabbar}>
      {navigationData.map((item, index) => (
        <span
          key={index}
          className={classNames([
            styles.tabItem,
        //    window.location.pathname === "/"+item && styles.tabItemActive,
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