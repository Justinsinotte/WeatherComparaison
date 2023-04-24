// "use strict";

const express = require("express");
const morgan = require("morgan");
const PORT = process.env.PORT || 3001;
const { test } = require("./handlers");
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
  // .get("/", (req, res) => {
  //   res.json({ success: true, message: "Welcome to backend!" });
  // })

  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  .listen(PORT, () => console.log(`Listening on port ${PORT}`));
