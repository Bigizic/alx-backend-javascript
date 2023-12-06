/**
  * Student: <object> creates a new student
*/

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentOne: Student = {
  firstName: 'Nnamdi',
  lastName: 'Azikiwe',
  age: 20,
  location: 'Enugu'
}

const studentTwo: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'San Francisco'
};

const studentsList: Student[] = [studentOne, studentTwo];

function table(): void {
  const tableElement = document.createElement('table');

  studentsList.forEach(student => {
    const row = tableElement.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
  });

  document.body.appendChild(tableElement);
}

table();
