const div_root = document.querySelector('#root');
const product_wrapper = document.createElement('div');
product_wrapper.className = 'product_wrapper';
div_root.append(product_wrapper);

async function getProducts() {
	let url = 'https://dummyjson.com/products';
	let res = await fetch(url);
	let data = await res.json();
	render(data.products);
}

function render(data) {
	for (let elem of data) {
		// Создание элементов
		const product_card = document.createElement('div');
		const product_img = document.createElement('img');
		const product_title = document.createElement('h2');
		const product_price = document.createElement('p');

		// Заполнение элементов
		product_card.className = 'product_card';
		product_img.src = elem.thumbnail;
		product_title.innerText = `Title: ${elem.title}`;
		product_price.innerText = `Price: ${elem.price}`;

		// Вставка созданных элементов
		product_card.append(product_img, product_title, product_price);
		product_wrapper.append(product_card);

		product_card.onclick = () => {
			modal(elem);
		};
	}
}

function modal(item) {
	// Modal area
	const modal_area = document.createElement('div');
	modal_area.classList = 'modal_area';
	// Modal container
	const modal = document.createElement('div');
	modal.className = 'modal';

	// Создание контейнеров
	const modal_slider = document.createElement('div');
	const modal_main_img = document.createElement('div');
	const modal_description = document.createElement('div');

	modal_slider.className = 'modal_slider';
	modal_main_img.className = 'modal_main_img';
	modal_description.className = 'modal_description';

	// Заполнение главной картинки
	const main_image = document.createElement('img');
	main_image.src = item.images[0];
	modal_main_img.append(main_image);

	// Заполнение слайдера
	for (let image of item.images) {
		const slider_image = document.createElement('img');
		slider_image.src = image;
		modal_slider.append(slider_image);

		slider_image.onclick = () => {
			main_image.src = image;
		};
	}

	// Заполнение описания продукта
	const product_title = document.createElement('h2');
	const product_price = document.createElement('p');
	const product_description = document.createElement('p');
	const product_rating = document.createElement('p');

	product_title.innerText = `Title: ${item.title}`;
	product_rating.innerText = `Rating: ${item.rating}`;
	product_price.innerText = `Price: ${item.price}`;
	product_description.innerText = `Description: ${item.description}`;

	modal_description.append(
		product_title,
		product_price,
		product_description,
		product_rating
	);

	//Создание и вставка иконки
	const x_mark = document.createElement('i');
	x_mark.className = 'fa-solid fa-xmark';

	modal.append(modal_slider, modal_main_img, modal_description, x_mark);
	modal_area.append(modal);
	div_root.append(modal_area);

	//Закрытие модального окна

	modal_area.onclick = () => {
		modal_area.remove();
	};
	modal.onclick = e => {
		event.stopPropagation(); //перестаем получать события от родительского элемента
	};

	x_mark.onclick = () => {
		modal_area.remove();
	};

	window.onkeydown = e => {
		if (e.key === 'Escape') {
			modal_area.remove();
		}
	};
}

getProducts();
