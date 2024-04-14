import React from "react";
import "./Notification.css";
import xmark from "../layouts/img/circle-xmark-regular.svg";

const Notification = ({ notifType, message, HandleMessageExit }: any) => {
  return (
    <div className="notification">
      <div className="notification--bg"></div>
      <div className="notification--notif">
        <div
          className="notification--xmark_container"
          onClick={HandleMessageExit}
        >
          <img src={xmark} alt="exit" />
        </div>
        <div className="notification--headline">{notifType}</div>
        <div className="notification--message">{message}</div>
      </div>
    </div>
  );
};

export default Notification;
