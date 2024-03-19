import "./about.css";
import PS from "../img/PS.png";

export default function About({isDarkMode}) {
  return (
    <>
      <div className="about-container">
        <h2>About</h2>
        <div className="grid-view">
          <div className="grid-left">
            <div className="left-content">
              <p>Senior High School: ICT - Visual Graphic Design</p>
              {/* <img src={PS} alt="PS Logo" /> */}
            </div>
            <div className="left-content">
              <p>Bachelor of Science in Information Technology</p>
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
              {/* <img src={PS} alt="PS Logo" /> */}
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
