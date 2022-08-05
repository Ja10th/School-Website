import React from "react";
import "./classes.css";

const Classes = () => {
  return (
    <div className="classes container">
      <div className="classes__heading">
        <h2>Choose Classes For Your Child</h2>
      </div>
      <div className="classes__details">
        <div>
          <h5>DayCare and Nursery Classes</h5>
          <p>
            Register your children for Nursery class so they can be taught the
            basics
          </p>
          <div className="nursery"></div>
        </div>
        <div>
          <div className="primary"></div>
          <h5>Primary School</h5>
          <p>
            Register your children for Primary school so they can be level up
            their education
          </p>
        </div>
        <div>
          <h5>Secondary School</h5>
          <p>
            Register your children for Secondary class so they can be taught
            more advanced topics
          </p>
          <div className="secondary"></div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
