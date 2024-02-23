// Наследование

class Auto {
	constructor(model, year) {
		this.model = model;
		this.year = year;
		this.speed = 0;
	}
	driving(speed) {
		this.speed = speed;
		console.log(`${this.model} разогнался до ${this.speed} км/ч`);
	}
	parking() {
		this.speed = 0;
		console.log(`${this.model} припарковался!`);
	}
}

// let tesla = new Auto('Tesla', '2020')
// tesla.driving(100)
// tesla.parking()

// console.log(tesla)

// -----------------------------
// Пример наследования класса Auto

// Наследование происходит благодаря оператору extends с указанием имя наследумого класса
// Для того, чтобы унаследовать и использовать сво-ва ранее указанного класса, необходимо
// получить их в constructor и поместить в метод super()

class SuperCar extends Auto {
	constructor(model, year) {
		super(model, year);
		this.lights = false;
	}
	setLights() {
		this.lights = !this.lights;
		console.log(`${this.model} ${this.lights ? 'включил' : 'выключил'} фары `);
	}
	getInfo() {
		console.log(
			`Информация автомобиля ${this.model} ${this.year} года выпуска:`
		);
		console.log(`Cкорость автомобиля ${this.speed} км/ч`);
		console.log(this.lights ? 'Фары включены' : 'Фары выключены');
	}
}

// let toyota = new SuperCar('Toyota', '2024')
// toyota.driving(50)
// toyota.parking()
// toyota.setLights()
// toyota.setLights()
// toyota.getInfo()

// ----------------------
// После наслtедвание родителський класс ни каким образом менять не будет
// let audi = new Auto('Audi', '1995')
// console.log(audi)
