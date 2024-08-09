// Define a symbol to be used as the key for the cloneCar method
const cloneSymbol = Symbol('cloneCar');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Method to return a clone of the current car instance
  [cloneSymbol]() {
    // Create a new instance of the current class with the same attributes
    return new this.constructor(this._brand, this._motor, this._color);
  }

  // Public method to invoke the clone symbol
  cloneCar() {
    return this[cloneSymbol]();
  }
}
