class EmployeeChain {
  setNextEmployee(nextEmployeeInChain) {
  }

  assignWork(req) {
    console.log( "No one can't handle it")
  }
}

class EasyLevelWorkHandler extends EmployeeChain {
  constructor() {
    super();
    this.nextEmployeeInChain = new EmployeeChain()
  }
  
  setNextEmployee(nextEmployeeInChain) {
    this.nextEmployeeInChain = nextEmployeeInChain;
  }
  assignWork(req) {
    if (req.type === "Easy") {
      console.log("Easy work assigned to: ", req.name)
      return;
    }
    this.nextEmployeeInChain.assignWork(req)
  }
}

class MediumLevelWorkHandler extends EmployeeChain {
  constructor() {
    super();
    this.nextEmployeeInChain = new EmployeeChain()
  }
  
  setNextEmployee(nextEmployeeInChain) {
    this.nextEmployeeInChain = nextEmployeeInChain;
  }
  assignWork(req) {
    if (req.type === "Medium") {
      console.log("Medium work assigned to: ", req.name)
      return;
    }
    this.nextEmployeeInChain.assignWork(req)
  }
}


class HardLevelWorkHandler extends EmployeeChain {
  constructor() {
    super();
    this.nextEmployeeInChain = new EmployeeChain()
  }
  
  setNextEmployee(nextEmployeeInChain) {
    this.nextEmployeeInChain = nextEmployeeInChain;
  }
  assignWork(req) {
    if (req.type === "Hard") {
      console.log("Hard work assigned to: ", req.name)
      return;
    }
    this.nextEmployeeInChain.assignWork(req)
  }
}

class Employee {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  
}

var w1 = new EasyLevelWorkHandler(); 
var w2 = new MediumLevelWorkHandler(); 
var w3 = new HardLevelWorkHandler(); 
w1.setNextEmployee(w2); 
w2.setNextEmployee(w3); 

const emp1 = new Employee("Joe","Easy")
const emp2 = new Employee("Anne","Medium")
const emp3 = new Employee("Shawn", "Hard")
const emp4 = new Employee("Shawn", "Super")

w1.assignWork(emp1); 
w1.assignWork(emp2); 
w1.assignWork(emp3);
w1.assignWork(emp4); 