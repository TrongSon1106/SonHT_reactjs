import { Box, Button, ButtonProps } from "@mui/material";
import React from "react";
import { makeStyles } from "tss-react/mui";

type Props = {
  btnText: string;
} & ButtonProps;

const ButtonGradient = (props: Props) => {
  const { btnText, ...btnProps } = props;
  const { classes } = useStyles();

  return (
    <Box width={"100%"}>
      <Button fullWidth className={classes.btnStyle} {...btnProps}>
        {btnText}
      </Button>
    </Box>
  );
};

const useStyles = makeStyles()((theme) => ({
  btnStyle: {
    background: "linear-gradient(to right, #46F04E, #ADE34D);",
    color: "#1F201D",
    fontWeight: 700,
    fontSize: 15,
    borderRadius: 100,
    paddingTop: 11,
    paddingBottom: 11,
  },
}));

export default ButtonGradient;
