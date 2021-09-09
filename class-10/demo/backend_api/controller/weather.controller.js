'use strict';

// Files requirement 

const axios = require('axios');
require('dotenv').config();
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const Forecast = require('../models/weather.model');

const getWeather = async (request, response) => {
  // const lat = request.query.lat;
  // const lon = request.query.lon;

  // destructing assignment
  const { lon, lat } = request.query;

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

    response.json(data);
  } catch (error) {
    response.json(error.data);
  }


  // in order to send a request with axios, we need a URL for weatherbit
}

module.exports = getWeather;