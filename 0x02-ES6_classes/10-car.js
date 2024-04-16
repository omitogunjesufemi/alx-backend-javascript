const CAR_BRAND = Symbol('brand');
const CAR_MOTOR = Symbol('motor');
const CAR_COLOR = Symbol('color');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    return this;
  }
}
