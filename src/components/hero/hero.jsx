import React from "react";
import "./hero.css";
import Himage from "../../assets/Teaching-bro.png";

const Hero = () => {
  return (
    <div className="hero ">
      <div className="hero__details">
        <h5>Start Now!</h5>
        <h1>Educate your children today</h1>
        <p>
          We offer the best education both academically, mentally and
          spiritually. We train and develop them to be one of the best
        </p>
        <div className="hero__buttons">
          <div id="google_translate_element"></div>
          <button className="btn btn-primary">Register</button>
        </div>
      </div>
      <div className="Himage__H">
        <img src={Himage} alt="illustrations by Storyset" className="himage" />
        <div className="best">
          <p>The Best</p>
        </div>
        <div className="best2">
          <p>Qualified</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
