import React, {useContext} from "react";
import "./Philosophy.scss";
import {engineeringPhilosophy} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Philosophy() {
  const {isDark} = useContext(StyleContext);

  if (!engineeringPhilosophy || !engineeringPhilosophy.display) {
    return null;
  }

  const renderIcon = iconName => {
    if (iconName === "code") {
      return <i className="fas fa-code philosophy-icon"></i>;
    } else if (iconName === "aws") {
      return <i className="fab fa-aws philosophy-icon aws-icon"></i>;
    } else if (iconName === "brain") {
      return <i className="fas fa-brain philosophy-icon"></i>;
    } else {
      return <i className="fas fa-chart-line philosophy-icon"></i>;
    }
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <section className="philosophy-section-container" id="philosophy">
        <div className="section-header-area">
          <h2 className={isDark ? "dark-mode section-title" : "section-title"}>
            {engineeringPhilosophy.title || "Core Engineering Principles"}
          </h2>
          <p className="section-subtitle-text">
            {engineeringPhilosophy.subtitle ||
              "How I approach Software Engineering, Data Science & AWS Architecture"}
          </p>
        </div>

        <div className="philosophy-grid">
          {engineeringPhilosophy.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`philosophy-card ${isDark ? "dark-mode" : ""}`}
            >
              <div className="pillar-header-row">
                <div className="pillar-icon-box">{renderIcon(pillar.icon)}</div>
                <span className="pillar-badge">{pillar.badge}</span>
              </div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-desc">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </Fade>
  );
}
