import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Navber from "../shared/Navber";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RouteLayout = () => {
  return (
    <>
      <Navber />

      {/* dynamic content */}
      <Outlet />

      <Footer />

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
};

export default RouteLayout;
