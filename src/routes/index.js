const express = require("express");
const controller = require("../controllers/minesweeper");
const router = express.Router();

router.get("/:id", controller.getBoard);
router.post("/", controller.createBoard);
router.post("/reveal/:id/:i/:j", controller.revealCell);

module.exports = router;
