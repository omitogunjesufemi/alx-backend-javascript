export default function getStudentsByLocation(studentsArray, studentLocation) {
  let students = [];
  if (Array.isArray(studentsArray)) {
    students = studentsArray.filter((x) => x.location === studentLocation);
  }
  return (students);
}
