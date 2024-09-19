function Account(accountNumber, balance, owner) {
  this.accountNumber = accountNumber;
  this.balance = balance;
  this.owner = owner;
}

Account.prototype.deposit = function(amount) {
  this.balance += amount;
};

Account.prototype.withdraw = function(amount) {
  if (amount <= this.balance) {
      this.balance -= amount;
  } else {
      console.log("Insufficient funds");
  }
};

Account.prototype.calculateCompoundInterest = function(years, rate) {
  const principal = this.balance;
  const interestRate = rate / 100;
  const compoundedAmount = principal * Math.pow((1 + interestRate), years);
  return Math.ceil(compoundedAmount);
};

