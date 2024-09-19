import React from "react";
import "./css/Activity.css";

const Activity = () => {
  return (
    <div>
      <div className="group1">
        <div className="bg_pic">
          <div className="frame62">
            <div className="frame61">
              <div className="phongtrao">Phong trào “dọn rác”</div>
              <div className="nangcao">Nâng cao nhận thức cộng đồng</div>
            </div>

            <div className="donrac">
            “Dọn rác”, hay làm sạch môi trường, nói “không” với những vật thải 
            gây ô nhiễm dường như đang được quan tâm mạnh mẽ hơn với nhiều hành 
            động thiết thực. Tuy nhiên, để được lâu dài và hiệu quả, cần chiến lược dài hơi 
            hơn là những hoạt động mang tính chất “phong trào”.
            </div>
          </div>

          <div className="second_pic"></div>
        </div>
      </div>

      <div className="group2">
        <div className="bg__pic">
          <div className="frame62">
            <div className="frame61">
              <div className="phongtrao">Tình nguyện dọn rác</div>
              <div className="nangcao">
              Nhóm bạn trẻ gen Z tình nguyện dọn rác
              </div>
            </div>

            <div className="donrac">
            Những ngày nghỉ, khi người người, nhà nhà tranh thủ vui chơi thì nhóm bạn trẻ lại chọn cho mình công việc đặc biệt đó là lội bùn, thu gom rác tại hồ điều hòa
            </div>
          </div>

          <div className="second__pic"></div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
