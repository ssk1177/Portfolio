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
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.kaggle.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaKaggle />
          </a>
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <p className="footer-copyright">
        Designed & Developed by [Your Name] © 2024. Made with passion and code
        😊
      </p>
    </footer>
  );
};

export default Footer;
