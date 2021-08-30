'use strict';

/**
 * Using the foeEach we will do the following example:
 *
 *  - we want to loop through an array and we want one to each element of our array
 * 
 * forEach is an array method (only used with array)
 * does not have a return value
 * does not mutate (change) the original Array
 */


const newArr = [1, 2, 3, 4, 5];
// expected output for the array will be [2,3,4,5,6]

const modifiedArr = [];

newArr.forEach((value) => {
  console.log(value);
  modifiedArr.push(value + 1);
});

console.log(newArr);
console.log(modifiedArr);



/**
 * Using the map we will do the following example:
 *
 *  - we want to loop through an array and we want one to each element of our array
 *
 * forEach is an array method (only used with array)
 * does not mutate (change) the original Array
 * has a return value
 */


const mapArr = newArr.map((value) => {
  return value + 1;
});


console.log('map method result ', mapArr);


let people = [
  { name: "John", role: "Dad" },
  { name: "Cathy", role: "Mom" },
  { name: "Zach", role: "Kid" },
  { name: "Allie", role: "Kid" },
];

let folks = people.map((person, index) => {

  console.log(index);
  console.log(person);
  return person.name;
});

console.log('folks array ', folks);