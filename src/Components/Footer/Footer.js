import React from "react";
import "./Footer.css";
import vector_icon from "../Assets/Vector.png";
import instagram_icon from "../Assets/Instagram.png";
import facebook_icon from "../Assets/Facebook.png";
import twitter_icon from "../Assets/Twitter.png";
import sign_icon from "../Assets/Sign.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-component-1">
        <div>
          <img src={vector_icon} alt="" />
        </div>
        <p>IGSTUDIO</p>
      </div>
      <div className="footer-component-2">
        <div className="footer-component-div">
          <div className="footer-component-div-1">
            <ul>
              <li>Home</li>
              <li>Attorneys</li>
              <li>Practice Areas</li>
              <li>About Us</li>
            </ul>
          </div>
          <div className="footer-component-div-2">
            <div>
              <img src={instagram_icon} alt="" />
            </div>
            <div>
              <img src={facebook_icon} alt="" />
            </div>
            <div>
              <img src={twitter_icon} alt="" />
            </div>
            <div>
              <img src={sign_icon} alt="" />
            </div>
          </div>
        </div>
        <div className="footer-last-component">
          <p>@ 2020 Acme. All right reserved</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </div>
  );
};
