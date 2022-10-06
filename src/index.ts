// Polymorphish Object can take multiple form
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
class Principle extends Person {
  override get fullName(): string {
    return "Principle" + " " + super.fullName;
  }
}
printNames([
  new Student(1, "Abhiansh", "Bhardwaj"),
  new Teacher("Abhishek", "Bhardwaj"),
  new Principle("Shweta", "Bhardwaj"),
]);
function printNames(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}
