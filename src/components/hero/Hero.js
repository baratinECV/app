import React from "react";
import "./Hero.scss";
import hero from "../../assets/images/hero/hero.png";
import arrowClose from "../../assets/images/icons/arrow.png";

export default function Hero() {
  return (
    <div className='container-hero'>
      <img src={hero} alt="image d'un hero" />
      <img className='close' src={arrowClose} alt='icon close' />

      <div className='content-btn'>
        <a href='' className='btn bg-blue'>
          360°
        </a>
      </div>
    </div>
  );
}
