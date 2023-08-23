import React from "react";
import Sidenav from "../Navbars/Sidenav";
import Topnav from "../Navbars/Topnav";
import style from "./Layout.module.css";
const Layout = ({ title, children }) => {
  return (
    <div className={style.navContainer}>
      <Sidenav />
      <div className={style.topNavContainer}>
        <Topnav title={title}></Topnav>
        {children}
      </div>
    </div>
  );
};

export default Layout;
