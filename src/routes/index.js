const express = require("express");
const controller = require("../controllers/minesweeper");
const router = express.Router();

router.post("/", controller.createBoard);
router.post("/reveal/:id/:i/:j", controller.revealCell);

module.exports = router;
