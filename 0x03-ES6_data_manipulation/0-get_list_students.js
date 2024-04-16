export default function getListStudents() {
  const student = [];
  student.push({ id: 1, firstName: 'Guillaume', location: 'San Francisco' });
  student.push({ id: 2, firstName: 'James', location: 'Columbia' });
  student.push({ id: 5, firstName: 'Serena', location: 'San Francisco' });

  return (student);
}
