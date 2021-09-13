'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

/**
 * Middleware
 * 
 * Are basically checkpoints for request to add things to request in order to make sure that the request is handled in a right way
 */
app.use(cors()); // checkpoint # 1
app.use(express.json()); // checkpoint #2

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const DB_NAME = process.env.DB_NAME;

/**
 * we are using mongoose package/ library to connect to 
 * Mongo DB.
  */
mongoose.connect(MONGO_URL);

// destructing assignment
const {
  getCats,
  createCat,
  deleteCat
} = require('./controllers/cat.controllers');

const getIndex = require('./controllers/index.controller');

const seedCat = require('./helper/catSeed.seed');

// Call this function only once to not have duplicate Data
// seedCat();

// Proof of life Endpoint
app.get('/', getIndex);

/**
 * Cat CRUD API Endpoint
 */
app.get('/cat', getCats); // READ cat Data
app.post('/cat', createCat); // CREATE cat Data
app.delete('/cat/:cat_id', deleteCat); // DELETE cat 



// kick start the express server to work
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});