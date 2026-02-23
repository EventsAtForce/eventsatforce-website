import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-inner">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-col">
            <div className="brand-section">
              <img
                src="/assets/images/FORCElogo.png"
                alt="FORCE Logo"
                className="footer-image"
              />
              <div className="brand-text">
                <h2>FORCE</h2>
                <p className="text-gray-400">estd 2012</p>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="footer-col">
            <h3 className="footer-heading">SOCIALS</h3>
            <div className="footer-links">
              <a
                href="https://www.instagram.com/eventsatforce/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <img src="/assets/images/insta.png" alt="Instagram" />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/company/eventsatforce/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <img src="/assets/images/linkedin.png" alt="LinkedIn" />
                <span>LinkedIn</span>
              </a>
              <a href="mailto:eventsatforce@gmail.com" className="social-link">
                <img src="/assets/images/mail.png" alt="E-mail" />
                <span>E-mail</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3 className="footer-heading">QUICK LINKS</h3>
            <div className="footer-links">
              <a href="#about" className="quick-link">About</a>
              <a href="#events" className="quick-link">Events</a>
            </div>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h3 className="footer-heading">CONTACT</h3>
            <div className="contact-list">
              <div className="contact-item">
                <img
                  src="/assets/images/contact.png"
                  alt="contact"
                  className="contact-icon"
                />
                <span>Pratesh: +91 86606 01881</span>
              </div>
              <div className="contact-item">
                <img
                  src="/assets/images/contact.png"
                  alt="contact"
                  className="contact-icon"
                />
                <span>Rohith: +91 70223 91146</span>
              </div>
              <div className="contact-item">
                <img
                  src="/assets/images/contact.png"
                  alt="contact"
                  className="contact-icon"
                />
                <span>Rahul: +91 83107 15212</span>
              </div>
              <div className="contact-item">
                <img
                  src="/assets/images/contact.png"
                  alt="contact"
                  className="contact-icon"
                />
                <span>Akshay: +91 76195 78735</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">© 2026 FORCE. All rights reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
