import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) return;
    var win = window.open(url, "_blank");
    win.focus();
  }

  const footerLinks = cardInfo.footer || cardInfo.footerLink;

  const renderIcon = iconName => {
    if (iconName === "aws")
      return (
        <i
          className="fab fa-aws"
          style={{color: "#FF9900", fontSize: "22px"}}
        ></i>
      );
    if (iconName === "atom")
      return (
        <i
          className="fas fa-atom"
          style={{color: "#0284C7", fontSize: "22px"}}
        ></i>
      );
    if (iconName === "shield")
      return (
        <i
          className="fas fa-shield-alt"
          style={{color: "#10B981", fontSize: "22px"}}
        ></i>
      );
    if (iconName === "chart")
      return (
        <i
          className="fas fa-chart-line"
          style={{color: "#3B82F6", fontSize: "22px"}}
        ></i>
      );
    if (iconName === "code")
      return (
        <i
          className="fas fa-code"
          style={{color: "#8B5CF6", fontSize: "22px"}}
        ></i>
      );
    if (iconName === "trophy")
      return (
        <i
          className="fas fa-trophy"
          style={{color: "#F59E0B", fontSize: "22px"}}
        ></i>
      );
    return (
      <i
        className="fas fa-certificate"
        style={{color: "#FF9900", fontSize: "22px"}}
      ></i>
    );
  };

  return (
    <div
      className={
        isDark ? "achievement-item-row dark-mode" : "achievement-item-row"
      }
    >
      <div className="achievement-icon-box">{renderIcon(cardInfo.icon)}</div>

      <div className="achievement-info-content">
        <h4 className="achievement-title-text">{cardInfo.title}</h4>
        <p className="achievement-subtitle-text">
          {cardInfo.subtitle || cardInfo.description}
        </p>
      </div>

      {cardInfo.tag && (
        <div className="achievement-tag-pill">{cardInfo.tag}</div>
      )}

      {footerLinks && (
        <div className="achievement-footer-links">
          {footerLinks.map((v, i) => (
            <button
              key={i}
              className="achievement-link-btn"
              onClick={() => openUrlInNewTab(v.url, v.name)}
            >
              {v.name} ↗
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
