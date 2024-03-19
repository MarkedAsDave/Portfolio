import React from "react";
import "../styles/globalstyles.css";
import "./project.css";
import Card from "../card/card";
import CDO from "../img/cdo.png";
import Figma from "../img/fig.png";
import hanap from "../img/hanap.png";
import mobile from "../img/mobile.png";
import vehisched from "../img/vehisched.png";
import react from "../img/react.png";

export default function Projects({ isDarkMode }) {
  return (
    <>
      <div
        className={`project-container ${
          isDarkMode ? "dark-mode" : "light-mode"
        }`}
      >
        <p>PROJECT</p>
        <div className="skill-container">
          <div className="project-content">
            <h3
              className={`text-h2 ${isDarkMode ? "dark-mode" : "light-mode"}`}
            >
              UI UX DESIGN
            </h3>
            <div className="horizontal">
              <Card
                title="CDO CAR RENTAL"
                photo={CDO}
                logo={Figma}
                buttonText="View Design"
                buttonLink={
                  "https://www.figma.com/file/AT9XGeC66bPFpyYMmSW0da/CDO-Car-Rental-App?type=design&node-id=0%3A1&mode=design&t=DEdm50booBHHRB0C-1"
                }
                isDarkMode={isDarkMode} // Pass isDarkMode to Card component
              />
              <Card
                title="Hanap BHouse"
                photo={hanap}
                logo={Figma}
                buttonLink={
                  "https://www.figma.com/file/k8yDgQwo65TXYnee4j2K5K/Boarding-House?type=design&mode=design&t=DEdm50booBHHRB0C-1"
                }
                buttonText="View Design"
                isDarkMode={isDarkMode} // Pass isDarkMode to Card component
              />
            </div>
            <div className="horizontal">
              <Card
                title="Vehi-Sched Mobile"
                photo={mobile}
                logo={Figma}
                buttonLink={
                  "https://www.figma.com/file/ixxhOPWNnAlC6A2PkfutWl/VSS-USTP-MOTOR-POOL-II?type=design&node-id=0%3A1&mode=design&t=Kb3JsHpJ2f3s5dPe-1"
                }
                buttonText="View Design"
                isDarkMode={isDarkMode} // Pass isDarkMode to Card component
              />
              <Card
                title="Vehi-Sched Web"
                photo={vehisched}
                logo={Figma}
                buttonLink={
                  "https://www.figma.com/file/p2B79UvwP1YsqBJMsRXJSo/VSS-USTP-MOTOR-POOL?type=design&mode=design&t=Kb3JsHpJ2f3s5dPe-1"
                }
                buttonText="View Design"
                isDarkMode={isDarkMode} // Pass isDarkMode to Card component
              />
            </div>
          </div>
          <div className="project-content">
            <h3
              className={`text-h2 ${isDarkMode ? "dark-mode" : "light-mode"}`}
            >
              FRONTEND DEVELOPMENT
            </h3>
            <div className="horizontal">
              <Card
                title="Vehi-Scehd Web"
                photo={vehisched}
                logo={react}
                buttonText="View Site"
                buttonLink={"https://rakss17.github.io/vehisched-webapp/"}
                isDarkMode={isDarkMode} // Pass isDarkMode to Card component
              />
            </div>
            <div className="horizontal">
              <Card
                title="Vehi-Sched Mobile"
                photo={mobile}
                logo={react}
                buttonText="Download App"
                buttonLink={
                  "https://github.com/rakss17/vehisched-mobileapp/releases/tag/v1.0.0?fbclid=IwAR3gX29YaCgpV9od0TNqAt_-23bNPsbbA9V64z8G4GnNwuCANGhKu3_2uz8"
                }
                isDarkMode={isDarkMode} // Pass isDarkMode to Card component
              />
            </div>
          </div>
          <div className="project-content">
            <h3
              className={`text-h2 ${isDarkMode ? "dark-mode" : "light-mode"}`}
            >
              GRAPHIC DESIGN
            </h3>
            <div className="horizontal">
              <div
                className={`view-btn ${
                  isDarkMode ? "dark-mode" : "light-mode"
                }`}
              ></div>
              <div
                className={`view-btn ${
                  isDarkMode ? "dark-mode" : "light-mode"
                }`}
              ></div>
            </div>
            <div className="horizontal">
              <div
                className={`view-btn ${
                  isDarkMode ? "dark-mode" : "light-mode"
                }`}
              ></div>
              <div
                className={`view-btn ${
                  isDarkMode ? "dark-mode" : "light-mode"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
