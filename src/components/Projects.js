import React from "react";
import "./../styles/Projects.css";
import jobwizard from "./../assets/images/jobwizard.png"
import workshala from "./../assets/images/workshala.png"

const Projects = () => {
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

      {/* Project Section */}
      <div className="project">
        <div className="project-info">
          <div className="project-details">
            <div class="vertical-bar"></div>
            <div class="project-content">
              <h2 className="project-name">JobWizard</h2>
              <h3 className="project-role">
                AI-Based Application for Automating the Job Application Process
              </h3>
            </div>
          </div>
          <p className="project-description">
            An end-to-end intelligent application that streamlines the job
            search and application process. It leverages BeautifulSoup to
            extract job openings from platforms like LinkedIn and Indeed,
            evaluates the compatibility of these listings with the user's resume
            using TF-IDF and BERT models, and automatically submits applications
            for positions that match the user's qualifications.
          </p>
        </div>
        <div className="project-image">
          <img src={jobwizard} alt="jobwizard" />
        </div>
      </div>
      <div className="project">
        <div className="project-info">
          <div className="project-details">
            <div class="vertical-bar"></div>
            <div class="project-content">
              <h2 className="project-name">Workshala</h2>
              <h3 className="project-role">
                Portal aimed at providing a bridge between organizations and job
                seekers.
              </h3>
            </div>
          </div>
          <p className="project-description">
            An advertiser can post the job requirements, search for resumes,
            connect with job seekers and schedule an interview process while the
            job seeker can search for the organisations, apply to a post and
            track their interview process. This will help both organisations and
            job seekers to connect and grow together.
          </p>
        </div>
        <div className="project-image">
          <img src={workshala} alt="workshala" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
