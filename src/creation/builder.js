// hidden step 
class Assignment {
  make (builder) {
    builder.step1();
    builder.step2();
    builder.step3();
    builder.step4();

    return builder.getTask()
  }
}

class AssignmentBuilder {
  task = null;

  constructor(subject, level, dueDate) {
    this.step1 = () => {
      this.task = new Task()
    }
    this.step2 = () => {
      this.task.addSubject(subject)
    }
    this.step3 = () => {
      this.task.addLevel(level)
    }
    this.step4 = () => {
      this.task.addDueDate(dueDate)
    }
     
  }

  getTask() {
    return this.task;
  }
}

class Task {
  addSubject(subject) {
    this.subject = subject
  }

  addLevel(level) {
    this.level = level
  }

  addDueDate(dueDate) {
    this.dueDate = dueDate
  }

  announcement () {
    console.log(`Your ${this.subject} assignment's difficulty level is: ${this.level}. It is due on ${this.dueDate}.`)
  } 
}


try {
  const assignment = new Assignment();
  const assignmentBuilder = new AssignmentBuilder("Math","Hard","12th June, 2020");
  const mathAssignment = assignment.make(assignmentBuilder);
  mathAssignment.announcement(); 
} catch(e) {
  console.log(e);
}