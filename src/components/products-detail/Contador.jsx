import { useState, memo } from "react";

function Contador({ stock, initial = 1, onAdd }) {
  const [cantidad, setCantidad] = useState(initial);

  const sumar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const restar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const agregar = () => {
    onAdd(cantidad);
  };

  return (
    <>
      <div className="contadorContainer">
        <p className="contadorItem" href="#" onClick={sumar}>
          +
        </p>
        <p className="contadorItem">{cantidad}</p>
        <p className="contadorItem" onClick={restar}>
          -
        </p>
      </div>
      <div>
        <p onClick={agregar} className="botonAgregar">
          Agregar al carrito
        </p>
      </div>
    </>
  );
}

export default memo(Contador);
