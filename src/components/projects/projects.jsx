import React from "react";
import "../styles/globalstyles.css";
import "./project.css";
import Card from "../card/card";
import CDO from "../img/cdo.png";
import Figma from "../img/figma.png";

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
                buttonLink={""}
                isDarkMode={isDarkMode} // Pass isDarkMode to Card component
              />
              <Card
                title="CDO CAR RENTAL"
                photo={CDO}
                logo={Figma}
                buttonText="View Design"
                isDarkMode={isDarkMode} // Pass isDarkMode to Card component
              />
            </div>
            <div className="horizontal">
              <Card
                title="CDO CAR RENTAL"
                photo={CDO}
                logo={Figma}
                buttonText="View Design"
                isDarkMode={isDarkMode} // Pass isDarkMode to Card component
              />
              <Card
                title="CDO CAR RENTAL"
                photo={CDO}
                logo={Figma}
                buttonText="View Design"
                isDarkMode={isDarkMode} // Pass isDarkMode to Card component
              />
            </div>
          </div>
          <div className="project-content">
            <h3
              className={`text-h2 ${isDarkMode ? "dark-mode" : "light-mode"}`}
            >
              WEB DEVELOPMENT
            </h3>
            <div className="horizontal">
              <Card
                title="CDO CAR RENTAL"
                photo={CDO}
                logo={Figma}
                buttonText="View Design"
                isDarkMode={isDarkMode} // Pass isDarkMode to Card component
              />
              <Card
                title="CDO CAR RENTAL"
                photo={CDO}
                logo={Figma}
                buttonText="View Design"
                isDarkMode={isDarkMode} // Pass isDarkMode to Card component
              />
            </div>
            <div className="horizontal">
              <Card
                title="CDO CAR RENTAL"
                photo={CDO}
                logo={Figma}
                buttonText="View Design"
                isDarkMode={isDarkMode} // Pass isDarkMode to Card component
              />
              <Card
                title="CDO CAR RENTAL"
                photo={CDO}
                logo={Figma}
                buttonText="View Design"
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
              <Card
                title="CDO CAR RENTAL"
                photo={CDO}
                logo={Figma}
                buttonText="View Design"
                isDarkMode={isDarkMode} // Pass isDarkMode to Card component
              />
              <Card
                title="CDO CAR RENTAL"
                photo={CDO}
                logo={Figma}
                buttonText="View Design"
                isDarkMode={isDarkMode} // Pass isDarkMode to Card component
              />
            </div>
            <div className="horizontal">
              <Card
                title="CDO CAR RENTAL"
                photo={CDO}
                logo={Figma}
                buttonText="View Design"
                isDarkMode={isDarkMode} // Pass isDarkMode to Card component
              />
              <Card
                title="CDO CAR RENTAL"
                photo={CDO}
                logo={Figma}
                buttonText="View Design"
                isDarkMode={isDarkMode} // Pass isDarkMode to Card component
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
