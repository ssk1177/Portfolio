import React, { useEffect, useState } from "react";
import "./../styles/Publications.css";
import publicationsData from "./../assets/data/publications.json"; // Import JSON data

const Publications = () => {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    // Set the publications state from the imported JSON data
    setPublications(publicationsData);
  }, []);

  return (
    <div className="publications-container">
      <h1 className="publications-title">
        <span className="bullet-point">■</span> Publications
      </h1>
      <div className="publications-grid">
        {publications.map((pub, index) => (
          <div className="publication-card" key={index}>
            <h3 className="publication-title">{pub.title}</h3>
            <p className="publication-authors">
              <span className="highlight">Authors:</span> {pub.authors}
            </p>
            {pub.journal ? (
              <p className="publication-journal">
                <span className="highlight">Journal:</span> {pub.journal}
              </p>
            ) : (
              <p className="publication-conference">
                <span className="highlight">Conference:</span> {pub.conference}
              </p>
            )}
            <p className="publication-date">
              <span className="highlight">Date:</span> {pub.date}
            </p>
            <p className="publication-abstract">
              <span className="highlight">Abstract:</span> {pub.abstract}
            </p>
            <p className="publication-keywords">
              <span className="highlight">Keywords:</span> {pub.keywords}
            </p>
            <a
              href={pub.link}
              className="publication-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Full Publication
            </a>
            <p className="publication-citation">
              <span className="highlight">Citation:</span> {pub.citation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
