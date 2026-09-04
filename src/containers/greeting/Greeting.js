import React from "react";
import { Fade } from "react-reveal";
import "./Greeting.scss";
import { greeting } from "../../portfolio";
import mayankProfileImg from "../../assets/images/mayank_profile.png";

export default function Greeting() {
  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="30px">
      <section className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div className="hero-content">
              {/* Smart Tag Pill */}
              <div className="aws-tag-pill-smart">
                <span className="live-status-dot"></span>
                <span className="pill-text">SOFTWARE ENGINEER • DATA SCIENCE • AWS CLOUD ARCHITECT</span>
              </div>

              {/* Smart Title */}
              <h1 className="greeting-title">
                Building <span className="text-gradient-orange">intelligent AI/ML solutions</span> &amp; <span className="text-gradient-blue">scalable data pipelines</span>
              </h1>

              {/* Description */}
              <p className="greeting-desc">
                {greeting.subTitle}
              </p>

              {/* Quick Tech & Achievement Badges */}
              <div className="hero-tech-badges">
                <span className="tech-chip"><i className="fab fa-python python-ic"></i> Python</span>
                <span className="tech-chip"><i className="fab fa-aws aws-ic"></i> AWS Cloud</span>
                <span className="tech-chip"><i className="fas fa-brain tf-ic"></i> Machine Learning</span>
                <span className="tech-chip"><i className="fas fa-database sql-ic"></i> SQL &amp; PostgreSQL</span>
                <span className="tech-chip highlight-chip">🎓 8.66 CGPA @ VIT-AP</span>
                <span className="tech-chip highlight-chip">⚡ GATE Qualified</span>
              </div>

              {/* Action Buttons */}
              <div className="hero-action-buttons">
                <a href="#projects" className="aws-btn-primary">
                  View My Projects <span className="btn-arrow">→</span>
                </a>
                <a href="#contact" className="aws-btn-secondary">
                  Contact Me <span className="mail-icon">✉</span>
                </a>
                {greeting.resumeLink && (
                  <a 
                    href={greeting.resumeLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="aws-btn-outline"
                  >
                    Resume <span className="download-icon">⤓</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="greeting-image-div">
            <div className="hero-background-effects">
              <div className="ambient-glow-orb orb-orange"></div>
              <div className="ambient-glow-orb orb-blue"></div>
              <div className="ambient-glow-orb orb-purple"></div>
              <div className="tech-grid-pattern"></div>
            </div>

            <div className="profile-hero-card">
              {/* Rotating Orbit Ring */}
              <div className="tech-orbit-ring">
                <div className="orbit-node node-1"><i className="fab fa-python"></i></div>
                <div className="orbit-node node-2"><i className="fab fa-aws"></i></div>
                <div className="orbit-node node-3"><i className="fas fa-database"></i></div>
              </div>

              <div className="profile-avatar-wrapper">
                <img 
                  src={mayankProfileImg} 
                  alt="Mayank Raj - Software Engineer" 
                  className="mayank-hero-avatar"
                />
                <div className="verified-status-tag">
                  <i className="fas fa-check-circle check-badge-icon"></i> Software Engineer
                </div>
              </div>

              {/* Floating Skill Badges */}
              <div className="floating-chip chip-aws">
                <i className="fab fa-aws" style={{ color: '#FF9900' }}></i> AWS Cloud
              </div>
              <div className="floating-chip chip-ds">
                <i className="fas fa-brain" style={{ color: '#0284C7' }}></i> Data Science
              </div>
              <div className="floating-chip chip-ml">
                <i className="fab fa-python" style={{ color: '#3776AB' }}></i> Python &amp; ML
              </div>

              {/* Mini Tech Code Badge */}
              <div className="floating-code-card">
                <div className="code-header">
                  <span className="dot dot-r"></span>
                  <span className="dot dot-y"></span>
                  <span className="dot dot-g"></span>
                  <span className="file-name">aws_ml_pipeline.py</span>
                </div>
                <div className="code-body">
                  <code><span className="kw">import</span> boto3, torch</code>
                  <code>model = torch.load(<span className="str">"model.pt"</span>)</code>
                  <code>s3.upload(<span className="str">"s3://ml-data"</span>)</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
