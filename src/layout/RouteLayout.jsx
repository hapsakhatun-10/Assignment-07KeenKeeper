import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Navber from "../shared/Navber";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RouteLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navber />

      {/* main content */}
      <div className="flex-1">
        <Outlet />
      </div>

      <Footer />

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default RouteLayout;
