import React from "react";
import "./Top.css";
import vector_icon from "../Assets/Vector.png";
import image_icon from "../Assets/Group 10591.png";
import message_icon from "../Assets/Message 35.png";

export const Top = () => {
  return (
    <div className="top">
      <div className="top-component">
        <div className="top-nav">
          <div className="top-nav-content-1">
            <img src={vector_icon} alt="" />
            <p>IGSTUDIO</p>
          </div>
          <div className="top-nav-content-2">
            <ul>
              <li>Home</li>
              <li>Attorneys</li>
              <li>Practice Areas</li>
              <li>About Us</li>
            </ul>
          </div>
          <div className="top-nav-content-3">
            <p>Contact Now</p>
          </div>
        </div>
        <div className="top-content">
          <div className="top-content-1">
            <div className="top-text">
              <p className="top-text-1">You don't have to</p>
              <p className="top-text-2">Fight them Alone</p>
            </div>
            <p className="top-text-para">
              Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
              curabitur sodales conubia ut inceptos faucibus himenaeos tortor
              eget, hac massa gravida arcu interdum proin curae.
            </p>
            <div className="top-box">
              <div className="top-box-1">
                <img src={message_icon} alt="" />
                <input type="text" placeholder="Enter your email address" />
              </div>
              <button>Let's Talk</button>
            </div>
          </div>
          <div className="top-content-2">
            <img src={image_icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
