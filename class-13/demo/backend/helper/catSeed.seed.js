'use strict';


const catModel = require('../models/cat.model');

const seedCat = () => {

  /** creating a new instance of the Model data, this data will be saved in the MongoDB 
  * Collection
  */
  const firstCat = new catModel({
    cat_name: 'Mishmish',
    cat_breed: 'Orange Tabby',
    cat_img: "https://pulpbits.net/wp-content/uploads/2014/01/Orange-tabby.jpg"
  });

  // save the cats data in the DB
  firstCat.save();

  const secondCat = new catModel({
    cat_name: 'Boogie',
    cat_breed: 'Calico',
    cat_img: "https://pixfeeds.com/images/17/442620/1200-484713024-turkish-angora-calico-cat.jpg"
  });

  secondCat.save();

  console.log("Data seeded! 👍");
}

module.exports = seedCat;