const fs = require('fs').promises;

function countStudents(filePath) {
  return fs.readFile(filePath, 'utf-8')
    .then((data) => {
      const dataArray = data.trim().split('\n').slice(1);
      const dataLen = dataArray.length;
      console.log(`Number of students: ${dataLen}`);

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
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
