import React, { useState } from "react";
import "./home.css";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import "../styles/globalstyles.css";

export default function Home({isDarkMode, getInTouch}) {
 const handleViewCV = () => {
    // Google Drive link to your CV
    const cvLink = "https://drive.google.com/file/d/1fjLkWFK9tPaIty2TVr9y2iOTnzzUlArS/view?usp=sharing";

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = cvLink;

    // Set the target attribute to open the link in a new tab
    link.target = "_blank";

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
              <button className={`btn-get ${isDarkMode ? "dark-mode" : "light-mode"}`} onClick={getInTouch}>GET IN TOUCH</button>
              <button className={`btn-cv ${isDarkMode ? "dark-mode" : "light-mode"}`} onClick={handleViewCV}>
                Download CV
                <CloudDownloadIcon fontSize="small" />  
              </button>
            </div>
          </div>
        </div>
        <div className="right">
          <h2>I will soon insert my photo here!</h2>
        </div>
      </div>
    </>
 );
}
