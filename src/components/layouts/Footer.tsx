import React from "react";
import "./Footer.css";
import twitterIcon from "../../assets/image/ic_social-twitter 1.svg";
import instagramIcon from "../../assets/image/ic_instagram 1.svg";
import dribbleIcon from "../../assets/image/ic_dribbble 1.svg";
import { Stack } from "@mui/material";

const Footer = () => {
  return (
    <footer className="footer">
      <Stack
        sx={{
          flexDirection: {
            xs: "column",
            md: "row",
          },
          justifyContent: "space-between",
          alignItems: "center",
          flex: 1,
        }}
      >
        <div className="footer--company_name">(c) Green Env Viet Nam</div>
        <div className="footer--contacts">
          <div className="footer--contact_gmail">greenenv@gmail.com</div>
          <div className="footer--contact_call">(+84) 921 365 478</div>
        </div>
        <div className="footer--icons">
          <img src={twitterIcon} alt="" className="footer--icon" />
          <img src={instagramIcon} alt="" className="footer--icon" />
          <img src={dribbleIcon} alt="" className="footer--icon" />
        </div>
      </Stack>
    </footer>
  );
};

export default Footer;
