import React, { useState, useEffect } from "react";
import "./../styles/Projects.css";
import githubIcon from "./../assets/images/github.png";
import colabIcon from "./../assets/images/collab.jpg";
import kaggleIcon from "./../assets/images/kaggle.png";
import projectsContent from "./../assets/data/projects.json";

// Import images
import jobwizard from "./../assets/images/jobwizard.png";
import workshala from "./../assets/images/workshala.png";
import breastCancer from "./../assets/images/Breast_Cancer.png";
import titanic from "./../assets/images/titanic.png";
import digits from "./../assets/images/digits.png";
import etl from "./../assets/images/etl.png";

const imageMap = {
  "jobwizard.png": jobwizard,
  "workshala.png": workshala,
  "Breast_Cancer.png": breastCancer,
  "titanic.png": titanic,
  "digits.png": digits,
  "etl.png": etl,
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
      {/* Header Section */}
      <div className="projects-header">
        <h1 className="projects-title">
          <span className="bullet-point">■</span> Projects
        </h1>
        <p className="projects-description">
          This section showcases the projects I have built independently,
          reflecting my skills and passion for software development. Each
          project highlights different aspects of my expertise, from web
          applications to data analysis. I encourage you to explore the code and
          documentation available on my GitHub, where you can find detailed
          insights into my development process, technologies used, and the
          challenges I overcame.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button
          className={getButtonClass("All")}
          onClick={() => setFilter("All")}
        >
          All
        </button>
        <button
          className={getButtonClass("Data Science")}
          onClick={() => setFilter("Data Science")}
        >
          Data Science
        </button>
        <button
          className={getButtonClass("Full Stack Development")}
          onClick={() => setFilter("Full Stack Development")}
        >
          Full Stack Development
        </button>
      </div>

      {/* Project Section */}
      {filteredProjects.map((project, index) => (
        <div className="project" key={index}>
          <div className="project-section">
            <div className="project-info">
              <div className="project-details">
                <div className="vertical-bar"></div>
                <div className="project-content">
                  <h2 className="project-name">{project.name}</h2>
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
          <div className="social-icons">
            <p className="icon-text">Available on:</p>
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
        </div>
      ))}
    </div>
  );
};

export default Projects;
