export default function getListStudentIds(students) {
  if (Array.isArray(students)) {
    const studentIds = students.map((x) => x.id);
    return (studentIds);
  }
  return ([]);
}
