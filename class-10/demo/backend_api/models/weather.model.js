'user strict';

/**
 * This model file is used to handel all the data that is related to how the Forecast data will look like
 * All of the weather Classes
 */


class Forecast {
  constructor(description, date) {
    this.description = description;
    this.date = date;
  }
}

// Make this file visible to all other files
module.exports = Forecast;