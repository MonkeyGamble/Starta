class Wagon {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Train {
	constructor(value) {
		this.wagons = new Wagon(value);
	}
	push(value) {
		let current = this.wagons;

		while (current.next != null) {
			current = current.next;
		}
		current.next = new Wagon(value);
	}
}

let train = new Train(10);
train.push(20);
train.push(30);
train.push(40);
console.log(train.wagons.next);
