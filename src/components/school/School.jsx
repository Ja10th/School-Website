import React from "react";
import "./School.css";
import { MdArticle } from "react-icons/md";
import { BsBookHalf } from "react-icons/bs";
import { GiBookmarklet } from "react-icons/gi";
import Teacch from "../../assets/Teaching-pana.png";
import Learn from "./Learn";

const School = () => {
  return (
    <div className="school container">
      <div className="school__heading">
        <h5>How it works</h5>
        <h2>Our School Service</h2>
      </div>
      <div className="school__details">
        <div className="details__info">
          <div className="moniola">
            <p>Moniola</p>
          </div>
          <img src={Teacch} alt="imagehh" className="simage" />
          <button className="btn btn-primary">Learn</button>
        </div>
        <div className="school__info">
          <Learn
            Icon={MdArticle}
            text="We have God fearing and qualified teachers to bring your children to the next level. "
            Tm="school__article"
          />
          <Learn
            Icon={BsBookHalf}
            text="Our children are taught and breed with the correct syllabus so they wouldn't lack behind. "
            Tm="school__article2"
          />
          <Learn
            Icon={GiBookmarklet}
            text="Our children are allowed to undergo private tutoring with their teachers for any course they are not good at "
            Tm="school__article3"
          />
          <Learn
            Icon={MdArticle}
            text="Our school do not only teach our children courses but also trade like tailoring,etc to build up skills"
            Tm="school__article4"
          />
        </div>
      </div>
    </div>
  );
};

export default School;
