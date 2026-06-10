
//function greet(name,welcome)
//{
 //   return `${welcome},${name}!`;
//}
//console.log(greet("sree","hey"));

//const greet2=function(name,welcome)
//{
  //  return name+" "+welcome;
//};
//console.log(greet2("sree","hello"));
const stud=(name,department,age) =>

     `${name},${department},${age}`;

console.log(stud("sree is studying","IT department","at 18yrs Old"))



//inhertiance code

//Parent Class
class Department {

    constructor(studentName) {
        this.studentName = studentName;
    }

    details() {
        return "Student Details";
    }
}


// Child Class
class CSE extends Department {

    details() {
        return `${this.studentName}: CSE Department`;
    }
}


// Another Child Class
class IT extends Department {

    details() {
        return `${this.studentName}: IT Department`;
    }
}


// Student inherits CSE
class Student extends CSE {

    constructor(studentName, project) {

        // Call Parent Constructor
        super(studentName);

        this.project = project;
    }

    showProject() {
        return `${this.studentName} is doing ${this.project} project`;
    }
}


// Objects
const s1 = new CSE("Maya");

const s2 = new IT("Diya");

const s3 = new Student("Santhosh", "Gym Management System");


// Output
console.log(s1.details());

console.log(s2.details());

console.log(s3.details());

console.log(s3.showProject());