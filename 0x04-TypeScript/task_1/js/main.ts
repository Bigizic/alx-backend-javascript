interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  readonly fullTimeEmployee: boolean;
  readonly yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;
}

const onlyTeacher: Teacher = {
  firstName: 'John',
  lastName: 'Wick',
  fullTimeEmployee: true,
  location: 'Texas',
  yearsOfExperience: 6,
  contract: true,
};


console.log(onlyTeacher);
