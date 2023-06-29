/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new Error('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new Error('Length must be a number');
    }
    if (typeof students !== 'object') {
      throw TypeError('students must be an array of strings');
    }
    for (const val of students) {
      if (typeof val !== 'string') {
        throw TypeError('students must be an array of strings');
      }
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new Error('Name must be a string');
    }
    this._name = name;
  }

  get length() {
    return this._name;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw new Error('Length must be a number');
    }
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (typeof students !== 'object') {
      throw TypeError('students must be an array of strings');
    }
    for (const val of students) {
      if (typeof val !== 'string') {
        throw TypeError('students must be an array of strings');
      }
    }
    this._students = students;
  }
}
