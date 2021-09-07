'use strict';


const peperoniPizza = [
  'slice 01',
  'slice 02',
  'slice 03',
  'slice 04',
  'slice 05',
  'slice 06',
  'slice 07',
  'slice 08'
];


console.log(peperoniPizza.slice(0, 3));
console.log(peperoniPizza.slice(4, 7));


/**
 * Splice
 * is used to modify the array by either:
 * - removing item form any place in the array
 * - adding item at any point in the array
 * - replace items from the array with new ones
 */

const lettersArr = ['a', 'b', 'c', 'e'];

// lettersArr.splice(2, 1); // to remove an item

// lettersArr.splice(3, 0, 'd')// to add item

lettersArr.splice(2, 1, 'C')// to replace item

console.log(lettersArr);
