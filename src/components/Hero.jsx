import React from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../mock/products";
import { useState } from "react";

function Hero() {
  const [cat, setcat] = useState([]);

  getProducts().then((products) => {
    const categorias = products.map((prod) => {
      return prod.category;
    });

    const soloCategorias = categorias.reduce((acc, item) => {
      if (!acc.includes(item)) {
        acc.push(item);
      }
      return acc;
    }, []);
    setcat(soloCategorias);
  });

  return (
    <div className="heroContainer">
      <p className="titleHero">Siete Fashion Store</p>
      <ul className="CategoriesContainer">
        {cat.map((cat) => {
          return (
            <Link className="categorieLink" to={`/categoryid/${cat}`}>
              <li className="categorieItem">{cat}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default Hero;
