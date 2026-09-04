import React from "react";
import "./StatsBar.scss";
import { statsBar } from "../../portfolio";
import { Fade } from "react-reveal";

export default function StatsBar() {
  if (!statsBar || statsBar.length === 0) {
    return null;
  }

  const renderIcon = (iconName) => {
    if (iconName === "cube") {
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#0284c7" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      );
    } else if (iconName === "database") {
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#0284c7" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3"/>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
        </svg>
      );
    } else if (iconName === "leetcode" || iconName === "code") {
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="#FFA116">
          <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863 0-.713.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.606-2.636a4.994 4.994 0 00-3.585-1.44c-1.357 0-2.636.525-3.586 1.474l-4.319 4.382A5.023 5.023 0 002.5 14.312c0 1.358.525 2.637 1.474 3.587l4.332 4.363A5.04 5.04 0 0011.892 23.7c1.357 0 2.636-.525 3.586-1.474l2.697-2.607c.514-.514.496-1.365-.039-1.901-.535-.535-1.386-.552-1.901-.038zM20.811 13.01H10.666c-.726 0-1.314.588-1.314 1.314 0 .726.588 1.314 1.314 1.314h10.145c.726 0 1.314-.588 1.314-1.314 0-.726-.588-1.314-1.314-1.314z" />
        </svg>
      );
    } else if (iconName === "gate" || iconName === "award" || iconName === "certificate") {
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="6"/>
          <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
        </svg>
      );
    } else if (iconName === "github") {
      return <i className="fab fa-github stat-icon"></i>;
    } else if (iconName === "aws") {
      return <i className="fab fa-aws stat-icon aws-stat-color"></i>;
    } else if (iconName === "graduation-cap") {
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#0284c7" strokeWidth="2">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c0 2 6 3 6 3s6-1 6-3v-5"/>
        </svg>
      );
    }
    return <i className="fas fa-chart-bar stat-icon"></i>;
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <section className="stats-section-container">
        <div className="stats-grid">
          {statsBar.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-icon-wrapper">{renderIcon(stat.icon)}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-subtext">{stat.subtext}</div>
            </div>
          ))}
        </div>
      </section>
    </Fade>
  );
}
