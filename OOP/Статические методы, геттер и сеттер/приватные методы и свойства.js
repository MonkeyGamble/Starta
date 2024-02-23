// Приватные свойства - к ним нет доступа ни через свойства, ни через методы

class User {
	constructor(login, password) {
		this.login = login;
		this.#password = password;
	}
	#password;
	// доступ к this.#password только внутри класса
	log() {
		console.log(this.#password);
	}
}

let user1 = new User('Alex', 'qwerty');

console.log(user1.password);
user1.log();

class Card {
	constructor(name_owner, card_num) {
		this.name_owner = name_owner;
		this.#card_num = card_num;
	}
	#card_num;
	get readCard() {
		return `**** **** **** ${this.#card_num.slice(-4)}`;
	}
	set setCard(new_card) {
		this.#card_num = new_card;
	}
}

let card1 = new Card('Alex', '4444 5555 6666 7777');
console.log(card1.readCard);
