import React from "react";

function Item({ key, title, price }) {
  return (
    <div key={key} className="cardContainer">
      <div className="contentCard">
        <img
          className="imgCard"
          src="https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Foto de prueba"></img>
        <p className="cardTitle">{title}</p>
        <p className="cardPrice">USD {price}</p>
      </div>
    </div>
  );
}

export default Item;
