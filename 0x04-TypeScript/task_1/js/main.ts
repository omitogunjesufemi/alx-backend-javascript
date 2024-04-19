interface Teacher {
 firstName: string;
 lastName: string;
 fullTimeEmployee: true | false;
 yearsOfExperience?: number;
 readonly location: string;
  [key: string]: any;
}

interface Director extends Teacher {
 numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
}

interface StudentInfo {
    firstName: string;
    lastName: string;
}

interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClassInterface {
    constructor(private studentInfo: StudentInfo) {};

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.studentInfo.firstName;
    }
}