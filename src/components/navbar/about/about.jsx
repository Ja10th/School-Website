import React from "react";
import "./about.css";
import Abtt from "./about_buttons";
import { MdArticle } from "react-icons/md";
import { BsBookHalf } from "react-icons/bs";
import { GiBookmarklet, GiClothes } from "react-icons/gi";
import { ImBooks } from "react-icons/im";

const About = () => {
  return (
    <div className="about">
      <div className="container about-pb">
       <div className="about__details">
        <div className="about__M">
          <h4>
            Moniola is a great academic organization for your child development
          </h4>
        </div>
        <div className="about__P">
          <p>
            We have amazing teaching methods and instructors that would suit
            your children
          </p>
        </div>
       </div>
       <div className="about__main-buttons">
        <Abtt Icon={MdArticle} text="Qualified Teachers" Tm='Teachers'/>
        <Abtt Icon={BsBookHalf} text="Assigned syllabus" Tm='syllabus'/>
        <Abtt Icon={GiBookmarklet} text="Accredited School" Tm='acc_school'/>
        <Abtt Icon={ImBooks} text="Private tutoring" Tm='tutor'/>
        <Abtt Icon={GiClothes} text="Trade Learning" Tm='trade'/>
       </div>
      </div>
    </div>
  );
};

export default About;
