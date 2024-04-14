//DOES NOT SYNC WITH MISSION.JS YET. TRYING TO FIX.

import React, { useEffect, useState } from "react";
import "./MissionDetails.css";
import callIcon from "../img/ic_call.png";
import locationIcon from "../img/ic_location_on.png";
import missionImg from "../img/Rectangle 6.png";
import map from "../img/map.png";
import dot1 from "../img/Ellipse 3.svg";
import dot2 from "../img/Ellipse 4.svg";
import dot3 from "../img/Ellipse 5.svg";
import {
  colRefMissions,
  colRefUsers,
  colRefUserMission,
} from "../../../firebase";
import { getDocs, updateDoc, doc, setDoc, deleteDoc } from "firebase/firestore";
import MissionCancel from "../confirmation-boxes/mission-cancel/MissionCancel";
import MissionAccept from "../confirmation-boxes/mission-accept/MissionAccept";
import MissionUpload from "../confirmation-boxes/upload-image/MissionUpload";
import Notification from "../../common-components/Notification";
import { useNavigate } from "react-router";
import { UserAuth } from "../../../context/AuthContext";
import userIcon from "../img/user-solid.svg";

const MissionDetails = ({
  title,
  number,
  address,
  content,
  score,
  duration,
  status,
  volunteer,
  statusText,
  id,
  // missionReload,
}) => {
  const [userDoc, setUserDoc] = useState({});
  const [mission, setMission] = useState({});
  const [confirmCancel, setConfirmCancel] = useState(false);
  const [confirmAccept, setConfirmAccept] = useState(false);
  const [confirmUpload, setConfirmUpload] = useState(false);
  const [statusDisplay, setStatusDisplay] = useState(null);
  const [messageShowing, setMessageShowing] = useState(false);
  const [notifType, setNotifType] = useState("Thông báo");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { user } = UserAuth();
  const [userMissionLink, setUserMissionLink] = useState({});

  useEffect(() => {
    const getUserDoc = async () => {
      const data = await getDocs(colRefUsers);
      data.docs.forEach((doc) => {
        if (doc.data().email === localStorage.email) {
          setUserDoc({ ...doc.data(), id: doc.id });
          return;
        }
      });
    };
    if (user) getUserDoc();

    const getMission = async () => {
      const data2 = await getDocs(colRefMissions);
      data2.docs.forEach((doc) => {
        if (doc.data().title === title) {
          //does not work if compare id
          setMission({ ...doc.data(), id: doc.id });
          return;
        }
      });
    };
    // if (user) 
    getMission();
  }, []);

  useEffect(() => {
    const getUserMissionLink = async () => {
      const data = await getDocs(colRefUserMission);
      data.docs.forEach((doc) => {
        if (
          doc.data().userEmail === userDoc.email &&
          doc.data().missionId == mission.id
        ) {
          setUserMissionLink({ ...doc.data(), id: doc.id });
          return;
        }
      });
    };
    getUserMissionLink();
  }, [mission]);

  // const HandleBackToMissions = () => {
  //   navigate("/missions");
  // };

  const HandleMessageExit = () => {
    setMessageShowing(!messageShowing);
  };

  const HandleAcceptMissionClicked = () => {
    if (!user) {
      // alert("Vui lòng đăng nhập trước!");
      setNotifType("Bạn chưa thể nhận nhiệm vụ!");
      setMessage("Vui lòng đăng nhập trước!");
      HandleMessageExit();
      return;
    }
    setConfirmAccept(true);
  };

  const HandleAcceptMission = async () => {
    setConfirmAccept(false);
    // await updateDoc(doc(colRefMissions, id), {
    //   volunteer: userDoc.email,
    // });
    if (!mission.volunteers.includes(userDoc.email)) {
      await updateDoc(doc(colRefMissions, id), {
        // volunteer: userDoc.email,
        volunteers: [...mission.volunteers, userDoc.email],
        volunteersLength: mission.volunteersLength + 1,
      });
    }
    // await updateDoc(doc(colRefMissions, id), {
    //   status: "accepted",
    //   statusText: "Đang làm",
    // });
    await setDoc(
      doc(
        colRefUserMission,
        `${userDoc.email} | ${mission.title} (id: ${mission.id})`
      ),
      {
        missionId: mission.id,
        userEmail: userDoc.email,
        userStatus: "accepted",
        userStatusText: "Đang làm",
      }
    );
    setStatusDisplay(
      <div className={`mission--details_chip mission--status_accepted`}>
        Đang làm
      </div>
    );
    const getMission = async () => {
      const data2 = await getDocs(colRefMissions);
      data2.docs.forEach((doc) => {
        if (doc.data().title === title) {
          setMission({ ...doc.data(), id: doc.id });
          return;
        }
      });
    };
    getMission();
  };

  const HandleNotAcceptMission = () => {
    setConfirmAccept(false);
  };

  const HandleUploadImageClicked = () => {
    setConfirmUpload(true);
  };

  const HandleUploadImageStatusChange = () => {
    setStatusDisplay(
      <div className={`mission--details_chip mission--status_pending`}>
        Chưa duyệt
      </div>
    );
  };

  const HandleConfirmUploadExit = () => {
    setConfirmUpload(false);
  };

  const HandleCancelMissionClicked = () => {
    setConfirmCancel(true);
  };

  const HandleKeepMission = () => {
    setConfirmCancel(false);
  };

  const HandleCancelMission = async () => {
    setConfirmCancel(false);
    const updateInfo2 = async (missionId) => {
      // await updateDoc(doc(colRefMissions, missionId), {
      //   volunteer: "",
      // });
      const index = mission.volunteers.indexOf(userDoc.email);
      let tmpVolunteers = mission.volunteers;
      tmpVolunteers.splice(index, 1);
      // console.log(tmpVolunteers);
      if (!mission.volunteers.includes(userDoc.email)) {
        await updateDoc(doc(colRefMissions, missionId), {
          // volunteer: "",
          volunteers: tmpVolunteers,
          volunteersLength: mission.volunteersLength - 1,
        });
      }
      // await updateDoc(doc(colRefMissions, missionId), {
      //   status: "not accepted",
      //   statusText: "",
      // });
      // await updateDoc(
      //   doc(
      //     colRefUserMission,
      //     `${userDoc.email} | ${mission.title} (id: ${mission.id})`
      //   ),
      //   {
      //     missionId: null,
      //     userEmail: null,
      //     userStatus: null,
      //     userStatusText: null,
      //   }
      // );
      await deleteDoc(
        doc(
          colRefUserMission,
          `${userDoc.email} | ${mission.title} (id: ${mission.id})`
        )
      );
      setStatusDisplay(<></>);
      const getMission = async () => {
        const data2 = await getDocs(colRefMissions);
        data2.docs.forEach((doc) => {
          if (doc.data().title === title) {
            setMission({ ...doc.data(), id: doc.id });
            return;
          }
        });
      };
      getMission();
    };
    const data = await getDocs(colRefMissions);
    data.docs.forEach((doc) => {
      if (doc.data().title === title) {
        updateInfo2(id);
        return;
      }
    });

    // const getUserMissionLink = async () => {
    //   const data = await getDocs(colRefUserMission);
    //   data.docs.forEach((doc) => {
    //     if (
    //       doc.data().userEmail === userDoc.email &&
    //       doc.data().missionId == mission.id
    //     ) {
    //       setUserMissionLink({ ...doc.data(), id: doc.id });
    //       return;
    //     }
    //   });
    // };
    // getUserMissionLink();

    setUserMissionLink({
      ...userMissionLink,
      userStatus: null,
      userStatusText: null,
    });
  };

  return (
    <main className="mission-details--mission-details">
      {messageShowing ? (
        <Notification
          notifType={notifType}
          message={message}
          HandleMessageExit={HandleMessageExit}
        />
      ) : null}
      {confirmCancel ? (
        <MissionCancel
          title={title}
          number={number}
          address={address}
          content={content}
          score={score}
          duration={duration}
          id={id}
          HandleKeepMission={HandleKeepMission}
          HandleCancelMission={HandleCancelMission}
        />
      ) : null}
      {confirmAccept ? (
        <MissionAccept
          title={title}
          number={number}
          address={address}
          content={content}
          score={score}
          duration={duration}
          id={id}
          HandleNotAcceptMission={HandleNotAcceptMission}
          HandleAcceptMission={HandleAcceptMission}
        />
      ) : null}
      {confirmUpload ? (
        <MissionUpload
          title={title}
          number={number}
          address={address}
          content={content}
          score={score}
          duration={duration}
          id={id}
          HandleConfirmUploadExit={HandleConfirmUploadExit}
          HandleUploadImageStatusChange={HandleUploadImageStatusChange}
        />
      ) : null}

      <div className="mission-details--mission-header">
        <div className="mission-details--general-info">
          <div className="mission-details--header--first_line">
            <div className="mission-details--mission-title">{title}</div>
            <div className="mission-details--mission-rewards">+{score}</div>
            <div className="mission-details--volunteers_required">
              <img src={userIcon} alt="" /> {mission.volunteersLength} /{" "}
              {mission.volunteersRequired}
            </div>
            {statusDisplay ? (
              statusDisplay
            ) : (
              <div>
                {userMissionLink.userStatus === "accepted" ? (
                  <div
                    className={`mission--details_chip mission--status_accepted`}
                  >
                    Đang làm
                  </div>
                ) : (
                  <div>
                    {userMissionLink.userStatus === "pending" ? (
                      <div
                        className={`mission--details_chip mission--status_pending`}
                      >
                        Chưa duyệt
                      </div>
                    ) : (
                      <dv>
                        {userMissionLink.userStatus === "denied" ? (
                          <div
                            className={`mission--details_chip mission--status_denied`}
                          >
                            Chưa đạt
                          </div>
                        ) : (
                          <div>
                            {userMissionLink.userStatus === "done" ? (
                              <div
                                className={`mission--details_chip mission--status_done`}
                              >
                                Đã duyệt
                              </div>
                            ) : null}
                          </div>
                        )}
                      </dv>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="mission-details--header--second_line">
            <div className="mission-details--contact">
              <img
                src={locationIcon}
                alt=""
                className="mission-details--icon"
              />
              <div className="mission-details--mission-location">{address}</div>
            </div>

            <div className="mission-details--contact">
              <img src={callIcon} alt="" className="mission-details--icon" />
              <div className="mission-details--mission-call">{number}</div>
            </div>
          </div>
        </div>
        <div className="mission-details--button-container">
          {!user ||
          (userDoc.role !== "admin" && !userMissionLink.userStatus) ? (
            <button
              className="mission--button mission--join_button"
              onClick={HandleAcceptMissionClicked}
            >
              Liên hệ
            </button>
          ) : (
            <>
              {userDoc.role === "user" && mission.status !== "done" ? (
                <>
                  <button
                    className="mission-details--button mission-details--upload_button"
                    onClick={HandleUploadImageClicked}
                  >
                    <span className="mission-details--plus_sign">&#43;</span>{" "}
                    Tải ảnh lên
                  </button>
                  <button
                    className="mission-details--button mission-details--cancel_button"
                    onClick={HandleCancelMissionClicked}
                  >
                    Hủy nhiệm vụ
                  </button>
                </>
              ) : null}
            </>
          )}
        </div>
      </div>
      <div className="mission-details--mission-hero">
        <img src={missionImg} alt="" className="mission-details--mission-img" />
        <div className="mission-details--dots">
          <img src={dot1} alt="" className="mission-details--dot" />
          <img src={dot2} alt="" className="mission-details--dot" />
          <img src={dot3} alt="" className="mission-details--dot" />
        </div>
      </div>
      <div className="mission-details--mission-info">
        <div className="mission-details--mission-description">{content}</div>
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
            Bạn cần phải hoàn thành nhiệm vụ trong vòng tối đa {duration} ngày.
            Sau 3 ngày nhiệm vụ sẽ tự động hủy
          </div>
        </div>
      </div>
      <img src={map} alt="" className="mission-details--map" />
    </main>
  );
};

export default MissionDetails;
