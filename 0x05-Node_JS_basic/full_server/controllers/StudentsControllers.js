import readDatabase from "../utils";

class StudentsController {
    static getAllStudents(request, response) {
        readDatabase(process.argv[2])
        .then((data) => {
            let resText = 'This is the list of our students';
            for (const [course, students] of Object.entries(data)) {
                resText += `Number of students in ${course}: ${students.length}. List: ${students.join(', ')}\n`;
            }

            response.status(200).send(resText);
        })
        .catch(() => {
            response.status(500).send('Cannot load the database');
        });
    }

    static getAllStudentsByMajor(request, response) {
        major = request.params.major;
        if (major !== 'CS' && major !== 'SWE') {
            response.status(500).send('Major parameter must be CS or SWE');
        }

        readDatabase(process.argv[2])
        .then((data) => {
            let resText = ''
            const students = data[major];
            if (students) {
                resText += `List: ${students.join(', ')}\n`;
            }else {
                resText += 'List:\n';
            }
            response.status(200).send(resText);
        })
        .catch(() => {
            response.status(500).send('Cannot load the database');
        });
    }
}

export default StudentsController;
