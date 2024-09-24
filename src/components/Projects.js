import React, { useState } from "react";
import "./../styles/Projects.css";
import jobwizard from "./../assets/images/jobwizard.png";
import workshala from "./../assets/images/workshala.png";
import breastCancer from "./../assets/images/Breast_Cancer.png";
import githubIcon from "./../assets/images/github.png";
import colabIcon from "./../assets/images/collab.jpg";
import kaggleIcon from "./../assets/images/kaggle.png";
import titanic from "./../assets/images/titanic.png";
import digits from "./../assets/images/digits.png"
import etl from "./../assets/images/etl.png";


const Projects = () => {
  const [filter, setFilter] = useState("All");

  // Project data
  const projects = [
    {
      name: "JobWizard",
      role: "AI-Based Application for Automating the Job Application Process",
      description:
        "An end-to-end intelligent application that streamlines the job search and application process. It leverages BeautifulSoup to extract job openings from platforms like LinkedIn and Indeed, evaluates the compatibility of these listings with the user's resume using TF-IDF and BERT models, and automatically submits applications for positions that match the user's qualifications.",
      image: jobwizard,
      category: "Full Stack Development",
      techStack:
        "Java Spring Boot, React, Python, Machine Learning (TF-IDF Cosine, Bert), MySQL, CI/CD, Hosted on (Amazon EC2, AWS S3)",
      github: "https://github.com/ssk1177/JobWizard",
    },
    {
      name: "Workshala",
      role: "Portal aimed at providing a bridge between organizations and job seekers.",
      description:
        "An advertiser can post job requirements, search for resumes, connect with job seekers, and schedule an interview process. Job seekers can search for organizations, apply to posts, and track their interview process. This helps both organizations and job seekers connect and grow together.",
      image: workshala,
      category: "Full Stack Development",
      techStack: "React, Redux, MongoDB, Netlify, Figma",
      github: "https://github.com/pesto-students/workshala-fe-n13-beta-2",
    },
    {
      name: "Breast Cancer Wisconsin (Diagnostic)",
      role: "Predicting whether a patient has breast cancer based on diagnostic measurements.",
      description:
        "This project uses machine learning to analyze diagnostic measurements and predict breast cancer presence.",
      image: breastCancer,
      category: "Data Science",
      techStack: "Python, SKlearn, Pandas, Numpy, Seaborn, Scipy",
      colab:
        "https://colab.research.google.com/drive/1EjqlHFlGjQ6jBR35Dlv3z7nETdGSaSLa?usp=sharing",
      github:
        "https://github.com/ssk1177/Predictive-Analytics/blob/main/Breast_Cancer_Wisconsin_(Diagnostic).ipynb",
    },
    {
      name: "Titanic passengers Survival Analysis",
      role: "The original Titanic dataset, describing the survival status of individual passengers on the Titanic.",
      description:
        "The objective is to evaluate tree-based ensemble models including random forest, gradient boosted and adaboost classifiers using the cleaned and preprocessed version of the Titanic dataset.",
      image: titanic,
      category: "Data Science",
      techStack:
        "Python, SKlearn, Pandas, Numpy, Matplotlib, seaborn, Ensembles (RandomForestClassifier, GradientBoostingClassifier, AdaBoostClassifier)",
      colab:
        "https://colab.research.google.com/drive/1gRXuRCSSodzaDX2WBzgjtV7SR2IUzE7z?usp=sharing",
      github:
        "https://github.com/ssk1177/Predictive-Analytics/blob/main/Titanic_passengers_Survival_Analysis.ipynb",
    },
    {
      name: "ETL with Python",
      role: "The Aim is to perform ETL (Extract, Transform and Load) on different file formats (json, xml, csv).",
      description:
        "Implemented an ETL pipeline in Python that ingests and integrates data from sources in different file formats, transforms the data, and loads the transformed data into a destination repository.",
      image: etl,
      category: "Data Science",
      techStack: "Python, ETL, Pandas",
      kaggle: "https://www.kaggle.com/code/suriender/etl-with-python/notebook",
      github:
        "https://github.com/ssk1177/Predictive-Analytics/blob/main/ETL_with_Python.ipynb",
    },
    {
      name: "Evaluation & Optimization",
      role: "Objective is to train and evaluate three (3) classification models with different algorithms (SVM, Logistic regression, & KNN) and compare the performance on the test dataset using multiple measures of performance.",
      description:
        "The digits dataset consists of 8x8 pixel images of digits. The images attribute of the dataset stores 8x8 arrays of grayscale values for each image.",
      image: digits,
      category: "Data Science",
      techStack: "Python, ETL, Pandas",
      colab:
        "https://colab.research.google.com/drive/1g8VFbUUff0ySHiAlFq-F98Tff9XTvwpg?usp=sharing",
      github:
        "https://github.com/ssk1177/Predictive-Analytics/blob/main/Evaluation_%26_Optimization.ipynb",
    },
  ];

  // Filtered projects based on the current filter
  const filteredProjects = projects.filter((project) =>
    filter === "All" ? true : project.category === filter
  );

  // Function to get button class based on selection
  const getButtonClass = (option) => {
    return filter === option ? "active" : "";
  };

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
          challenges I overcame. These projects not only demonstrate my
          technical abilities but also my commitment to continuous learning and
          improvement in the field.
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
              <img src={project.image} alt={project.name} />
            </div>
          </div>
          <div className="tech-stack">
            <p>
              <b>Tech Stack:</b> {project.techStack}
            </p>
          </div>
          <div className="social-icons">
            <p className="icon-text">Available on:</p>
            {project.colab && (
              <a
                className="social-icon"
                href={project.colab}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="social-icon"
                  src={colabIcon}
                  alt="Google Colab"
                />
              </a>
            )}
            {project.github && (
              <a
                className="social-icon"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <img className="social-icon" src={githubIcon} alt="GitHub" />
              </a>
            )}
            {project.kaggle && (
              <a
                className="social-icon"
                href={project.kaggle}
                target="_blank"
                rel="noreferrer"
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
