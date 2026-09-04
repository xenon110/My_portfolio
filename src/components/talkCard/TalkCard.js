import React from "react";
import "./TalkCard.scss";

export default function TalkCard({talkDetails}) {
  return (
    <div className="talk-container">
      <div
        className={
          talkDetails.isDark ? "dark-rectangle rectangle" : "rectangle"
        }
      >
        <div className="talk-top-header">
          <div className="talk-icon-cube">
            <span>{talkDetails.badge || "📑"}</span>
          </div>
          {talkDetails.tag && (
            <div className="talk-status-chip">
              <span className="talk-dot"></span>
              {talkDetails.tag}
            </div>
          )}
        </div>

        <div className="talk-content">
          <h5 className="talk-card-title">{talkDetails.title}</h5>
          <p className="talk-card-subtitle">{talkDetails.subtitle}</p>
        </div>
      </div>
    </div>
  );
}
