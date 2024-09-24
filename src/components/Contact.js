import React from "react";
import "./../styles/Contact.css";

const Contact = () => {
  return (
    <div className="outer-container">
      <div className="form-container">
        {/* Form Heading */}
        <h1 className="form-heading">
          <span className="bullet-point">■</span> Let's Connect
        </h1>

        {/* Form */}
        <form name="connect" method="POST" netlify>
          {/* Hidden input for Netlify form handling */}
          <input type="hidden" name="form-name" value="connect" />
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name *</label>
              <input type="text" id="firstName" name="firstName" required />
            </div>
            &nbsp;
            <div className="form-group">
              <label htmlFor="lastName">Last Name *</label>
              <input type="text" id="lastName" name="lastName" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" />
            </div>
          </div>

          <button type="submit" className="form-submit-button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
