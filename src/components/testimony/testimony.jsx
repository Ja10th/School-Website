import React from "react";
import "./testimony.css";
import { IoMdQuote } from "react-icons/io";

const Testimony = () => {
  const testimonies = [
    {
      id: 1,
      url: "https://media.istockphoto.com/photos/portrait-of-mature-hispanic-man-picture-id805012064?k=20&m=805012064&s=612x612&w=0&h=oWpG5VlQ3YK_4-Ppb-Ql7ZYxwJXgoNdUas9HUNBrDQA=",
      text: "My kid started this school since it was founded and I can testify that she has improved greatly, I'm glad i brought here to this school",
    },
    {
      id: 2,
      url: "https://www.seekpng.com/png/detail/85-856067_png-woman-face-transparent-woman-face-beautiful-girl.png",
      text: "The private tutoring has improved my kid greatly as she do lack behind that her colleagues but she has improved all thanks to God and Moniola laurel school",
    },
    {
      id: 3,
      url: "https://hips.hearstapps.com/cosmouk.cdnds.net/cm/14/31/640x550/53d58be96f43e_-_unaltered.jpg?resize=640:*",
      text: "I'm happy to say this is the best school i've taken my children to. The difference to other schools is very clear. You won't regret bringing your kids to Moniola",
    },
  ];
  return (
    <div className="testimony">
      <div className=" container testimony__heading">
        <h2>Testimonies</h2>
      </div>

      <div className="testimony__details container ">
        {testimonies.map((testimony) => (
          <div key={testimony.id} className="testimony__card">
            <IoMdQuote className="testimony__icon" />
            <img src={testimony.url} alt="imagess" />
            <p>{testimony.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimony;
