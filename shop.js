import { products } from './data/products.js';

const button = document.getElementById('btn');

function fetchProducts() {
	return new Promise((resolve) => {
		setTimeout(() => resolve(products), 2000);
	});
}

const drawProducts = () => {
	fetchProducts()
		.then(res => JSON.parse(res))
		.then(products => {
			let markupArray = products.map(item => createProduct(item));
			document.body.append(...markupArray);
		});
}

const createProduct = ({ name, src, price }) => {
	let productItem = document.createElement('div');

	let image = document.createElement('img');
	image.setAttribute('src', `${src}`);

	let productTitle = document.createElement('span');
	productTitle.innerText = name;

	let productPrice = document.createElement('span');
	productPrice.innerText = price;

	productItem.append(image,productTitle,productPrice);
	return productItem;
}

button.addEventListener('click', drawProducts);

