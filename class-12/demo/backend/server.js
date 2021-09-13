'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
app.use(cors());

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const DB_NAME = process.env.DB_NAME;

/**
 * we are using mongoose package/ library to connect to 
 * Mongo DB.
  */
mongoose.connect(`${MONGO_URL}/${DB_NAME}`);

// destructing assignment
const { getCats } = require('./controllers/cat.controllers');

const getIndex = require('./controllers/index.controller');

const seedCat = require('./helper/catSeed.seed');

// Call this function only once to not have duplicate Data
// seedCat();

// Proof of life Endpoint
app.get('/', getIndex);

/**
 * Cat CRUD API Endpoint
 */
app.get('/cat', getCats)



// kick start the express server to work
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});