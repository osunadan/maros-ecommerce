import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../mock/products";
import FadeLoader from "react-spinners/FadeLoader";

function ItemDetailContainer() {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { detalleid } = useParams();

  useEffect(() => {
    getProducts()
      .then((products) => {
        const prodSeleccionado = products.find((prod) => {
          return prod.id === detalleid;
        });
        setItem(prodSeleccionado);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    const override: CSSProperties = {
      display: "flex",
      alignItems: "center",
      alignContent: "center",
      justifyContent: "center",
    };
    return <FadeLoader cssOverride={override} />;
  }

  return (
    <div>
      <ItemDetail productoEleguido={item} />
    </div>
  );
}

export default ItemDetailContainer;

// {loading ? <h1>Cargando</h1> : <ItemDetail productoEleguido={item} />}
