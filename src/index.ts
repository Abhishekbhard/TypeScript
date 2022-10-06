class Account {
  constructor(
    public id: number,
    public owner: string,
    private _balance: number
  ) {}
  deposite(amount: number) {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    } else {
      this._balance = amount;
    }
  }
  get balance(): number {
    return this._balance;
  }
}

let account = new Account(1, "Abhishek", 0);
account.deposite(100);
console.log(typeof account);
console.log(account instanceof Account);
console.log(account.balance);
