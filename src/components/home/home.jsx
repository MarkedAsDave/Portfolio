import React, { useState } from "react";
import "./home.css";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import "../styles/globalstyles.css";

export default function Home({isDarkMode}) {
  const handleDownloadCV = () => {
    // Path to your CV PDF file
    const cvPath = "../cv/cv.pdf";

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = cvPath;

    // Set the download attribute to force download
    link.download = "Your_CV.pdf";

    // Append the link to the document body
    document.body.appendChild(link);

    // Trigger the click event on the link
    link.click();

    // Cleanup: Remove the link from the DOM
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="home-container">
        <div className="left">
          <div className="content">
            <h2>MARK DAVE LOREJO</h2>
            <p> UI UX DESIGNER | WEB DEVELOPER | GRAPHIC DESIGNER</p>
            <p>
              Hey there! I'm Mark Dave, a multifaceted creative specializing in
              web design, development, and graphic design. Let's bring your
              digital vision to life!
            </p>
            <div className="content-btn">
              <button className={`btn-get ${isDarkMode ? "dark-mode" : "light-mode"}`}>GET IN TOUCH</button>
              <button className="btn-cv" onClick={handleDownloadCV}>
                Download CV
                <CloudDownloadIcon fontSize="small" />
              </button>
            </div>
          </div>
        </div>
        <div className="right">
          <h2>Photo here</h2>
        </div>
      </div>
    </>
  );
}
