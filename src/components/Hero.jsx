import { Link } from "react-router-dom";
// import { getProducts } from "../mock/products";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../src/services/firebaseConfig";

function Hero() {
  const [cat, setCat] = useState([]);

  useEffect(() => {
    const productsList = collection(database, "products");

    getDocs(productsList).then((res) => {
      const productos = res.docs.map((prod) => {
        return {
          id: prod.id,
          ...prod.data(),
        };
      });

      const categorias = productos.map((prod) => {
        return prod.category;
      });

      const removeDuplicates = (array) => {
        return array.filter((el, index) => array.indexOf(el) === index);
      };

      const categoríasSinDuplicados = removeDuplicates(categorias);
      setCat(categoríasSinDuplicados);
    });
  }, []);

  /*
      const soloCategorias = categorias.reduce((acc, item) => {
        if (!acc.includes(item)) {
          var prevCat = [acc];
          prevCat.push(item);
        }
        return prevCat;
      });
      setCat(soloCategorias);
    });
  });
  */

  // useEffect(() => {
  // getProducts().then((products) => {
  //const categorias = products.map((prod) => {
  //return prod.category;
  //});

  //const soloCategorias = categorias.reduce((acc, item) => {
  //if (!acc.includes(item)) {
  //acc.push(item);
  //}
  //return acc;
  //}, []);
  //setcat(soloCategorias);
  //});
  //}, []);

  return (
    <div className="heroContainer">
      <p className="titleHero">Siete Fashion Store</p>
      <ul className="CategoriesContainer">
        {cat.map((cat) => {
          return (
            <Link key={cat} className="categorieLink" to={`/categoryid/${cat}`}>
              <li className="categorieItem">{cat}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
export default Hero;
