//Booz items

const mongoose = require("mongoose");

const boozSchema = new mongoose.Schema({
  rating: Number,
  details: Object
});

const Booz = mongoose.model("Booz", boozSchema);

module.exports = Booz;
