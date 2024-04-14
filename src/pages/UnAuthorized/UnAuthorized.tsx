import { Typography } from "@mui/material";
import React from "react";

type Props = {};

const UnAuthorized = (props: Props) => {
  return (
    <div
      style={{
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h1" component="h2">
        UnAuthorized
      </Typography>
    </div>
  );
};

export default UnAuthorized;
