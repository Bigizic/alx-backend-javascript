import Car from './10-car.js';

export default class EvCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  get range() {
    return this._range;
  }

  set range(value) {
    this._range = value;
  }

  cloneCar() {
    const MyModel = super.constructor[Symbol.newModel];

    return new MyModel();
  }
}
