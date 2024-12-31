import React, { useEffect, useState } from "react";
import "./../styles/Publications.css";
import publicationsData from "./../assets/data/publications.json";

const Publications = () => {
  const [publications, setPublications] = useState([]);
  const [expandedAbstracts, setExpandedAbstracts] = useState({});

  useEffect(() => {
    setPublications(publicationsData);
  }, []);

  const toggleAbstract = (index) => {
    setExpandedAbstracts((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="publications-container">
      <div className="publications-grid">
        {publications.map((pub, index) => {
          const isExpanded = expandedAbstracts[index];
          const shortAbstract = `${pub.abstract.slice(0, 250)}...`;

          return (
            <div className="publication-card" key={index}>
              {/* Section 1: Title */}
              <h3 className="publication-title">{pub.title}</h3>

              {/* Section 2: Details */}
              <div className="publication-details">
                {/* Left Column */}
                <div className="publication-left">
                  <p className="publication-authors">
                    <span className="highlight">Authors:</span> {pub.authors}
                  </p>
                  {pub.journal ? (
                    <p className="publication-journal">
                      <span className="highlight">Journal:</span> {pub.journal}
                    </p>
                  ) : (
                    <p className="publication-conference">
                      <span className="highlight">Conference:</span>{" "}
                      {pub.conference}
                    </p>
                  )}
                  <p className="publication-date">
                    <span className="highlight">Date:</span> {pub.date}
                  </p>
                  <p className="publication-keywords">
                    <span className="highlight">Keywords:</span> {pub.keywords}
                  </p>
                </div>

                {/* Right Column */}
                <div className="publication-right">
                  <p className="publication-abstract">
                    <span className="highlight">Abstract:</span>{" "}
                    {isExpanded ? (
                      <>
                        {pub.abstract}{" "}
                        <button
                          className="read-more-button"
                          onClick={() => toggleAbstract(index)}
                        >
                          Read Less
                        </button>
                      </>
                    ) : (
                      <>
                        {shortAbstract}{" "}
                        <button
                          className="read-more-button"
                          onClick={() => toggleAbstract(index)}
                        >
                          Read More
                        </button>
                      </>
                    )}
                  </p>
                </div>
              </div>

              {/* Section 3: Link and Citation */}
              <div className="publication-footer">
                <p className="publication-citation">
                  <span className="highlight">Citation:</span> {pub.citation}
                </p>
                <a
                  href={pub.link}
                  className="publication-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Publication Details
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Publications;
