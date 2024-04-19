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

### 4. Pricing
Import the class Currency from 3-currency.js
Implement a class named Pricing:
- Constructor attributes: amount, currency
- Each attribute is stored in an "underscore" attribute version (ex. amount is stored in _amount)
- Implement a getter and setter for each attribute
- Implement a method named `displayFullPrice` that will return the attributes in the following format: `amount currency_name (currency_code)`
- Implement a static method named `convertPrice`. It should accept two arguments: `amount` and `conversionRate`. This method should return the `amount` multiplied by the `conversionRate`.

### 5. A Building
Implement a class named Building:
- Constructor attributes: sqft
- Each attribute is stored in an "underscore" attribute version (ex. sqft is stored in _sqft)
- Implement a getter and setter for each attribute
- Consider this class as an abstract class. And make sure that any class that extends from it has to implement a method named `evacuationWarningMessage`.
    - If a class that extends from it does not have a `evacuationWarningMessage` method, throw an error with the message `Class extending Building must override evacuationWarningMessage`

### 6. Inheritance
Import the class Building from 5-building.js
Implement a class named SkyHighBuilding that extends from Building:
- Constructor attributes: sqft, floors
- Each attribute is stored in an "underscore" attribute version (ex. sqft is stored in _sqft)
- Implement a getter and setter for each attribute
- Override the method named `evacuationWarningMessage` and return the following string: `Evacuate slowly the NUMBER_OF_FLOORS floors`.

### 7. Airport
Implement a class named Airport:
- Constructor attributes: name, code
- Each attribute is stored in an "underscore" attribute version (ex. name is stored in _name)
- The default string description of the class should return the airport `code`.

### 8. Primitive - Holberton Class
Implement a class named Primitive:
- Constructor attributes: size, location
- Each attribute is stored in an "underscore" attribute version (ex. size is stored in _size)
- When the class is cast into a Number, it should return the value of the size attribute
- When the class is cast into a String, it should return the value of the location attribute

### 9. Hoisting
Fix this code and make it work.

### 10. Vroom
Implement a class named Car:
- Constructor attributes: brand, motor, color
- Each attribute is stored in an "underscore" attribute version (ex. brand is stored in _brand)
- Add a method named cloneCar. This method should return a new object of the class.
Hint: Symbols in ES6.

### 11. EVCar
Import Car from 10-car.js
Implement a class named EVCar that extends from Car:
- Constructor attributes: brand, motor, color, range
- Each attribute is stored in an "underscore" attribute version (ex. brand is stored in _brand)
- For privacy reasons, when cloneCar is called on a EVCar object, the oject returned should be an instance of Car instead of EVCar.
