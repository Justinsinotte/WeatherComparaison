// "use strict";

// import the needed node_modules.

const express = require("express");
const morgan = require("morgan");
const PORT = process.env.PORT || 3001;
const { test } = require("./handlers");
const cors = require("cors");
const corsOptions = {
  origin: "https://api.openweathermap.org/",
};

express()
  // Below are methods that are included in express(). We chain them for convenience.
  // --------------------------------------------------------------------------------

  // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
  .use(cors(corsOptions))
  .use(morgan("tiny"))
  .use(express.json())
  .use(express.json())

  // Any requests for static files will go into the public folder
  .use(express.static("public"))

  // Nothing to modify above this line
  // ---------------------------------
  // add new endpoints here 👇
  .get("/api/test", test)
  // add new endpoints here ☝️
  // ---------------------------------
  // Nothing to modify below this line

  // this is our catch all endpoint.
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  .listen(PORT, () => console.log(`Listening on port ${PORT}`));
