//getter

let pet = {
	name: 'Шарик',
	breed: 'Пудель',
	get nameBreed() {
		return `${this.name} - это ${this.breed}`;
	},
};
pet.name = 'Неймар';
console.log(pet.nameBreed);

let string = {
	value: 'Some string',
	get length() {
		let count = 0;
		for (let elem of string.value) {
			count++;
		}
		return count;
	},
};

string.value = 'Hello world!';
console.log(string.length);

//setter

let number = {
	value: 10,
	set setNumber(arg) {
		if (arg > 50) {
			number.value = arg;
		} else {
			number.value = arg ** 2;
		}
	},
};

number.setNumber = 5;

console.log(number.value);
console.log(number);

class User {
	constructor(name, year) {
		this.name = name;
		this.year = year;
	}
	get info() {
		return `имя юзера: ${this.name}, год рождения: ${this.year}`;
	}
	set setYear(age) {
		let currentDate = new Date();
		let currentYear = currentDate.getFullYear();
		this.year = currentYear - age;
	}
}

let user1 = new User('Alex', 1990);
user1.setYear = 20;
console.log(user1.info);
