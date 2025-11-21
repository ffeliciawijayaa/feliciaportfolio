import "./FooterStyles.css";
import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome
              size={20}
              style={{ color: "black", marginRight: "2rem" }}
            ></FaHome>
            <div>
              <p>
                <b>Salatiga, Central Java, Indonesia.</b>
              </p>
            </div>
          </div>

          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "black", marginRight: "2rem" }}
              ></FaPhone>
              +62 87824424184{" "}
            </h4>
          </div>

          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "black", marginRight: "2rem" }}
              ></FaMailBulk>
              feliciawijaya1910@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Myself</h4>
          <p>
            I am a Computer Science Student. Curently in my 3rd semester. I love
            to explore and learn new things.
          </p>
          <div className="social">
            <a
              href="https://www.instagram.com/ffeliciawijayaa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={30}
                style={{ color: "black", marginRight: "1rem" }}
              ></FaInstagram>
            </a>

            <a
              href="https://www.linkedin.com/in/ffeliciawijayaa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={30}
                style={{ color: "black", marginRight: "1rem" }}
              ></FaLinkedin>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
