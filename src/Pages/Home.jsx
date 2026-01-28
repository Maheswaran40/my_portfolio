import React from "react";
import Navbar from "./Navbar";

function Home() {
  const skills = [
    { name: "React.js", level: 85 },
    { name: "Next.js", level: 75 },
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 75 },
    { name: "MongoDB", level: 70 },
    { name: "JavaScript", level: 85 },
    { name: "HTML5", level: 90 },
    { name: "CSS3", level: 85 },
    { name: "Bootstrap", level: 80 },
    { name: "Git", level: 75 }
  ];

  const projects = [
    { id: 1, name: "E-Commerce Platform", description: "Full-featured online store with cart and payment" },
    { id: 2, name: "Task Management App", description: "Real-time collaborative task manager" },
    { id: 3, name: "Portfolio Website", description: "Responsive personal portfolio" }
  ];

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div className="mt-2">
          <h1 className="display-4 fw-bold">About Me</h1>
          <div id="heading"></div>
        </div>
        <Navbar />
      </div>
      
      <br />
      
      <div className="text-light animate__animated animate__fadeIn">
        {/* Hero Section */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-8">
            <p className="fs-5 mb-4" style={{ textAlign: "justify" }}>
              I am <span className="text-info fw-bold">Maheswaran</span>, a BCA graduate currently working as a Full-Stack Developer at iLife Academy. I specialize in building modern web applications using cutting-edge technologies with a focus on performance, scalability, and user experience.
            </p>
            <p className="fs-5 mb-4" style={{ textAlign: "justify" }}>
              With hands-on experience in the MERN stack, I develop responsive web applications from concept to deployment. Passionate about clean code, best practices, and continuous learning in the ever-evolving web development landscape.
            </p>
          </div>
          <div className="col-lg-4 text-center">
            <div className="bg-gradient-primary p-4 rounded-4">
              <h3 className="mb-3">Quick Stats</h3>
              <div className="d-flex justify-content-around">
                <div>
                  <h2 className="text-warning">1+</h2>
                  <small>Years Experience</small>
                </div>
                <div>
                  <h2 className="text-warning">3+</h2>
                  <small>Projects Done</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Purpose Section */}
        <section className="mb-5">
          <h2 className="mb-4">Purpose of This Website</h2>
          <div className="card bg-dark border-primary mb-3">
            <div className="card-body">
              <p className="fs-5 mb-0" style={{ textAlign: "justify" }}>
                This portfolio serves as both a showcase of my technical abilities and a platform to share valuable insights. Here, you'll find detailed case studies of my projects, technical tutorials, and resources that demonstrate my problem-solving approach and development methodology.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-5">
          <h2 className="mb-4">Technical Expertise</h2>
          <div className="row g-3">
            {skills.map((skill, index) => (
              <div key={index} className="col-md-4 col-sm-6">
                <div className="skill-card p-3 rounded-3 border border-primary bg-dark">
                  <span className="fs-6">{skill.name}</span>
                  <div className="progress mt-2" style={{ height: "5px" }}>
                    <div 
                      className="progress-bar bg-gradient-primary" 
                      role="progressbar" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <small className="text-muted mt-1">{skill.level}%</small>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-5">
          <h2 className="mb-4">Highlights & Successes</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="stats-card text-center p-4 rounded-4">
                <h1 className="display-3 fw-bold text-warning">1+</h1>
                <h5>YEARS OF EXPERIENCE</h5>
                <small>Professional Development</small>
              </div>
            </div>
            <div className="col-md-4">
              <div className="stats-card text-center p-4 rounded-4">
                <h1 className="display-3 fw-bold text-warning">3+</h1>
                <h5>PROJECTS COMPLETED</h5>
                <small>Successfully Delivered</small>
              </div>
            </div>
            <div className="col-md-4">
              <div className="stats-card text-center p-4 rounded-4">
                <h1 className="display-3 fw-bold text-warning">2+</h1>
                <h5>ACTIVE PROJECTS</h5>
                <small>Currently In Progress</small>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="mb-4">Featured Projects</h2>
          <p className="fs-5 mb-4">A glimpse into my professional journey.</p>
          
          <div id="project-section">
            {projects.map((project, index) => (
              <a 
                key={project.id} 
                href="https://www.youtube.com" 
                className="project-section-child text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <div className="display-1 mb-3">0{index + 1}</div>
                  <h4 className="mb-2">{project.name}</h4>
                  <p className="mb-0 small">{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
      
      <br />
      <br />
    </>
  );
}

export default Home;