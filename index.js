const express = require("express");
const connectToMongoAtlas = require("./startup/db");
const app = express();
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const setPORT = async () => {
  await connectToMongoAtlas();
  const port = process.env.PORT || 8000;
  app.listen(port);
};

setPORT();
app.use(morgan("tiny"));
app.use(cookieParser());
require("./startup/routes")(app);
