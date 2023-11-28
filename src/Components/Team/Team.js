import React from "react";
import "./Team.css";
import danial_image from "../Assets/Daniel_image.png";
import sanfole_image from "../Assets/Sanfole_image.png";
import casforlia_image from "../Assets/Cesforlia_image.png";
import colleen_image from "../Assets/Colleen_image.png";
import haldone_image from "../Assets/Haldone_image.png";
import nik_image from "../Assets/Nik_image.png";

export const Team = () => {
  return (
    <div className="team">
      <div className="team-component-1">Our Team</div>
      <div className="team-component-2">
        <div className="team-component-image">
          <div>
            <img src={danial_image} alt="" />
          </div>
          <div className="team-component-div">
            <p className="team-component-image-text-1">Danial Def</p>
            <p className="team-component-image-text-2">301 cases</p>
          </div>
        </div>
        <div className="team-component-image-1">
          <div>
            <img src={sanfole_image} alt="" />
          </div>
          <div className="team-component-div">
            <p className="team-component-image-text-1 first">Sanfole</p>
            <p className="team-component-image-text-2 second">850 cases</p>
          </div>
        </div>
        <div className="team-component-image">
          <div>
            <img src={casforlia_image} alt="" />
          </div>
          <div className="team-component-div">
            <p className="team-component-image-text-1">Cesforila</p>
            <p className="team-component-image-text-2">470 cases</p>
          </div>
        </div>
      </div>
      <div className="team-component-3">
        <div className="team-component-image">
          <div>
            <img src={colleen_image} alt="" />
          </div>
          <div className="team-component-div">
            <p className="team-component-image-text-1">Colleen</p>
            <p className="team-component-image-text-2">180 cases</p>
          </div>
        </div>
        <div className="team-component-image">
          <div>
            <img src={haldone_image} alt="" />
          </div>
          <div className="team-component-div">
            <p className="team-component-image-text-1">Haldone</p>
            <p className="team-component-image-text-2">212 cases</p>
          </div>
        </div>
        <div className="team-component-image">
          <div>
            <img src={nik_image} alt="" />
          </div>
          <div className="team-component-div">
            <p className="team-component-image-text-1">Nik Jeo</p>
            <p className="team-component-image-text-2">350 cases</p>
          </div>
        </div>
      </div>
    </div>
  );
};
