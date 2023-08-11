//connect to mongo db and mongoose

//odm, make queries more efficiently
const mongoose = require("mongoose");
mongoose.set("debug", true);
//set promises to es library, async functions
mongoose.Promise = Promise;

mongoose.connect("mongodb://localhost/Warbler", {
  keepAlive: true,
  useMongoClient: true,
});
