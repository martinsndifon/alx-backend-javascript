/* eslint-disable no-underscore-dangle */
export default class Car {
  constructor(brand, motor, color) {
    if ((typeof brand && typeof motor && typeof color) !== 'string') {
      throw TypeError('brand, motor and color must be strings');
    }
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}
