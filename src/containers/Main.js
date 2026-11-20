import React, {useState, useEffect, useRef} from "react";
import "./Main.scss";
import {greeting, socialMediaLinks, contactInfo} from "../portfolio";
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
        rootMargin: "0px 0px -20px 0px"
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
        {/* Top Profile Intro: Clean, readable, crisp */}
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
              <div className="tagline">
                Software Engineer • Data Science &amp; AWS Cloud
              </div>

              <div className="status-line">
                <span className="status-dot"></span>
                <span>Available for Software Engineering &amp; ML roles</span>
              </div>

              <p className="bio-text">
                Software Engineer with deep experience in Data Science, Machine
                Learning, and AWS Cloud Architecture. Focused on building scalable
                software systems, data pipelines, and production ML models.
              </p>

              <div className="quick-links">
                {greeting.resumeLink && (
                  <a
                    href={greeting.resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume ↗
                  </a>
                )}
                {socialMediaLinks.github && (
                  <a
                    href={socialMediaLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub ↗
                  </a>
                )}
                {socialMediaLinks.kaggle && (
                  <a
                    href={socialMediaLinks.kaggle}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Kaggle ↗
                  </a>
                )}
                {socialMediaLinks.linkedin && (
                  <a
                    href={socialMediaLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn ↗
                  </a>
                )}
                {contactInfo.email_address && (
                  <a href={`mailto:${contactInfo.email_address}`}>Email ↗</a>
                )}
                <span className="meta-tag">📍 {contactInfo.location}</span>
              </div>
            </div>
          </header>
        </Reveal>

        {/* Straight Left Timeline Spine */}
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

            <Reveal delay={40}>
              <article className="timeline-entry">
                <span className="entry-node"></span>
                <div className="entry-title-row">
                  <h2 className="entry-title">Associate Software Engineer</h2>
                  <span className="entry-date">Apr 2026 – Present</span>
                </div>
                <div className="entry-subtitle">
                  Anantech Venture Limited, Mumbai
                </div>
                <p className="entry-desc">
                  Building automated data pipelines and scalable backend systems
                  for enterprise operations.
                </p>
                <ul className="entry-bullets">
                  <li>
                    Built enterprise task tracking and attendance platforms with
                    structured PostgreSQL data models.
                  </li>
                  <li>
                    Automated Telegram campaign data extraction pipeline,
                    eliminating repetitive manual data entry.
                  </li>
                </ul>
              </article>
            </Reveal>

            <Reveal delay={80}>
              <article className="timeline-entry">
                <span className="entry-node"></span>
                <div className="entry-title-row">
                  <h2 className="entry-title">AI Analyst</h2>
                  <span className="entry-date">Nov 2025 – Feb 2026</span>
                </div>
                <div className="entry-subtitle">Soul AI</div>
                <p className="entry-desc">
                  Conducted systematic error analysis and prompt benchmarking on
                  1,000+ LLM outputs, driving an 18% improvement in model
                  generation quality across 3 product iterations.
                </p>
              </article>
            </Reveal>

            <Reveal delay={120}>
              <article className="timeline-entry">
                <span className="entry-node"></span>
                <div className="entry-title-row">
                  <h2 className="entry-title">Technical Volunteer</h2>
                  <span className="entry-date">Dec 2022 – Feb 2026</span>
                </div>
                <div className="entry-subtitle">GDSC, VIT-AP University</div>
                <p className="entry-desc">
                  Mentored 300+ students in Machine Learning, Deep Learning, and
                  Python across 15+ hackathons and hands-on workshops.
                </p>
              </article>
            </Reveal>
          </section>

          {/* Section 02: Featured Projects */}
          <section className="timeline-section" id="projects">
            <Reveal>
              <div className="section-header">
                <span className="section-node"></span>
                <span className="section-index">02 //</span>
                <span className="section-title">Featured Projects</span>
              </div>
            </Reveal>

            <Reveal delay={40}>
              <article className="timeline-entry">
                <span className="entry-node"></span>
                <div className="entry-title-row">
                  <h2 className="entry-title">
                    MediSkin — AI Skin Disease Detection
                  </h2>
                  <span className="entry-date">Computer Vision &amp; AI</span>
                </div>
                <p className="entry-desc">
                  MobileNetV2 CNN classifier detecting 7 types of skin diseases
                  with <strong>88.92% accuracy</strong> and sub-120ms real-time
                  inference latency.
                </p>
                <div className="entry-footer">
                  <div className="entry-links">
                    <a
                      href="https://github.com/xenon110/Mediskin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub Code ↗
                    </a>
                  </div>
                  <div className="entry-tech">
                    Python • TensorFlow • CNN • React • Firebase
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={80}>
              <article className="timeline-entry">
                <span className="entry-node"></span>
                <div className="entry-title-row">
                  <h2 className="entry-title">
                    Veyra — AI Email Analytics Platform
                  </h2>
                  <span className="entry-date">NLP &amp; LLMs</span>
                </div>
                <p className="entry-desc">
                  Intelligent email management engine powered by Gemini 1.5 Pro
                  achieving <strong>94.5% precision</strong> in categorization,
                  currently serving 50+ active users.
                </p>
                <div className="entry-footer">
                  <div className="entry-links">
                    <a
                      href="https://github.com/xenon110/Veyra"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub Code ↗
                    </a>
                  </div>
                  <div className="entry-tech">
                    FastAPI • Gemini API • Gmail API • PostgreSQL
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={120}>
              <article className="timeline-entry">
                <span className="entry-node"></span>
                <div className="entry-title-row">
                  <h2 className="entry-title">
                    Scan2Eat — Food Nutrition &amp; Safety
                  </h2>
                  <span className="entry-date">AI &amp; Mobile</span>
                </div>
                <p className="entry-desc">
                  OpenCV and OCR-driven nutrition analyzer parsing ingredients and
                  toxicity risks with <strong>91.2% accuracy</strong> across
                  5,000+ packaged items.
                </p>
                <div className="entry-footer">
                  <div className="entry-links">
                    <a
                      href="https://github.com/xenon110/Scan2Eat"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub Code ↗
                    </a>
                  </div>
                  <div className="entry-tech">
                    Python • OpenCV • Machine Learning • React Native
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={160}>
              <article className="timeline-entry">
                <span className="entry-node"></span>
                <div className="entry-title-row">
                  <h2 className="entry-title">Enterprise Task Platform</h2>
                  <span className="entry-date">Backend &amp; Cloud</span>
                </div>
                <p className="entry-desc">
                  Collaboration backend with role-based access control (RBAC),
                  automated workflow escalation, and sub-50ms data synchronization.
                </p>
                <div className="entry-footer">
                  <div className="entry-links">
                    <a
                      href="https://github.com/xenon110/Task_Management_BKM"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub Code ↗
                    </a>
                  </div>
                  <div className="entry-tech">
                    Python • Node.js • PostgreSQL • React
                  </div>
                </div>
              </article>
            </Reveal>
          </section>

          {/* Section 03: Technical Skills */}
          <section className="timeline-section" id="skills">
            <Reveal>
              <div className="section-header">
                <span className="section-node"></span>
                <span className="section-index">03 //</span>
                <span className="section-title">Technical Skills</span>
              </div>
            </Reveal>

            <Reveal>
              <div className="timeline-entry">
                <span className="entry-node"></span>
                <div className="skills-list">
                  <div className="skill-row">
                    <span className="skill-label">Languages:</span>
                    <span className="skill-value">
                      Python, SQL, JavaScript, C++, Git &amp; GitHub
                    </span>
                  </div>
                  <div className="skill-row">
                    <span className="skill-label">AI &amp; Data Science:</span>
                    <span className="skill-value">
                      TensorFlow, PyTorch, Scikit-learn, OpenCV, Pandas, NumPy,
                      Gemini API, Kaggle
                    </span>
                  </div>
                  <div className="skill-row">
                    <span className="skill-label">Cloud &amp; Infra:</span>
                    <span className="skill-value">
                      AWS (S3, Lambda, SageMaker, CloudWatch, EC2), Docker, REST
                      APIs
                    </span>
                  </div>
                  <div className="skill-row">
                    <span className="skill-label">Databases &amp; Web:</span>
                    <span className="skill-value">
                      PostgreSQL, Supabase, Firebase, FastAPI, Node.js, React
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          {/* Section 04: Research */}
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
                    Energy Optimization in Data Centers
                  </h2>
                </div>
                <div className="entry-subtitle">VIT-AP University</div>
                <p className="entry-desc">
                  Researched data-driven algorithmic approaches to reduce power
                  consumption in large-scale data centers while preserving
                  computational throughput and reliability.
                </p>
              </article>
            </Reveal>
          </section>

          {/* Section 05: Certifications & Achievements */}
          <section className="timeline-section" id="achievements">
            <Reveal>
              <div className="section-header">
                <span className="section-node"></span>
                <span className="section-index">05 //</span>
                <span className="section-title">
                  Certifications &amp; Honors
                </span>
              </div>
            </Reveal>

            <Reveal>
              <div className="timeline-entry">
                <span className="entry-node"></span>
                <div className="achievements-list">
                  <div className="achievement-row">
                    <span className="achievement-title">
                      GATE 2025 &amp; 2026 Qualified
                    </span>
                    <span className="achievement-tag">
                      Computer Science &amp; IT
                    </span>
                  </div>
                  <div className="achievement-row">
                    <span className="achievement-title">
                      BARC Scientific Officer Exam Qualified
                    </span>
                    <span className="achievement-tag">National Exam</span>
                  </div>
                  <div className="achievement-row">
                    <span className="achievement-title">
                      AWS Academy Cloud Architecting
                    </span>
                    <span className="achievement-tag">AWS Certified</span>
                  </div>
                  <div className="achievement-row">
                    <span className="achievement-title">
                      500+ LeetCode DSA Problems Solved
                    </span>
                    <span className="achievement-tag">Algorithms</span>
                  </div>
                  <div className="achievement-row">
                    <span className="achievement-title">
                      Top 10 AI/ML Projects Award &amp; Hackathon Winner
                    </span>
                    <span className="achievement-tag">VIT-AP</span>
                  </div>
                  <div className="achievement-row">
                    <span className="achievement-title">
                      Cybersecurity Essentials
                    </span>
                    <span className="achievement-tag">Cisco Academy</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          {/* Section 06: Education */}
          <section className="timeline-section" id="education">
            <Reveal>
              <div className="section-header">
                <span className="section-node"></span>
                <span className="section-index">06 //</span>
                <span className="section-title">Education</span>
              </div>
            </Reveal>

            <Reveal delay={40}>
              <article className="timeline-entry">
                <span className="entry-node"></span>
                <div className="entry-title-row">
                  <h2 className="entry-title">VIT-AP University</h2>
                  <span className="entry-date">2022 – 2026</span>
                </div>
                <div className="entry-subtitle">
                  B.Tech in Computer Science and Engineering •{" "}
                  <strong>CGPA: 8.66 / 10.0</strong>
                </div>
              </article>
            </Reveal>

            <Reveal delay={80}>
              <article className="timeline-entry">
                <span className="entry-node"></span>
                <div className="entry-title-row">
                  <h2 className="entry-title">Majdoor Kishan College</h2>
                  <span className="entry-date">2020 – 2022</span>
                </div>
                <div className="entry-subtitle">
                  Class XII (Senior Secondary, Science &amp; Mathematics) •{" "}
                  <strong>87%</strong>
                </div>
              </article>
            </Reveal>

            <Reveal delay={120}>
              <article className="timeline-entry">
                <span className="entry-node"></span>
                <div className="entry-title-row">
                  <h2 className="entry-title">
                    Jawahar Navodaya Vidyalaya (JNV Palamu)
                  </h2>
                  <span className="entry-date">2019 – 2020</span>
                </div>
                <div className="entry-subtitle">
                  Class X (Secondary School Certificate) • <strong>85%</strong>
                </div>
              </article>
            </Reveal>
          </section>

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
                      github.com/xenon110
                    </a>
                  </div>
                  <div className="contact-row">
                    <span className="contact-key">Kaggle:</span>
                    <a
                      href={socialMediaLinks.kaggle}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      kaggle.com/raj110
                    </a>
                  </div>
                  <div className="contact-row">
                    <span className="contact-key">LinkedIn:</span>
                    <a
                      href={socialMediaLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      linkedin.com/in/mayank-raj-b8b312272
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
                        Google Drive PDF ↗
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
                {"// Mayank Raj • " + new Date().getFullYear()}
              </div>
            </div>
          </Reveal>
        </main>
      </div>
    </div>
  );
};

export default Main;
