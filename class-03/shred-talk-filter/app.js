'use strict '

const arrOfNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// I want to get the even numbers from the above array of Numbers

const mapEvenNumbers = arrOfNum.map((number) => {
  if (number % 2 === 0) {
    return number;
  } else {
    return 'is an even number'
  }
});

// console.log(mapEvenNumbers);

const filterEvenNumbers = arrOfNum.filter((number) => {
  return (number % 2 === 0);
})


console.log(filterEvenNumbers);
