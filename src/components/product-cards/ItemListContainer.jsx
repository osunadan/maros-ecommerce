import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { products } from "../../mock/products";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const getProductos = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
        getProductos
          .then((productosObtenidos) => {
            setProductos(productosObtenidos);
          })
          .catch(() => {
            console.log("Algo salio mal wey");
          });
        // Prueba de que se logro guardar en el estado la lista de productos
        console.log(productos);
      }, 2000);
    });
  }, [productos]);

  return (
    <div className="itemListContainer">
      <ItemList listaProductos={productos} />
    </div>
  );
}

export default ItemListContainer;
