import React from "react";
import "./../styles/Resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="resume-outer">
        {/* Resume Title Section */}
        <header className="resume-title">
          <h1 className="resume-header">
            <span className="bullet-point">■</span> Resume
          </h1>
          <a
            href="/assets/Suriender_Singh_DA.pdf"
            className="download-cv-button"
            download="suriender_singh_CV.pdf"
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
            {/* Job Experience 1 */}
            <Tile
              duration="June 29, 2015 - Sep 24, 2020"
              position="Senior Applications Engineer"
              company="Oracle India Pvt. Ltd."
              location="Bangalore, India"
              description={[
                {
                  project:
                    "Adaptive Intelligent Apps for Manufacturing (AIAMFG)",
                  points: [
                    "Led implementation of model-building module applying various machine-learning algorithms.",
                    "Implemented machine learning algorithms using ORE.",
                    "Automated web application testing using Selenium, saving over 500 employee hours.",
                    "Utilized JDeveloper and SQL Developer for application development and database management.",
                  ],
                },
                {
                  project: "Oracle Validation Test Suite (VTS)",
                  points: [
                    "Implemented stress testing algorithms in C language.",
                    "Developed cross-platform features for VTS.",
                    "Used GDB for debugging C code.",
                    "Optimized software solutions across various operating systems.",
                  ],
                },
              ]}
            />
            {/* Job Experience 2 */}
            <Tile
              duration="Nov 25, 2020 - Aug 11, 2023"
              position="Senior Member of Technical Staff"
              company="Agnity Communications (Acquired by TNS)"
              location="Noida, India"
              description={[
                {
                  project: "ATF (Advanced Toll-Free)",
                  points: [
                    "Managed a team of four developers on agile practices.",
                    "Orchestrated task schedules and held daily stand-ups.",
                    "Captured customer requirements and documented them comprehensively.",
                    "Conducted code reviews for quality assurance.",
                  ],
                },
                {
                  project: "Defend",
                  points: [
                    "Designed and developed end-to-end applications using React and Java.",
                    "Maintained REST APIs for application components.",
                    "Demonstrated applications to stakeholders.",
                    "Implemented CI/CD pipelines for rapid deployment.",
                  ],
                },
              ]}
            />
          </div>
        </section>

        {/* Education Section */}
        <section className="education-section">
          <h2 className="sub-header">Education</h2>
          <div className="tile-container">
            {/* Education 1 */}
            <Tile
              duration="September 2023 – October 2024 (Anticipated)"
              position="Post Degree Diploma in Predictive Analytics"
              company="University of Winnipeg"
              location="Winnipeg, Canada"
              grade="Grade: 4.24/4.5"
              awards="Awarded Program Top Student"
              description={[
                "<ul><li>Designed and implemented Python-based ETL pipeline in Jupyter Notebook to integrate diverse data formats into MongoDB and Postgres databases, and execute transformations.</li><br/><li>Generated statistical reports and visualizations for datasets, including Malware detection in IoT devices and Credit card fraud prediction.</li><br/><li>Employed shell scripting to orchestrate ETL processes, handling ingestion, extraction, and data transformations from remote sources.</li></ul>",
              ]}
            />
            {/* Education 2 */}
            <Tile
              duration="October 2012 – June 2015"
              position="Master of Science (by Research) in Computer Science and Technology"
              company="National Institute of Technology (NIT)"
              location="Trichy, India"
              wes_equivalency="WES Canadian Equivalency: Master's degree."
              grade="Grade: 8.2/10"
              description={[
                "<b>Publications:</b> <br/><ul><li> Suriender Singh and S. Selvakumar, “Detection of Distributed Denial of Service Attacks Using Panel of Experts”, Bilingual International Conference on Information Technology: Yesterday, Today, and Tomorrow, 19 - 21, Feb.’15, DRDO, Delhi, pp. 248 - 254, DESIDOC. </li><br/><li> Suriender Singh and S. Selvakumar, “A hybrid feature subset selection by combining filters and genetic algorithm”, In Proceedings of International Conference on Computing, Communication & Automation (ICCCA), Greater Noida, India, 15-16 May 2015, pp. 283-289.</li></ul>",
              ]}
            />
            {/* Education 3 */}
            <Tile
              duration="June 2007 – May 2011"
              position="Bachelor of Technology (B. Tech) in Information Technology"
              company="Uttarakhand Technical University"
              location="Dehradun, India"
              wes_equivalency="WES Canadian Equivalency: Bachelor's degree (four years)."
              grade="Grade: 76%"
            />
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
      <h3 className="tile-duration">{duration}</h3>
      <p className="tile-position">{position}</p>
      <p className="tile-company">{company}</p>
      <p className="tile-location">{location}</p>
      <p className="tile-wes">{wes_equivalency}</p>
      <p className="tile-grade">{grade}</p>
      <p className="tile-awards">{awards}</p>
    </div>
    <div className="tile-description">
      {Array.isArray(description) ? (
        description.map((item, index) => (
          <div key={index} className="project-description">
            {typeof item === "string" ? (
              <p
                className="description-text"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ) : (
              <>
                <strong>Project: </strong>
                <span className="project-title">{item.project}</span>
                <ul className="project-points">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="point-item">
                      {point}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))
      ) : (
        <p
          className="description-text"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
    </div>
  </div>
);

export default Resume;
