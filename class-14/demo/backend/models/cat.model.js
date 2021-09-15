'use strict';
const mongoose = require('mongoose');

/***
 * TO Create a Mongo DB collection
 *
 * 1- You need to create a mongoose Schema
 * 2- Is to generate a model based on that Schema
 *
 */


// Step # 1 Define the Schema on which the collection/ Model will be modeled after
const catSchema = new mongoose.Schema({
  cat_name: { type: String },
  cat_breed: { type: String },
  cat_img: { type: String },
  email: { type: String }
});


// Step # 2 We will Generate the Model based on that Schema
const catModel = mongoose.model('mycats', catSchema);

module.exports = catModel;