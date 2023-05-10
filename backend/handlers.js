// "use strict";
const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;
const { API, GEOAPI, ACCUAPI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

const test = async (req, res) => {
  try {
    // const response = await fetch(
    //   `https://api.openweathermap.org/data/2.5/weather?lat=45.5031824&lon=-73.5698065&appid=${API}&units=metric`
    // );

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=paris&appid=${API}&units=metric`
    );

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const citiesGet = async (req, res) => {
  try {
    // const response = await fetch(
    //   `https://api.openweathermap.org/data/2.5/weather?lat=45.5031824&lon=-73.5698065&appid=${API}&units=metric`
    // );

    const response = await fetch(
      `http://dataservice.accuweather.com/forecasts/v1/daily/1day/56186?apikey=${ACCUAPI}&metric=true`
    );

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// const citiesGet = async (req, res) => {
//   const url = "https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions";
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": GEOAPI,
//       "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);
//     res.send(result); // send the result back to the client
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error"); // send an error response
//   }
// };

module.exports = {
  test,
  citiesGet,
};
