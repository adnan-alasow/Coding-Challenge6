'use strict';

//1. Make 3 Objects

// let car1 = {
//   make: "Honda",
//   model: "civi",
//   year: 2019
// };
// console.log(car1.make);
// let car2 = {
//   make: "Toyota",
//   model: "Camry",
//   year: 2020
// }
// console.log(car2.make);

// let car3 = {
//   make: "Ford",
//   model: "Mustang",
//   year: 2018
// }
// console.log(car3.make);


/*
Question 2
Part 1
Write a program that prompts the user to enter the details of a book - title,
author, and number of pages - and stores the data in an object. Then, output
the details of the book to the console.
*/

// let book = {
//   bookTitle: prompt("Enter the title of the book: "),
//   bookAuthor: prompt("Enter the Author of the book: "),
//   bookPages: prompt("Number of pages: "),

// }

// console.log(book);

/*
Part 2
Write a function called findOldestPerson that takes in an array of people (each
person represented as an object with properties for name and age) as a
parameter and returns the name of the oldest person in the array.
*/

function findOldestPerson(people) {
  let oldestPerson = people[0]; // Assume the first person is the oldest initially
  
  for (let i = 1; i < people.length; i++) {
    if (people[i].age > oldestPerson.age) {
      oldestPerson = people[i]; // Update the oldestPerson if a person with greater age is found
    }
  }
  
  return oldestPerson.name; // Return the name of the oldest person
}

let people = [
  {
    name: 'Adam',
    age: 23
  },
  {
    name: 'Allan',
    age: 26
  },
  {
    name: 'Omar',
    age: 31
  }
];

console.log(findOldestPerson(people));
