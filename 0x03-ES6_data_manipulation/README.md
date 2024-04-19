# 0x03. ES6 data manipulation
This is a project from ALX on ES6 data manipulation in Javascript.

## Learning Objectives
- How to use map, filter and reduce on arrays
- Typed arrays
- The Set, Map, and Weak link data structures

## Tasks
- ### 0. Basic list of objects
  Create a function named getListStudents that will receive an array of students and must return a new array with the students' names.
  - Prototype: `export default function getListStudents(array)`
  - Example:
    ```javascript
    const students = [
      { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
      { id: 2, firstName: 'James', location: 'Columbia' },
      { id: 5, firstName: 'Serena', location: 'San Francisco' },
    ];
    const studentNames = getListStudents(students);
    console.log(studentNames);
    ```
    Output:
    ```javascript
    ['Guillaume', 'James', 'Serena']
    ```
- ### 1. More mapping
    Create a function named updateStudentGrade that will receive a list of students and must return a new list with the student's grade.
    - Prototype: `export default function updateStudentGrade(students)`
    - The grade must be the same as the student's average grade.
    - If a student doesn't have a grade, the grade should be 'N/A'
    - Example:
        ```javascript
        const students = [
        { id: 1, firstName: 'Guillaume', location: 'San Francisco', grade: 85 },
        { id: 2, firstName: 'James', location: 'Columbia', grade: 93 },
        { id: 5, firstName: 'Serena', location: 'San Francisco' },
        ];
        const newStudents = updateStudentGrade(students);
        console.log(newStudents);
        ```
        Output:
        ```javascript
        [
        { id: 1, firstName: 'Guillaume', location: 'San Francisco', grade: 85 },
        { id: 2, firstName: 'James', location: 'Columbia', grade: 93 },
        { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 'N/A' },
        ]
        ```
- ### 2. Filter
    Create a function named getStudentsByLocation that will receive a list of students and must return a new list with the students from a specific location.
    - Prototype: `export default function getStudentsByLocation(students, city)`
    - Example:
        ```javascript
        const students = [
        { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
        { id: 2, firstName: 'James', location: 'Columbia' },
        { id: 5, firstName: 'Serena', location: 'San Francisco' },
        ];
        const studentsInSF = getStudentsByLocation(students, 'San Francisco');
        console.log(studentsInSF);
        ```
        Output:
        ```javascript
        [
        { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
        { id: 5, firstName: 'Serena', location: 'San Francisco' },
        ]
        ```
- ### 3. Reduce
    Create a function named getSanFranciscoStudents that will receive a list of students and must return a sum of the number of students in San Francisco.
    - Prototype: `export default function getSanFranciscoStudents(students)`
    - Example:
        ```javascript
        const students = [
        { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
        { id: 2, firstName: 'James', location: 'Columbia' },
        { id: 5, firstName: 'Serena', location: 'San Francisco' },
        ];
        const countStudentsSF = getSanFranciscoStudents(students);
        console.log(countStudentsSF);
        ```
        Output:
        ```javascript
        2
        ```
- ### 4. Combine
    Create a function named getStudentsByLocation that will receive a list of students and must return a new list with the students from a specific location.
    - Prototype: `export default function getStudentsByLocation(students, city)`
    - Example:
        ```javascript
        const students = [
        { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
        { id: 2, firstName: 'James', location: 'Columbia' },
        { id: 5, firstName: 'Serena', location: 'San Francisco' },
        ];
        const studentsInSF = getStudentsByLocation(students, 'San Francisco');
        console.log(studentsInSF);
        ```
        Output:
        ```javascript
        [
        { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
        { id: 5, firstName: 'Serena', location: 'San Francisco' },
        ]
        ```
- ### 5. Typed Arrays
    Create a function named createInt8TypedArray that returns a new `Int8Array` of a specific length.
    - Prototype: `export default function createInt8TypedArray(length, position, value)`
    - The value of each cell of the array must be the value passed as an argument.
    - If a value is not provided, the cell must be equal to the position.
    - Example:
        ```javascript
        const int8View = createInt8TypedArray(10, 2, 8);
        console.log(int8View);
        ```
        Output:
        ```javascript
        Int8Array(10) [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9
        ]
        ```
- ### 6. Set data structure
    Create a function named setFromArray that returns a new Set from an array.
    - Prototype: `export default function setFromArray(array)`
    - Example:
        ```javascript
        const set = setFromArray(['Guillaume', 'James', 'Serena']);
        console.log(set);
        ```
        Output:
        ```javascript
        Set(3) { 'Guillaume', 'James', 'Serena' }
        ```

- ### 7. More set data structure
    Create a function named hasValuesFromArray that returns a boolean if all the elements in the array exist within the set. It accepts two arguments: a set and an array.
    - Prototype: `export default function hasValuesFromArray(set, array)`
    - Example:
        ```javascript
        const set = new Set(['Guillaume', 'James', 'Serena']);
        const array = ['Guillaume', 'James'];
        console.log(hasValuesFromArray(set, array));
        ```
        Output:
        ```javascript
        true
        ```

- ### 8. Clean set
    Create a function named cleanSet that returns a string of all the set values that start with a specific string (startString).
    - Prototype: `export default function cleanSet(set, startString)`
    - You can assume that all values are strings.
    - Example:
        ```javascript
        const set = new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']);
        const startString = 'bon';
        console.log(cleanSet(set, startString));
        ```
        Output:
        ```javascript
        bonjovi, bonaparte, bonappetit
        ```
- ### 9. Map data structure
    Create a function named groceriesList that returns a map of groceries with the following items (name, quantity):
    - Prototype: `export default function groceriesList()`
    - Example:
        ```javascript
        const map = groceriesList();
        console.log(map);
        ```
        Output:
        ```javascript
        Map(3) {
        'Apples' => 10,
        'Tomatoes' => 10,
        'Pasta' => 1
        }
        ```

- ### 10. More map data structure
    Create a function named updateUniqueItems that returns an updated map for all items with initial quantity at 1.
    - Prototype: `export default function updateUniqueItems(map)`
    - Example:
        ```javascript
        const map = new Map();
        map.set('Apples', 4);
        map.set('Tomatoes', 6);
        map.set('Pasta', 1);
        const updatedMap = updateUniqueItems(map);
        console.log(updatedMap);
        ```
        Output:
        ```javascript
        Map(3) {
        'Apples' => 4,
        'Tomatoes' => 6,
        'Pasta' => 2
        }
        ```
- ### 11. Weak link data structure
    Export a const instance of WeakMap and name it weakMap. Export a new function named queryAPI. It should accept an endpoint argument like so:
    {
        protocol: 'http',
        name: 'getUsers'
    }
    Track within the weakMap the number of times queryAPI is called for each endpoint. When the number of queries is >= 5 throw an error with the message `Endpoint load is high`.
