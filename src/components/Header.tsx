import React from "react";
import logo from "../assets/img/logo.svg";
function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo"/>
      <h1>GROW</h1>
    </div>
  );
}
export default Header;
