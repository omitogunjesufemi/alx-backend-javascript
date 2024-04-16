export default function getStudentIdsSum(studentsArray) {
  const idSum = 0;
  if (Array.isArray(studentsArray)) {
    const studentIds = studentsArray.map((x) => x.id);
    return (studentIds.reduce((a, b) => a + b, idSum));
  }
  return (idSum);
}
