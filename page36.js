console.log("******************Page 36 ex 15******************")

var goodStudents = 0
var sumGrade = 0
var avg = sumGrade / goodStudents
var studentNames = ""

for (var index = 0; index < 3; index++) {
    var sname = prompt("Enter student name")
    var grade = +prompt("Enter student grade")
    if (grade >= 70) {
        goodStudents = goodStudents + 1
        sumGrade = sumGrade + grade
        console.log(grade)
        console.log(sname)

    }
}
console.log("The average grade of the students who passed the test is " + sumGrade / goodStudents)

