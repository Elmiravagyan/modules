const BUTTON_ID = 'add';

let add_button = document.getElementById('add');
let input = document.getElementById('addTodo');
let container = document.querySelector('.container');

input.addEventListener('input', (e) => {
	if(!e.target.value) {
		add_button.disabled = true;
	} else {
		add_button.disabled = false;
	}
})

add_button.addEventListener('click', (event) => {
	if(input.value) {
		let todo = document.createElement('li');
		let icon = document.createElement('img');
		todo.setAttribute('id', `${Math.random()}`);
		icon.setAttribute('src', './assets/delete.svg');
		icon.classList.add('icon');
		todo.innerText = input.value;
		todo.appendChild(icon);
		container.appendChild(todo);
		input.value = '';
	}
});

container.addEventListener('click', (event) => {
	//Version 1
	// if(event.target.hasAttribute('src')) {
	// 	let li_id = event.target.parentElement.id;
	// 	let arr = [...container.children];
	// 	let filtered = arr.filter(item => item.id !== li_id);
	// 	console.log('Log ::: filtered ::: ', filtered);
	// 	container.innerHTML = '';
	// 	container.append(...filtered);
	// }

	//Version 2
	if(event.target.hasAttribute('src')) {
		 event.target.parentElement.remove();
	}

	event.target.classList.toggle('done');
});