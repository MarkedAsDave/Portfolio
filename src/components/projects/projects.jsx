import React, { useState } from "react";
import "../styles/globalstyles.css";
import "./project.css";
import Card from "../card/card";
import CDO from "../img/cdo.png";
import Figma from "../img/fig.png";
import hanap from "../img/hanap.png";
import mobile from "../img/mobile.png";
import vehisched from "../img/vehisched.png";
import react from "../img/react.png";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import ShapeLineIcon from "@mui/icons-material/ShapeLine";
import Invitation from "../modal/invitation";
import Logo from "../modal/logo";
import Sticker from "../modal/sticker";
import Banner from "../modal/banner";

export default function Projects({ isDarkMode }) {
  const [showInvitation, setShowInvitation] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [showSticker, setShowSticker] = useState(false);

  const handleInvitation = () => {
    setShowInvitation(!showInvitation);
  };

  const handleCloseInvitation = () => {
    setShowInvitation(false);
  };

  const handleBanner = () => {
    setShowBanner(!showBanner);
  };

  const handleLogo = () => {
    setShowLogo(!showLogo);
  };

  const handleSticker = () => {
    setShowSticker(!showSticker);
  };

  const handleCloseBanner = () => {
    setShowBanner(false);
  };

  const handleCloseLogo = () => {
    setShowLogo(false);
  };

  const handleCloseSticker = () => {
    setShowSticker(false);
  };

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
                onClick={handleInvitation}
              >
                {" "}
                <CardGiftcardIcon fontSize="large" />
                <h4>Invitation Cards</h4>
              </div>
              <div
                className={`view-btn ${
                  isDarkMode ? "dark-mode" : "light-mode"
                }`}
                onClick={handleBanner}
              >
                {" "}
                <ViewCarouselIcon fontSize="large" />
                <h4>Banners</h4>
              </div>
            </div>
            <div className="horizontal">
              <div
                className={`view-btn ${
                  isDarkMode ? "dark-mode" : "light-mode"
                }`}
                onClick={handleSticker}
              >
                {" "}
                <LabelImportantIcon fontSize="large" />
                <h4>Stickers</h4>
              </div>
              <div
                className={`view-btn ${
                  isDarkMode ? "dark-mode" : "light-mode"
                }`}
                onClick={handleLogo}
              >
                {" "}
                <ShapeLineIcon fontSize="large" />
                <h4>Logo</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showInvitation && <Invitation onClose={handleCloseInvitation} />}
      {showBanner && <Banner onClose={handleCloseBanner} />}
      {showSticker && <Sticker onClose={handleCloseSticker} />}
      {showLogo && <Logo onClose={handleCloseLogo} />}  
    </>
  );
}
