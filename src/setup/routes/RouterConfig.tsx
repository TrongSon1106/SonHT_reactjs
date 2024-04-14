import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "../../pages/Profile/Profile";
import Missing from "../../pages/Missing/Missing";
import Dashboard from "../../pages/Dashboard/Dashboard";
import UnAuthorized from "../../pages/UnAuthorized/UnAuthorized";
import Login from "../../pages/Auth/Login";
import SignUp from "../../pages/Auth/SignUp";
import { useAppDispatch } from "../stores";
import { removeLoading, setLoading } from "../stores/loading.reducer";
import { fetchUser } from "../stores/user.reducer";
import GuestRoute from "./GuestRoute";
import Activity from "../../pages/Activity/Activity";
import LayoutRoute from "./LayoutRoute";
import Contact from "../../pages/Contact/Contact";
import Missions from "../../pages/Missions/Missions";
import MissionDetails from "../../pages/MissionDetails/MissionDetails";

type Props = {};

export const ROLES = {
  USER: "0",
  ADMIN: "1",
};

const RouterConfig = (props: Props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      dispatch(setLoading());
      const uid = localStorage.getItem("uid");
      if (uid) {
        await dispatch(fetchUser(uid));
      }
      dispatch(removeLoading());
    })();
    return () => {};
  }, []);

  return (
    <Routes>
      {/* Add error, loading */}

      {/* public routes */}
      <Route element={<LayoutRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="mission" element={<Missions />} />
        <Route path="/mission/:id" element={<MissionDetails />} />
        <Route path="about" element={<About />} />
        <Route path="activity" element={<Activity />} />
        <Route path="unauthorized" element={<UnAuthorized />} />
        <Route path="contact" element={<Contact />} />
        {/* For user */}
        <Route element={<ProtectedRoute allowedRoles={[ROLES.USER]} />}>
          <Route path="/profile/:id" element={<Profile />} />
        </Route>
        {/* For Admin */}
        <Route element={<ProtectedRoute allowedRoles={[ROLES.ADMIN]} />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        {/* Catch all */}
        <Route path="*" element={<Missing />} />
      </Route>

      <Route element={<GuestRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
};

export default RouterConfig;
