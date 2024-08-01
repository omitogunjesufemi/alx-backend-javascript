const fs = require('fs');

function countStudents(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    if (data !== null) {
      const dataArray = data.split('\n').slice(1);
      const dataLength = dataArray.length;
      console.log(`Number of students: ${dataLength}`);

      const fieldDict = {};
      for (const line of dataArray) {
        const lineArray = line.split(',');
        const field = lineArray[lineArray.length - 1];

        if (!fieldDict[field]) {
          fieldDict[field] = [];
        }
        fieldDict[field].push(lineArray[0]);
      }

      for (const [course, students] of Object.entries(fieldDict)) {
        console.log(`Number of students in ${course}: ${students.length}. List: ${students.join(', ')}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
