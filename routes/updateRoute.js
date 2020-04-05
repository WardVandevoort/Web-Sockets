var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/updatestats', function(req, res, next) {
  res.render('update.html');
});

module.exports = router;
