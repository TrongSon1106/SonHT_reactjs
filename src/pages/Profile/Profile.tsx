import React, { useState } from "react";
import avatar from "../../assets/image/Avatar.png";
import "./Profile.css";

type Props = {};
// TODO: Build UI
const Profile = (props: Props) => {
  const [editing, setEditing] = useState(false);
  const [readOnly, setReadOnly] = useState(true);

  const EditClicked = () => {
    setEditing(true);
    setReadOnly(false);
  };

  return (
    <div className="user-menu">
      <div className="user-menu--account_line">
        <div className="user-menu--account_container">
          <img src={avatar} alt="" className="user-menu--avatar" />
          <div className="user-menu--account">SHEPE1304</div>
        </div>
        <div className="user-menu--buttons">
          <button className="user-menu--update_btn" onClick={EditClicked}>
            {editing ? "Cập nhật" : "Chỉnh sửa"}
          </button>
          <button className="user-menu--logout_btn">Đăng xuất</button>
        </div>
      </div>
      <div className="user-menu--info">
        <div className="user-menu--info_line1">
          <div className="user-menu--name">
            <div className="user-menu--label user-menu--name_label">
              Họ và tên
            </div>
            <input
              defaultValue={"Shepe"}
              className="user-menu--input"
              readOnly={readOnly}
            />
          </div>
          <div className="user-menu--phone">
            <div className="user-menu--label user-menu--phone_label">
              Số điện thoại
            </div>
            <input
              id="user-menu--phone_number"
              className="user-menu--input"
              defaultValue={123}
              readOnly={readOnly}
            />
          </div>
        </div>
        <div className="user-menu--info_line2">
          <div className="user-menu--email">
            <div className="user-menu--label user-menu--email_label">Email</div>
            <input
              className="user-menu--input"
              defaultValue={"shepe@test.com"}
              readOnly={readOnly}
            />
          </div>
          <div className="user-menu--score">
            <div className="user-menu--label user-menu--score_label">Điểm</div>
            <input
              className="user-menu--input user-menu--score_value"
              defaultValue={100000}
              style={{ border: "none" }}
              disabled
            />
          </div>
        </div>
        {editing ? (
          <div className="user-menu--password_confirm">
            <div className="user-menu--label user-menu--password_confirm_label">
              Mật khẩu
            </div>
            <input
              type="password"
              id="user-menu--password"
              className="user-menu--input marginTop12"
              placeholder="Mật khẩu..."
              // onChange={(e) => {
              //   setPassword(e.target.value);
              // }}
            />
          </div>
        ) : null}

        <div className="user-menu-present">
          <div className="user-menu--label user-menu--email_label">
            Quà đã đổi
          </div>
          <div className="user-present-board">
            <div className="user-present-board--labels">
              <div className="user-present-board--label">Mã quà</div>
              <div className="user-present-board--label">Tên quà</div>
              <div className="user-present-board--label2">Ảnh</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
