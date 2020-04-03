const Stat = require("../../../models/Stat");

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
    stat.country = req.body.country;
    stat.number = req.body.number;
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