export const products = [
	{
		id: "1",
		title: "Sweater Azul",
		price: 2000,
		stock: 10,
		category: "sweaters",
		img: "https://res.cloudinary.com/ericwaje/image/upload/v1619372707/remera4_wyfums.jpg",
	},

	{
		id: "2",
		title: "Blusa rosa",
		price: 200,
		stock: 5,
		category: "blusas",
		img: "https://res.cloudinary.com/ericwaje/image/upload/v1619372706/billetera2C_bf0hvq.jpg",
	},

	{
		id: "3",
		title: "Pantalon bluejean",
		price: 3000,
		stock: 7,
		category: "pantalones",
		img: "https://cdn.shopify.com/s/files/1/0533/8877/1508/products/2401013-1_1024x1024.png?v=1645978583",
	},

	{
		id: "4",
		title: "Pantalon verde",
		price: 3000,
		stock: 7,
		category: "pantalones",
		img: "https://cdn.shopify.com/s/files/1/0533/8877/1508/products/2401013-1_1024x1024.png?v=1645978583",
	},
];

export const getProductos = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(products);
		}, 1000);
	});
};
