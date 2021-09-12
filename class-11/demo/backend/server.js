'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const PORT = process.env.PORT

// destructing assignment
const getIndex = require('./controller/index.controller');

// Proof of life Endpoint
app.get('/', getIndex)



// kick start the express server to work
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});