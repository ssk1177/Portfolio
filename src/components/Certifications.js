import React, { useState, useEffect } from "react";
import "./../styles/Certifications.css";
import certificationsContent from "./../assets/data/certifications.json";

const Certifications = () => {
  const [certifications, setCertifications] = useState([]);

  // Fetch the certifications data from the JSON file
  useEffect(() => {
    setCertifications(certificationsContent);
  }, []);

  return (
    <div className="certifications-container">

      {/* Certifications List */}
      <div className="certifications-list">
        {certifications.map((certification, index) => (
          <div className="certification-card" key={index}>
            <div className="certification-info">
              <h2 className="certification-name">{certification.name}</h2>
              <h3 className="certification-organization">
                {certification.organization}
              </h3>
              <p className="certification-date">
                Obtained: {certification.date}
              </p>
              <p className="certification-description">
                {certification.description}
              </p>
            </div>
            <div>
            {certification.certificateLink && (
              <a
                href={certification.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="view-certificate-link"
              >
                View Certificate
              </a>
            )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
