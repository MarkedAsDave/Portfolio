import "./contact.css";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShareIcon from "@mui/icons-material/Share";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Contact({ isDarkMode }) {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="contact-container">
        <h2>Contact</h2>
        <div className="up">
          <div className="up-left">
            <div
              className={`up-left-content ${
                isDarkMode ? "dark-mode" : "light-mode"
              }`}
            >
              <div className="icon-container">
                <LocationOnIcon />
              </div>
              <div className="personal-info">
                <div className="personal-info-up">
                  <h4>Address</h4>
                </div>
                <div className="personal-info-down">
                  <p>Cagayan de Oro City, Misamis Oriental PH</p>
                </div>
              </div>
            </div>
            <div
              className={`up-left-content ${
                isDarkMode ? "dark-mode" : "light-mode"
              }`}
            >
              <div className="icon-container">
                <MailOutlineIcon />
              </div>
              <div className="personal-info">
                <div className="personal-info-up">
                  <h4>Email</h4>
                </div>
                <div className="personal-info-down">
                  <p>markdavelorejo@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="up-left">
            <div
              className={`up-left-content ${
                isDarkMode ? "dark-mode" : "light-mode"
              }`}
            >
              <div className="icon-container">
                <ShareIcon />
              </div>
              <div className="personal-info">
                <div className="personal-info-up">
                  <h4>Social Media</h4>
                </div>
                <div className="personal-info-icon">
                  <a 
                    className={`a-icons ${isDarkMode ? "dark-mode" : "light-mode"}`}
                    href="https://www.facebook.com/markdave.lorejo.7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookIcon />
                  </a>
                  <a
                   className={`a-icons ${isDarkMode ? "dark-mode" : "light-mode"}`}
                    href="https://www.instagram.com/marcdavve/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon />
                  </a>
                  <a
                   className={`a-icons ${isDarkMode ? "dark-mode" : "light-mode"}`}
                    href="https://www.linkedin.com/in/mark-dave-lorejo-5716242b3/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                   className={`a-icons ${isDarkMode ? "dark-mode" : "light-mode"}`}
                    href="https://github.com/MarkedAsDave"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon />
                  </a>
                </div>
              </div>
            </div>
            <div
              className={`up-left-content ${
                isDarkMode ? "dark-mode" : "light-mode"
              }`}
            >
              <div className="icon-container">
                <PhoneEnabledIcon />
              </div>
              <div className="personal-info">
                <div className="personal-info-up">
                  <h4>Phone</h4>
                </div>
                <div className="personal-info-down">
                  <p>+639687220768</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`down ${isDarkMode ? "dark-mode" : "light-mode"}`}>
          <div className="name-email">
            <input className={`input-fields ${isDarkMode ? "dark-mode" : "light-mode"}`} placeholder="fullname" />
            <input className={`input-fields ${isDarkMode ? "dark-mode" : "light-mode"}`} placeholder="email" />
          </div>
          <div className="subject">
            <input className={`input-fields ${isDarkMode ? "dark-mode" : "light-mode"}`} placeholder="subject" />
          </div>
          <div className="message">
            <input className={`input-fields-message ${isDarkMode ? "dark-mode" : "light-mode"}`} placeholder="message"/>
          </div>
          <button className="button-send">Send</button>
        </div>  
        <div className="footer">
          <p>© {currentYear} Mark Dave Lorejo</p>
        </div>
      </div>
    </>
  );
}
