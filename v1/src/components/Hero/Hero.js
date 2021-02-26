import React, { useEffect } from "react";
import bk from "../../assets/galaxy.png";
import rock2 from "../../assets/rock2.png";
import rock3 from "../../assets/rock3.png";
import earth from "../../assets/earth.png";
import { loadHeroRellax } from "../../helper/loaders";
import "./Hero.scss";

function Hero() {
  useEffect(() => {
    loadHeroRellax();
  }, []);

  return (
    <div className="hero">
      <div className="scene">
        <div className="bg">
          <img src={bk} alt="" />
        </div>
        <div className="rock1">
          <img src={rock2} alt="" className="rock" />
        </div>
        <div className="rock2">
          <img src={rock2} alt="" className="rock" />
        </div>
        <div className="rock3">
          <img src={rock3} alt="" className="rock" />
        </div>
        <div className="earth">
          <img src={earth} alt="" className="planet" />
        </div>
        <div className="text">
          <p className="title">Welcome to,</p>
          <h1 className="title">NIKHIL PATEL</h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
