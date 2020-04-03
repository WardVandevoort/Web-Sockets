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
    let country = req.body.country;
    let number = req.body.number;
    res.json({
        "status": "succes!",
        "number": number,
        "country": country
    });
    Stat.findOneAndUpdate({"country": country}, 
    {"number": number}).then(doc => {
        res.json(doc);
    }).catch(err => {
        res.json(err);
    })
    
            
    
    /*res.json({
                "status": "succes",
                "data": {
                    "stats": docs
                }
            });*/
        
    
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