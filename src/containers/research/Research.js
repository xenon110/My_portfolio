import React from "react";
import "./Research.scss";
import { researchSection } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Research() {
  if (!researchSection || !researchSection.display) {
    return null;
  }

  const { paper } = researchSection;

  return (
    <Fade bottom duration={1000} distance="20px">
      <section className="research-container" id="research">
        <h2 className="section-title">{researchSection.title || "Research & Publications"}</h2>
        
        <div className="research-card">
          <div className="research-header-row">
            <div className="research-badge-icon">
              <i className="fas fa-microchip"></i>
            </div>
            <div className="research-title-meta">
              <span className="research-pill-tag">VIT-AP University Research</span>
              <h3 className="paper-title">{paper.title}</h3>
              <span className="institution-name">{paper.institution}</span>
            </div>
          </div>

          <p className="paper-desc">{paper.desc}</p>

          {paper.highlights && paper.highlights.length > 0 && (
            <div className="research-highlights">
              <h4 className="highlights-heading">Key Research Contributions:</h4>
              <ul className="highlights-list">
                {paper.highlights.map((point, idx) => (
                  <li key={idx}>
                    <span className="highlight-bullet">✦</span> {point}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </Fade>
  );
}
