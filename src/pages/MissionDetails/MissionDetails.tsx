import React from "react";
import "./MissionDetails.css";
// import map from "./components/img/map.png";
import callIcon from "./components/img/ic_call.png";
import locationIcon from "./components/img/ic_location_on.png";
// import missionImg from "./components/img/Rectangle 6.png";
import dot1 from "./components/img/Ellipse 3.svg";
import dot2 from "./components/img/Ellipse 4.svg";
import dot3 from "./components/img/Ellipse 5.svg";
import userIcon from "./components/img/user-solid.svg";
import { useParams } from "react-router-dom";
// import { IMission } from "../../types/mission";
// import { doc, getDoc } from "firebase/firestore";
// import { firebaseDB } from "../../setup/firebase";
import { missions } from "../../data/mockup";

type Props = {
  // id: string
};

// TODO: Build UI for Mission Detail
const MissionDetails = (props: Props) => {
  const param = useParams();
  const { id } = param;
  const mission = missions.filter((elm) => elm.id === id)[0]

  return (
    <main className="mission-details--mission-details">
      <div className="mission-details--mission-header">
        <div className="mission-details--general-info">
          <div className="mission-details--header--first_line">
            <div className="mission-details--first_line_details">
              <div className="mission-details--mission-title">
                {mission?.title}
              </div>
            </div>
            <div className="mission-details--mission-rewards">
              +{mission?.score}
            </div>
            <div className="mission-details--volunteers_required">
              <img src={userIcon} alt="" /> 2 / {mission?.participants}
            </div>
          </div>
          <div className="mission-details--header--second_line">
            <div className="mission-details--contact">
              <img
                src={locationIcon}
                alt=""
                className="mission-details--icon"
              />
              <div className="mission-details--mission-location">
                {mission?.address}
              </div>
            </div>

            <div className="mission-details--contact">
              <img src={callIcon} alt="" className="mission-details--icon" />
              <div className="mission-details--mission-call">
                {mission?.phoneNumber}
              </div>
            </div>
          </div>
        </div>
        <div className="mission-details--button-container">
          <button
            className="mission--button mission--join_button"
          // onClick={HandleAcceptMissionClicked}
          >
            Liên hệ
          </button>
        </div>
      </div>
      <div className="mission-details--mission-hero">
        <img src={mission.img} alt="" className="mission-details--mission-img" />
        <div className="mission-details--dots">
          <img src={dot1} alt="" className="mission-details--dot" />
          <img src={dot2} alt="" className="mission-details--dot" />
          <img src={dot3} alt="" className="mission-details--dot" />
        </div>
      </div>
      <div className="mission-details--mission-info">
        <div className="mission-details--mission-description">
          {mission?.content}
        </div>
        <div className="mission-details--mission-instruction">
          <div className="mission-details--title">Hướng dẫn:</div>
          <ul>
            <li>Bước 1: Đăng ký nhận nhiệm vụ</li>
            <li>Bước 2: Thực hiện nhiệm vụ làm sạch</li>
            <li>
              Bước 3: Chụp ảnh khu vực được làm sạch (Toàn cảnh, cận cảnh)
            </li>
            <li>Bước 4: Up ảnh lên chờ xét duyệt</li>
            <li>Bước 5: Nhận điểm</li>
          </ul>
        </div>
        <div className="mission-details--mission-regulation">
          <div className="mission-details--title">Quy định:</div>
          <div className="mission-details--regulation-text">
            Bạn cần phải hoàn thành nhiệm vụ trong vòng tối đa {3} ngày. Sau 3
            ngày nhiệm vụ sẽ tự động hủy
          </div>
        </div>
      </div>
      {/* <img src={map} alt="" className="mission-details--map" /> */}
    </main>
  );
};

export default MissionDetails;
