import React from "react";
import Header from "../../components/layouts/Header";
import Footer from "../../components/layouts/Footer";
import { Outlet } from "react-router-dom";

type Props = {};

const LayoutRoute = (props: Props) => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayoutRoute;
