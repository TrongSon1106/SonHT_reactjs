import React from "react";
import "./JoinInvitation.css";
import { Grid, Stack, Box } from "@mui/material";
import ButtonGradient from "../../../components/form/ButtonGradient";
import { contactData } from "../Contact";

const JoinInvitation = () => {
  return (
    <Grid className="joinInvitation">
      <Stack className="ji--content_container">
        <div className="ji--headline">{contactData.group1.title}</div>
        <div className="ji--text">{contactData.group1.content}</div>
        <div className="ji--buttons">
          <Box className="ji--button">
            <ButtonGradient
              btnText={contactData.group1.gmail}
              style={{ borderRadius: 8, padding: "24px 22px", color: "#000" }}
              disabled={true}
            />
          </Box>
          <Box className="ji--button">
            <ButtonGradient
              btnText={contactData.group1.phone}
              style={{
                borderRadius: 8,
                padding: "24px 22px",
                background: "var(--neutral-black-10, rgba(31, 32, 29, 0.10))",
                color: "#000",
              }}
              disabled={true}
            />
          </Box>
        </div>
      </Stack>
    </Grid>
  );
};

export default JoinInvitation;
