// Normal function

function testFunction(paramOne, paramTwo) {

  const result = paramOne + paramTwo;

  return 'hello world';
}

// Arrow Function 

// named arrow function 

const testArrowFunction = (paramOne, paramTwo) => {
  const result = paramOne + paramTwo;

  return 'hello world';
}

document.getElementById('').addEventListener('submit', function () {
  // our code
  return e.target.numOne.value + e.target.numTwo.value;
});


// normal arrow function 
document.getElementById('').addEventListener('submit', () => {
  const x = e.target.numOne.value + e.target.numTwo.value;
  return e.target.numOne.value + e.target.numTwo.value;
});

// shorthanded arrow function
document.getElementById('').addEventListener('submit', () => e.target.numOne.value + e.target.numTwo.value);