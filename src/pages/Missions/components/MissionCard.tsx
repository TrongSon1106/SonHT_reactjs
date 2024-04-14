import React from "react";
import callIcon from "./img/ic_call.png";
import locationIcon from "./img/ic_location_on.png";
import rewardIcon from "./img/ic_database.png";
import userIcon from "./img/user-solid.svg";
import missionImg from "./img/mission-img.png";
import "./MissionCard.css";
import { useNavigate } from "react-router-dom";
import { IMission } from "../../../types/mission";
import { Typography } from "@mui/material";

// get document by id firebase

type Props = {
  info: IMission;
};
// TODO: Build UI
const MissionCard = (props: Props) => {
  const navigate = useNavigate();

  const ToDetails = () => {
    navigate(`/mission/${props.info.id}`);
  };

  return (
    <div className="mission">
      <div className="mission--big_container">
        <div className="mission--container">
          <div className="mission--about_part">
            <div className="mission--about_part_line1">
              <div className="mission--title">{props.info.title}</div>
            </div>
            <div className="mission--description">
              <Typography>{props.info.content}</Typography>
            </div>
          </div>
          <div className="mission--contacts">
            <div className="mission--contact">
              <img
                src={callIcon}
                alt="phone call icon"
                className="mission--contact_icon"
              />
              <div className="mission--contact_info" id="mission--contact_call">
                {props.info.phoneNumber}
              </div>
            </div>
            <div className="mission--location">
              <img
                src={locationIcon}
                alt="location icon"
                className="mission--location_icon"
              />
              <div className="mission--location_info">{props.info.address}</div>
            </div>
          </div>
          <div className="mission--rewards">
            <img src={rewardIcon} alt="" className="mission--reward_icon" />
            <div className="mission--reward_value">+ {props.info.score}</div>
          </div>
          <div className="mission--volunteers_required">
            <img src={userIcon} alt="" /> 0 / {props.info.participants}
          </div>
          <div className="mission--buttons">
            <button className="mission--button mission--join_button">
              Liên hệ
            </button>
            <button
              className="mission--button mission--info_button"
              onClick={ToDetails}
            >
              Thông tin
            </button>
          </div>
          <div className="img-part">
            <img src={props.info.img} alt="mission img" className="mission--img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionCard;
