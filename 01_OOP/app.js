console.log("hello")

function test() {
    return "test"
}

class BankAccount {
    constructor(accountNumber, accountHolder, balance = 0) {
        this.accountNumber = accountNumber
        this.accountHolder = accountHolder
        this.balance = balance
    }

    deposit(amt) {
        this.balance = this.balance + amt
        console.log('balance is now ', this.balance)
    }

    withdraw(amt) {
        if (this.balance < amt) {
            console.log("You don't have enough balance, balance is ", this.balance )
            return
        }

        this.balance = this.balance - amt
        console.log('balance is now ', this.balance)
    }
}