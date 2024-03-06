// 1. Создайте класс BankAccount, который моделирует банковский счет. У него должны быть:
// Приватные свойства balance (дефолтно число 0) (баланс счета) и transactionHistory (дефолтно пустой массив) (история транзакций).
// Геттер balance(), который возвращает текущий баланс счета.
// Сеттер deposit(amount), который добавляет указанную сумму к балансу счета и добавляет запись о депозите в историю транзакций. (значение: “Депозит: 100”)
// Сеттер withdraw(amount), который вычитает указанную сумму из баланса счета, если на счету достаточно средств, и добавляет запись о снятии в историю транзакций (значение: “Снятие: 100”). Если на счету недостаточно средств, выведите сообщение об ошибке.
// Метод printTransactionHistory(), который выводит историю транзакций, используя цикл.

class BankAccount {
	constructor(balance = 0, transactionHistory = []) {
		this._balance = balance;
		this._transactionHistory = transactionHistory;
	}
	get balance() {
		return this._balance;
	}
	set deposit(amount) {
		this._balance += amount;
		this._transactionHistory.push(`Deposit ${amount}`);
	}
	set withdrawal(amount) {
		if (this._balance >= amount) {
			this._balance -= amount;
			this._transactionHistory.push(`Withdrawal ${amount}`);
		} else console.log('There are insufficient funds in the account');
	}
	printTransactionHistory() {
		for (let transaction of this._transactionHistory) {
			console.log(transaction);
		}
		// console.log('Balance: ', account.balance);
	}
}

// let account = new BankAccount();
// account.deposit = 100;
// account.withdrawal = 50;
// account.deposit = 200;

// account.printTransactionHistory();

// 2. Создайте дочерний класс SavingsAccount, который наследует функциональность BankAccount и добавляет функциональность начисления процентов. У него должны быть:
// Приватное сво-во interestRate (число), которое задают процетное вознаграждение на остаток на балансе. Данное сво-во должно хранить значение процента (если 5%, то 0.05, 10% - 0.1  и тд)
// Метод calculateInterest(), который должен будет рассчитать и поместить в депозит денежное вознаграждение. Также метод должен вывести сообщение с информацией фактического денежного вознаграждения

class SavingsAccount extends BankAccount {
	constructor(interestRate, balance = 0, transactionHistory = []) {
		super(balance, transactionHistory);
		this._interestRate = interestRate;
	}
	calculateInterest() {
		const interest = this._balance * this._interestRate;
		this._balance += interest;
		console.log(`Interest: ${interest}`);
		console.log('Balance:', savingsAccount.balance);
	}
}

let savingsAccount = new SavingsAccount(0.05);
savingsAccount.deposit = 1000;
savingsAccount.withdrawal = 200;
savingsAccount.deposit = 500;
savingsAccount.printTransactionHistory();
savingsAccount.calculateInterest();
