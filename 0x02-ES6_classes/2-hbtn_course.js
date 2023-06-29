/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new Error('Name must be a string');
    }
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new Error('Length must be a number');
    }
    if (!Array.isArray(students)) {
      throw new Error('Students must be an array');
    } else if (students.every((element) => typeof element === 'string')) {
      this._students = students;
    } else {
      throw new Error('Students must be an array of strings');
    }
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

  set students(student) {
    if (!Array.isArray(student)) {
      throw new Error('Students must be an array');
    } else if (student.every((element) => typeof element === 'string')) {
      this._students = student;
    } else {
      throw new Error('Students must be an array of strings');
    }
  }
}
