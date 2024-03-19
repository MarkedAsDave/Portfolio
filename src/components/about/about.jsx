import "./about.css";
import PS from "../img/photoshop.png";
import Corel from "../img/corel.png"
import Fil from "../img/filmora.png";
import Python from "../img/Python.png";
import react from "../img/react.png";
import JS from "../img/JS.png";
import fig from "../img/fig.png"

export default function About({isDarkMode}) {
  return (
    <>
      <div className="about-container">
        <h2>About</h2>
        <div className="grid-view">
          <div className="grid-left">
            <div className="left-content">
              <p>Senior High School: ICT - Visual Graphic Design</p>
              <div className="image-container">
              <img src={PS} alt="PS Logo" />
              <img src={Corel} alt="PS Logo" />
              <img src={Fil} alt="PS Logo" />
              </div>
            </div>
            <div className="left-content">
              <p>Bachelor of Science in Information Technology</p>
              <div className="image-container">
              <img src={Python} alt="PS Logo" />
              <img src={JS} alt="PS Logo" />
              <img src={react} alt="PS Logo" />
              <img src={fig} alt="PS Logo" />
              </div>
            </div>
          </div>
          <div className="grid-center">
            <div className={`circle ${isDarkMode ? "dark-mode" : "light-mode"}`}></div>
            <div className={`circle ${isDarkMode ? "dark-mode" : "light-mode"}`}></div>
          </div>
          <div className="grid-right">
            <div className="left-right">
              <p>
                I started at College of Communication Information and Technology
                (CCIT), focusing on ICT - Visual Graphic Design during Senior
                High School, igniting my passion for digital arts.
              </p>
            </div>
            <div className="left-right">
              <p>
                Continuing at University of Science and Technology of Southern
                Philippines, I earned a Bachelor's in Information Technology,
                specializing in web and mobile development with expertise in
                JavaScript, React.js, and React Native.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
