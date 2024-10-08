import React from "react";
import "./../styles/MainContent.css";
import profilephoto from "./../assets/images/profilephoto.jpeg";
import linkedInIcon from "./../assets/images/linkedIn.png";
import githubIcon from "./../assets/images/github.png";
import kaggleIcon from "./../assets/images/kaggle.png";
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
          <h2 className="profile-name">Suriender Singh</h2>
          <p className="role">Data Scientist</p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/suriender-singh/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="social-icon" src={linkedInIcon} alt="LinkedIn" />
            </a>
            <a
              href="https://github.com/ssk1177"
              target="_blank"
              rel="noreferrer"
            >
              <img className="social-icon" src={githubIcon} alt="GitHub" />
            </a>
            <a
              href="https://www.kaggle.com/suriender"
              target="_blank"
              rel="noreferrer"
            >
              <img className="social-icon" src={kaggleIcon} alt="Kaggle" />
            </a>
          </div>
        </div>
        <div className="bio-section">
          <h3>Hello!</h3>
          <h1 className="name-style">
            I'm <b>Suriender</b>
          </h1>
          <p className="name-bio">
            With a unique blend of expertise across data engineering, data
            science, data analysis, and full stack development, I specialize in
            building end-to-end data-driven solutions.
          </p>
          <div className="buttons">
            <button
              className="button resume"
              onClick={() => navigate("/resume")} // Navigate to /resume
            >
              <span className="icon">📄</span>
              Resume
            </button>

            <button
              className="button projects"
              onClick={() => navigate("/projects")} // Navigate to /projects
            >
              <span className="icon">📁</span>
              Projects
            </button>
          </div>
          <div className="tech-exp">
            <p>🔧 Technical Expertise:</p>
            <ul>
              <li>
                Data Engineering
                <ul>
                  <li>
                    Building ETL pipelines (Azure Synapse Analytics, AWS Glue)
                  </li>
                  <li>Data warehousing (Amazon Redshift)</li>
                </ul>
              </li>
              <li>
                Data Science & Analysis:
                <ul>
                  <li>Predictive Analytics</li>
                  <li>Machine learning (Python, R)</li>
                  <li>Data visualization (Power BI)</li>
                </ul>
              </li>
              <li>
                Full Stack Development
                <ul>
                  <li>Web applications (React, Python-Flask, OJET)</li>
                  <li>API development (Java Spring Boot)</li>
                  <li>Cloud integration (AWS, Netlify, Heroku)</li>
                </ul>
              </li>
            </ul>
            <p>
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
