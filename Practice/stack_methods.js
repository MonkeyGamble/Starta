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
	push(...values) {
		this.items = [...this.items, ...values];
		return this.items.length;
		// this.items[this.items.length] = elem;
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
	shift() {
		if (!this.isEmpty()) {
			let shift = this.items[0];
			this.items = this.items.slice(1);
			return shift;
		} else return 'Array is empty!';
	}
	unshift(...values) {
		this.items = [...values, ...this.items];
		return this.items.length;
	}
	slice(index1, index2) {
		if (index2 <= index1) throw new Error('Error');

		let slicedArray = [];
		let start = index1 || 0;
		let end = index2 === undefined ? this.items.length : index2;
		for (let i = start; i < end; i++) {
			slicedArray[i - start] = this.items[i];
		}
		return slicedArray;
	}
	reverse() {
		let result = [];
		for (let i = this.items.length - 1; i >= 0; i--) {
			result[i] = this.items[this.items.length - 1 - i];
		}
		this.items = result;
		return this.items;
	}

	incrementsByOne() {
		for (let i = 0; i < this.items.length; i++) {
			this.items[i]++;
		}
		return this.items;
	}
	increment(value) {
		for (let i = 0; i < this.items.length; i++) {
			this.items[i] += value;
		}
		return this.items;
	}
}

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50, 60, 70);
console.log(stack);
// console.log(stack.slice(0, 1));
console.log(stack.increment(7));
// let stack = new Stack([1, 14, 52, 6, 89]);
// console.log(stack.maximum());
// stack = [1, 14, 52, 6, 89];

// console.log(stack.push(7));

let array = [10, 20, 30];
array.push(40, 50, 60);
// console.log(array);
