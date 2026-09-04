import React, { useState, useContext } from "react";
import "./StartupProjects.scss";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import ProjectModal from "../../components/projectModal/ProjectModal";

export default function StartupProject() {
  const { isDark } = useContext(StyleContext);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!bigProjects || !bigProjects.display) {
    return null;
  }

  const projectCategories = [
    "All",
    "AI & Computer Vision",
    "NLP & LLMs",
    "Cloud & Backend"
  ];

  const filteredProjects = selectedCategory === "All"
    ? bigProjects.projects
    : bigProjects.projects.filter(p => p.category === selectedCategory);

  const handleOpenModal = (project) => {
    setActiveModalProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setActiveModalProject(null);
  };

  const renderBadgeIcon = (type) => {
    if (type === "brain") {
      return (
        <div className="project-badge-box brain-bg">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a5 5 0 0 1 5 5v1a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z"></path>
            <path d="M12 12a5 5 0 0 1 5 5v1a5 5 0 0 1-10 0v-1a5 5 0 0 1 5-5z"></path>
            <path d="M6 9a4 4 0 0 0-4 4v.5a4 4 0 0 0 8 0V13a4 4 0 0 0-4-4z"></path>
            <path d="M18 9a4 4 0 0 1 4 4v.5a4 4 0 0 1-8 0V13a4 4 0 0 1 4-4z"></path>
          </svg>
        </div>
      );
    } else if (type === "chart") {
      return (
        <div className="project-badge-box chart-bg">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
          </svg>
        </div>
      );
    } else {
      return (
        <div className="project-badge-box aws-bg">
          <span className="aws-badge-text">aws</span>
        </div>
      );
    }
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <section className="section-container" id="projects">
        <div className="section-header-row">
          <div>
            <h2 className={isDark ? "dark-mode section-title" : "section-title"}>
              {bigProjects.title || "Featured Projects"}
            </h2>
            <p className="section-subtitle-text">
              {bigProjects.subtitle || "Real-world AI/ML applications and scalable data-driven systems"}
            </p>
          </div>
          <a
            href="https://github.com/xenon110"
            target="_blank"
            rel="noopener noreferrer"
            className="view-all-link"
          >
            GitHub Repositories <span className="arrow">→</span>
          </a>
        </div>

        {/* Domain Filter Tabs */}
        <div className="project-filter-tabs">
          {projectCategories.map((cat, idx) => (
            <button
              key={idx}
              className={`filter-tab-btn ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, i) => {
            return (
              <div
                key={i}
                className={
                  isDark
                    ? "aws-project-card dark-mode"
                    : "aws-project-card"
                }
                onClick={() => handleOpenModal(project)}
              >
                <div className="card-top-row">
                  {renderBadgeIcon(project.badgeType)}
                  <div className="project-title-area">
                    {project.category && (
                      <span className="project-card-category">{project.category}</span>
                    )}
                    <h3 className="project-name">{project.projectName}</h3>
                  </div>
                </div>

                <p className="project-desc">{project.projectDesc}</p>

                {project.techStack && (
                  <div className="tech-pills-row">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <div className="card-bottom-row">
                  <button
                    className="view-project-link deep-dive-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenModal(project);
                    }}
                  >
                    Metrics &amp; Architecture <span className="arrow">→</span>
                  </button>
                  <a
                    href={project.githubUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-circle-btn"
                    aria-label="GitHub Repository"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Detail Dialog */}
        <ProjectModal
          project={activeModalProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          isDark={isDark}
        />
      </section>
    </Fade>
  );
}

