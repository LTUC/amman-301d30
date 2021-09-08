'use strict';

const express = require('express') // require the express package
const app = express() // initialize your express app instance
const cors = require('cors');
app.use(cors()) // after you initialize your express app instance

const getWeather = require('./controller/weather.controller');

// destructing assignment
const {
  getGroceries,
  getIndex
} = require('./controller/index.controller');

app.get('/', getIndex)


app.get('/get-groceries', getGroceries)


app.get('/weather', getWeather);


// kick start the express server to work
app.listen(3001, () => {
  console.log(`Server started on port`);
});