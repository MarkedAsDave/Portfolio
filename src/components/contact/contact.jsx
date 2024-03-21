import "./contact.css";
import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShareIcon from "@mui/icons-material/Share";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import axios from "axios";

export default function Contact({ isDarkMode }) {
  const currentYear = new Date().getFullYear();

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    // Email validation regex pattern
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};

    // Validate form fields
    if (formData.fullname.trim() === "") {
      errors.fullname = "Full name is required";
    }
    if (formData.email.trim() === "") {
      errors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (formData.subject.trim() === "") {
      errors.subject = "Subject is required";
    }
    if (formData.message.trim() === "") {
      errors.message = "Message is required";
    }

    setFormErrors(errors);
    console.log(formData)
    // If no errors, submit the form
    if (Object.keys(errors).length === 0) {
      // Send form data to backend
      axios.post("http://localhost:8000/api/contact/", formData, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then((response) => {
          console.log(response.data);
          // Optionally, reset form fields
          setFormData({
            fullname: "",
            email: "",
            subject: "",
            message: "",
          });
          // Optionally, show success message
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
          // Optionally, show error message
        });
    }
  };
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
                    className={`a-icons ${
                      isDarkMode ? "dark-mode" : "light-mode"
                    }`}
                    href="https://www.facebook.com/markdave.lorejo.7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    className={`a-icons ${
                      isDarkMode ? "dark-mode" : "light-mode"
                    }`}
                    href="https://www.instagram.com/marcdavve/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    className={`a-icons ${
                      isDarkMode ? "dark-mode" : "light-mode"
                    }`}
                    href="https://www.linkedin.com/in/mark-dave-lorejo-5716242b3/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                    className={`a-icons ${
                      isDarkMode ? "dark-mode" : "light-mode"
                    }`}
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
            <input
              className={`input-fields ${isDarkMode ? "dark-mode" : "light-mode"}`}
              type="text"
              name="fullname"
              placeholder="Full Name"
              value={formData.fullname}
              onChange={handleInputChange}
            />
            {formErrors.fullname && <span className="error">{formErrors.fullname}</span>}
            <input
              className={`input-fields ${isDarkMode ? "dark-mode" : "light-mode"}`}
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {formErrors.email && <span className="error">{formErrors.email}</span>}
          </div>
          <div className="subject">
            <input
              className={`input-fields ${isDarkMode ? "dark-mode" : "light-mode"}`}
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleInputChange}
            />
            {formErrors.subject && <span className="error">{formErrors.subject}</span>}
          </div>
          <div className="message">
            <input
              className={`input-fields-message ${isDarkMode ? "dark-mode" : "light-mode"}`}
              type="text"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
            />
            {formErrors.message && <span className="error">{formErrors.message}</span>}
          </div>
          <button className="button-send"  onClick={handleSubmit}>Send</button>
        </div>
        <div className="footer">
          <p>© {currentYear} Mark Dave Lorejo</p>
        </div>
      </div>
    </>
  );
}
