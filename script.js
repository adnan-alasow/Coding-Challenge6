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




/*

let arrayRepeating = [3, 4, 5, 3, 6, 8, 5]; 

// for loop index 0 = arrayRepeating.length
// if 

for (let i = 0; i < arrayRepeating.length; i++){

  let flag = false;
  for (let j = i + 1; j < arrayRepeating.length; j++){
    if(arrayRepeating[i] === arrayRepeating[j]){
      console.log("Reapting element is " + arrayRepeating[i]);
      flag = true;
      break;
    }
  }
  if(flag) {
    break;
  }
}
console.log(arrayRepeating);


let arraytest = [55, 66, 33, 22.2, 44];
let addition = 0;
let average = 0;

function arrayAve(arraytest){

  for ( let i = 0; i < arraytest.length; i++){
    addition = addition + arraytest[i];
  
  }

  average = addition / arraytest.length;
  console.log(average);

  if (Number.isInteger(average) === true){
    console.log("It's a whole numbrer");
  } else {
    console.log("It's not a whole number");
  }
}

arrayAve(arraytest);
//for loop to add all the numbers 
// divid the add number by arraytest.length

/*
Create a function that takes two numbers as arguments (num, length) 
and returns an array of multiples of num until the array length reaches 
length.

function (number, length)
function (2, 8)

[2, 4, 6, 8, 10, 12, 14, 16]

function (5, 6)
[5, 10, 15, 20, 25, 30]

loop - lenght of the lenght 

*/
//function arraymultiple(5, 8)
// function arraymultiple(num, lenght){

//   let totalArray = [];

//   for ( let i = 1; i <= lenght; i++){
//     totalArray.push(i * num)
//   }
//    return totalArray;
// }

// let arr = arraymultiple(5, 6);
// console.log(arr);

/*
An array is special if every even index contains an even number and 
every odd index contains an odd number. Create a function that 
returns true if an array is special, and false otherwise
*/

// let specialArray = [2, 3, 8, 13, 10];
// even index will have even number
// odd index will have odd number

// violates at any point, it's not a special array
//for loop to check for index 
// physical address 
//logical address 

// function something(specialArray){

// for (let i = 0; i < specialArray.length; i++){
//   if(i % 2 === 0 && specialArray[i] % 2 !== 0){
//     return false;
//   } else if (i % 2 !== 0 && specialArray[i] % 2 === 2){
//     return false;
//   } 
// } 
// return true; 
// }