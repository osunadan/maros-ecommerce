export const products = [
  {
    id: "1",
    title: "Sweater azul de lana",
    price: 35,
    stock: 10,
    category: "Sweaters",
    img: "https://res.cloudinary.com/druw9azmh/image/upload/v1668378462/ecommerce-rect-coderhouse/sweater01_gtckwy.jpg",
  },

  {
    id: "2",
    title: "Playera original blanca",
    price: 15,
    stock: 5,
    category: "Playeras",
    img: "https://res.cloudinary.com/druw9azmh/image/upload/v1668378455/ecommerce-rect-coderhouse/playera01_ztzlrc.jpg",
  },

  {
    id: "3",
    title: "Playera negra YY",
    price: 15,
    stock: 7,
    category: "Playeras",
    img: "https://res.cloudinary.com/druw9azmh/image/upload/v1668378455/ecommerce-rect-coderhouse/playera02_wq5cfb.jpg",
  },

  {
    id: "4",
    title: "Chamarra tipo bluejean",
    price: 40,
    stock: 7,
    category: "Chamarras",
    img: "https://res.cloudinary.com/druw9azmh/image/upload/v1668378447/ecommerce-rect-coderhouse/chamarra01_fvq657.jpg",
  },

  {
    id: "5",
    title: "Chamarra de cuadros negra y gris",
    price: 20,
    stock: 7,
    category: "Chamarras",
    img: "https://res.cloudinary.com/druw9azmh/image/upload/v1668378446/ecommerce-rect-coderhouse/chamarra02_jyvcnr.jpg",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductsAndByCategory = (categoryName) => {
  return new Promise((resolve, reject) => {
    const prodFiltrados = products.filter((prod) => prod.category === categoryName);
    const resolucion = categoryName ? prodFiltrados : products;
    setTimeout(() => {
      resolve(resolucion);
    }, 500);
  });
};
