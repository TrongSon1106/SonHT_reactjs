import { Typography } from "@mui/material";
import { useNavigate } from "react-router";

type Props = {};

const Missing = (props: Props) => {
  const navigate = useNavigate();

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
        Page not Found
      </Typography>
    </div>
  );
};

export default Missing;
