import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getProductsAndByCategory } from "../../mock/products";
import FadeLoader from "react-spinners/FadeLoader";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryName } = useParams();

  useEffect(() => {
    getProductsAndByCategory(categoryName)
      .then((productosObtenidos) => {
        setProductos(productosObtenidos);
      })
      .catch(() => {
        console.log("Algo salio mal wey");
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      setLoading(true);
    };
  }, [categoryName]);

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
    <div className="itemListContainer">
      <ItemList listaProductos={productos} />
    </div>
  );
}

export default ItemListContainer;
