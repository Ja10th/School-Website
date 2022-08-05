import React from "react";
import "./navbar.css";
import { MdFiberSmartRecord } from "react-icons/md";
import Hero from "../hero/hero";
import About from "./about/about";
import School from "../school/School";
import Start from "../start/Start";
import Classes from "../classes/classes";
import Testimony from "../testimony/testimony";
import Gallery from "../gallery/gallery";
import News from "../newspaper/news";
import Contact from "../contact/contact";
import Footer from "../footer/footer";

const Navbar = () => {
  return (
    <>
    <div className="navbarr">
      <div className="logo__area">
        <MdFiberSmartRecord className="logo" />
        <p>Moniola</p>
      </div>
      <div>
        <ul className="navbar__list">
          <li className="active">Home</li>
          <li>About</li>
          <li>Offer</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
    <Hero />
    <About />
    <School />
    <Start />
    <Classes />
    <Testimony />
    <Gallery />
    <News />
    <Contact />
    <Footer />
    </>
  );
};

export default Navbar;
