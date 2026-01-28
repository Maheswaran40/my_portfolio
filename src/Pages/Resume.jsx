import React from "react";
import Navbar from "./Navbar";

function Resume() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Ilife Academy",
      period: "Oct 2024 - Present",
      description: "Building and maintaining full-stack web applications using MERN stack. Training students in frontend/backend development, REST APIs, database management, and project-based learning.",
      skills: ["React", "Node.js", "MongoDB", "Express", "REST APIs"]
    }
  ];

  const education = [
    {
      degree: "MERN Stack Development",
      institution: "Ilife Academy",
      location: "Trichy, Tamil Nadu",
      period: "2024",
      description: "Professional training in MERN Stack Development. Hands-on experience with real-world projects, RESTful APIs implementation, and full-stack application development."
    },
    {
      degree: "BCA (Computer Application)",
      institution: "Bishop Heber College",
      location: "Trichy, Tamil Nadu",
      period: "Jul 2022 - Mar 2025",
      description: "Strong foundation in computer science fundamentals, programming, and application development through academic projects and coursework."
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React.js", "Next.js", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"] },
    { category: "Database", items: ["MongoDB", "MySQL", "Database Design"] },
    { category: "Tools", items: ["Git", "GitHub", "VS Code", "Postman", "npm/yarn"] }
  ];

  const certifications = [
    { name: "MERN Stack Certification", issuer: "Ilife Academy", year: "2024" },
    { name: "Academic Excellence", issuer: "Bishop Heber College", year: "2023" }
  ];

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div className="mt-2">
          <h1 className="display-4 fw-bold">Resume</h1>
          <div id="heading"></div>
        </div>
        <Navbar />
      </div>

      <br />

      <div className="px-lg-4 details text-light">
        {/* Download Button */}
        <div className="text-end mb-4">
          <button className="btn gradient-bg text-white px-4 py-2">
            <i className="bi bi-download me-2"></i>Download CV
          </button>
        </div>

        {/* Experience Section */}
        <section className="mb-5">
          <h2 className="mb-4 section-title">Experience</h2>
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card card bg-dark border-primary mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-8">
                    <h3 className="card-title mb-1">{exp.title}</h3>
                    <h4 className="text-info mb-2">{exp.company}</h4>
                    <p className="card-text">{exp.description}</p>
                    <div className="d-flex flex-wrap gap-2 mt-3">
                      {exp.skills.map((skill, idx) => (
                        <span key={idx} className="skill-badge">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-4 text-md-end">
                    <div className="period-badge gradient-bg px-3 py-2 rounded-pill d-inline-block">
                      <h5 className="mb-0">{exp.period}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Education Section */}
        <section className="mb-5">
          <h2 className="mb-4 section-title">Education</h2>
          <div className="row">
            {education.map((edu, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div className="education-card h-100 p-4 rounded-4 border border-primary bg-dark">
                  <h3 className="h4 mb-2">{edu.degree}</h3>
                  <h4 className="h5 text-info mb-1">{edu.institution}</h4>
                  <h5 className="h6 text-muted mb-3">{edu.location}</h5>
                  <div className="period mb-3">
                    <span className="badge bg-primary">{edu.period}</span>
                  </div>
                  <p className="mb-0">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-5">
          <h2 className="mb-4 section-title">Technical Skills</h2>
          <div className="row g-4">
            {skills.map((skillCategory, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="skill-category-card p-4 rounded-4 h-100">
                  <h4 className="h5 mb-3">{skillCategory.category}</h4>
                  <div className="d-flex flex-wrap gap-2">
                    {skillCategory.items.map((skill, idx) => (
                      <span key={idx} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Info */}
        <section>
          <h2 className="mb-4 section-title">Certifications & Achievements</h2>
          <div className="row g-4">
            {certifications.map((cert, index) => (
              <div key={index} className="col-md-6">
                <div className="cert-card p-3 rounded-3 border border-primary bg-dark">
                  <h5 className="mb-2">{cert.name}</h5>
                  <p className="text-muted mb-0">{cert.issuer} - {cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Resume;