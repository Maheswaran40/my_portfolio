import React, { useState, useMemo } from "react";
import Navbar from "./Navbar";
import Mail from "../assets/mail.png";
import Call from "../assets/call.png";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  // Generate deterministic QR pattern (not random on each render)
  const qrPattern = useMemo(() => {
    const pattern = [];
    // Use a simple algorithm based on index for deterministic pattern
    for (let i = 0; i < 25; i++) {
      // Deterministic pattern: even indices get one color, odd another
      pattern.push(i % 3 === 0 ? 'bg-light' : 'bg-dark');
    }
    return pattern;
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "eswermahes@gmail.com",
      subInfo: "I'll respond within 24 hours"
    },
    {
      icon: Call,
      title: "Phone",
      info: "+91 9884634074",
      subInfo: "Mon-Fri from 9am-6pm"
    }
  ];

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div className="mt-2 ms-3">
          <h1 className="display-4 fw-bold">Let's Connect</h1>
          <div id="heading"></div>
        </div>
        <Navbar />
      </div>
      
      <br />
      
      <div className="contact-container px-3">
        <div className="row">
          {/* Contact Info */}
          <div className="col-lg-5 mb-4 mb-lg-0">
            <div id="contact-info" className="p-4 rounded-4 h-100">
              <h2 className="mb-4 text-light">Contact Details</h2>
              
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-item d-flex align-items-start mb-4">
                  <div className="contact-icon me-3">
                    <img src={item.icon} alt={item.title} width="40" />
                  </div>
                  <div>
                    <h5 className="mb-1 text-light">{item.title}</h5>
                    <p className="fs-5 fw-bold mb-1 text-light">{item.info}</p>
                    <small className="text-light-50">{item.subInfo}</small>
                  </div>
                </div>
              ))}
              
              <div className="mt-5">
                <h5 className="mb-3 text-light">Connect with me</h5>
                <div className="d-flex gap-3">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-btn">
                    <i className="bi bi-github fs-4 text-light"></i>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-btn">
                    <i className="bi bi-linkedin fs-4 text-light"></i>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-btn">
                    <i className="bi bi-twitter fs-4 text-light"></i>
                  </a>
                </div>
              </div>
              
              {/* QR Code */}
              <div className="mt-5 text-center">
                <div className="qr-code-placeholder p-4 rounded-3 d-inline-block bg-dark">
                  <div className="qr-grid mb-2 mx-auto" style={{width: '120px', height: '120px', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '2px'}}>
                    {qrPattern.map((cellClass, i) => (
                      <div key={i} className={`qr-cell ${cellClass}`}></div>
                    ))}
                  </div>
                  <small className="text-light-50">Scan to save contact</small>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="contact-form-card p-4 rounded-4 h-100">
              <h2 className="mb-4 text-light">Send me a message</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="name" className="form-label text-light">Your Name</label>
                    <input
                      type="text"
                      className="form-control form-control-lg bg-dark text-light border-primary"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label text-light">Your Email</label>
                    <input
                      type="email"
                      className="form-control form-control-lg bg-dark text-light border-primary"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label text-light">Subject</label>
                  <input
                    type="text"
                    className="form-control form-control-lg bg-dark text-light border-primary"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="form-label text-light">Message</label>
                  <textarea
                    className="form-control form-control-lg bg-dark text-light border-primary"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary btn-lg w-100 py-3 gradient-btn">
                  <span className="fs-5">Send Message</span>
                  <i className="bi bi-send ms-2"></i>
                </button>
              </form>
              
              <div className="mt-4 text-center">
                <small className="text-light-50">
                  <i className="bi bi-clock me-1"></i>
                  Average response time: 6-12 hours
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;