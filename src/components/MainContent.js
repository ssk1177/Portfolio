// MainContent.js
import React from "react";
import "./../styles/MainContent.css";
import profilephoto from "./../assets/images/profilephoto.jpeg";
import linkedInIcon from "./../assets/images/linkedIn.png";
import githubIcon from "./../assets/images/github.png";
import { useNavigate } from "react-router-dom";

const MainContent = () => {

    const navigate = useNavigate();
    
  return (
    <main className="main-content">
      <div className="center-section">
        <div className="profile-card">
          <img
            className="profile-image"
            src={profilephoto}
            alt="Suriender Singh"
          />
          <h2>Suriender Singh</h2>
          <p className="role">Data Scientist</p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/suriender-singh/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="linkedin-icon"
                src={linkedInIcon}
                alt="LinkedIn"
              />
            </a>
            <a
              href="https://github.com/ssk1177"
              target="_blank"
              rel="noreferrer"
            >
              <img className="github-icon" src={githubIcon} alt="GitHub" />
            </a>
          </div>
        </div>
        <div className="bio-section">
          <div>
            <h1 style={{ fontSize: "50px", textAlign: "left" }}>
              Hello! This is <b>Suriender</b>
            </h1>
            <p style={{ textAlign: "justify" }}>
              With a unique blend of expertise across data engineering, data
              science, data analysis, and full stack development, I specialize
              in building end-to-end data-driven solutions.
            </p>
          </div>
          <div className="buttons">
            <button
              className="resume-btn"
              onClick={() => {
                navigate("/resume"); // Navigate to the resume page
              }}
            >
              Resume
            </button>
            <button className="projects-btn">Projects</button>
          </div>
          <div>
            <p style={{ "text-align": "justify" }}>🔧 Technical Expertise:</p>
            <ul style={{ "text-align": "left" }}>
              <li>
                Data Engineering
                <ul>
                  <li>Building ETL pipelines</li>
                  <li>data warehousing (SQL, NoSQL)</li>
                </ul>
              </li>
              <li>
                Data Science & Analysis:
                <ul>
                  <li>Predictive analytics</li>
                  <li>machine learning (Python, R)</li>
                  <li>data visualization (Power BI)</li>
                </ul>
              </li>
              <li>
                Full Stack Development
                <ul>
                  <li>Web applications (React, Spring Boot)</li>
                  <li>API development</li>
                  <li>cloud integration (AWS)</li>
                </ul>
              </li>
            </ul>
            <p style={{ textAlign: "justify" }}>
              I am passionate about leveraging my skills to bridge the gap
              between data, technology, and business strategy, delivering
              solutions that scale and drive measurable impact.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
