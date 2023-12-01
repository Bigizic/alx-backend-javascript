export class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}

export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this._holbertonClass;
  }

  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

export const class2019 = new HolbertonClass(2019, 'San Francisco');
export const class2020 = new HolbertonClass(2020, 'San Francisco');

export const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
export const student2 = new StudentHolberton('John', 'Doe', class2020);
export const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
export const student4 = new StudentHolberton('Donald', 'Bush', class2019);
export const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

const listOfStudents = [student1, student2, student3, student4, student5];
export default listOfStudents;
