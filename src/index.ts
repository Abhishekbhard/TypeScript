class Account {
  id: number;
  owner: string;
  private _balance: number;
  constructor(id: number, owner: string, _balance: number) {
    this.id = id;
    this.owner = owner;
    this._balance = _balance;
  }
  deposite(amount: number) {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    } else {
      this._balance = amount;
    }
  }
  getBalance(): number {
    return this._balance;
  }
}

let account = new Account(1, "Abhishek", 0);
account.deposite(100);
console.log(typeof account);
console.log(account instanceof Account);
