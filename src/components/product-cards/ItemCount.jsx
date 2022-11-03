import React from "react";
import { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {
  const [cantidad, setCantidad] = useState(0);
  const valorSeleccionado = {
    cantidad,
  };

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
        <a
          onClick={() => {
            onAdd(valorSeleccionado);
          }}
          className="botonAgregar"
          href="#">
          Agregar{" "}
        </a>
      </div>
    </>
  );
}

export default ItemCount;
