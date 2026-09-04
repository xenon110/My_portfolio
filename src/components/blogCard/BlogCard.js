import React from "react";
import "./BlogCard.scss";

export default function BlogCard({blog, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div
      className={isDark ? "blog-container blog-card-dark" : "blog-container blog-card-light"}
      onClick={() => openUrlInNewTab(blog.url, blog.title)}
    >
      <div className="blog-top-header">
        <div className="blog-icon-cube">
          <span>{blog.badge || "💻"}</span>
        </div>
        {blog.tag && (
          <div className="blog-status-chip">
            <span className="blog-dot"></span>
            {blog.tag}
          </div>
        )}
      </div>

      <div className="blog-content-group">
        <h3 className={isDark ? "small-dark blog-title" : "blog-title"}>
          {blog.title}
        </h3>
        <p className={isDark ? "small-dark small" : "small"}>
          {blog.description}
        </p>
      </div>

      <div className="blog-card-footer">
        <span className={isDark ? "dark-mode blog-btn" : "blog-btn"}>
          Explore Platform <span className="arrow-icon">↗</span>
        </span>
      </div>
    </div>
  );
}
