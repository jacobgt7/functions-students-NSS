const createStudent = (studentName,studentGrade) => {
    const newStudent = {
        name: studentName,
        grade: studentGrade
    }
    return newStudent
}

const addMathGrade = (studentObj) => {
    studentObj.math = "B"
    return studentObj
}

const addHistoryGrade = (studentObj) => {
    studentObj.history = "C"
    return studentObj
}

const addScienceGrade = (studentObj) => {
    studentObj.science = "A"
    return studentObj
}

let student = createStudent("John Doe", 11)

student = addMathGrade(student)

student = addHistoryGrade(student)

student = addScienceGrade(student)

console.log(student)