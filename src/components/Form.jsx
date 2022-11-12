import { useEffect, useState } from "react";

function Form() {
  const [data, setData] = useState({ name: "x", apellido: "x" });
  const [show, setShow] = useState(true);

  const enviarDatos = (e) => {
    e.preventDefault();
    setShow(false);
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
        <button>{show ? "Enviar" : "Enviando"}</button>
      </form>
    </div>
  );
}

export default Form;
