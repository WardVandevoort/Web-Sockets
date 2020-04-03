const express = require("express");
const router = express.Router();
const statsController = require("../../../controllers/api/v1/stats");

router.get("/", statsController.getAll);

router.put("/updatestats", statsController.update);

module.exports = router;