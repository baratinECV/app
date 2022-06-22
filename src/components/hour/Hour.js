import React from "react";
import "./Hour.scss";

export default function Hour() {
  return (
    <div className='container-hour'>
      <h1>Les caves de St Esprit</h1>
      <p>Ouverture : 10h - 19h</p>
      <p className='status'>Actuellement ouvert</p>
    </div>
  );
}
