import React from "react";
import "./Clients.css";
import prev_icon from "../Assets/prev.png";
import next_icon from "../Assets/next.png";
import jane_image from "../Assets/Jane_image.png";
import devon_image from "../Assets/Devon_image.png";
import robert_image from "../Assets/Rober_image.png";

export const Clients = () => {
  return (
    <div className="clients">
      <div className="clients-top">
        <p>What says our happy Clients</p>
        <div className="clients-top-div">
          <div className="clients-top-div-1">
            <img src={prev_icon} alt="" />
          </div>
          <div className="clients-top-div-2">
            <img src={next_icon} alt="" />
          </div>
        </div>
      </div>
      <div className="clients-bottom">
        <div className="clients-bottom-image">
          <div>
            <img src={jane_image} alt="" />
          </div>
          <p className="clients-bottom-image-text-1">Jane Cooper</p>
          <p className="clients-bottom-image-text-2">Ceo of Hunt</p>
          <p className="clients-bottom-image-text-3">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua
            dolor do amet sint. Velit officia
          </p>
        </div>
        <div className="clients-bottom-image second">
          <div>
            <img src={devon_image} alt="" />
          </div>
          <p className="clients-bottom-image-text-1">Jane Cooper</p>
          <p className="clients-bottom-image-text-2">Ceo of Hunt</p>
          <p className="clients-bottom-image-text-3">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua
            dolor do amet sint. Velit officia
          </p>
        </div>
        <div className="clients-bottom-image">
          <div>
            <img src={robert_image} alt="" />
          </div>
          <p className="clients-bottom-image-text-1">Jane Cooper</p>
          <p className="clients-bottom-image-text-2">Ceo of Hunt</p>
          <p className="clients-bottom-image-text-3">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua
            dolor do amet sint. Velit officia
          </p>
        </div>
      </div>
    </div>
  );
};
