import React, { useState } from "react";
import { Alert, Box, Stack, Typography } from "@mui/material";
import logoSource from "../../assets/logo/logoGreen.png";
import FormInput from "../../components/form/FormInput";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import ButtonGradient from "../../components/form/ButtonGradient";
import AuthLayout from "../../components/layouts/AuthLayout";
import { firebaseAuth } from "../../setup/firebase";
import { fetchUser } from "../../setup/stores/user.reducer";
import { signInError } from "../../utils/common";
import { removeLoading, setLoading } from "../../setup/stores/loading.reducer";
import { useAppDispatch } from "../../setup/stores";
import { useNavigate } from "react-router";

interface Props {}
const Login = (props: Props) => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const onSignIn = async () => {
    try {
      dispatch(setLoading());
      const userCredential = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      const user = userCredential.user;
      localStorage.setItem("uid", user.uid);
      await dispatch(fetchUser(user.uid));
      navigate("/");
    } catch (err: any) {
      const error = signInError(err, email);
      setErr(error);
    } finally {
      dispatch(removeLoading());
    }
  };

  return (
    <AuthLayout>
      {/* Error */}
      {err && <Alert severity="error">{err}</Alert>}
      {/* Logo */}
      <Box>
        <img src={logoSource} alt="auth-logo" width={80} height={96} />
      </Box>
      {/* Title */}
      <Box>
        <Typography color={"primary"} fontWeight={700} fontSize={24}>
          Đăng nhập tài khoản của bạn
        </Typography>
        <Typography fontSize={13}>
          Bạn chưa có tài khoản?
          <Link color="#015CC8" to={"/signup"}>
            <span style={{ fontWeight: 700, marginLeft: 4 }}>Đăng ký</span>
          </Link>
        </Typography>
      </Box>
      {/* Input */}
      <Stack spacing={2}>
        <FormInput
          placeholder="Email"
          value={email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(event.target.value);
          }}
        />
        <FormInput
          placeholder="Mật khẩu"
          showIcon={true}
          value={password}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(event.target.value);
          }}
        />
        <Box textAlign={"end"} fontWeight={400} fontSize={13}>
          <Link to={"/forgetpassword"} color={"#015CC8"}>
            Quên mật khẩu
          </Link>
        </Box>
      </Stack>
      {/* Btn */}
      <ButtonGradient btnText="Đăng nhập" onClick={onSignIn} />
    </AuthLayout>
  );
};

export default Login;
