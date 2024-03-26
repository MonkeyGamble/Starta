const banner_container = document.querySelector('.banner.slider_container');
const clients_container = document.querySelector('.clients.slider_container');
const div_banner_round = document.querySelector('.banner_round_btns');
const container = document.querySelector('.container');

let banner_data = [
	{
		text: 'Бухгалтерские услуги 1 в вашем городе',
		btn_text: 'Наша презентация 1',
	},
	{
		text: 'Бухгалтерские услуги 2 в вашем городе',
		btn_text: 'Наша презентация 2',
	},
	{
		text: 'Бухгалтерские услуги 3 в вашем городе',
		btn_text: 'Наша презентация 3',
	},
	{
		text: 'Бухгалтерские услуги 4 в вашем городе',
		btn_text: 'Наша презентация 4',
	},
];
let client_data = Array(8);

let slide_width = container.clientWidth;

let slider_index = {
	banner: 0,
	clients: 0,
};

for (let i = 0; i < banner_data.length; i++) {
	const div_container = document.createElement('div');
	const h_text = document.createElement('h2');
	const btn_elem = document.createElement('button');

	div_container.className = 'banner_elem';
	h_text.className = 'banner_text';
	btn_elem.className = 'main_btn';

	h_text.innerText = banner_data[i].text;
	btn_elem.innerText = banner_data[i].btn_text;

	div_container.append(h_text, btn_elem);
	banner_container.append(div_container);

	const round_btn = document.createElement('button');
	div_banner_round.append(round_btn);

	round_btn.onclick = () => {
		slider_index.banner = i;
		banner_container.style.left = `${-1 * slider_index.banner * slide_width}px`;
		chnageActiveBtns();
	};
}

let [banner_left_btn, banner_right_btn] = document.querySelectorAll(
	'.banner_triggers_btns > button'
);

banner_right_btn.onclick = () => {
	if (slider_index.banner !== banner_data.length - 1) {
		slider_index.banner++;
		banner_container.style.left = `${-1 * slider_index.banner * slide_width}px`;
	} else {
		slider_index.banner = 0;
		banner_container.style.left = '0px';
	}
	chnageActiveBtns();
};

banner_left_btn.onclick = () => {
	if (slider_index.banner !== 0) {
		slider_index.banner--;
	} else {
		slider_index.banner = banner_data.length - 1;
	}
	banner_container.style.left = `${-1 * slider_index.banner * slide_width}px`;
	chnageActiveBtns();
};

for (let i = 0; i < client_data.length; i++) {
	const client_img = document.createElement('img');
	client_img.src = './media/client.png';
	clients_container.append(client_img);
}

function chnageActiveBtns() {
	const all_btns = document.querySelectorAll('.banner_round_btns > button');
	console.log(all_btns);
	all_btns.forEach((elem, index) => {
		if (slider_index.banner === index) {
			elem.classList.add('active');
		} else {
			elem.classList.remove('active');
		}
	});
}

chnageActiveBtns();
