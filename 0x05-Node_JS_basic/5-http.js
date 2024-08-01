const http = require('http');

const fs = require('fs').promises;

const filePath = process.argv[2];

const app = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'text/plain');
  const reqUrl = request.url;
  if (reqUrl.length > 1) {
    response.write('This is the list of our students\n');
    if (filePath) {
      fs.readFile(filePath, 'utf-8')
        .then((data) => {
          const dataArray = data.trim().split('\n').slice(1);
          const dataLen = dataArray.length;
          response.write(`Number of students: ${dataLen}\n`);

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
            response.write(`Number of students in ${course}: ${students.length}. List: ${students.join(', ')}\n`);
          }
          response.end();
        })
        .catch(() => {
          response.end('Cannot load the database');
        });
    } else {
      response.end('Cannot load the database');
    }
  } else {
    response.write('Hello Holberton School!');
    response.end();
  }
});

app.listen(1245);

module.exports = app;
