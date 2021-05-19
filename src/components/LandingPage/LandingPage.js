import React from "react";
import "./LandingPage.css";
import FlowerGirl from "../../images/flowergirl.png";

function LandingPage() {
  return (
    <div className="landingPage-container">
      <div className="text-container">
        <h1>
          <span className="title-heading">
            Discover simple payroll software built just for small businesses.
          </span>
        </h1>
        <p className="paragraph-container">
          Pay everyone, stay on top of your payroll taxes and get back to the
          business of doing business. Wagepoint gives you everything you need,
          including:
        </p>
      </div>

      <div className="photo-container">
        <img className="flower-girl-image" src={FlowerGirl} alt="flower girl" />
      </div>
    </div>
  );
}

export default LandingPage;
