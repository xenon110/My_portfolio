import React, { useState } from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import { greeting, socialMediaLinks } from "../../portfolio";

function Header() {
  const [activeTab, setActiveTab] = useState("Home");

  function openResume() {
    if (greeting.resumeLink) {
      window.open(greeting.resumeLink, "_blank");
    }
  }

  const navItems = [
    { name: "Home", href: "#greeting" },
    { name: "Experience", href: "#workExperience" },
    { name: "Projects", href: "#projects" },
    { name: "Research", href: "#research" },
    { name: "Technologies", href: "#technologies" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <Headroom>
      <header className="aws-header">
        <a href="#greeting" className="aws-brand">
          <span className="aws-brand-name">{greeting.username}</span>
        </a>

        <ul className="aws-nav-menu">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={`nav-link ${activeTab === item.name ? "active" : ""}`}
                onClick={() => setActiveTab(item.name)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="aws-header-actions">
          {socialMediaLinks.github && (
            <a href={socialMediaLinks.github} target="_blank" rel="noopener noreferrer" className="aws-icon-btn" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
          )}
          {socialMediaLinks.linkedin && (
            <a href={socialMediaLinks.linkedin} target="_blank" rel="noopener noreferrer" className="aws-icon-btn" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          )}
          {greeting.resumeLink && (
            <button onClick={openResume} className="aws-resume-btn">
              Resume <span className="download-arrow">⤓</span>
            </button>
          )}
        </div>
      </header>
    </Headroom>
  );
}

export default Header;
