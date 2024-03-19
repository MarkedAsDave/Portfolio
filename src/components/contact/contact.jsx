import "./contact.css";
import React from "react";

export default function Contact() {

    const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="contact-container">
        <h2>Contact</h2>
        <div className="up">
          <div className="up-left">
            <div className="up-left-content"></div>
            <div className="up-left-content"></div>
          </div>
          <div className="up-left">
            <div className="up-left-content"></div>
            <div className="up-left-content"></div>
          </div>
        </div>
        <div className="down"></div>
        <div className="footer">
          <p>© {currentYear} Mark Dave Lorejo</p>
        </div>
      </div>
    </>
  );
}
