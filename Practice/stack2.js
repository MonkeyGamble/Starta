class Stack {
	constructor() {
		this.items = [10, 20, 30, 40, 50];
	}
	add() {
		let lastTwo = this.items.slice(-2);
		let sum = lastTwo.reduce((acc, elem) => acc + elem, 0);
		this.items.splice(-2, 2);
		this.items.push(sum);
	}
	mult() {
		let lastTwo = this.items.slice(-2);
		let mult = lastTwo.reduce((acc, elem) => acc * elem, 1);
		this.items.splice(-2, 2);
		this.items.push(mult);
	}
	add3() {
		let lastThree = this.items.slice(-3);
		let sum = lastThree.reduce((acc, elem) => acc + elem, 0);
		this.items.splice(-3, 3);
		this.items.push(sum);
	}

	splice(index, amount, ...numbers) {
		let firstPart = this.items.slice(0, index);
		let thirdPart = this.items.slice(index + amount);
		let removed = this.items.slice(index, index + amout);
		let secondPart = numbers;
		this.items = [];
		this.items.push(...firstPart, secondPart, ...thirdPart);
		return amount;
	}
}

let stack = new Stack();
// stack.add();
stack.splice(2, 1, 35, 45, 55);
console.log(stack.items);
