const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const statSchema = new Schema({
    country: String,
    number: Number
})
const Stat = mongoose.model("Stat", statSchema);

module.exports = Stat;