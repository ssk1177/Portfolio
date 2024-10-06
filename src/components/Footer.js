import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaGithub,
  FaKaggle,
  FaLinkedin,
} from "react-icons/fa";
import "./../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <p>
            <FaPhoneAlt /> <b>Call:</b> +1 (431) 337-7657
          </p>
          <p>
            <FaEnvelope /> <b>Write:</b> suriender.ca@gmail.com
          </p>
        </div>
        <div className="footer-social-links">
          <a
            href="https://github.com/ssk1177/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="github"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.kaggle.com/suriender"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="kaggle"
          >
            <FaKaggle />
          </a>
          <a
            href="https://www.linkedin.com/in/suriender-singh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="linkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <p className="footer-copyright">
        © 2024 Suriender Singh. Made with coffee and code. 😊
      </p>
    </footer>
  );
};

export default Footer;
