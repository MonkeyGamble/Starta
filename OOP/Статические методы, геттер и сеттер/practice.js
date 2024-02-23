// class Mail {
// 	static method(a) {
// 		return a ** 2;
// 	}
// }

// console.log(Mail.method(5));

//Цикл по объектам

// let obj = {
// 	name: 'Alex',
// 	age: 40,
// 	isJob: true,
// };

// for (let key in obj) {
// 	//console.log(key) - ключи объекта
// 	// console.log(obj[key]); //значение свойств объекта
// }

// Задача 1
// Реалзуейте статический метод values(obj) к классу Object2, который будет
// полностью дублировать логику работы метода Object.values(obj).
// Допущение: методы класса Object в решении использовать нельзя
// // *реализуйте в этом же классе метод entries
// class Object2 {
// 	static values(obj) {
// 		let values = [];
// 		for (let key in obj) {
// 			values.push(obj[key]);
// 		}
// 		return values;
// 	}
// 	static entries(obj) {
// 		let entries = [];
// 		for (let key in obj) {
// 			entries.push([key, obj[key]]);
// 		}
// 		return entries;
// 	}
// }

// console.log(Object2.values(obj));
// console.log(Object.values(obj));

// console.log(Object2.entries(obj));
// console.log(Object.entries(obj));

// К указанному ниже объеуту реализуйте геттер fullName, который
// будет хранить значение имени и фамилии человека

// let human = {
// 	firstname: 'Steven',
// 	lastname: 'William',
// 	get fullName() {
// 		return `${this.firstname} ${this.lastname}`;
// 	},
// 	set setFullName(str) {
// 		let [firstname, lastname] = str.split(' ');
// 		human.firstname = firstname;
// 		human.lastname = lastname;
// 	},
// };

// console.log(human.fullName);
// let space = str.indexOf(' ');
// let firstname = str.substring(0, space);
// let lastname = str.substring(space + 1);

// human.setFullName = 'Alex Fischmann';
// console.log(human.firstname);

// --------------------------------
// Задача 3
// Задан объет с сво-вом numbers
// Напишите сеттер setNumbers, который в качестве аргумента будет получать СТРОКУ с элементами, которые
// должны оказаться в массиве по следующему примеру:

// let obj = {
// 	numbers: ['Один', 'Два', 'Три', 'Четыре', 'Пять'],
// 	set setNumbers(str) {
// 		this.numbers = str.split(' ');

// 		// let array = str.split(' ');
// 		// for (let i = 0; i < array.length; i++) {
// 		// 	this.numbers[i] = array[i];
// 		// 	this.numbers.splice(array.length);
// 	},
// };

// obj.setNumbers = '1 2 3 4'
// obj.numbers => ['1', '2', '3', '4']

// obj.setNumbers = 'велосипед телевизоп'
// obj.numbers => ['велосипед', 'телевизоп']

// obj.setNumbers = 'велосипед телевизор';

// console.log(obj.numbers);

// --------------------------------
// Задача 4
// К ниже описанному объекту реализуйте геттер, который бужет хранить сумму
// всеъ элементов массива
// В этом же объекте реализуйте сеттер setNumbers, который будет формировать новый массив
// c значениями от 1 до указанного значения включительно после знака равенства
// obj.setNumbers = 10
// [1,2,3,4,5,7,8,9,10]

let obj = {
	numbers: [10, 50, 5, 11, 15],
	get sum() {
		return obj.numbers.reduce((accum, elem) => accum + elem, 0);
	},
	get abs() {
		return Math.abs(obj.numbers[0] - obj.numbers[obj.numbers.length - 1]);
	},
	set setNumbers(n) {
		for (i = 1; i <= n; i++) {
			obj.numbers[i - 1] = i;
		}
	},
};

console.log(obj.sum);
console.log(obj.abs);
obj.setNumbers = 10;
console.log(obj.numbers);
