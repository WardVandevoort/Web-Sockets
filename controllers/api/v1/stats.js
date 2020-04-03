const getAll = (req, res) => {
    res.json({
        "status": "succes",
        "data": {
            "stats": []
        }
    });
}

const update = (req, res) => {
    res.json({
        "status": "succes",
    });
}

module.exports.getAll = getAll;
module.exports.update = update;