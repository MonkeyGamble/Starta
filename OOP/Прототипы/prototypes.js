let str = 'Hello World!';

// console.log(str.__proto__);

Array.prototype.abs = function () {
	console.log(this);
	return Math.abs(this[0] - this[this.length - 1]);
};

let array = [1, 2, 3, 4, 5];
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
console.log(str2.initCap());
