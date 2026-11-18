import React, {useState, useEffect, useRef} from "react";
import "./Main.scss";
import {
  greeting,
  socialMediaLinks,
  workExperiences,
  bigProjects,
  researchSection,
  achievementSection,
  educationInfo,
  contactInfo
} from "../portfolio";
import mayankProfileImg from "../assets/images/mayank_profile.png";

// Lightweight Scroll-Reveal component using native IntersectionObserver
const Reveal = ({children, className = "", delay = 0}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (domRef.current) {
              observer.unobserve(domRef.current);
            }
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px"
      }
    );

    const currentEl = domRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`reveal-item ${isVisible ? "is-visible" : ""} ${className}`}
      style={{
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

const Main = () => {
  return (
    <div className="plain-portfolio">
      <div className="plain-container">
        {/* Top Profile Intro: Picture on one side, plain text with all info */}
        <Reveal>
          <header className="profile-intro">
            <div className="profile-photo-wrapper">
              <img
                src={mayankProfileImg}
                alt={greeting.username}
                className="profile-photo"
              />
            </div>

            <div className="profile-details">
              <h1 className="name-heading">{greeting.username}</h1>
              <div className="tagline">{greeting.tagline}</div>

              <div className="status-line">
                <span className="status-dot"></span>
                <span>Open to Software Engineering &amp; AI/ML opportunities</span>
              </div>

              <p className="bio-text">{greeting.subTitle}</p>

              <div className="quick-links">
                {greeting.resumeLink && (
                  <a
                    href={greeting.resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    [ Resume (PDF) ↗ ]
                  </a>
                )}
                {socialMediaLinks.github && (
                  <a
                    href={socialMediaLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    [ GitHub ↗ ]
                  </a>
                )}
                {socialMediaLinks.kaggle && (
                  <a
                    href={socialMediaLinks.kaggle}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    [ Kaggle ↗ ]
                  </a>
                )}
                {socialMediaLinks.linkedin && (
                  <a
                    href={socialMediaLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    [ LinkedIn ↗ ]
                  </a>
                )}
                {contactInfo.email_address && (
                  <a href={`mailto:${contactInfo.email_address}`}>
                    [ {contactInfo.email_address} ]
                  </a>
                )}
                <span className="meta-tag">📍 {contactInfo.location}</span>
              </div>
            </div>
          </header>
        </Reveal>

        {/* The Straight Timeline Spine (Line in the left side going straight down) */}
        <main className="timeline-spine">
          {/* Section 01: Work Experience */}
          <section className="timeline-section" id="experience">
            <Reveal>
              <div className="section-header">
                <span className="section-node"></span>
                <span className="section-index">01 //</span>
                <span className="section-title">Work Experience</span>
              </div>
            </Reveal>

            {workExperiences.experience.map((exp, index) => (
              <Reveal key={index} delay={index * 60}>
                <article className="timeline-entry">
                  <span className="entry-node"></span>

                  <div className="entry-title-row">
                    <h2 className="entry-title">{exp.role}</h2>
                    <span className="entry-date">{exp.date}</span>
                  </div>

                  <div className="entry-subtitle">{exp.company}</div>

                  <p className="entry-desc">{exp.desc}</p>

                  {exp.descBullets && exp.descBullets.length > 0 && (
                    <ul className="entry-bullets">
                      {exp.descBullets.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </article>
              </Reveal>
            ))}
          </section>

          {/* Section 02: Featured Projects */}
          <section className="timeline-section" id="projects">
            <Reveal>
              <div className="section-header">
                <span className="section-node"></span>
                <span className="section-index">02 //</span>
                <span className="section-title">Featured Projects &amp; Systems</span>
              </div>
            </Reveal>

            {bigProjects.projects.map((proj, index) => (
              <Reveal key={index} delay={index * 60}>
                <article className="timeline-entry">
                  <span className="entry-node"></span>

                  <div className="entry-title-row">
                    <h2 className="entry-title">{proj.projectName}</h2>
                    <span className="entry-date">{proj.category}</span>
                  </div>

                  <p className="entry-desc">{proj.projectDesc}</p>

                  {/* Key Metrics */}
                  {proj.metrics && proj.metrics.length > 0 && (
                    <div className="entry-metrics">
                      {proj.metrics.map((metric, idx) => (
                        <span key={idx} className="metric-badge">
                          <span className="metric-label">{metric.label}:</span>
                          <span className="metric-value">{metric.value}</span>
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Key Highlights */}
                  {proj.highlights && proj.highlights.length > 0 && (
                    <ul className="entry-bullets">
                      {proj.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  )}

                  {/* Footer Links & Tech Stack */}
                  <div className="entry-footer">
                    <div className="entry-links">
                      {proj.githubUrl && (
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          [ GitHub Code ↗ ]
                        </a>
                      )}
                      {proj.liveUrl && proj.liveUrl !== proj.githubUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          [ Live Demo ↗ ]
                        </a>
                      )}
                    </div>
                    <div className="entry-tech">
                      {proj.techStack && proj.techStack.join(" • ")}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </section>

          {/* Section 03: Technical Skills */}
          <section className="timeline-section" id="skills">
            <Reveal>
              <div className="section-header">
                <span className="section-node"></span>
                <span className="section-index">03 //</span>
                <span className="section-title">Technical Stack &amp; Skills</span>
              </div>
            </Reveal>

            <Reveal>
              <div className="timeline-entry">
                <span className="entry-node"></span>
                <div className="skills-grid">
                  <div className="skill-group">
                    <div className="skill-category">Languages &amp; Core</div>
                    <div className="skill-items">
                      Python • SQL • JavaScript • C++ • Git &amp; GitHub
                    </div>
                  </div>

                  <div className="skill-group">
                    <div className="skill-category">
                      AI / Machine Learning &amp; Data Science
                    </div>
                    <div className="skill-items">
                      TensorFlow • PyTorch • Scikit-learn • OpenCV • Pandas •
                      NumPy • Kaggle Competitions &amp; EDA • LLMs (Gemini API) • Transfer Learning • CNNs
                    </div>
                  </div>

                  <div className="skill-group">
                    <div className="skill-category">
                      Cloud &amp; Infrastructure
                    </div>
                    <div className="skill-items">
                      Amazon Web Services (S3, Lambda, SageMaker, CloudWatch,
                      EC2) • Docker • REST APIs
                    </div>
                  </div>

                  <div className="skill-group">
                    <div className="skill-category">Databases &amp; Systems</div>
                    <div className="skill-items">
                      PostgreSQL • Supabase • Firebase • FastAPI • Node.js •
                      React.js
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          {/* Section 04: Research & Publications */}
          {researchSection.display && researchSection.paper && (
            <section className="timeline-section" id="research">
              <Reveal>
                <div className="section-header">
                  <span className="section-node"></span>
                  <span className="section-index">04 //</span>
                  <span className="section-title">Research &amp; Publications</span>
                </div>
              </Reveal>

              <Reveal>
                <article className="timeline-entry">
                  <span className="entry-node"></span>

                  <div className="entry-title-row">
                    <h2 className="entry-title">
                      {researchSection.paper.title}
                    </h2>
                  </div>

                  <div className="entry-subtitle">
                    {researchSection.paper.institution}
                  </div>

                  <p className="entry-desc">{researchSection.paper.desc}</p>

                  {researchSection.paper.highlights && (
                    <ul className="entry-bullets">
                      {researchSection.paper.highlights.map((hl, idx) => (
                        <li key={idx}>{hl}</li>
                      ))}
                    </ul>
                  )}
                </article>
              </Reveal>
            </section>
          )}

          {/* Section 05: Certifications & Honors */}
          {achievementSection.display && (
            <section className="timeline-section" id="achievements">
              <Reveal>
                <div className="section-header">
                  <span className="section-node"></span>
                  <span className="section-index">05 //</span>
                  <span className="section-title">Certifications &amp; Achievements</span>
                </div>
              </Reveal>

              <Reveal>
                <div className="timeline-entry">
                  <span className="entry-node"></span>
                  <div className="achievements-list">
                    {achievementSection.achievementsCards.map((item, idx) => (
                      <div key={idx} className="achievement-row">
                        <span className="achievement-title">{item.title}</span>
                        <span className="achievement-tag">[{item.tag}]</span>
                        <div className="achievement-desc">{item.subtitle}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </section>
          )}

          {/* Section 06: Education */}
          {educationInfo.display && (
            <section className="timeline-section" id="education">
              <Reveal>
                <div className="section-header">
                  <span className="section-node"></span>
                  <span className="section-index">06 //</span>
                  <span className="section-title">Education</span>
                </div>
              </Reveal>

              {educationInfo.schools.map((edu, idx) => (
                <Reveal key={idx} delay={idx * 60}>
                  <article className="timeline-entry">
                    <span className="entry-node"></span>

                    <div className="entry-title-row">
                      <h2 className="entry-title">{edu.schoolName}</h2>
                      <span className="entry-date">{edu.duration}</span>
                    </div>

                    <div className="entry-subtitle">{edu.subHeader}</div>

                    <p className="entry-desc">{edu.desc}</p>

                    {edu.bullets && edu.bullets.length > 0 && (
                      <ul className="entry-bullets">
                        {edu.bullets.map((bullet, bIdx) => (
                          <li key={bIdx}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </article>
                </Reveal>
              ))}
            </section>
          )}

          {/* Section 07: Contact */}
          <section className="timeline-section" id="contact">
            <Reveal>
              <div className="section-header">
                <span className="section-node"></span>
                <span className="section-index">07 //</span>
                <span className="section-title">Contact &amp; Connect</span>
              </div>
            </Reveal>

            <Reveal>
              <div className="timeline-entry">
                <span className="entry-node"></span>
                <div className="contact-details">
                  <div className="contact-row">
                    <span className="contact-key">Email:</span>
                    <a href={`mailto:${contactInfo.email_address}`}>
                      {contactInfo.email_address}
                    </a>
                  </div>
                  <div className="contact-row">
                    <span className="contact-key">Phone:</span>
                    <a href={`tel:${contactInfo.phone}`}>
                      +91 {contactInfo.phone}
                    </a>
                  </div>
                  <div className="contact-row">
                    <span className="contact-key">Location:</span>
                    <span>{contactInfo.location}</span>
                  </div>
                  <div className="contact-row">
                    <span className="contact-key">GitHub:</span>
                    <a
                      href={socialMediaLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {contactInfo.github}
                    </a>
                  </div>
                  {contactInfo.kaggle && (
                    <div className="contact-row">
                      <span className="contact-key">Kaggle:</span>
                      <a
                        href={socialMediaLinks.kaggle}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {contactInfo.kaggle}
                      </a>
                    </div>
                  )}
                  <div className="contact-row">
                    <span className="contact-key">LinkedIn:</span>
                    <a
                      href={socialMediaLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {contactInfo.linkedin}
                    </a>
                  </div>
                  {greeting.resumeLink && (
                    <div className="contact-row">
                      <span className="contact-key">Resume:</span>
                      <a
                        href={greeting.resumeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Google Drive PDF
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          </section>

          {/* Timeline End Marker */}
          <Reveal>
            <div className="timeline-end">
              <span className="end-node"></span>
              <div className="end-text">
                {"// EOF — Built by Mayank Raj • Updated " +
                  new Date().getFullYear()}
              </div>
            </div>
          </Reveal>
        </main>
      </div>
    </div>
  );
};

export default Main;
