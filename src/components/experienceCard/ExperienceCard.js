import React from "react";
import "./ExperienceCard.scss";

export default function ExperienceCard({cardInfo, isDark}) {
  const GetDescBullets = ({descBullets, isDark}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i} className="experience-bullet-item">
            <span className="bullet-icon">✔</span>
            <span className={isDark ? "dark-mode-text bullet-text" : "bullet-text"}>
              {item}
            </span>
          </li>
        ))
      : null;
  };

  return (
    <div className={isDark ? "experience-card experience-card-dark" : "experience-card experience-card-light"}>
      <div className="experience-header-bar">
        <div className="experience-company-meta">
          <div className="experience-logo-box">
            {cardInfo.companylogo === "google" || cardInfo.companylogo === "gdsc" ? (
              <i className="fab fa-google" style={{ fontSize: "24px", color: "#4285F4" }}></i>
            ) : cardInfo.companylogo === "soulai" || cardInfo.companylogo === "ai" ? (
              <i className="fas fa-brain" style={{ fontSize: "24px", color: "#10B981" }}></i>
            ) : cardInfo.companylogo === "anantech" || cardInfo.companylogo === "code" ? (
              <i className="fas fa-layer-group" style={{ fontSize: "24px", color: "#0284C7" }}></i>
            ) : cardInfo.companylogo === "aws" ? (
              <i className="fab fa-aws" style={{ fontSize: "28px", color: "#FF9900" }}></i>
            ) : cardInfo.companylogo?.includes("/") ? (
              <img
                className="experience-company-logo"
                src={cardInfo.companylogo}
                alt={cardInfo.company}
              />
            ) : (
              <i className="fas fa-briefcase" style={{ fontSize: "24px", color: "#64748B" }}></i>
            )}
          </div>
          <div className="experience-title-group">
            <h5 className={isDark ? "experience-role dark-mode-text" : "experience-role"}>
              {cardInfo.role}
            </h5>
            <h6 className="experience-company-name">
              {cardInfo.company}
            </h6>
          </div>
        </div>

        <div className="experience-date-badge">
          <span className="date-pulse"></span>
          {cardInfo.date}
        </div>
      </div>

      <div className="experience-divider"></div>

      <div className="experience-body">
        {cardInfo.desc && (
          <p className={isDark ? "experience-desc dark-mode-text" : "experience-desc"}>
            {cardInfo.desc}
          </p>
        )}
        {cardInfo.descBullets && (
          <ul className="experience-bullet-list">
            <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
          </ul>
        )}
      </div>
    </div>
  );
}
