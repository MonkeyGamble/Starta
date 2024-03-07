// class Person {
// 	constructor(firstname, lastname, age, profession) {
// 		this.firstname = firstname;
// 		this.lastname = lastname;
// 		this.age = age;
// 		this.profession = profession;
// 	}
// }

class Kid {
	static count = 0;
	constructor() {
		this.firstname = 'Jessica';
		this.lastname = 'Mortensen';
		this.age = 25;
		Kid.count++;
	}
	printHello() {
		console.log('Hello!');
	}
}

class Adult extends Kid {
	static count = 0;
	constructor(profession) {
		super();
		this.profession = profession;
		Adult.count++;
	}
}

class SuperMan extends Adult {
	constructor(profession, superPower) {
		super(profession);
		this.superPower = superPower;
	}
}

let superman = new SuperMan('it', 'flight');

console.log(superman.firstname);
console.log(superman.profession);

let person1 = new Adult('Programmer');
let person2 = new Adult('Programmer');
let person3 = new Adult('Programmer');

// console.log(Kid.count);

// let kid = new Kid();
// person.printHello();
// kid.printHello();
