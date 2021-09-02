'use strict';

const arrOfNums = [1, 2, 3, 4, 5];


/**
 * Using the for loop method
 */
// let sum = 0;

// for (let index = 0; index < arrOfNums.length; index++) {
//   sum = sum + arrOfNums[index];

// }

// console.log(sum);



/**
 * Using the reduce method
 */

// const sum = arrOfNums.reduce((accumulator, currentValue) => {

//   console.log('accumulator:', accumulator);
//   console.log('currentValue: ', currentValue);

//   accumulator += currentValue;
//   // accumulator= accumulator + currentValue; // same as the above

//   return accumulator;

// }, 0);

// console.log(sum);

let people = [
  { name: 'Fred', role: 'Developer' },
  { name: 'Suzy', role: 'Developer' },
  { name: 'Gina', role: 'Manager' },
  { name: 'Jim', role: 'Support' }
];

// as an object
// let folks = people.reduce((accumulator, person, idx) => {
//   accumulator[person.name] = person.role;
//   return accumulator;
// }, {});

// as a string
// let folks = people.reduce((accumulator, person, idx) => {
//   accumulator += person.name + ' ';
//   return accumulator;
// }, '');


// as an array of name
let folks = people.reduce((accumulator, person, idx) => {
  accumulator.push(person.name);
  return accumulator;
}, []);

// folks:
console.log(folks);