import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import style from "./Sidenav.module.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Sidenav = () => {
  const location = useLocation();

  return (
    <div className={style.container}>
      <div className={style.sideContainer}>
        <div className={style.navItemContainer}>
          <Link
            to={{
              pathname: `/profile/${location.state.id}`,
              state: { id: location.state.id, user: location.state.user },
            }}
            className={`${style.navItem} ${
              location.pathname === `/profile/${location.state.id}`
                ? style.active
                : null
            }`}
            type="button"
            role="tab"
            aria-selected="true"
          >
            <div className={style.navDiv}>
              <p className={style.navText}>Profile</p>
              {location.pathname === `/profile/${location.state.id}` ? (
                <ChevronRightIcon className={style.activeSymbol} />
              ) : null}
            </div>
          </Link>
          <div className={style.divider}></div>
          <Link
            className={`${style.navItem} ${
              location.pathname === `/posts/${location.state.id}`
                ? style.active
                : null
            }`}
            to={{
              pathname: `/posts/${location.state.id}`,
              state: { id: location.state.id, user: location.state.user },
            }}
            type="button"
            role="tab"
            aria-selected="true"
          >
            <div className={style.navDiv}>
              <p className={style.navText}>Posts</p>
              {location.pathname === `/posts/${location.state.id}` ? (
                <ChevronRightIcon className={style.activeSymbol} />
              ) : null}
            </div>
          </Link>
          <div className={style.divider}></div>
          <Link
            className={`${style.navItem} ${
              location.pathname === `/gallery/${location.state.id}`
                ? style.active
                : null
            }`}
            to={{
              pathname: `/gallery/${location.state.id}`,
              state: { id: location.state.id, user: location.state.user },
            }}
            type="button"
            role="tab"
            aria-selected="true"
          >
            <div className={style.navDiv}>
              <p className={style.navText}>Gallery</p>
              {location.pathname === `/gallery/${location.state.id}` ? (
                <ChevronRightIcon className={style.activeSymbol} />
              ) : null}
            </div>
          </Link>
          <div className={style.divider}></div>
          <Link
            className={`${style.navItem} ${
              location.pathname === `/todo/${location.state.id}`
                ? style.active
                : null
            }`}
            to={{
              pathname: `/todo/${location.state.id}`,
              state: { id: location.state.id, user: location.state.user },
            }}
            type="button"
            role="tab"
            aria-selected="true"
          >
            <div className={style.navDiv}>
              <p className={style.navText}>Todo</p>
              {location.pathname === `/todo/${location.state.id}` ? (
                <ChevronRightIcon className={style.activeSymbol} />
              ) : null}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Sidenav;
