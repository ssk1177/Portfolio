import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./../styles/Header.css";

const Header = () => {
  const location = useLocation(); // Get the current URL

  return (
    <header className="header">
      <div className="logo">
        <div className="bullet"></div>
        <span className="name">Suriender Singh &nbsp;</span>/ &nbsp;
        <span className="role-title">DATA SCIENTIST</span>
      </div>

      <nav className="navigation">
        <ul className="nav-links">
          <li>
            <Link
              to="/about"
              className={`nav-link ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              ABOUT ME
            </Link>
          </li>
          <li>
            <Link
              to="/resume"
              className={`nav-link ${
                location.pathname === "/resume" ? "active" : ""
              }`}
            >
              RESUME
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={`nav-link ${
                location.pathname === "/projects" ? "active" : ""
              }`}
            >
              PROJECTS
            </Link>
          </li>
          <li>
            <Link
              to="/certifications"
              className={`nav-link ${
                location.pathname === "/certifications" ? "active" : ""
              }`}
            >
              CERTIFICATIONS
            </Link>
          </li>
          <li>
            <Link
              to="/publications"
              className={`nav-link ${
                location.pathname === "/publications" ? "active" : ""
              }`}
            >
              PUBLICATIONS
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
