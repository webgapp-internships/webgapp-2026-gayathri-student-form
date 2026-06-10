// Parent Class
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
        return ${this.studentName}: CSE Department;
    }
}


// Another Child Class
class IT extends Department {

    details() {
        return ${this.studentName}: IT Department;
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
        return ${this.studentName} is doing ${this.project} project;
    }
}


// Objects
const s1 = new CSE("Arun");
const s2 = new IT("Kumar");

const s3 = new Student("Santhosh", "Gym Management System");


// Output
console.log(s1.details());

console.log(s2.details());

console.log(s3.details());

console.log(s3.showProject());

Santhos <kmsanthosh336@gmail.com>
10:55 AM (0 minutes ago)
to me

<!DOCTYPE html>
<html>

<head>
    <title>Student Management</title>

    <style>
        body {
            font-family: Arial;
            text-align: center;
            background-color: lightgray;
        }

        h1 {
            color: blue;
        }

        button {
            padding: 10px;
            margin: 5px;
            background-color: green;
            color: white;
            border: none;
        }

        #output {
            margin-top: 20px;
            font-size: 20px;
        }
    </style>

</head>

<body>

    <h1 id="title">JavaScript Demo</h1>

    <button onclick="changeText()">
        Change Text
    </button>

    <button onclick="changeColor()">
        Change Color
    </button>

    <button onclick="showStudents()">
        Show Students
    </button>

    <button onclick="countStudents()">
        Count Students
    </button>

    <button onclick="showAlert()">
        Alert
    </button>

    <div id="output"></div>

    <script>

        let students = [
            "Arun",
            "Kavin",
            "Santhosh",
            "Vijay"
        ];

        function changeText() {

            document.getElementById("title").innerHTML =
                "Text Changed Successfully";

        }

        function changeColor() {

            document.getElementById("title").style.color =
                "red";

        }

        function showStudents() {

            let result = "";

            for (let i = 0; i < students.length; i++) {

                result =
                    result +
                    students[i] +
                    "<br>";

            }

            document.getElementById("output").innerHTML =
                result;
        }

        function countStudents() {

            document.getElementById("output").innerHTML =
                "Total Students : " +
                students.length;

        }

        function showAlert() {

            alert("Welcome Students");

        }

    </script>

</body>
</html>
