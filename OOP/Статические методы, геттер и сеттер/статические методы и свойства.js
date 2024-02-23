//Статические свойства и методы

//Статические методы и свойства - это методы и свойств, которые будут доступны только классу.
//Созданные экземпляры доступ к этим методам и свойствам получать не будут

class Contacts {
	constructor(phone) {
		this.phone = phone;
	}
	getPhone() {
		console.log('phone: ' + this.phone);
	}
	//Статическое свойство
	static static_prop = 'static prop';
	//Статические метод
	static staticMethod() {
		console.log('static method');
	}
}

let contact = new Contacts('1234567');
// contact.getPhone();

console.log(contact);
console.log(Contacts.static_prop);
console.log(Contacts.staticMethod());
