import React from "react";
import "./Start.css";

const Start = () => {
  return (
    <div className="start">
      <div className="container startf">
      <div className="start__left">
        <div className="start__top__image">
          <div className="top-image-left">Education</div>
          <div className="top-image-right">Essentials</div>
        </div>
        <div className="start__bottom">
          <div className="bottom__key">Bright Future</div>
          <div className="bottom1"></div>
          <div className="bottom2"></div>
        </div>
      </div>
      <div className="bottom__details">
        <h2>Let's Start Education</h2>
        <p>
          Education is important to children because education helps children
          learn how to think critically, it enhances their creativity and
          imagination, it will expose them to new ideas, and it helps the child
          find the path to a career that they wish to pursue as an adult.
        </p>
        <button className="btn btn-primary">Call Us</button>
      </div>
      </div>
    </div>
  );
};

export default Start;
