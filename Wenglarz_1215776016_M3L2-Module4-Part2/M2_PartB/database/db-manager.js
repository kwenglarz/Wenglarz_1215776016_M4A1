//This is where we will implement our CRUD operations.
const Student = require('../model/student');

// Create a data store for our student data
let students = [];

// create a new student
addStudent = function (student) {
    // Push into local array so we can render the students to the user (will update in future
    // to get students from actual database))
    students.push(student);
    
    // Create new student and save it to the database
    Student.create(student);
};

//update specific student
upDateStudent = function (id, student) {
    const specificStudent = students.find(student => student.id === id);

    if(specificStudent) {
        const updatedStudent = new Student();
        updatedStudent.id = student.id;
        updatedStudent.firstName = student.firstName;
        updatedStudent.middleName = student.middleName;
        updatedStudent.lastName = student.lastName;
        updatedStudent.address = student.address;
        updatedStudent.phone = student.phone;
        updatedStudent.email = student.email;
        updatedStudent.description = student.description;

        students[students.indexOf(specificStudent)] = updatedStudent;
    }
};

// get all students
const getStudents = function () {
    return students;
}

// get a specific student
getSpecificStudent = function (id) {
    const specificStudent = students.find(student => student.id === id);
    if(specificStudent){
        return specificStudent;
    }
    return undefined;
}
// delete a specific student
delSpecificStudent = function (id) {
    const specificStudent = students.find(student => student.id === id);
    if(specificStudent){
        const index = students.indexOf(specificStudent);
        students.splice(index, 1) ;
    }
}

exports.getSpecificStudent = getSpecificStudent;
exports.deleteStudent = delSpecificStudent;
exports.getStudents = getStudents;
exports.upDateStudent = upDateStudent;
exports.addStudent = addStudent;
exports.students = students;