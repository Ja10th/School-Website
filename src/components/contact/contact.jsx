import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="fform container">
        <h2>Get In Touch</h2>
        <form>
          <div className="names">
            <div className="names__fname">
              <input type="text" placeholder="First-Name" name="fname" />
            </div>
            <div className="names__lname">
              <input type="text" placeholder="Last-Name" name="lname" />
            </div>
          </div>
          <div className="Address">
            <input type="text" placeholder="Address" name="address" />
          </div>
          <div className="Message">
            <input
              type="text"
              text-area="height: 300px;"
              placeholder="Enter your message here"
              name="lname"
            />
          </div>
          <div className="submit_h">
            <button type="submit" className="btn btn-primary submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
