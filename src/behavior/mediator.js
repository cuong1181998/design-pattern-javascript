class HR {
  constructor(){
    this.employeeList = []
  }
  
  registerEmployee(employee){
    this.employeeList[employee.name] = employee
  }
  
  scheduleRaise(raise,worker, manager){
    manager.recieveMessage(worker,raise)
    var ans = manager.finalizeRaise(worker,raise)
    if(ans){
      worker.recieveRaise(raise)
    }

  }
}

class Employee{
  constructor(hr,name,position,pay){
    this.hr = hr
    this.name = name
    this.position = position
    this.pay = pay 
  }
}

class Manager extends Employee{
    constructor(hr,name,position,pay){
      super(hr,name,position,pay)
      this.hr.registerEmployee(this)
    }
    recieveMessage(worker,raise){
      console.log(`${worker.name} should get ${raise} dollar raise`)
    }
    finalizeRaise(worker,raise){
      console.log(`${worker.name}'s ${raise} dollar raise is approved`)
      return true
    }
}


class Worker extends Employee{
  constructor(hr,name,position,pay){
      super(hr,name,position,pay)
      this.hr.registerEmployee(this)
  }
  recieveRaise(raise){
    this.pay += raise
    console.log(`My new pay is ${this.pay} dollars`)
  }
}