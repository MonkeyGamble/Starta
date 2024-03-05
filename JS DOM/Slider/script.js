const frame = document.querySelector('.frame');
const cards_container = document.querySelector('.cards_container');

let slider_index = 0;
let card_width = 400;

const images = [
	'https://www.vinterier.ru/pictures/shop/krasivyiy-peiyzag-kartina-maslom-40x30.jpg',
	'https://galerey-room.ru/images/0_69122_3f69c4d2_orig.jpeg',
	'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Altdorfer-Donau.jpg/220px-Altdorfer-Donau.jpg',
	'https://oir.mobi/uploads/posts/2021-06/1622803069_29-oir_mobi-p-peizazh-dlya-nachinayushchikh-priroda-kras-30.jpg',
	'https://arthive.net/res/media/img/oy1000/work/577/610144@2x.jpg',
];

for (let elem of images) {
	let card_item = document.createElement('img');
	card_item.src = elem;
	cards_container.append(card_item);
}

//Реализация логики работы слайдера
let [leftBtn, rightBtn] = document.querySelectorAll('.triggers > button');

rightBtn.onclick = () => {
	if (slider_index !== images.length - 1) {
		slider_index++;
		cards_container.style.left = `${-1 * slider_index * card_width}px`;
	} else {
		slider_index = 0;
		cards_container.style.left = '0px';
	}
};

leftBtn.onclick = () => {
	if (slider_index !== 0) {
		slider_index--;
	} else {
		slider_index = images.length - 1;
	}
	cards_container.style.left = `${-1 * slider_index * card_width}px`;
};
