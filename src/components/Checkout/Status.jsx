import { React, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { orderList } from "../../services/firebaseConfig";

function Status() {
  const [usuarioId, setUsuarioId] = useState("");
  const [productoDelUsario, setProductoDelUsuario] = useState({});

  const enviarId = (e) => {
    e.preventDefault();
    const ref = doc(orderList, usuarioId);
    getDoc(ref).then((res) => {
      const productodelUsuario = {
        id: res.id,
        ...res.data(),
      };
      setProductoDelUsuario(productodelUsuario);
    });
  };

  const handleId = (e) => setUsuarioId(e.target.value);

  return (
    <div className="formularioContainerStatus" onSubmit={enviarId}>
      <form className="formulario">
        <label htmlFor="id">Ingresa el ID de tu compra</label>
        <input className="formItem" type="text" placeholder="id" name="id" onChange={handleId} value={usuarioId} />
        <button>Enviar</button>
      </form>
      <p>Estatus de tu compra: {productoDelUsario.status}</p>
    </div>
  );
}

export default Status;
