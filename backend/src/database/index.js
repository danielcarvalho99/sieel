const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/testesieel", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true},
  ()=>console.log("Connected to mongo"));

module.exports = mongoose;