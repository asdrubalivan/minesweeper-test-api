const db = require("../db");
const { generateRandomBoard } = require("../utils");

const generateBoard = () => {
  const board = generateRandomBoard();
  const data = {
    isOver: false,
    started: Date.now(),
    finished: null,
    board
  };
  return db("games").insert(data);
};

module.exports = {
  generateBoard
};
