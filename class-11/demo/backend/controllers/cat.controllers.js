'use strict';

const catModel = require('../models/cat.model');


const getCats = (request, response) => {

  catModel.find((error, catsData) => {
    response.json(catsData)
  });

};


module.exports = {
  getCats
}
