import React from "react";
import { useLocation } from "react-router";
import Layout from "../Layout/Layout";
import style from "./Profile.module.css";
import Divider from "@mui/material/Divider";
import Map from "../Maps/Map";
import Chats from "../Chats/Chats";

const Profile = () => {
  const location = useLocation();
  const { user } = location.state;
  console.log(location);

  return (
    <Layout title="Profile">
      <div className={style.container}>
        <div className={style.leftContainer}>
          <img
            className={style.profilePicture}
            src={user.profilepicture}
            alt="User Profile"
          />
          <p className={style.profileName}>{user.name}</p>
          <div>
            <div className={style.userDetails}>
              <p className={style.label}>Username :</p>
              <p className={style.detail}>{user.username}</p>
            </div>
            <div className={style.userDetails}>
              <p className={style.label}>e-mail :</p>
              <p className={style.detail}>{user.email}</p>
            </div>
            <div className={style.userDetails}>
              <p className={style.label}>Phone :</p>
              <p className={style.detail}>{user.phone}</p>
            </div>
            <div className={style.userDetails}>
              <p className={style.label}>Website :</p>
              <p className={style.detail}>{user.website}</p>
            </div>
            <div className={style.divider}></div>
            <p className={style.comapnyTitle}>Company</p>
            <div className={style.userDetails}>
              <p className={style.label}>Name :</p>
              <p className={style.detail}>{user.company.name}</p>
            </div>
            <div className={style.userDetails}>
              <p className={style.label}>catchphrase :</p>
              <p className={style.detail}>{user.company.catchPhrase}</p>
            </div>
            <div className={style.userDetails}>
              <p className={style.label}>bs :</p>
              <p className={style.detail}>{user.company.bs}</p>
            </div>
          </div>
        </div>
        <Divider orientation="vertical" flexItem />
        <div className={style.rightContainer}>
          <p className={style.addressTitle}>Address:</p>
          <div className={style.userDetails}>
            <p className={style.label}>Street :</p>
            <p className={style.detail}>{user.address.street}</p>
          </div>
          <div className={style.userDetails}>
            <p className={style.label}>Suite :</p>
            <p className={style.detail}>{user.address.suite}</p>
          </div>
          <div className={style.userDetails}>
            <p className={style.label}>City :</p>
            <p className={style.detail}>{user.address.city}</p>
          </div>
          <div className={style.userDetails}>
            <p className={style.label}>Zipcode :</p>
            <p className={style.detail}>{user.address.zipcode}</p>
          </div>
          <Map
            className={style.map}
            lat={Number(user.address.geo.lat)}
            lng={Number(user.address.geo.lng)}
          />
          <div className={style.locationDetails}>
            <p>
              Lat: <span>{user.address.geo.lat}</span>
            </p>
            <p>
              Long: <span>{user.address.geo.lng}</span>
            </p>
          </div>
        </div>
      </div>
      <Chats id={user.id}/>
    </Layout>

  );
};

export default Profile;
