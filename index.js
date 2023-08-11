//using express module
const express = require("express");
//invoke express as app
const app = express();
//using cors
const cors = require("cors");

const bodyParser = require("body-parser");

const PORT = 8081;

//tell app to use cors, bodyparser
app.use(cors());
app.use(bodyParser.json());

//routes


app.use(function (req, res, next) {
  let error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.listen(PORT, function () {
  console.log("server started on " + PORT);
});
