import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { RootState, useAppSelector } from "../stores";

type Props = {};

const GuestRoute = ({}: Props) => {
  const location = useLocation();
  const { user } = useAppSelector((state: RootState) => state.user);
  return user ? (
    <Navigate to={"/"} state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};

export default GuestRoute;
