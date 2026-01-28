import React, { useState } from "react";
import "../App.css";
import Myimage from "../assets/image.png";
import Mail from "../assets/mail.png";
import location from "../assets/location.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const socialLinks = [
    { icon: github, alt: "GitHub", link: "https://github.com" },
    { icon: linkedin, alt: "LinkedIn", link: "https://linkedin.com" },
    { icon: instagram, alt: "Instagram", link: "https://instagram.com" }
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="p-5 d-lg-flex d-none justify-content-center align-items-center flex-column">
        {/* Profile Image */}
        <div className="profile-image-container mb-4">
          <img
            src={Myimage}
            width="200px"
            className="rounded-circle border-4 border-gradient"
            alt="Maheswaran S"
          />
          <div className="online-status"></div>
        </div>

        {/* Name & Title */}
        <h2 className="fw-bold mb-2">Maheswaran S</h2>
        <h4 className="gradient-bg p-3 rounded-pill fs-5 fw-bold">
          Full Stack Developer
        </h4>

        <br />
        <br />
        
        {/* Divider */}
        <div id="underline" className="mb-4"></div>
        
        {/* Contact Info */}
        <div className="w-100">
          {/* Email */}
          <div className="contact-item d-flex align-items-center mb-4 p-3 rounded-3">
            <div className="contact-icon me-3">
              <img src={Mail} alt="Email" width="30" />
            </div>
            <div>
              <span className="text-muted d-block">Email</span>
              <span className="fw-bold text-light">eswermahes@gmail.com</span>
            </div>
          </div>
          
          {/* Location */}
          <div className="contact-item d-flex align-items-center mb-4 p-3 rounded-3">
            <div className="contact-icon me-3">
              <img src={location} alt="Location" width="30" />
            </div>
            <div>
              <span className="text-muted d-block">Location</span>
              <span className="fw-bold text-light">Trichy, Tamil Nadu</span>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div id="underline" className="my-4"></div>
        
        {/* Social Links */}
        <div className="social-links d-flex justify-content-around w-100">
          {socialLinks.map((social, index) => (
            <a 
              key={index} 
              href={social.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img
                src={social.icon}
                className="rounded-circle p-2"
                width="50"
                height="50"
                alt={social.alt}
              />
            </a>
          ))}
        </div>
        
        {/* Available Status */}
        <div className="mt-4 d-flex align-items-center">
          <div className="available-dot me-2"></div>
          <span className="text-success">Available for opportunities</span>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className="d-lg-none mobile-sidebar">
        <div className="d-flex justify-content-between align-items-center p-3">
          <div className="d-flex align-items-center">
            <img
              src={Myimage}
              width="60px"
              className="rounded-circle me-3"
              alt="Maheswaran S"
            />
            <div>
              <h4 className="mb-1">Maheswaran S</h4>
              <span className="badge gradient-bg">Full Stack Developer</span>
            </div>
          </div>
          <button
            className={`accordion-button ${isCollapsed ? '' : 'collapsed'}`}
            type="button"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? '+' : '−'}
          </button>
        </div>
        
        {!isCollapsed && (
          <div className="accordion-content p-3">
            {/* Contact Info */}
            <div className="mb-4">
              <div className="d-flex align-items-center mb-3">
                <img src={Mail} alt="Email" width="20" className="me-2" />
                <div>
                  <small className="text-muted">Email</small>
                  <div className="fw-bold">eswermahes@gmail.com</div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <img src={location} alt="Location" width="20" className="me-2" />
                <div>
                  <small className="text-muted">Location</small>
                  <div className="fw-bold">Trichy</div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="d-flex justify-content-center mb-3">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.link} 
                  className="mx-2"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img
                    src={social.icon}
                    width="40"
                    height="40"
                    className="rounded-circle bg-light p-2"
                    alt={social.alt}
                  />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Sidebar;