#0x02 ES6 Classes
## Learning Objectives
- How to define a Class
- How to add methods to a class
- Why and how to add methods to a class
- How to extend a class from another
- Metaprogramming and symbols

## Tasks
### 0. You used to attend a place like this at some point
Create a class named Rectangle with the following attributes:
- attribute: maxStudentsSize

### 1. Let's make some classrooms
Implement a function named initializeRooms. It should return an array of 3 ClassRoom objects with the sizes 19, 20, and 34, respectively.

### 2. A Course, Getters, and Setters
Implement a class named HolbertonCourse that defines a course:
- constructor(name, length, students)
- Verify the type of attributes during object creation
- Each attribute is stored in an "underscore" attribute version (ex. name is stored in _name)
- Implement a getter and setter for each attribute

### 3. Methods, static methods, computed methods names..... MONEY
Implement a class named Currency:
- Constructor attributes: code, name
- Each attribute is stored in an "underscore" attribute version (ex. name is stored in _name)
- Implement a getter and setter for each attribute
- Implement a method named `displayFullCurrency` that will return the attributes in the following format: `name (code)`

