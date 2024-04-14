import React, { useEffect } from "react";
import "./CollaborationInvitation.css";
import sendIcon from "./img/end icon.svg";
import { useState } from "react";
import { Grid } from "@mui/material";
import { contactData } from "../Contact";

const CollaborationInvitation = () => {
  const [colabName, setColabName] = useState("");
  const [colabEmail, setColabEmail] = useState("");
  const [colabMessage, setColabMessage] = useState("");

  return (
    <div>
      <div className="collaborationInvitation">
        <div className="ci--text">
          <div className="ci--headline">{contactData.group3.title}</div>
          <div className="ci--instructions">
            <div className="ci--instruction1">{contactData.group3.content}</div>
          </div>
          <div className="ci--contacts">
            <div className="ci--contact_email">{contactData.group3.gmail}</div>
            <div className="ci--contact_call">{contactData.group3.phone}</div>
          </div>
        </div>
        <div className="ci--form">
          <div className="ci--personal_info">
            <input
              type="text"
              className="ci--form_name"
              placeholder="Tên"
              value={colabName}
              onChange={(e) => setColabName(e.target.value)}
              required
            />
            <input
              type="email"
              className="ci--form_email"
              placeholder="Email"
              value={colabEmail}
              onChange={(e) => setColabEmail(e.target.value)}
              required
            />
          </div>
          <input
            type="text"
            className="ci--form_details"
            placeholder="Chi tiết"
            value={colabMessage}
            onChange={(e) => setColabMessage(e.target.value)}
            required
          />
          <div className="ci--btn_container">
            <button className="ci--send">
              Gửi
              <img src={sendIcon} alt="" className="ci--send_icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaborationInvitation;
