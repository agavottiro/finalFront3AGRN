import React from "react";
import { Outlet } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <Outlet />
      <footer>
        <p>Powered by</p>
        <img src="/images/DH.png" alt="DH-logo" />
    </footer>
    </div>
  );


};

export default Footer;
