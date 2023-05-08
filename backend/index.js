// "use strict";

const express = require("express");
const morgan = require("morgan");
const PORT = process.env.PORT || 3001;
const { test, citiesGet } = require("./handlers");
// const cors = require("cors");
// const corsOptions = {
//   origin: "https://api.openweathermap.org/",
// };

express()
  // .use(cors(corsOptions))
  .use(morgan("tiny"))
  .use(express.json())
  .use(express.json())

  .use(express.static("public"))

  .get("/api/test", test)
  .get("/api/citiesGet", citiesGet)
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  .listen(PORT, () => console.log(`Listening on port ${PORT}`));
