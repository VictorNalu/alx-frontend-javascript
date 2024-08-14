interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two students
const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 21,
    location: 'Lagos'
};

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 22,
    location: 'Abuja'
};

// Create an array containing the students
const studentsList: Student[] = [student1, student2];

// Create a table and table body element
const table = document.createElement('table');
const tableBody = document.createElement('tbody');

// Loop through the studentsList and create rows
studentsList.forEach((student) => {
    // Create a table row
    const row = document.createElement('tr');

    // Create and populate the first name cell
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    // Create and populate the location cell
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    // Append the row to the table body
    tableBody.appendChild(row);
});

// Append the table body to the table
table.appendChild(tableBody);

// Append the table to the body of the document
document.body.appendChild(table);
