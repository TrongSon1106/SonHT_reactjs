import React from "react";
import "./css/Activity.css";

const Activity = () => {
  return (
    <div>
      <div className="group1">
        <div className="bg_pic">
          <div className="frame62">
            <div className="frame61">
              <div className="phongtrao">Dọn rác ở địa phương - khu phố</div>
              <div className="nangcao">Nâng cao nhận thức và bảo về môi trường xung quanh nơi ở</div>
            </div>

            <div className="donrac">
              Dọn rác ở các khu vực lân cận/ ven biển
            </div>
          </div>

          <div className="second_pic"></div>
        </div>
      </div>

      <div className="group2">
        <div className="bg__pic">
          <div className="frame62">
            <div className="frame61">
              <div className="phongtrao">Dọn rác ở các khu vực lân cận/ ven biển</div>
              <div className="nangcao">
              Nâng cao nhận thức và thúc đẩy phong trào bảo vệ môi trường
              </div>
            </div>

            <div className="donrac">
            Thu gom rác thải ở các vịnh đánh cá, nhặt rác trên biển/ đường xá...
            </div>
          </div>

          <div className="second__pic"></div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
