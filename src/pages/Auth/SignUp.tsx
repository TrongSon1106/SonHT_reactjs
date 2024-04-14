import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import logoSource from "../../assets/logo/logoGreen.png";
import FormInput from "../../components/form/FormInput";
import { Link, useNavigation } from "react-router-dom";
import ButtonGradient from "../../components/form/ButtonGradient";
import AuthLayout from "../../components/layouts/AuthLayout";
import { convertPlaceHolderName, signUpError } from "../../utils/common";
import { IUser } from "../../types/user";
import { useAppDispatch } from "../../setup/stores";
import { setError } from "../../setup/stores/error.reducer";
import { removeLoading, setLoading } from "../../setup/stores/loading.reducer";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth, firebaseDB } from "../../setup/firebase";
import { doc, setDoc } from "firebase/firestore";
import { fetchUser } from "../../setup/stores/user.reducer";
import { ROLES } from "../../setup/routes/RouterConfig";
import { useNavigate } from "react-router";

interface Props {}

interface IFormData {
  [key: string]: string;
}
const SignUp = (props: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<IFormData>({
    email: "",
    name: "",
    phone: "",
    password: "",
    rePassword: "",
  });
  const inputField = ["email", "name", "phone", "password", "rePassword"];

  const onSignedUp = async () => {
    try {
      // Check match password
      if (formData.password !== formData.rePassword) {
        dispatch(
          setError({
            title: "ERROR",
            message: "your password doesn't match with confirm password",
          })
        );
        return;
      }
      //Sign up
      dispatch(setLoading());
      const userCredential = await createUserWithEmailAndPassword(
        firebaseAuth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;
      const profileRegister = {
        id: user.uid,
        ...formData,
        roles: [ROLES.USER],
        score: 0,
      };
      await setDoc(doc(firebaseDB, "users", user.uid), profileRegister);
      // await AsyncStorage.setItem("uid", user.uid);
      localStorage.setItem("uid", user.uid);
      await dispatch(fetchUser(user.uid));
      navigate("/");
    } catch (err: any) {
      //Check exist
      const error = signUpError(err, formData.email);
      dispatch(
        setError({
          title: "ERROR",
          message: error,
        })
      );
    } finally {
      dispatch(removeLoading());
    }
  };

  return (
    <AuthLayout>
      {/* Logo */}
      <Box>
        <img src={logoSource} alt="auth-logo" width={80} height={96} />
      </Box>
      {/* Title */}
      <Box>
        <Typography color={"primary"} fontWeight={700} fontSize={24}>
          Đăng ký tài khoản của bạn
        </Typography>
        <Typography fontSize={13}>
          Bạn đã có sẵn một tài khoản?
          <Link color="#015CC8" to={"/login"}>
            <span style={{ fontWeight: 700, marginLeft: 4 }}>Đăng nhập</span>
          </Link>
        </Typography>
      </Box>
      {/* Input */}
      <Stack spacing={2}>
        {inputField.map((field) => (
          <Box key={field}>
            <FormInput
              placeholder={convertPlaceHolderName(field)}
              showIcon={
                field === "password" || field === "rePassword" ? true : false
              }
              value={formData[field]}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setFormData({ ...formData, [field]: event.target.value });
              }}
            />
          </Box>
        ))}
      </Stack>
      {/* Btn */}
      <ButtonGradient btnText="Đăng ký" onClick={onSignedUp} />
    </AuthLayout>
  );
};

export default SignUp;
