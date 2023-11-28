import React from "react";
import "./Area.css";
import image1 from "../Assets/Rectangle 3652.png";
import image2 from "../Assets/Rectangle 3651.png";
import image3 from "../Assets/Rectangle 3653.png";
import image4 from "../Assets/Rectangle 3654.png";
import image5 from "../Assets/Rectangle 3656.png";
import image6 from "../Assets/Rectangle 3655.png";

export const Area = () => {
  return (
    <div className="area">
      <div className="area-text">Area of Practices</div>
      <div className="area-images">
        <div className="area-images-1">
          <div className="area-images-1-div">
            <img src={image1} alt="" />
            <p>BUSINESS LAW</p>
          </div>
          <div className="area-images-1-div">
            <img src={image2} alt="" />
            <p className="postion-1">Partnership LAW</p>
          </div>
        </div>
        <div className="area-images-1">
          <div className="area-images-1-div">
            <img src={image3} alt="" />
            <p>REAL ESTATE LAW</p>
          </div>
          <div className="area-images-1-div">
            <img src={image4} alt="" />
            <p>BUSINESS LAW</p>
          </div>
        </div>
        <div className="area-images-1">
          <div className="area-images-1-div">
            <img src={image5} alt="" />
            <p>LANDLORD DISPUTES</p>
          </div>
          <div className="area-images-1-div">
            <img src={image6} alt="" />
            <p>ELDER ABUSE</p>
          </div>
        </div>
      </div>
    </div>
  );
};
