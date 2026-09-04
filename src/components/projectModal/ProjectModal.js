import React, { useEffect } from "react";
import "./ProjectModal.scss";

export default function ProjectModal({ project, isOpen, onClose, isDark }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={`modal-container ${isDark ? "dark-mode" : ""}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header Bar */}
        <div className="modal-header">
          <div className="modal-title-row">
            <span className="modal-category-badge">{project.category || "AI Project"}</span>
            <h2 id="modal-title" className="modal-project-title">
              {project.projectName}
            </h2>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close dialog">
            &times;
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Main Description */}
          <p className="modal-description">{project.projectDesc}</p>

          {/* Model & Architecture Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="metrics-section">
              <h3 className="section-heading">
                <i className="fas fa-chart-line heading-icon"></i> Performance & Model Metrics
              </h3>
              <div className="metrics-grid">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="metric-card">
                    <span className="metric-value">{metric.value}</span>
                    <span className="metric-label">{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Features & Architecture Breakdown */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="highlights-section">
              <h3 className="section-heading">
                <i className="fas fa-microchip heading-icon"></i> Architecture & Technical Highlights
              </h3>
              <ul className="highlights-list">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="highlight-item">
                    <i className="fas fa-check-circle check-icon"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Pills */}
          {project.techStack && (
            <div className="modal-tech-section">
              <h3 className="section-heading">
                <i className="fas fa-layer-group heading-icon"></i> Tech Stack & Frameworks
              </h3>
              <div className="modal-tech-pills">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="modal-tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Links */}
        <div className="modal-footer">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-btn secondary-btn"
            >
              <i className="fab fa-github"></i> View Repository
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-btn primary-btn"
            >
              <i className="fas fa-external-link-alt"></i> Live Demo
            </a>
          )}
          <button className="modal-btn close-action-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
