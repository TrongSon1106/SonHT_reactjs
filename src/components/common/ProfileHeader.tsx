import React, { useState } from "react";
import bookmarkIcon from "../../assets/image/bookmark.png";
import avatar from "../../assets/image/Avatar.png";
import notificationsActiveIcon from "../../assets/image/notifications_active.png";
import { RootState, useAppSelector } from "../../setup/stores";
import { useNavigate } from "react-router-dom";

type Props = {};

const ProfileHeader = (props: Props) => {
  const user = useAppSelector((state: RootState) => state.user.user);
  const [userBoxShowing, setUserBoxShowing] = useState(false);
  const navigate = useNavigate();

  const handleAvatarClick = () => {
    setUserBoxShowing(!userBoxShowing);
  };

  const handleUserMenuClicked = () => {
    navigate(`/profile/${user?.id}`);
    setUserBoxShowing(!userBoxShowing);
  };

  const handleUserMissionsClicked = () => {
    navigate(`/missions/${user?.id}`);
    setUserBoxShowing(!userBoxShowing);
  };

  const handleExchangeScreen = () => {};

  const handleInfoEdit = () => {
    navigate(`/${user?.roles[0]}/edit`);
    setUserBoxShowing(!userBoxShowing);
  };

  const handleLogout = async () => {
    try {
      localStorage.clear();
      window.location.reload();
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <div className="header--user_part">
      <img src={notificationsActiveIcon} alt="" />
      <img src={bookmarkIcon} alt="" />
      <div className="header--avatar_line"></div>
      <div className="header--avatar_container">
        <img
          className="header--avatar"
          src={avatar}
          alt=""
          onClick={handleAvatarClick}
        />
        {userBoxShowing ? (
          <div className="header--avatar_userbox">
            <div className="header--avatar_userbox_user">
              <img className="header--avatar_userbox_img" src={avatar} alt="" />
              <div className="header--avatar_userbox_name">{user?.name}</div>
            </div>
            <div className="header--avatar_userbox_line"></div>

            <div className="header--avatar_userbox_details">
              <div
                className="header--avatar_userbox_option header--avatar_userbox_missions"
                onClick={handleUserMenuClicked}
              >
                Trang cá nhân
              </div>
              {user?.roles[0] === "0" ? (
                <>
                  <div className="header--avatar_userbox_score">
                    <div className="header--avatar_userbox_score_label">
                      Điểm
                    </div>
                    <div className="header--avatar_userbox_score_value">
                      {user.score}
                    </div>
                  </div>
                  <div
                    className="header--avatar_userbox_option header--avatar_userbox_missions"
                    onClick={handleExchangeScreen}
                  >
                    Đổi quà
                  </div>
                  <div
                    className="header--avatar_userbox_option header--avatar_userbox_missions"
                    onClick={handleUserMissionsClicked}
                  >
                    Nhiệm vụ
                  </div>
                </>
              ) : null}
            </div>
            <div className="header--avatar_userbox_line"></div>
            <div className="header--avatar_userbox_actions">
              <div
                className="header--avatar_userbox_option header--avatar_userbox_missions"
                onClick={handleInfoEdit}
              >
                Cài đặt tài khoản
              </div>
              <div
                className="header--avatar_userbox_option header--avatar_userbox_missions"
                onClick={handleLogout}
              >
                Đăng xuất
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProfileHeader;
