class ProductList {
	constructor() {
		this.products = [
			{ id: 1, title: 'Велосипед', price: 5000, discount_price: 800 },
			{ id: 2, title: 'Cамокат', price: 3000, discount_price: 2400 },
			{ id: 3, title: 'Ракетки', price: 500, discount_price: 250 },
			{ id: 4, title: 'Телевизор', price: 12000, discount_price: 11500 },
		];
	}
	// getSumPrice - метод должен вывести в консоль итоговую сумму стоимости всех товаров
	getSumPrice() {
		let sum = 0;
		this.products.forEach(elem => {
			sum += elem.price;
		});
		console.log(sum);
	}
	// getAvgPrice - метод должен вывести среднее значение суммы среди всех товаров
	getAvgPrice() {
		let sum = 0;
		this.products.forEach(elem => {
			sum += elem.price;
		});
		console.log(`Средняя цена товаров = ${sum / this.products.length}`);
	}
	// setPercentage - метод должен перезаписать сво-во products, добавив к каждому элементу новое сво-во percentage с значение процента скидки. Значение необходимо округлить по правилам математики до целого число

	setPercentage() {
		this.products.forEach(elem => {
			elem.percentage = `-${Math.floor(
				Math.abs(((elem.discount_price - elem.price) / elem.price) * 100)
			)}%`;
		});
		return this.products;
	}
	// * getExpensiveProduct - метод должен вернуть в консоль объект товара с самой дорогой стоимостью
	getExpensiveProduct() {
		let maxPrice = 0;
		let mostExpensiveProduct = null;
		this.products.forEach(elem => {
			if (elem.price > maxPrice) {
				maxPrice = elem.price;
				mostExpensiveProduct = elem;
			}
		});
		return mostExpensiveProduct;
	}
}
