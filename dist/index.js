"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() {
        console.log("Waliking..");
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log("taking test");
    }
}
class Teacher extends Person {
    get fullName() {
        return "Proffesor" + " " + super.fullName;
    }
}
let student = new Student(1, "Abhiansh", "abhi@gmail.com");
student.takeTest();
let teacher = new Teacher("Abhishek", "Bhardwaj");
console.log(teacher.fullName);
//# sourceMappingURL=index.js.map