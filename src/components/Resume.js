import React from "react";
import "./../styles/Resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="resume-outer">
        {/* Resume Title Section */}
        <section className="resume-title">
          <h1 className="resume-header">
            <span className="bullet-point">■</span> Resume
          </h1>
        </section>
        <section className="download-cv">
          <a
            href="/assets/Suriender_Singh_DA.pdf"
            className="download-cv"
            download="suriender_singh_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            DOWNLOAD CV
          </a>
        </section>

        {/* Experience Section */}
        <section className="experience-section">
          <h2 className="sub-header">Experience</h2>

          {/* Job Experience 1 */}
          <div className="job-card">
            <div className="company-details">
              <h3 className="job-duration">June 29, 2015 - Sep 24, 2020</h3>
              <p className="job-position">Senior Applications Engineer</p>
              <p className="job-company">Oracle India Pvt. Ltd.</p>
              <p className="job-location">Bangalore, India</p>
            </div>
            <div className="company-jd">
              <p className="job-description">
                <strong>Project:</strong> Adaptive Intelligent Apps for
                Manufacturing (AIAMFG) – Machine learning solution tailored for
                analyzing manufacturing domain business data, extracting
                valuable insights aimed at optimizing manufacturing process.
                <ul>
                  <li>
                    Led implementation of model-building module that applies
                    various pre-built machine-learning algorithms to mined data.
                    Implemented Frontend using Oracle Jet (OJET), HTML-5, CSS
                    and backend in Java, SQL, PL/SQL.
                  </li>
                  <li>
                    Implemented machine learning algorithms such as decision
                    tree, random forest, and SVM using ORE (Oracle Machine
                    Learning for R, formerly Oracle R Enterprise).
                  </li>
                  <li>
                    Implemented Selenium automation for web application testing,
                    reducing over 500 employee hours per 3–4-month release
                    cycle, accelerating product delivery and achieving cost
                    efficiencies for the company.
                  </li>
                  <li>
                    Leveraged JDeveloper for efficient Java development and
                    utilized SQL Developer for comprehensive database
                    management, optimizing queries, modeling data, and
                    developing stored procedures, ensuring robust backend
                    support for applications.
                  </li>
                </ul>
                <strong>Project:</strong> Oracle Validation Test Suite (VTS) –
                VTS stress tests system components such as processor, memory,
                and IO.
                <ul>
                  <li>
                    Implemented Core, Core cluster, and Quad Core Cluster-based
                    Algorithms for stress testing processors using C language.
                  </li>
                  <li>
                    Implemented a cross-platform feature in C language for VTS
                    to optimize processor performance by constraining stress
                    areas, compatible with Linux, Windows, and SunOS
                    environments.
                  </li>
                  <li>
                    Employed GDB debugger proficiently to troubleshoot and debug
                    C code effectively.
                  </li>
                  <li>
                    Utilized C and Assembly languages to develop and optimize
                    software solutions across diverse operating environments,
                    including Windows, Linux, and Sun OS platforms.
                  </li>
                </ul>
              </p>
            </div>
          </div>

          {/* Job Experience 2 */}
          <div className="job-card">
            <div className="company-details">
              <h3 className="job-duration">Nov 25, 2020 - Aug 11, 2023</h3>
              <p className="job-position">Senior Member of Technical Staff</p>
              <p className="job-company">
                Agnity communications <br />
                [Acquired by TNS (Transaction Network Services)]
              </p>
              <p className="job-location">Noida, India</p>
            </div>
            <div className="company-jd">
              <p className="job-description">
                <strong>Project:</strong> ATF (Advanced Toll-Free) – Core
                network service that lets callers make free phone calls to
                service subscribers by dialing special service numbers, such as
                8xx numbers in USA.
                <ul>
                  <li>
                    Managed and mentored a team of four developers on agile best
                    practices, ensuring task scheduling and performance
                    expectations were met.
                  </li>
                  <li>
                    Orchestrated task schedules for team members and established
                    clear performance expectations.
                  </li>
                  <li>
                    Facilitated daily stand-up meetings for teams of four,
                    focusing on priorities, requirements, and project progress.
                  </li>
                  <li>
                    Captured customer requirements and authored comprehensive
                    product documentation.
                  </li>
                  <li>
                    Conducted thorough code reviews and performance assessments
                    for team members to ensure high-quality deliverables.
                  </li>
                </ul>
                <strong>Project:</strong> Defend – Network-based application
                that provides spam blocker, Identity filter, and Robocalls
                tracker/blocker features.
                <ul>
                  <li>
                    Designed and developed end-to-end applications, integrating
                    frontend components using React and backend functionalities
                    with Java, SQL, and Oracle Database, including Stored
                    Procedures.
                  </li>
                  <li>
                    Designed and maintained REST APIs for different functional
                    components of the application.
                  </li>
                  <li>
                    Conducted Proof of Concept (POC) demonstrations of
                    applications to stakeholders and potential clients.
                  </li>
                  <li>
                    Gathered and managed customer requirements, updating
                    documents such as Functional Specification Documents (FSD).
                  </li>
                  <li>
                    Utilized GIT for version control and implemented Continuous
                    Integration/Continuous Deployment (CI/CD) pipelines to
                    automate software delivery processes, ensuring rapid
                    iteration, collaboration, and high-quality releases.
                  </li>
                  <li>
                    Leveraged Visual Studio, SQL Developer, Visual Studio Code,
                    and Eclipse IDEs for efficient development and
                    collaboration.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="experience-section">
          <h2 className="sub-header">Education</h2>

          {/* Education 1 */}
          <div className="job-card">
            <div className="company-details">
              <h3 className="job-duration">
                September 2023 – October 2024 (Anticipated)
              </h3>
              <p className="job-position">
                Post Degree Diploma in Predictive Analytics
              </p>
              <p className="job-company">University of Winnipeg</p>
              <p className="job-location">Winnipeg, Canada</p>
            </div>
            <div className="company-jd">
              <p className="job-description">
                <ul>
                  <li>
                    Designed and implemented Python-based ETL pipeline in
                    Jupyter Notebook to integrate diverse data formats into
                    MongoDB and Postgres databases, and execute transformations.
                  </li>
                  <li>
                    Generated statistical reports and visualizations for
                    datasets, including Malware detection in IoT devices and
                    Credit card fraud prediction.
                  </li>
                  <li>
                    Employed shell scripting to orchestrate ETL processes,
                    handling ingestion, extraction, and data transformations
                    from remote sources.
                  </li>
                </ul>
              </p>
            </div>
          </div>

          {/* Education 2 */}
          <div className="job-card">
            <div className="company-details">
              <h3 className="job-duration">October 2012 – June 2015</h3>
              <p className="job-position">
                Master of Science (by Research) in Computer Science and
                Technology
              </p>
              <p className="job-company">
                National Institute of Technology (NIT)
              </p>
              <p className="job-location">Trichy, India</p>
              <p className="job-company">
                WES Canadian Equivalency: Master's degree
              </p>
            </div>
            <div className="company-jd">
              <p className="job-description">
                <strong>Publications:</strong>
                <ul>
                  <li>
                    Suriender Singh and S. Selvakumar, “Detection of Distributed
                    Denial of Service Attacks Using Panel of Experts”, Bilingual
                    International Conference on Information Technology:
                    Yesterday, Today, and Tomorrow, 19 - 21, Feb.’15, DRDO,
                    Delhi, pp. 248 - 254, DESIDOC.
                  </li>
                  <li>
                    Suriender Singh and S. Selvakumar, “A hybrid feature subset
                    selection by combining filters and genetic algorithm”, In
                    Proceedings of International Conference on Computing,
                    Communication & Automation (ICCCA), Greater Noida, India,
                    15-16 May 2015, pp. 283-289.
                  </li>
                </ul>
              </p>
            </div>
          </div>

          {/* Education 3 */}
          <div className="job-card">
            <div className="company-details">
              <h3 className="job-duration">June 2007 – May 2011</h3>
              <p className="job-position">
                Bachelor of Technology (B. Tech) in Information Technology
              </p>
              <p className="job-company">Uttarakhand Technical University</p>
              <p className="job-location">Dehradun, India</p>
              <p className="job-company">
                WES Canadian Equivalency: Bachelor's degree (four years)
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
