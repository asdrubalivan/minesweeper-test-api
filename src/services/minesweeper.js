const db = require("../db");
const { generateRandomBoard } = require("../utils");

const createBoard = () => {
  const board = generateRandomBoard();
  const data = {
    isOver: false,
    started: Date.now(),
    finished: null,
    board
  };
  return db("games").insert(data, Object.keys(data));
};

module.exports = {
  createBoard
};
