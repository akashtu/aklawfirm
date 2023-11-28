import React from "react";
import "./Subscribe.css";

export const Subscribe = () => {
  return (
    <div className="subscribe">
      <p className="subscribe-text">Subscribe Our Newsletter</p>
      <div className="subscribe-component">
        <input type="text" placeholder="Name:" className="first-input" />
        <input type="email" placeholder="Enter your Email" />
        <button>SEND</button>
      </div>
    </div>
  );
};
