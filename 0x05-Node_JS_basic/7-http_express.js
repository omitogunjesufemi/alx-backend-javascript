const express = require('express');

const fs = require('fs').promises;

const app = express();

const filePath = process.argv[2];

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.get('/students', (request, response) => {
  let responseText = 'This is the list of our students\n';

  if (filePath) {
    fs.readFile(filePath, 'utf-8')
      .then((data) => {
        const dataArray = data.trim().split('\n').slice(1);
        const dataLen = dataArray.length;
        responseText += `Number of students: ${dataLen}\n`;

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
          responseText += `Number of students in ${course}: ${students.length}. List: ${students.join(', ')}\n`;
        }
        response.send(responseText.trim());
      })
      .catch(() => {
        response.send(`${responseText}Cannot load the database`);
      });
  } else {
    response.send('Cannot load the database');
  }
});

app.listen(1245);

module.exports = app;
