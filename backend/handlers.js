// "use strict";
const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;
const { API } = process.env;
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
      `https://api.openweathermap.org/data/2.5/weather?q=paris&appid=${API}`
    );

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  test,
};
