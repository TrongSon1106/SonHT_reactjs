import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputBase,
  InputBaseProps,
} from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { RemoveRedEye, Visibility, VisibilityOff } from "@mui/icons-material";

type Props = {
  showIcon?: boolean;
} & InputBaseProps;

const FormInput = (props: Props) => {
  const { classes } = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const { showIcon = false, security, ...inputProps } = props;

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Box width={"100%"}>
      <InputBase
        fullWidth
        className={classes.inputStyle}
        type={showIcon && !showPassword ? "password" : "text"}
        endAdornment={
          showIcon && (
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              style={{ width: 40, height: 40, marginRight: 12 }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          )
        }
        {...inputProps}
      />
    </Box>
  );
};

const useStyles = makeStyles()((theme) => ({
  inputStyle: {
    borderRadius: 8,
    backgroundColor: "#1F201D0D",
    padding: "14px 12px",
    fontSize: 16,
  },
}));

export default FormInput;
