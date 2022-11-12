export const products = [
  {
    id: "1",
    title: "Sweater Azul",
    price: 2000,
    stock: 10,
    category: "Sweaters",
    img: "https://res.cloudinary.com/ericwaje/image/upload/v1619372707/remera4_wyfums.jpg",
  },

  {
    id: "2",
    title: "Blusa rosa",
    price: 200,
    stock: 5,
    category: "Blusas",
    img: "https://res.cloudinary.com/ericwaje/image/upload/v1619372706/billetera2C_bf0hvq.jpg",
  },

  {
    id: "3",
    title: "Pantalon bluejean",
    price: 3000,
    stock: 7,
    category: "Pantalones",
    img: "https://cdn.shopify.com/s/files/1/0533/8877/1508/products/2401013-1_1024x1024.png?v=1645978583",
  },

  {
    id: "4",
    title: "Pantalon verde",
    price: 3000,
    stock: 7,
    category: "Pantalones",
    img: "https://cdn.shopify.com/s/files/1/0533/8877/1508/products/2401013-1_1024x1024.png?v=1645978583",
  },

  {
    id: "5",
    title: "Pantalon verde",
    price: 3000,
    stock: 7,
    category: "Pantalones",
    img: "https://cdn.shopify.com/s/files/1/0533/8877/1508/products/2401013-1_1024x1024.png?v=1645978583",
  },

  {
    id: "6",
    title: "Pantalon verde",
    price: 3000,
    stock: 7,
    category: "Pantalones",
    img: "https://cdn.shopify.com/s/files/1/0533/8877/1508/products/2401013-1_1024x1024.png?v=1645978583",
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
