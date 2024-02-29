let str = 'Hello World!';

// console.log(str.__proto__);

Array.prototype.abs = function () {
	console.log(this);
	return Math.abs(this[0] - this[this.length - 1]);
};

// let array = [1, 2, 3, 4, 5];
// console.log(array.abs());

// ----------------------------
// Задача 1
// Добавьте к классу String новый метод initCap(), который будет возводить в верхний регистр первую букву,
// а другие оставшиейся символы в нижний регистр
// Метод должен вернуть новую строку
String.prototype.initCap = function () {
	return this[0].toUpperCase() + this.slice(1).toLowerCase();
};

let str2 = 'STRING';
// console.log(str2.initCap());

// Задача 2
// Реалиузйте в классе Array метод sum(), который будет возвращать сумму всех элементов массива
let array = [1, 2, 3, 4, 5, 6];

// array.sum() => 15

Array.prototype.sum = function () {
	return this.reduce((accum, elem) => accum + elem, 0);
};
// console.log(array.sum());
// ------------------------------------
// Задача 3
// Реализуйте в классе Array метод concatWS(s). Метод должен формировать из массива строку,
// помещая между каждым элементов значение указанного разделителя

// let array = [1,2,3,4,5,6]
// array.concatWS('-') => '1-2-3-4-5-6'

Array.prototype.concatWS = function (s) {
	let str = '';
	for (let i = 0; i < this.length; i++) {
		if (i !== this.length - 1) {
			str += this[i] + s;
		} else {
			str += this[i];
		}
	}
	return str;
	// return this.join(str);
};
// console.log(array.concatWS('-'));
