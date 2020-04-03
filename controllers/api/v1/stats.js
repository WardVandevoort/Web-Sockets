const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const statSchema = new Schema({
    country: String,
    number: Number
})
const Stat = mongoose.model("Stat", statSchema);

const getAll = (req, res) => {
    Stat.find({}, (err, docs) => {
        if(!err){
            res.json({
                "status": "succes",
                "data": {
                    "stats": docs
                }
            });
        }
    })
}

const update = (req, res) => {
    res.json({
        "status": "succes",
    });
}

const add = (req, res) => {
    let stat = new Stat();
    stat.country = "France";
    stat.number = "8231";
    stat.save((err, doc) => {
        if(!err){
            res.json({
                "status": "succes",
                "data": {
                    "stats": doc
                }
            }); 
        }
    })
}

module.exports.getAll = getAll;
module.exports.update = update;
module.exports.add = add;