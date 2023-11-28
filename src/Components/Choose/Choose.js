import React from "react";
import "./Choose.css";
import gift_icon from "../Assets/Gift 1.png";

export const Choose = () => {
  return (
    <div className="choose">
      <p className="choose-text">Why Choose us?</p>
      <div className="choose-component">
        <div className="choose-component-1 first">
          <div className="choose-component-img">
            <img src={gift_icon} alt="" />
          </div>
          <p className="choose-component-text-1">98% Success Rate</p>
          <p className="choose-component-text-2">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <button>Read More</button>
        </div>
        <div className="choose-component-1 second">
          <div className="choose-component-img">
            <img src={gift_icon} alt="" />
          </div>
          <p className="choose-component-text-1">100% Success Rate</p>
          <p className="choose-component-text-2">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <button>Read More</button>
        </div>
        <div className="choose-component-1 third">
          <div className="choose-component-img">
            <img src={gift_icon} alt="" />
          </div>
          <p className="choose-component-text-1">100% Success Rate</p>
          <p className="choose-component-text-2">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
};
