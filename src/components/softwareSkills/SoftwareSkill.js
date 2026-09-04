import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div className="software-skills-wrapper">
      <div className="tech-pills-container">
        {skillsSection.softwareSkills.map((skill, i) => {
          return (
            <div key={i} className="tech-pill-badge">
              <i className={`${skill.fontAwesomeClassname} tech-icon`}></i>
              <span className="tech-name">{skill.skillName}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
