import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
    // eslint-disable-next-line
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
