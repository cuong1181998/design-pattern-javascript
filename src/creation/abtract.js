class Loans {

  getLoan(type, amount, duration) {
    switch (type) {
      case 'home':
        this.loan = new HomeLoan(amount, duration)
        break;    
      case 'student':
        this.loan = new StudentLoan(amount, duration)
        break;    
      case 'personal':
        this.loan = new PersonalLoan(amount, duration)
        break;    
    }
    return this.loan;
  }


}

class HomeLoan {
  constructor(amount, duration) {
    this.amount = amount;
    this.duration = duration;
    this.interest = 0.08 
  }

  calculateInterest() {
    console.log(this.amount * this.interest * this.duration);
  }
}

class StudentLoan {
  constructor(amount, duration) {
    this.amount = amount;
    this.duration = duration;
    this.interest = 0.03 
  }

  calculateInterest() {
    console.log(this.amount * this.interest * this.duration);
  }
}

class PersonalLoan {
  constructor(amount, duration) {
    this.amount = amount;
    this.duration = duration;
    this.interest = 0.05 
  }

  calculateInterest() {
    console.log(this.amount * this.interest * this.duration);
  }
}

var loan = new Loans()

var homeLoan = loan.getLoan('home',3200,5)
homeLoan.calculateInterest()

var studentLoan = loan.getLoan('student',1800,4)
studentLoan.calculateInterest()

var personalLoan = loan.getLoan('personal',1200,2)
personalLoan.calculateInterest()