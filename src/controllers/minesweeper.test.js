const chai = require("chai");
const sinonChai = require("sinon-chai");
const sinon = require("sinon");
const { expect } = chai;

const { createBoard } = require("./minesweeper");

chai.use(sinonChai);

describe("Create Board", function() {
  let req, res;
  beforeEach(function() {
    req = {
      body: {}
    };
    res = {
      json: sinon.mock()
    };
  });
  it("should create a new board", function() {
    createBoard(req, res);
    expect(res.json).to.have.been.calledWith({
      id: 1,
      board: [
        [".", ".", ".", ".", "."],
        [".", ".", ".", ".", "."],
        [".", ".", ".", ".", "."],
        [".", ".", ".", ".", "."],
        [".", ".", ".", ".", "."]
      ],
      isOver: false,
      started: "2019-07-18T00:07:00.728Z",
      finished: null
    });
  });
});
