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
	h2_item.style.opacity = 0;
	setTimeout(() => {
		if (h2_index !== header_h.length - 1) {
			h2_index++;
		} else {
			h2_index = 0;
		}
		h2_item.innerHTML = header_h[h2_index];
		h2_item.style.opacity = 1;
		rightBtn.classList.add('active');
		leftBtn.classList.remove('active');
		changeActiveBtn();
	}, 500);

	// if (h2_index !== header_h.length - 1) {
	// 	h2_index++;
	// } else {
	// 	h2_index = 0;
	// }
	// h2_item.innerHTML = header_h[h2_index];
	// rightBtn.classList.add('active');
	// leftBtn.classList.remove('active');
	// changeActiveBtn();
	// console.log('Right button clicked');
};

leftBtn.onclick = () => {
	h2_item.style.opacity = 0;
	setTimeout(() => {
		if (h2_index !== 0) {
			h2_index--;
		} else {
			h2_index = header_h.length - 1;
		}
		h2_item.innerHTML = header_h[h2_index];
		h2_item.style.opacity = 1;
		leftBtn.classList.add('active');
		rightBtn.classList.remove('active');
		changeActiveBtn();
	}, 500);

	// if (h2_index !== 0) {
	// 	h2_index--;
	// } else {
	// 	h2_index = header_h.length - 1;
	// }
	// h2_item.innerHTML = header_h[h2_index];
	// leftBtn.classList.add('active');
	// rightBtn.classList.remove('active');
	// changeActiveBtn();
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

// CLIENTS section

const clients = [
	'./media/microsoft.png',
	'./media/amazon.png',
	'./media/google.png',
	'./media/wallmart.png',
	'./media/antivir.png',
	'./media/carecredit.png',
	'./media/disney.png',
	'./media/hyatt.png',
	'./media/hyundai.png',
	'./media/redbull.png',
	'./media/stihl.png',
	'./media/thermaltake.png',
	'./media/truman-state-university.png',
	'./media/vichy.png',
	'./media/weiler.png',
	'./media/bolt.png',
];

const clients_content = document.querySelector('.clients_content');
const clients_slider = document.createElement('div');
clients_slider.className = 'clients_slider';

for (let i = 0; i < clients.length; i++) {
	const client_slide = document.createElement('img');
	client_slide.src = clients[i];
	client_slide.alt = 'client';
	client_slide.className = 'client_slide';

	clients_slider.append(client_slide);
}
clients_content.append(clients_slider);

// SLIDER

const allSlides = document.querySelectorAll('.client_slide');
for (let i = 0; i < allSlides.length; i++) {
	if (i < 4) {
		allSlides[i].style.display = 'block';
	} else {
		allSlides[i].style.display = 'none';
	}
}

// BUTTONS
const clients_bottom_content = document.createElement('div');
clients_bottom_content.className = 'clients_bottom_content content_line';
const clients_triggers = document.createElement('div');
clients_triggers.className = 'clients_triggers content_line';

const clients_leftBtn = document.createElement('div');
clients_leftBtn.className = 'clients_left_button';
const clients_leftArrow = document.createElement('img');
clients_leftArrow.src = './media/left.png';
clients_leftArrow.alt = 'left arrow';
clients_leftBtn.append(clients_leftArrow);

const clients_rightBtn = document.createElement('div');
clients_rightBtn.className = 'clients_right_button';
const clients_rightArrow = document.createElement('img');
clients_rightArrow.src = './media/right.png';
clients_rightArrow.alt = 'right arrow';
clients_rightBtn.append(clients_rightArrow);

const clients_slider_btns = document.createElement('div');
clients_slider_btns.className = 'clients_slider_btns';

for (let i = 0; i < clients.length; i++) {
	const clients_round_btn = document.createElement('button');
	clients_round_btn.className = 'clients_round_btn';
	clients_slider_btns.append(clients_round_btn);
	if (i >= 4) {
		clients_round_btn.style.display = 'none';
	}
}

clients_triggers.append(clients_leftBtn, clients_rightBtn);
clients_bottom_content.append(clients_slider_btns, clients_triggers);
clients_content.append(clients_slider, clients_bottom_content);

let slider_index = 0;
const card_width = 1110;

console.log('Slider index beforeclick:', slider_index);

clients_rightBtn.onclick = () => {
	if (slider_index + 4 < clients.length) {
		slider_index += 4;
	} else {
		slider_index = 0;
	}
	console.log('Slider index click:', slider_index);
	clients_rightBtn.classList.add('active');
	clients_leftBtn.classList.remove('active');
	updateSlider();
	changeActiveClientBtn();
};

clients_leftBtn.onclick = () => {
	if (slider_index - 4 >= 0) {
		slider_index -= 4;
	} else {
		slider_index = clients.length - 4;
	}
	console.log('Slider index after:', slider_index);
	clients_leftBtn.classList.add('active');
	clients_rightBtn.classList.remove('active');
	updateSlider();
	changeActiveClientBtn();
};

function updateSlider() {
	for (let i = 0; i < allSlides.length; i++) {
		if (i >= slider_index && i < slider_index + 4) {
			allSlides[i].style.display = 'block';
		} else {
			allSlides[i].style.display = 'none';
		}
	}
}

function changeActiveClientBtn() {
	const allBtns = document.querySelectorAll('.clients_round_btn');
	const activeIndex = Math.floor(slider_index / 4);
	allBtns.forEach((elem, index) => {
		if (activeIndex === index) {
			elem.classList.add('active');
		} else {
			elem.classList.remove('active');
		}
	});
}

changeActiveClientBtn();
