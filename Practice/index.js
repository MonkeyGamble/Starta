class Person {
	constructor(firstname, lastname, age, profession) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.age = age;
		this.profession = profession;
	}
	email() {
		return `${this.firstname}.${this.lastname}@gmail.com`;
	}
}

class Stack {
	constructor() {
		this.items = [];
	}
	push(elem) {
		this.items[this.items.length] = elem;
		return this.items.length;
	}
	pop() {
		if (!this.isEmpty()) {
			let pop = this.items[this.items.length - 1];
			this.items.length = this.items.length - 1;
			return pop;
		} else return 'Array is empty!';
	}
	isEmpty() {
		return this.items.length === 0;
	}
	maximum() {
		let max = this.items[0];
		for (let elem of this.items) {
			if (elem > max) {
				max = elem;
			}
		}
		return max;
	}
	minimum() {
		let min = this.items[0];
		for (let elem of this.items) {
			if (elem < min) {
				min = elem;
			}
		}
		return min;
	}
}

let stack = [1, 14, 52, 6, 89];

// stack = [1, 14, 52, 6, 89];
console.log(Stack.maximum(stack));
// console.log(stack.push(7));
