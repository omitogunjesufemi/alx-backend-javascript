interface Student {
 firstName: string;
 lastName: string;
 age: number;
 location: string;   
}

const student1: Student = {
    firstName: 'Jesufemi',
    lastName: 'Omitogun',
    age: 18,
    location: 'Jos'
}

const student2: Student = {
    firstName: 'Jesupemi',
    lastName: 'Omitogun',
    age: 20,
    location: 'Abeokuta'
}

const studentsList: Student[] = [student1, student2];

document.addEventListener('DOMContentLoaded', () => {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    studentsList.forEach((student) => {
        const row = document.createElement('tr');
        const firstNameCell = document.createElement('td');
        firstNameCell.textContent = student.firstName;
        const locationCell = document.createElement('td');
        locationCell.textContent = student.location;

        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    document.body.appendChild(table);
});