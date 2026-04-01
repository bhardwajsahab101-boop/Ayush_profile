import React from "react";
import "./About_page.css";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const stats = [
    { label: "Years Learning", value: 1 },
    { label: "Projects Built", value: 2 },
    { label: "Tech Stack", value: 10   },
    { label: "Happy Lines of Code", value: "2000+" },
  ];

  const skillsPreview = [
    "React",
    "JavaScript",
    "HTML/CSS",
    "Vite",
    "Git",
    "Responsive Design",
  ];

  const bioSections = [
    "Hello! I'm Ayush Sharma, a B.Tech student passionate about web development and modern technologies.",
    "My journey started with curiosity about how websites work. This evolved into building interactive, user-friendly applications using React and Vite.",
    "I love learning new tools and applying them to real projects like this portfolio. Currently focusing on frontend while exploring full-stack.",
    "Continuous learning through challenges, open-source, and experimentation drives me forward.",
  ];

  return (
    <div className="about-page-container">
      {/* Hero */}
      <section className="about-hero">
        <div className="hero-image-wrapper">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgChBzh9Vos-EC-V-zHK95vPdQxnJd1i8a_cTnsTSuzKxITJ8edhp8l62O0sTIMbIxIRacCnAuEua5aEGc2LdIP4hcmOc8Bih1YqOOrJe7ntsLm0Ay-owQNi_0_al1z1avxn3tWu7kj-GbDsBmqSt_X1qE2wiCjcorjNFVGONdkuMFQUimlwyibFxohvCY/s320/WhatsApp%20Image%202026-02-12%20at%2021.37.50.jpeg"
            alt="Ayush Sharma"
            className="hero-image"
          />
        </div>
        <div className="hero-text">
          <h1 className="hero-heading">Ayush Sharma</h1>
          <p className="hero-subtitle">
            Aspiring Full-Stack Developer | B.Tech Student
          </p>
          <p className="hero-description">
            Passionate about crafting modern web experiences with clean code and
            beautiful design.
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="bio-section">
        <h2 className="section-heading">About Me</h2>
        <div className="bio-grid">
          <div className="bio-text glass-card">
            {bioSections.map((section, index) => (
              <p key={index} className="bio-paragraph">
                {section}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <h2 className="section-heading">My Journey in Numbers</h2>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card glass-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Preview */}
      <section className="skills-preview-section">
        <h2 className="section-heading">Core Skills</h2>
        <div className="skills-tags">
          {skillsPreview.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta-section">
        <div className="cta-grid">
          <a >
          </a>
          <Link to="/learning" className="cta-button glass-card large">
            My Learning Journey
          
          </Link>
          <Link to="/projects" className="cta-button glass-card large">
            See My Projects
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
