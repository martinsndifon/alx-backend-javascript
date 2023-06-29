/* eslint-disable no-underscore-dangle */
export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string' && typeof code !== 'string') {
      throw TypeError('name and code must of string type');
    }
    this._name = name;
    this._code = code;
  }

  toString() {
    return `[Object ${this._code}]`;
  }
}
