import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Form() {
  const [data, setData] = useState({ name: "x", apellido: "x" });

  const enviarDatos = (e) => {
    e.preventDefault();
    //return setData(([name] = e.target.elements.name.value));
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <form onSubmit={enviarDatos}>
        <input type="text" placeholder="Nombre" name="nombre" onChange={enviarDatos} />
        <input type="text" placeholder="Apellido" name="apellido" onChange={enviarDatos} />
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default Form;
