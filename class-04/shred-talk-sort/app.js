'use strict';

const arrOfNum = [
  3, 2, 5, 9, 1, 4, 6, 8, 7, 10, 11
];

// console.log('before sorting')
// console.log(arrOfNum)

// arrOfNum.sort(); // change and sorts the original array

// console.log('after sorting')
// console.log(arrOfNum);


// const arrOfNames = [
//   "Bayan",
//   "Diana",
//   "Ahmad"
//   "Ehab",
//   "Amani",
// ]

// arrOfNames.sort();
// console.log(arrOfNames);

arrOfNum.sort((a, b) => {
  if (a > b) {
    return 1; // we will put a to a higher index of b
  }

  if (a < b) {
    return -1; // we will put a to a lower index of b
  }

  return 0;
});

console.log(arrOfNum);


const arrOfNames = [
  "Mohammad",
  "Ahmad",
  "ahmad",
  "Sally",
  "Abduallah"
];

// console.log(arrOfNames.sort());
console.log(arrOfNames.sort((a, b) => {
  const letterA = a.toLocaleLowerCase();
  const letterB = b.toLocaleLowerCase();
  if (letterA > letterB) {
    return 1; // we will put a to a higher index of b
  }

  if (letterA < letterB) {
    return -1; // we will put a to a lower index of b
  }

  return 0;

}));