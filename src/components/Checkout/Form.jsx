import { useEffect, useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [adress, setAdress] = useState("");
  const [email, setEmail] = useState("");

  const enviarDatos = (e) => {
    e.preventDefault();
    console.log({ name, lastName });
  };

  const handleName = (e) => setName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleAdress = (e) => setAdress(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  return (
    <div className="formularioContainer">
      <form className="formulario" onSubmit={enviarDatos}>
        <input className="formItem" type="text" placeholder="Nombre" name="nombre" onChange={handleName} value={name} />
        <input className="formItem" type="text" placeholder="Apellido" name="apellido" onChange={handleLastName} value={lastName} />
        <input className="formItem" type="text" placeholder="Dirección" name="adress" onChange={handleAdress} value={adress} />
        <input className="formItem" type="email" placeholder="Email" name="email" onChange={handleEmail} value={email} />
        <button>enviar</button>
      </form>
    </div>
  );
}

export default Form;
