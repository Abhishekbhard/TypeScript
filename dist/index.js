"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposite(amount) {
        if (amount <= 0) {
            throw new Error("Invalid amount");
        }
        else {
            this._balance = amount;
        }
    }
    get balance() {
        return this._balance;
    }
}
let account = new Account(1, "Abhishek", 0);
account.deposite(100);
console.log(typeof account);
console.log(account instanceof Account);
console.log(account.balance);
//# sourceMappingURL=index.js.map