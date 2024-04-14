import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { RootState, useAppSelector } from "../stores";

type Props = {
  allowedRoles: string[];
};

const ProtectedRoute = ({ allowedRoles }: Props) => {
  const location = useLocation();
  const { user } = useAppSelector((state: RootState) => state.user);
  console.log("🚀 ~ file: ProtectedRoute.tsx:12 ~ ProtectedRoute ~ user:", user)
  return user?.roles?.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : user ? (
    <Navigate to={"/unauthorized"} state={{ from: location }} replace />
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
