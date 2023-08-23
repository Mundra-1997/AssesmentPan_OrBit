import React, { useState } from "react";
import style from "./Topnav.module.css";
import { useLocation } from "react-router";
import AccountModal from "../AccountModal/AccountModal";

const Topnav = ({ title }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { user } = location.state;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AccountModal open={open} onClose={handleClose} user={user} />
      <div className={style.navContainer}>
        <p className={style.title}>{title}</p>
        <div className={style.profile} onClick={handleOpen}>
          <img alt={user.name} src={user.profilepicture} />
          <p>{user.name}</p>
        </div>
      </div>
      <div className={style.divider}></div>
    </>
  );
};

export default Topnav;
