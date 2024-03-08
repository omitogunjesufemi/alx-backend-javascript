export default function createReportObject(employeesList) {
  const reportObject = {
    allEmployees: {},
  };

  for (const department in employeesList) {
    if (department) {
      reportObject.allEmployees[department] = [...employeesList[department]];
    }
  }

  reportObject.getNumberOfDepartments = () => Object.keys(this).length;

  return reportObject;
}
