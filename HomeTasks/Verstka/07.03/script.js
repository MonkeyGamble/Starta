const header_content = document.querySelector('.header_content');

const header_h = [
	'Бухгалтерские услуги <br>в вашем городе',
	'Бухгалтерские услуги <br>в городе № 2',
	'Бухгалтерские услуги <br>в городе № 3',
	'Бухгалтерские услуги <br>в городе № 4',
];

const h2_item = document.createElement('h2');
h2_item.innerHTML = header_h[0];
header_content.append(h2_item);

const header_button = document.createElement('div');
header_button.className = 'header_button';
header_button.innerText = 'Наша презентация';
header_content.append(header_button);

const slider = document.createElement('div');
slider.className = 'slider';

const triggers = document.createElement('div');
triggers.className = 'triggers';

const leftBtn = document.createElement('div');
leftBtn.className = 'left_button';
const leftArrow = document.createElement('img');
leftArrow.src = './media/left.png';
leftArrow.alt = 'left arrow';
leftBtn.append(leftArrow);

const rightBtn = document.createElement('div');
rightBtn.className = 'right_button';
const rightArrow = document.createElement('img');
rightArrow.src = './media/right.png';
rightArrow.alt = 'right arrow';
rightBtn.append(rightArrow);

triggers.append(leftBtn, rightBtn);

const slider_btns = document.createElement('div');
slider_btns.className = 'slider_btns';

for (let i = 0; i < header_h.length; i++) {
	const round_btn = document.createElement('button');
	round_btn.className = 'round_btn';
	slider_btns.append(round_btn);
}

slider.append(slider_btns, triggers);
header_content.append(slider);

let h2_index = 0;

rightBtn.onclick = () => {
	if (h2_index !== header_h.length - 1) {
		h2_index++;
	} else {
		h2_index = 0;
	}
	h2_item.innerHTML = header_h[h2_index];
	rightBtn.classList.add('active');
	leftBtn.classList.remove('active');
	changeActiveBtn();
	// console.log('Right button clicked');
};

leftBtn.onclick = () => {
	if (h2_index !== 0) {
		h2_index--;
	} else {
		h2_index = header_h.length - 1;
	}
	h2_item.innerHTML = header_h[h2_index];
	leftBtn.classList.add('active');
	rightBtn.classList.remove('active');
	changeActiveBtn();
	// console.log('Left button clicked');
};

function changeActiveBtn() {
	const allBtns = document.querySelectorAll('.round_btn');
	allBtns.forEach((elem, index) => {
		if (h2_index === index) {
			elem.classList.add('active');
		} else {
			elem.classList.remove('active');
		}
	});
}
function changeActiveArrow() {}

changeActiveBtn();
