import React, {useState} from "react";
import "./Technologies.scss";
import {Fade} from "react-reveal";

export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Data Science & ML",
    "Languages",
    "Web & Backend",
    "Databases",
    "Cloud & Tools"
  ];

  const allTechnologies = [
    // Data Science & Machine Learning (Prominently featured first)
    {
      name: "Machine Learning",
      category: "Data Science & ML",
      icon: <i className="fas fa-brain" style={{color: "#FF9900"}}></i>
    },
    {
      name: "Data Science",
      category: "Data Science & ML",
      icon: <i className="fas fa-chart-pie" style={{color: "#0284C7"}}></i>
    },
    {
      name: "Pandas",
      category: "Data Science & ML",
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="#150458">
          <rect x="6" y="4" width="3" height="16" rx="1.5" />
          <rect x="11" y="7" width="3" height="10" rx="1.5" />
          <rect x="16" y="4" width="3" height="16" rx="1.5" />
        </svg>
      )
    },
    {
      name: "NumPy",
      category: "Data Science & ML",
      icon: <i className="fas fa-cubes" style={{color: "#013243"}}></i>
    },
    {
      name: "Scikit-learn",
      category: "Data Science & ML",
      icon: (
        <div className="sklearn-badge">
          <span className="scikit-text">scikit</span>
          <span className="learn-text">learn</span>
        </div>
      )
    },
    {
      name: "TensorFlow",
      category: "Data Science & ML",
      icon: <i className="fas fa-fire" style={{color: "#FF6F00"}}></i>
    },
    {
      name: "PyTorch",
      category: "Data Science & ML",
      icon: <i className="fas fa-bolt" style={{color: "#EE4C2C"}}></i>
    },
    {
      name: "OpenCV",
      category: "Data Science & ML",
      icon: <i className="fas fa-eye" style={{color: "#5C3EE8"}}></i>
    },
    {
      name: "Matplotlib",
      category: "Data Science & ML",
      icon: <i className="fas fa-chart-line" style={{color: "#11557C"}}></i>
    },
    {
      name: "Seaborn",
      category: "Data Science & ML",
      icon: <i className="fas fa-chart-bar" style={{color: "#4C72B0"}}></i>
    },

    // Programming Languages
    {
      name: "Python",
      category: "Languages",
      icon: <i className="fab fa-python" style={{color: "#3776AB"}}></i>
    },
    {
      name: "SQL",
      category: "Languages",
      icon: <i className="fas fa-database" style={{color: "#336791"}}></i>
    },
    {
      name: "Java",
      category: "Languages",
      icon: <i className="fab fa-java" style={{color: "#ED8B00"}}></i>
    },
    {
      name: "R",
      category: "Languages",
      icon: <i className="fab fa-r-project" style={{color: "#276DC3"}}></i>
    },

    // Web & Backend
    {
      name: "FastAPI",
      category: "Web & Backend",
      icon: <i className="fas fa-bolt" style={{color: "#009688"}}></i>
    },
    {
      name: "Flask",
      category: "Web & Backend",
      icon: <i className="fas fa-pepper-hot" style={{color: "#000000"}}></i>
    },
    {
      name: "Node.js",
      category: "Web & Backend",
      icon: <i className="fab fa-node-js" style={{color: "#339933"}}></i>
    },
    {
      name: "React",
      category: "Web & Backend",
      icon: <i className="fab fa-react" style={{color: "#61DAFB"}}></i>
    },
    {
      name: "React Native",
      category: "Web & Backend",
      icon: <i className="fab fa-react" style={{color: "#00D8FF"}}></i>
    },

    // Databases
    {
      name: "PostgreSQL",
      category: "Databases",
      icon: <i className="fas fa-database" style={{color: "#336791"}}></i>
    },
    {
      name: "MySQL",
      category: "Databases",
      icon: <i className="fas fa-server" style={{color: "#4479A1"}}></i>
    },
    {
      name: "Firebase",
      category: "Databases",
      icon: <i className="fas fa-fire" style={{color: "#FFCA28"}}></i>
    },
    {
      name: "Supabase",
      category: "Databases",
      icon: <i className="fas fa-bolt" style={{color: "#3ECF8E"}}></i>
    },

    // Cloud & Tools
    {
      name: "AWS",
      category: "Cloud & Tools",
      icon: <i className="fab fa-aws" style={{color: "#FF9900"}}></i>
    },
    {
      name: "Git",
      category: "Cloud & Tools",
      icon: <i className="fab fa-git-alt" style={{color: "#F05032"}}></i>
    },
    {
      name: "GitHub",
      category: "Cloud & Tools",
      icon: <i className="fab fa-github" style={{color: "#181717"}}></i>
    },
    {
      name: "Vercel",
      category: "Cloud & Tools",
      icon: <i className="fas fa-caret-up" style={{color: "#000000"}}></i>
    }
  ];

  const filteredTech =
    activeCategory === "All"
      ? allTechnologies
      : allTechnologies.filter(tech => tech.category === activeCategory);

  return (
    <Fade bottom duration={1000} distance="20px">
      <section className="tech-section-container" id="technologies">
        <div className="section-header-row">
          <div>
            <h2 className="section-title">
              Tech Stack &amp; Tools I've Built With
            </h2>
            <p className="section-subtitle-text">
              Frameworks, libraries &amp; cloud tools actively applied in my
              projects
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="tech-category-tabs">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`category-tab-btn ${
                activeCategory === cat ? "active" : ""
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="tech-icons-row">
          {filteredTech.map((tech, idx) => (
            <div key={idx} className="tech-item">
              <div className="tech-icon-circle">{tech.icon}</div>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>
    </Fade>
  );
}
