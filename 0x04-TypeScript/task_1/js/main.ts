interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  readonly fullTimeEmployee: boolean;
  readonly yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  readonly numberOfReports: number;
}


interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
}


interface StudentConstructor {
  new(firstName: string, lastName: string): StudentClassMethods;
}


interface StudentClassMethods {
    workOnHomework(): string;
    displayName(): string;
}


class StudentClass implements StudentClassMethods {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}


const onlyTeacher: Teacher = {
  firstName: 'John',
  lastName: 'Wick',
  fullTimeEmployee: true,
  location: 'Texas',
  yearsOfExperience: 6,
  contract: true,
};

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};


const student: StudentConstructor = StudentClass;
const newStudent = new student("John", "Doe");

console.log(newStudent.workOnHomework()); // Output: "Currently working"
console.log(newStudent.displayName()); // Output: "John"

//console.log(printTeacher("Ajohn", "Adam"))

//console.log(director1);

//console.log(onlyTeacher);
