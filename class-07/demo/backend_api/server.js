'use strict';

const express = require('express') // require the express package
const app = express() // initialize your express app instance
const cors = require('cors');
app.use(cors()) // after you initialize your express app instance

const groceries = require('./groceries-list.json')

// a server endpoint 
app.get('/', // our endpoint name
  function (request, response) { // callback function of what we should do with our request
    response.send('Hello World 👋') // our endpoint function response`se
  })


app.get('/get-groceries', (request, response) => {
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
})




// kick start the express server to work
app.listen(3001, () => {
  console.log(`Server started on port`);
});