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
            <Link to="/about" className="nav-link">
              ABOUT ME
            </Link>
          </li>
          <li>
            <Link to="/resume" className="nav-link">
              RESUME
            </Link>
          </li>
          <li>
            <Link to="/projects" className="nav-link">
              PROJECTS
            </Link>
          </li>
          <li>
            <Link to="/publications" className="nav-link">
              PUBLICATIONS
            </Link>
          </li>
          <li>
            <Link to="/contactform" className="nav-link">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
