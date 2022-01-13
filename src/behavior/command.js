class Command {
  execute () {}
}

class WithdrawCommand extends Command {
  constructor(receiver) {
    super();
    this.receiver = receiver;
  }
  
  execute(amount) {
    return this.receiver.withdraw(amount)
  }
}

class DepositAmountCommand extends Command {
  constructor(receiver) {
    super();
    this.receiver = receiver;
  }
  
  execute(amount) {
    return this.receiver.depositAmount(amount)
  }
}

class CheckAmountCommand extends Command {
  constructor(receiver) {
    super();
    this.receiver = receiver;
  }
  
  execute() {
    return this.receiver.checkAmount()
  }
}

class BankAccount {
  constructor(amount) {
    this.amount = amount;
  }
  
  checkAmount() {
    console.log(this.amount)
  }

  withdraw(amount) {
    if( amount > this.amount){
        console.log("Not enough money")
    }
    else{
        this.amount -=  amount
    }
  }

   depositAmount(money){
        this.amount += money
    }
}

class AccountManager {
  request(command, amount) {
    command.execute(amount)
  }
}

const manager = new AccountManager();
const account = new BankAccount(100)
const check = new CheckAmountCommand(account);
manager.request(check)
const withdraw = new WithdrawCommand(account);
const deposit = new DepositAmountCommand(account);
manager.request(withdraw,10)
manager.request(check)
manager.request(deposit,50)
manager.request(check)