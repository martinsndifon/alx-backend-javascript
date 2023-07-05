interface Teacher {
	readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// the readonly make the attribute to be only modifiable on initialization
// ?: make the attribute optional
// [key: string]: any; makes it possible to add additional attributes not defined in the interface

const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};
console.log(teacher3);