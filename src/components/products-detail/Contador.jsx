import React from "react";
import { useState, memo } from "react";

function Contador({ stock, initial, onAdd }) {
  const [cantidad, setCantidad] = useState(0);

  const sumar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const restar = () => {
    if (cantidad > initial) {
      setCantidad(cantidad - 1);
    }
  };

  const agregar = () => {
    onAdd(cantidad);
  };

  return (
    <>
      <div className="contadorContainer">
        <a className="contadorItem" href="#" onClick={sumar}>
          +
        </a>
        <p className="contadorItem">{cantidad}</p>
        <a className="contadorItem" href="#" onClick={restar}>
          -
        </a>
      </div>
      <div>
        <a onClick={agregar} className="botonAgregar" href="#">
          Agregar al carrito
        </a>
      </div>
    </>
  );
}

export default memo(Contador);
