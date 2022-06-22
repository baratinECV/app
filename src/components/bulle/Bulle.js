import React from "react";
import "./Bulle.scss";
import imgBulle from "../../assets/images/bulle/bulle.png";
import arrowClose from "../../assets/images/icons/arrow.png";

export default function Bulle() {
  return (
    <div className='container-buble'>
      <div className='buble'>
        <img src={imgBulle} alt="Bulle d'aide" />
      </div>

      <div className='container-conseil'>
        <div className='conseil bg-blue'>
          <p className='font-medium'>
            Besoin de conseil ?<br></br>Je suis là pour vous aider !
          </p>
          <div className='close bg-orange'>
            <img src={arrowClose} alt='icon pour fermer la popup' />
          </div>
        </div>
      </div>
    </div>
  );
}
