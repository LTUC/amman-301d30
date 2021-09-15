'use strict';
const catModel = require('../models/cat.model');


const getCats = (request, response) => {

  catModel.find({ email: request.query.email }, (error, catsData) => {
    response.json(catsData)
  });

};

const createCat = (request, response) => {

  // console.log("Request Data Object===========");
  // console.log(request.body);
  // console.log("==============================");
  /**
   * Example Request Body Data
   * { 
   *  cat_name: "Nimnim",
   *  cat_breed:"White OrangeTabby"
   * 
   * }
   */
  const { cat_name, cat_breed, cat_img, email } = request.body;


  const newCat = new catModel({
    cat_name, cat_breed, cat_img, email
  });

  newCat.save();

  response.json(newCat);

}

const deleteCat = (request, response) => {
  console.log(request.params);
  const catId = request.params.cat_id;

  catModel.deleteOne({ _id: catId }, (error, deletedData) => {

    response.json(deletedData);
  });

}

const updateCat = (request, response) => {
  /**
   * HTTP PUT methods uses the request body to send/ recieve the data that it needs to update
   * We can use the PARAMS with the PUT HTTP method to receive the ID of the item/ cat that we want to update
   */

  const { cat_name, cat_breed, cat_img } = request.body;
  const catId = request.params.cat_id;

  catModel.findByIdAndUpdate({ _id: catId }, { cat_name, cat_breed, cat_img }, { new: true }, (error, updatedCatData) => {

    response.json(updatedCatData);
  });


}

module.exports = {
  getCats,
  createCat,
  deleteCat,
  updateCat
}
