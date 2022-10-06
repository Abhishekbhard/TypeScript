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
class Principle extends Person {
    get fullName() {
        return "Principle" + " " + super.fullName;
    }
}
printNames([
    new Student(1, "Abhiansh", "Bhardwaj"),
    new Teacher("Abhishek", "Bhardwaj"),
    new Principle("Shweta", "Bhardwaj"),
]);
function printNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
//# sourceMappingURL=index.js.map