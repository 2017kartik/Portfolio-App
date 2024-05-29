import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        Web
        <span style={{ color: "#078efb" }}>Dev</span>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <a href="../Header">About me</a>
          </li>
          <li>
            <a href="../Services/Services.js">Skills</a>
          </li>
          <li>
            <a href="/">Portfolio</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
