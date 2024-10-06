import React, { useEffect, useState, useRef } from "react";
import "./../styles/Resume.css";
import resumeContent from "./../assets/data/resumeContent.json"
import downloadCv from "./../assets/data/Suriender_Singh_DA.pdf"

const Resume = () => {
  const [resumeData, setResumeData] = useState(null);

  useEffect(() => {
    setResumeData(resumeContent);
  }, []);

  if (!resumeData) {
    return <div>Loading...</div>; // Show a loading message until the data is fetched
  }

  return (
    <div className="resume-container">
      <div className="resume-outer">
        {/* Resume Title Section */}
        <header className="resume-title">
          <h1 className="resume-header">
            <span className="bullet-point">■</span> {resumeData.title}
          </h1>
          <a
            href={downloadCv}
            className="download-cv-button"
            download={downloadCv}
            target="_blank"
            rel="noopener noreferrer"
          >
            DOWNLOAD CV
          </a>
        </header>

        {/* Experience Section */}
        <section className="experience-section">
          <h2 className="sub-header">Experience</h2>
          <div className="tile-container">
            {resumeData.experience.map((job, index) => (
              <Tile
                key={index}
                duration={job.duration}
                position={job.position}
                company={job.company}
                location={job.location}
                description={job.projects.map((project) => ({
                  project: project.title,
                  proj_details: project.details,
                  points: project.points,
                }))}
              />
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="education-section">
          <h2 className="sub-header">Education</h2>
          <div className="tile-container">
            {resumeData.education.map((edu, index) => (
              <Tile
                key={index}
                duration={edu.duration}
                position={edu.position}
                company={edu.company}
                location={edu.location}
                wes_equivalency={edu.wes_equivalency}
                grade={edu.grade}
                awards={edu.awards}
                description={edu.description}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const Tile = ({
  duration,
  position,
  company,
  location,
  description,
  wes_equivalency,
  grade,
  awards,
}) => (
  <div className="tile">
    <div className="tile-header">
      <div className="tile-work">
        <h3 className="tile-company">{company}</h3>
        <h3 className="tile-duration">{duration}</h3>
      </div>
      <div className="tile-pos-loc">
        <p className="tile-position">
          <strong>{position}</strong>
        </p>

        <p className="tile-location">
          <strong> {location} </strong>
        </p>
      </div>
      {wes_equivalency && (
        <p className="tile-wes">
          <strong>WES Canadian Equivalency: </strong>
          {wes_equivalency}
        </p>
      )}
      {grade && (
        <p className="tile-grade">
          <strong>Grade: </strong>
          {grade}
        </p>
      )}
      {awards && (
        <p className="tile-awards">
          <strong>Awards: </strong>
          {awards}
        </p>
      )}
    </div>
    <div className="tile-description">
      {Array.isArray(description) ? (
        description.map((desc, index) => (
          <div key={index}>
            {desc.project ? <h4 className="proj-title">Project: {desc.project}</h4> : null}
            {desc.proj_details ? <h4 className="proj-desc">{desc.proj_details}</h4> : null}
            <ul>
              {Array.isArray(desc.points) ? (
                desc.points.map((point, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: point }} />
                ))
              ) : (
                <li dangerouslySetInnerHTML={{ __html: desc }} />
              )}
            </ul>
          </div>
        ))
      ) : (
        <p dangerouslySetInnerHTML={{ __html: description }} />
      )}
    </div>
  </div>
);


export default Resume;
