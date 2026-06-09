class Student {
    constructor(name, mark) {
        this.name = name;
        this.mark = mark;
    }
}

class Result extends Student {
    checkResult() {
        return this.mark >= 35 ? "PASS" : "FAIL";
    }

    displayDetails() {
        console.log("Student Name :", this.name);
        console.log("Mark         :", this.mark);
        console.log("Result       :", this.checkResult());
        console.log("----------------------");
    }
}

let students = [
    new Result("Gayathri", 80),
    new Result("Athithi", 25),
    new Result("Maya", 65),
    new Result("Shiva", 30),
    new Result("Diya", 85),
];

let passCount = 0;
let failCount = 0;

for (let student of students) {
    student.displayDetails();

    if (student.checkResult() === "PASS") {
        passCount++;
    } else {
        failCount++;
    }
}

console.log("Total Passed Students :", passCount);
console.log("Total Failed Students :", failCount);