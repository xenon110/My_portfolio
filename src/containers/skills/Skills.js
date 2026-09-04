import React from "react";
import "./Skills.scss";
import {detailedSkills, cloudWorkflow} from "../../portfolio";
import {Fade} from "react-reveal";

export default function Skills() {
  const renderSkillIcon = iconType => {
    if (iconType === "python") {
      return (
        <svg viewBox="0 0 24 24" width="36" height="36">
          <path
            d="M11.9 2c-5.2 0-4.9 2.3-4.9 2.3v2.4h5v.7H4.9S2.6 7.1 2.6 12.3c0 5.2 2 5 2 5h1.2v-2.4s-.1-2.9 2.8-2.9h4.8s2.7.1 2.7-2.6V4.6S17.1 2 11.9 2zm-2.7 1.6c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z"
            fill="#387EB8"
          />
          <path
            d="M12.1 22c5.2 0 4.9-2.3 4.9-2.3v-2.4h-5v-.7h7.1s2.3.3 2.3-4.9c0-5.2-2-5-2-5h-1.2v2.4s.1 2.9-2.8 2.9h-4.8s-2.7-.1-2.7 2.6v4.8s-1 2.6 4.2 2.6zm2.7-1.6c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z"
            fill="#FFE052"
          />
        </svg>
      );
    } else if (iconType === "aws") {
      return <i className="fab fa-aws skill-brand-icon aws-color"></i>;
    } else if (iconType === "docker") {
      return <i className="fab fa-docker skill-brand-icon docker-color"></i>;
    } else if (iconType === "tensorflow") {
      return <i className="fas fa-brain skill-brand-icon tf-color"></i>;
    }
    return <i className="fas fa-code skill-brand-icon"></i>;
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <section className="section-container" id="skills">
        <div className="skills-section-wrapper">
          <h2 className="section-title">
            Domain Expertise &amp; Hands-on Projects
          </h2>

          {/* Clean 2x2 Grid of Skill Cards */}
          <div className="skills-grid-2x2">
            {detailedSkills.map((skill, idx) => (
              <div key={idx} className="skill-card-modern">
                <div className="skill-card-top">
                  <div className="skill-icon-wrapper">
                    {renderSkillIcon(skill.icon)}
                  </div>
                  <div className="skill-header-meta">
                    <h3 className="skill-title">{skill.title}</h3>
                    <span className="skill-projects-badge">{skill.usedIn}</span>
                  </div>
                </div>

                <div className="skill-card-content">
                  <h4 className="card-subheading">
                    Key Highlights &amp; Projects
                  </h4>
                  <ul className="skill-bullets-list">
                    {skill.whatIBuilt.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        <span className="bullet-check">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="skill-expertise-box">
                    <span className="expertise-label">Core Competency:</span>
                    <p className="expertise-text">{skill.whatIGained}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Full-Width AWS Cloud & ML Workflow Banner */}
          <div className="workflow-card-full">
            <div className="workflow-header">
              <span className="bullet-triangle">▶</span>
              <h3 className="workflow-title">{cloudWorkflow.title}</h3>
            </div>

            <div className="workflow-pipeline">
              {cloudWorkflow.steps.map((step, stepIdx) => (
                <React.Fragment key={stepIdx}>
                  <div className="pipeline-step">
                    <div className={`step-icon-box box-${step.icon}`}>
                      {step.icon === "s3" && (
                        <svg
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="none"
                          stroke="#FFFFFF"
                          strokeWidth="2"
                        >
                          <path d="M4 6h16v12C20 19.1 16.4 20 12 20S4 19.1 4 18V6z" />
                          <ellipse cx="12" cy="6" rx="8" ry="3" />
                        </svg>
                      )}
                      {step.icon === "lambda" && (
                        <span className="lambda-symbol">λ</span>
                      )}
                      {step.icon === "sagemaker" && (
                        <i className="fas fa-brain"></i>
                      )}
                      {step.icon === "cloudwatch" && (
                        <i className="fas fa-eye"></i>
                      )}
                      {step.icon === "quicksight" && (
                        <i className="fas fa-chart-bar"></i>
                      )}
                    </div>
                    <span className="step-name">{step.name}</span>
                    <span className="step-tech">{step.tech}</span>
                  </div>
                  {stepIdx < cloudWorkflow.steps.length - 1 && (
                    <div className="pipeline-arrow">→</div>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="workflow-footer-banner">
              <p>{cloudWorkflow.footerText}</p>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
