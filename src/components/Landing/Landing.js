import React, { useEffect, useState } from "react";
import { getUsers } from "../../utils/api";
import { SUCCESS_STATUS } from "../../utils/constants";
import { Scrollbars } from "react-custom-scrollbars-2";
import style from "./Landing.module.css";
import { Link } from "react-router-dom";

const Landing = () => {
  const [userList, setUserList] = useState([]);

  const getUserList = () => {
    getUsers()
      .then((res) => {
        if (res.status === SUCCESS_STATUS) {
          setUserList(res.data.users);
        } else {
          //enqueSnackbar something went wrong
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <div>
      <div className={style.container}>
        <div className={style.tableContainer}>
          <h1 className={style.title}>Select an Account</h1>
          <Scrollbars className={style.scrollContainer} style={{ height: 400 }}>
            {userList.map((user) => (
              <Link
                to={{
                  pathname: `/profile/${user.id}`,
                  state: { id: user.id, user: user },
                }}
                key={user.id}
                className={style.link}
              >
                <div className={style.row}>
                  <img src={user.profilepicture} alt={user.name} />
                  <span>{user.name}</span>
                </div>
              </Link>
            ))}
          </Scrollbars>
        </div>
      </div>
    </div>
  );
};

export default Landing;
