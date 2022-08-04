const API_URL = 'some_path';

function customFetch() {
	console.log('Log ::: API_URL ::: ', API_URL);
	// fetch(API_URL)
	// 	.then(
	// 		(res) => console.log('Log ::: res ::: ', res)
	// 	);
}

export { customFetch };
