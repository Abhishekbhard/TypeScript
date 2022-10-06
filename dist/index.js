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
class Students extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log("taking test");
    }
}
let student = new Students(1, "Abhiansh", "abhi@gmail.com");
student.takeTest();
//# sourceMappingURL=index.js.map