import React from "react";
import Logo from "../../images/logo.png";
import { Navbar } from "react-bootstrap";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar-container">
      <Navbar>
        <Navbar.Brand href="https://wagepoint.com/ca/" target="_blank">
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default NavBar;
