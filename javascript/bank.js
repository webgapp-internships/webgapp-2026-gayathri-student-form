class BankAccount {
    #balance;

    constructor(owner, accountNumber, balance) {
        this.owner = owner;
        this.accountNumber = accountNumber;
        this.#balance = balance;
    }

    get balance() {
        return this.#balance;
    }

    set balance(amount) {
        if (amount >= 0) {
            this.#balance = amount;
        }
    }

    deposit(amount) {
        let previousBalance = this.balance;
        this.balance += amount;

        console.log("Account Details");
        console.log("Account Holder :", this.owner);
        console.log("Account Number :", this.accountNumber);
        console.log("Previous Balance :", previousBalance);
        console.log("Deposit Amount :", amount);
        console.log("Current Balance :", this.balance);
    }
}

let acc1 = new BankAccount("Maya", 45763, 1200);
acc1.deposit(1000);

let acc2 = new BankAccount("Gayathri", 67894, 800);
acc2.deposit(300);

let acc3 = new BankAccount("Diya", 67794, 700);
acc3.deposit(700);