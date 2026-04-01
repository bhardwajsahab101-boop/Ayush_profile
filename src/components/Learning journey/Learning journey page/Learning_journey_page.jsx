import React from "react";

import "../learning-page-additional.css";

const LearningJourneyPage = () => {
  const timeline = [
    {
      year: "2024",
      title: "Programming Fundamentals",
      description:
        "Started with HTML, CSS, and JavaScript basics. Built first static websites and learned Git version control.",
    },
    {
      year: "2025",
      title: "Frontend Mastery",
      description:
        "Dived into advanced JavaScript (ES6+), React, Vite. Created portfolio, cards, contact forms, and this very site.",
    },
    {
      year: "2026",
      title: "Full-Stack Development",
      description:
        "Learning Node.js, Express, MongoDB. Integrating backend with frontend for dynamic apps.",
    },
    {
      year: "2027",
      title: "Advanced Frameworks",
      description:
        "Exploring Next.js, Tailwind CSS, TypeScript. Building scalable PWAs and APIs.",
    },
    {
      year: "Ongoing",
      title: "Continuous Growth",
      description:
        "DevOps (Docker), AI/ML basics, contributing to open source.",
    },
  ];

  const skills = [
    { name: "HTML/CSS", percentage: 95 },
    { name: "JavaScript", percentage: 85 },
    { name: "React", percentage: 75 },
    { name: "Node.js", percentage: 50 },
    { name: "Git", percentage: 90 },
  ];

  const currentlyLearning = [
    {
      title: "Next.js",
      description: "Server-side rendering and static site generation.",
    },
    {
      title: "MongoDB",
      description: "NoSQL database for full-stack apps.",
    },
    {
      title: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid styling.",
    },
  ];

  return (
    <div className="learning-page-container">
      {/* Hero Section */}
      <section className="learning-hero">
        <h1 className="learning-hero-heading">My Learning Journey</h1>
        
        <p className="learning-hero-subtitle">
          Tracking my evolution from coding newbie to aspiring full-stack
          developer. Every line of code is a step forward.
        </p>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <h2 className="section-heading">Milestones</h2>
        <div className="timeline">
          {timeline.map((item, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="timeline-content">
                <h3>{item.year}</h3>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2 className="section-heading">Skills Progress</h2>
        <div className="skills-grid">
          {skills.map((skill, index) =>   (
            <div key={index} className="skill-card">
              <h4>{skill.name}</h4>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>
              <span>{skill.percentage}%</span>
            </div>
          ))}
        </div>
      </section>

      {/* Currently Learning */}
      <section className="learning-section">
        <h2 className="section-heading">Currently Learning</h2>
        <div className="learning-grid">
          {currentlyLearning.map((item, index) => (
            <div key={index} className="learning-card glass-card">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <a href="/projects" className="cta-button glass-card">
          Explore My Projects
        </a>
      </section>
    </div>
  );
};

export default LearningJourneyPage;
