export default function updateStudentGradeByCity(studentList, city, newGradesList) {
  const students = studentList.filter((x) => x.location === city).map((x) => {
    const gradeObj = newGradesList.find((grade) => grade.studentId === x.id);
    const grade = gradeObj ? gradeObj.grade : 'N/A';
    return { ...x, grade };
  });

  return (students);
}
