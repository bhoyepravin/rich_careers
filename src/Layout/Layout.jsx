import React from "react";
import Navbar from "../Componants/Navbar/Navbar";
import Footer from "../Componants/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
