import "./footer.css";
import { MdFiberSmartRecord } from "react-icons/md";
import { ImFacebook2 } from "react-icons/im";
import {
  FaInstagramSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__main container">
        <div className="footer__details">
          <div>
            <ul>
              <li><a href=" ">Get Help</a> </li>
              <li><a href=" ">Subscribe to News</a></li>
              <li> <a href=" ">Speak with someone</a></li>
              <li><a href=" ">Advise us</a></li>
            </ul>
          </div>
          <div>
            <div className="footer__middle">
              <div className="footer-Lo">
                <MdFiberSmartRecord className="logo__footer" />
                <p>Moniola</p>
              </div>
              <p>Education is the key to a bright future. As parents you should always choose the best for your children no matter how things seems to be the case for you financially</p>
            </div>
          </div>
          <div>
            <ul>
              <li><a href=" ">About us</a> </li>
              <li><a href=" ">Gallery</a></li>
              <li><a href=" "> Contact section</a></li>
              <li><a href=" ">Donate</a></li>
            </ul>
          </div>
        </div>
        <div className="socials">
          <ImFacebook2 className="socialb "/>
          <FaWhatsappSquare className="social" />
          <FaTwitterSquare className="social" />
          <FaInstagramSquare className="social" />
        </div>
        <div className="rights">
          <p>© All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
