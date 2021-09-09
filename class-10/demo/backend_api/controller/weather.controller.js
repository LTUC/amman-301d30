'use strict';

// Files requirement 

const axios = require('axios');
require('dotenv').config();
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const Forecast = require('../models/weather.model');
const Cache = require('../helper/cache.helper');
let cacheObject = new Cache(); // the moment the server starts an instance of cache will be created

console.log('================');
console.log('Cache instance created');
console.log('================');

/** TODO:
 * 
 * 1- we want to cache the data only when we dont have that data in our cache
 *    - check if the cache has the lat and lon location saved
 *    - if not then request the data from weatherBit
 *    - after you get a response, save the modeled data into the cache
 *    - Send the data to the user
 * 2 - if the cache has any forecast data, then send the data from the cache 
 *    - check if teh cache has the lat and lon location
 *    - if it has it, then return that data from the cache directly 
 * 3- We want to delete the cache passing one day
 */


const getWeather = async (request, response) => {
  // const lat = request.query.lat;
  // const lon = request.query.lon;

  // destructing assignment
  const { lon, lat } = request.query;

  console.log('================');
  console.log('Check If cache has any forcast data');
  console.log('================');


  const dayInMilSec = 86400000;
  const oneDayPassed = (Date.now() - cacheObject.timeStamp) > dayInMilSec;
  if (oneDayPassed) {
    console.log('================');
    console.log('Cache Reset');
    console.log('================');
    cacheObject = new Cache();
  }

  const foundData = cacheObject.foreCast.find(location => location.lat === lat && location.lon === lon);
  if (foundData) { // check if the Cache has any foreCast data
    response.json(foundData.data);
  } else {
    console.log('No Cache data found');
    console.log('================');
    const weatherBitUrl = 'https://api.weatherbit.io/v2.0/forecast/daily';
    try {

      const weatherBitResponse = await axios.get(`${weatherBitUrl}?lat=${lat}&lon=${lon}&key=${WEATHER_API_KEY}`);

      // Model the data according to the ticket
      const data = weatherBitResponse.data.data.map((data1) => {

        return new Forecast(
          `Low of ${data1.low_temp}, high of ${data1.high_temp} with ${data1.weather.description} `,
          ` ${data1.datetime}`
        );
      });

      /**
       * save the data in the cache
       */

      console.log('================');
      console.log('Save data into cache');
      console.log('================');

      cacheObject.foreCast.push({
        "lat": lat,
        "lon": lon,
        "data": data
      });
      console.log('================');
      console.log(cacheObject);
      console.log('================');

      response.json(data);

    } catch (error) {
      return error
    }
  }
}

module.exports = getWeather;