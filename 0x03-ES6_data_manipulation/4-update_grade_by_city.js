export default function updateStudentGradeByCity(studentList, city, newGradesList) {
  const students = studentList.filter((x) => x.city === city);

  const newStudents = students.filter((y) => y.id === newGradesList.studentId).map();
}
