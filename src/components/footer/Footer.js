import React, {useState} from "react";
import "./Footer.scss";
import {greeting, contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import mayankProfileImg from "../../assets/images/mayank_profile.png";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = e => {
    e.preventDefault();
    if (contactInfo.email_address) {
      navigator.clipboard.writeText(contactInfo.email_address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <Fade bottom duration={1000} distance="10px">
      <footer className="aws-dark-footer" id="contact">
        <div className="footer-content-container">
          {/* Column 1: Brand */}
          <div className="footer-col brand-col">
            <div className="footer-brand-header">
              <img
                src={mayankProfileImg}
                alt="Mayank Raj"
                className="footer-brand-avatar"
              />
              <h3 className="footer-brand-title">{greeting.username}</h3>
            </div>
            <p className="footer-role-text">{greeting.tagline}</p>
            <p className="footer-subtext">
              Building data-driven solutions with ML and Cloud.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col links-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#greeting">Home</a>
              </li>
              <li>
                <a href="#workExperience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#research">Research</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#education">Education</a>
              </li>
              <li>
                <a href="#achievements">Achievements</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Let's Connect */}
          <div className="footer-col connect-col">
            <h4 className="footer-heading">Let's Connect</h4>
            <ul className="connect-info-list">
              <li className="email-copy-row">
                <i className="far fa-envelope connect-icon"></i>
                <a href={`mailto:${contactInfo.email_address}`}>
                  {contactInfo.email_address}
                </a>
                <button
                  className="copy-email-btn"
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                >
                  <i className={`fas ${copied ? "fa-check" : "fa-copy"}`}></i>
                </button>
                {copied && <span className="copy-toast">Copied!</span>}
              </li>
              {contactInfo.phone && (
                <li>
                  <i className="fas fa-phone-alt connect-icon"></i>
                  <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                </li>
              )}
              <li>
                <i className="fas fa-map-marker-alt connect-icon"></i>
                <span>{contactInfo.location}</span>
              </li>
              <li>
                <i className="fab fa-linkedin connect-icon"></i>
                <a
                  href={
                    contactInfo.linkedin.startsWith("http")
                      ? contactInfo.linkedin
                      : `https://${contactInfo.linkedin}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contactInfo.linkedin}
                </a>
              </li>
              <li>
                <i className="fab fa-github connect-icon"></i>
                <a
                  href={
                    contactInfo.github.startsWith("http")
                      ? contactInfo.github
                      : `https://${contactInfo.github}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contactInfo.github}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </Fade>
  );
}
