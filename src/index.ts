class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return this.firstName + " " + this.lastName;
  }
  walk() {
    console.log("Waliking..");
  }
}
class Students extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }
  takeTest() {
    console.log("taking test");
  }
}

let student = new Students(1, "Abhiansh", "abhi@gmail.com");
student.takeTest();
