const API_URL = 'https://api.github.com/users';

function getUsers() {
	fetch(API_URL)
		.then(res => res.json())
		.then(users => {
			console.log('Log ::: users ::: ', users);
			let container = document.createElement('div');
			container.classList.add('container');
			users.map(user => {
				let userCard = document.createElement('div');
				let login = document.createElement('div');
				let avatar = document.createElement('img');
				let remove = document.createElement('img');
				avatar.setAttribute('src', `${user.avatar_url}`);
				remove.setAttribute('src', './assets/delete.svg');
				remove.classList.add('icon');

				// add click to remove button
				remove.onclick = (event) => {
					event.target.parentElement.parentElement.remove();
				};
				
				let content = document.createElement('div');
				userCard.classList.add('userCard');
				login.innerText = `${user.login}`;
				content.classList.add('cardContent');
				content.appendChild(login);
				content.appendChild(remove);
				userCard.appendChild(avatar);
				userCard.appendChild(content);
				container.appendChild(userCard);
			})
			document.body.appendChild(container);
		});
}

getUsers();

let filterInput = document.getElementById('filter');

filterInput.addEventListener('input', (event) => {
	let searchInput = event.target.value;
	let container = document.querySelector('.container');
	let list = [...container.children];
	if(searchInput.length >= 3) {
		list  = list.map(item => {
			let content = item?.lastChild?.firstChild?.innerText.toLowerCase();
			if(!content.includes(searchInput.toLowerCase())) {
				item.style.display = 'none';
			} else {
				item.style.display = 'block';
			}
			return item;
		})
	} else {
		list.map(item => {
			item.style.display = 'block';
			return item;
		})
	}
	container.innerHTML = '';
	container.append(...list);
})