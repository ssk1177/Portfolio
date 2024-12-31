import React, { useState, useEffect } from "react";
import "./../styles/Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faCode,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import projectsContent from "./../assets/data/projects.json";

// Import images
import githubIcon from "./../assets/images/github.webp";
import colabIcon from "./../assets/images/collab.webp";
import kaggleIcon from "./../assets/images/kaggle.webp";
import jobwizard from "./../assets/images/jobwizard.webp";
import workshala from "./../assets/images/workshala.webp";
import breastCancer from "./../assets/images/Breast_Cancer.webp";
import titanic from "./../assets/images/titanic.webp";
import digits from "./../assets/images/digits.webp";
import etl from "./../assets/images/etl.webp";

const imageMap = {
  "jobwizard.webp": jobwizard,
  "workshala.webp": workshala,
  "Breast_Cancer.webp": breastCancer,
  "titanic.webp": titanic,
  "digits.webp": digits,
  "etl.webp": etl,
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("All");

  
  // Fetch the project data from the JSON file
  useEffect(() => {
    setProjects(projectsContent);
  }, []);

  const filteredProjects = projects.filter((project) =>
    filter === "All" ? true : project.category === filter
  );

  const getButtonClass = (option) => (filter === option ? "active" : "");

  return (
    <div className="projects-container">
      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button
          className={getButtonClass("All")}
          onClick={() => setFilter("All")}
        >
          <FontAwesomeIcon icon={faLayerGroup} /> All
        </button>
        <button
          className={getButtonClass("Data Science")}
          onClick={() => setFilter("Data Science")}
        >
          <FontAwesomeIcon icon={faDatabase} /> Data Science
        </button>
        <button
          className={getButtonClass("Full Stack Development")}
          onClick={() => setFilter("Full Stack Development")}
        >
          <FontAwesomeIcon icon={faCode} /> Full Stack Development
        </button>
      </div>

      {/* Project Section */}
      {filteredProjects.map((project, index) => (
        <div className="project" key={index}>
          <div className="social-icons">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="social-icon" src={githubIcon} alt="GitHub" />
              </a>
            )}
            {project.colab && (
              <a href={project.colab} target="_blank" rel="noopener noreferrer">
                <img className="social-icon" src={colabIcon} alt="Colab" />
              </a>
            )}
            {project.kaggle && (
              <a
                href={project.kaggle}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="social-icon" src={kaggleIcon} alt="Kaggle" />
              </a>
            )}
          </div>
          <div className="project-section">
            <div className="project-info">
              <div className="project-details">
                <div className="vertical-bar"></div>
                <div className="project-content">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h2 className="project-name">{project.name}</h2>
                  </a>
                  <h3 className="project-role">{project.role}</h3>
                </div>
              </div>
              <p className="project-description">{project.description}</p>
            </div>
            <div className="project-image">
              <img src={imageMap[project.image]} alt={project.name} />
            </div>
          </div>
          <div className="tech-stack">
            <p>
              <b>Tech Stack:</b> {project.techStack}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
