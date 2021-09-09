'use strict';

const groceries = require('../groceries-list.json');

const getIndex = (request, response) => {
  response.send('Hello World 👋')
}

const getGroceries = (request, response) => {
  console.log(request.query.type);
  const type = request.query.type;
  /**
   * using the query we are going to try to find what type of groceries user want  from the list of groceries 
   * 
   * if we find it, we will return the list of item matching the type
   * if we dont, we will return a message saying it not there
   * By default if the user doesn't provide a query we will send the list as whole
   */
  if (type) {
    const returnArray = groceries.filter((item) => {
      return item.type === type;
    });

    if (returnArray.length) {
      response.json(returnArray);
    } else {
      response.send('no data found :disappointed:')
    }
  } else {
    response.json(groceries);
  }
}

module.exports = {
  getGroceries,
  getIndex
}