import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import style from "./AccountModal.module.css";
import { getUsers } from "../../utils/api";
import { SUCCESS_STATUS } from "../../utils/constants";
import { Link } from "react-router-dom";

const AccountModal = ({ open, onClose, user }) => {
  const [userList, setUserList] = useState();

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

  const filteredUsers = userList
    ?.filter((item) => item.id !== user.id)
    .slice(0, 2);

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      //   hideBackdrop={true}
    >
      <Box className={style.modalBox}>
        <div className={style.profileDetails}>
          <img
            className={style.profilePicture}
            src={user.profilepicture}
            alt="Profile"
          />
          <p className={style.name}>{user.name}</p>
          <p className={style.email}>{user.email}</p>
          {filteredUsers
            ? filteredUsers.map((item) => {
                return (
                  <div key={item.id} style={{ width: "100%" }}>
                    <div className={style.divider}></div>
                    <Link
                      to={{
                        pathname: `/profile/${item.id}`,
                        state: { id: item.id, user: item },
                      }}
                      className={style.link}
                      onClick={onClose}
                    >
                      <div className={style.userList}>
                        <img src={item.profilepicture} alt="Profile" />
                        <p className={style.name}>{item.name}</p>
                      </div>
                    </Link>
                  </div>
                );
              })
            : null}
          <Link
            to={{
              pathname: `/`,
            }}
            key={user.id}
            className={style.link}
            onClick={onClose}
          >
            <button type="button " onClick={onClose} className={style.signOut}>
              Sign Out
            </button>
          </Link>
        </div>
      </Box>
    </Modal>
  );
};

export default AccountModal;
