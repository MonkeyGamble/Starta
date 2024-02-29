let obj = {
	name: 'Alex',
	methods() {
		console.log(this.name);
	},
};

// obj.methods();

let obj1 = {
	name: 'Alex',
	methods: () => {
		console.log(this.name);
	},
};

// obj1.methods();

let obj2 = {
	name: 'Alex',
};

let info = function () {
	console.log(this.name);
};
obj.info = info;

// obj.info();

let obj4 = {
	name: 'Alex',
	methods() {
		console.log(this.name);
	},
};

// setTimeout(obj4.methods, 100);

// let obj5 = {
// 	name: 'Steven',
// };

// const handle = function (a, b) {
// 	console.log(this.name, a, b);
// };

// let func_obj = handle.bind(obj5);

// func_obj(10, 5);

// let obj5 = {
// 	name: 'Steven',
// };

// const handle = function (a, b) {
// 	console.log(this.name, a, b);
// };

// handle.call(obj5, 10, 5);

// Задача 1
// Привяжите контекст this функции carInfo к объекту car.
// создайте новую функцию с привязанным контекстом

// let car = {
// 	model: 'Tesla',
// 	color: 'red',
// };

// function carInfo() {
// 	console.log(`${this.model} ${this.color}`);
// }

// let bind_func = carInfo.bind(car);
// carInfo.call(car);
// bind_func();

// --------------------------
// Задача 2
// Привяжите контекст метода emplInfo к объекту empl2
// Выполните привязку таким образом, чтобы метод сразу выполнился

let empl1 = {
	name: 'John',
	age: 20,
	emplInfo: function (salary, job_id) {
		console.log(`${this.name} ${this.age} ${salary} ${job_id}`);
	},
};

let empl2 = {
	name: 'Wilyam',
	age: 35,
};

empl1.emplInfo.call(empl2, 1000, 'IT');

// emplInfo(100, 'IT') => Wylliam 35 100 'IT'
