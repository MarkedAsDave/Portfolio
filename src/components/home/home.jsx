import React, { useState } from "react";
import "./home.css";
export default function Home() {
  return (
    <>
      <div className="home-container">
        <div className="left">
          <div className="content">
            <h2>Mark Dave Lorejo</h2>
            <p> UI UX DESIGNER | WEB DEVELOPER | GRAPHIC DESIGNER</p>
            <p>
              Hey there! I'm Mark Dave, a multifaceted creative specializing in
              web design, development, and graphic design. Let's bring your
              digital vision to life!
            </p>
          </div>
        </div>
        <div className="right">
          <h2>Right</h2>
        </div>
      </div>
    </>
  );
}
