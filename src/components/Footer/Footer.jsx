import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-inner">
        <div className="footer-content">
          <div>
            <div className="brand-section">
              <img
                src="/assets/images/FORCElogo.png"
                alt="FORCE Logo"
                className="footer-image"
              />

              <div className="brand-text">
                <h2>FORCE</h2>
                <p>estd 2012</p>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <h3>SOCIALS:</h3>
            <a
              href="https://www.instagram.com/eventsatforce/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img src="/assets/images/insta.png" alt="Instagram" />
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/eventsatforce/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img src="/assets/images/linkedin.png" alt="LinkedIn" />
              LinkedIn
            </a>
            <a href="mailto:eventsatforce@gmail.com" className="social-link">
              <img src="/assets/images/mail.png" alt="E-mail" />
              E-mail
            </a>
          </div>

          <div className="footer-col">
            <h3>QUICK LINKS:</h3>
            <p>about</p>
            <p>events</p>
          </div>

          <div className="footer-col">
            <h3>CONTACT:</h3>

            <div className="contact-item">
              <img
                src="/assets/images/contact.png"
                alt="contact"
                className="contact-icon"
              />
              <span>Pratesh : +91 86606 01881</span>
            </div>

            <div className="contact-item">
              <img
                src="/assets/images/contact.png"
                alt="contact"
                className="contact-icon"
              />
              <span>Rohith : +91 70223 91146</span>
            </div>

            <div className="contact-item">
              <img
                src="/assets/images/contact.png"
                alt="contact"
                className="contact-icon"
              />
              <span>Rahul : +91 83107 15212</span>
            </div>

            <div className="contact-item">
              <img
                src="/assets/images/contact.png"
                alt="contact"
                className="contact-icon"
              />
              <span>Akshay : +91 76195 78735</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">© 2026 FORCE. All rights reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
