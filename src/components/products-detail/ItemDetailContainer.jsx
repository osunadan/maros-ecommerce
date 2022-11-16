import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { getProducts } from "../../mock/products";
import FadeLoader from "react-spinners/FadeLoader";
import { productsList } from "../../services/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

function ItemDetailContainer() {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { detalleid } = useParams();

  useEffect(() => {
    const ref = doc(productsList, detalleid);

    getDoc(ref)
      .then((res) => {
        const producto = {
          id: res.id,
          ...res.data(),
        };
        setItem(producto);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });

    //getProducts()
    //.then((products) => {
    //const prodSeleccionado = products.find((prod) => {
    //return prod.id === detalleid;
    //});
    //setItem(prodSeleccionado);
    //})
    //.finally(() => {
    //setLoading(false);
    //});
  }, []);

  if (loading) {
    return <FadeLoader />;
  }

  return (
    <div>
      <ItemDetail productoEleguido={item} />
    </div>
  );
}

export default ItemDetailContainer;

// {loading ? <h1>Cargando</h1> : <ItemDetail productoEleguido={item} />}
