class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return this.firstName + " " + this.lastName;
  }
  walk() {
    console.log("Waliking..");
  }
}
class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }
  takeTest() {
    console.log("taking test");
  }
}
class Teacher extends Person {
  override get fullName(): string {
    return "Proffesor" + " " + super.fullName;
  }
}

let student = new Student(1, "Abhiansh", "abhi@gmail.com");
student.takeTest();
let teacher = new Teacher("Abhishek", "Bhardwaj");
console.log(teacher.fullName);
