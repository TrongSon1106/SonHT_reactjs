import React, { ReactNode } from "react";
import { Box, Grid, Stack } from "@mui/material";
import imageSource from "../../assets/image/login-bg.png";
import { makeStyles } from "tss-react/mui";

interface Props {
  children: ReactNode;
}
const AuthLayout = (props: Props) => {
  const { classes } = useStyles();
  const { children } = props;

  return (
    <Box flex={1}>
      <Grid container>
        <Grid item xs={0} sm={6} md={8}>
          <Box height={"100vh"}>
            <img
              src={imageSource}
              alt="auth-img"
              className={classes.imgStyle}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            height={"100%"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Stack textAlign={"center"} spacing={6} px={6}>
              {/* Content here */}
              {children}
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const useStyles = makeStyles()((theme) => ({
  imgStyle: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
}));

export default AuthLayout;
