// Header.js
import React from "react";
import "./../styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <div className="bullet"></div>
        <span className="name">Suriender Singh &nbsp;</span> / &nbsp; DATA
        SCIENTIST
      </div>

      <nav className="navigation">
        <ul className="nav-links">
          <li>
            <Link to="/about">ABOUT ME</Link>
          </li>
          <li>
            <Link to="/resume">RESUME</Link>
          </li>
          <li>
            <Link to="/projects">PROJECTS</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
