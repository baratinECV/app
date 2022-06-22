import React from "react";
import "./Chat.scss";
import imgBulle from "../../assets/images/bulle/bulle.png";

export default function Chat() {
  return (
    <div className='container-chat'>
      <div className='container-message-vendeur'>
        <img src={imgBulle} />
        <div className='message-vendeur'>
          <p className='font-medium'>
            Vous voulez acheter une bouteille pour vous ou pour offrir ?{" "}
          </p>
        </div>
      </div>

      <div className='response'>
        <div className='button-response'>
          <a href='' className='btn-response'>
            Pour offrir
          </a>
          <a href='' className='btn-response'>
            Pour moi
          </a>
          <a href='' className='btn-response'>
            Vos coup de coeur
          </a>
        </div>

        <div className='button-user'>
          <p className='btn-user'>Pour offrir</p>
          <p className='edit'>Modifier</p>
        </div>
      </div>

      <div className='container-message-vendeur'>
        <img src={imgBulle} />
        <div class='loader'>
          <span class='loader-element'></span>
          <span class='loader-element'></span>
          <span class='loader-element'></span>
        </div>
      </div>
    </div>
  );
}
