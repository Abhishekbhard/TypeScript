class Account {
  id: number;
  owner: string;
  balance: number;
  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }
  deposite(amount: number) {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    } else {
      this.balance = amount;
    }
  }
}

let account = new Account(1, "Abhishek", 0);
account.deposite(100);
console.log(typeof account);
console.log(account instanceof Account);
