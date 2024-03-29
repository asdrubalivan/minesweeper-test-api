# minesweeper-test-api

## Data storage

We are going to use the following "Games** table in a postgresql database to store game data

* id: Integer — Game ID — Primary key
* board: JSONB field formed by a two-dimension array for which every element represents a field in the board as follows:

```json
[
  [{"isMine": true, "isRevealed": false, "hasFlag": false}, ..., {"isMine": true, "isRevealed": true, "hasFlag": false}],
  [{"isMine": true, "isRevealed": false, "hasFlag": false}, ..., {"isMine": true, "isRevealed": true, "hasFlag": false}],
  [{"isMine": true, "isRevealed": false, "hasFlag": false}, ..., {"isMine": true, "isRevealed": true, "hasFlag": false}],
  [{"isMine": true, "isRevealed": false, "hasFlag": false}, ..., {"isMine": true, "isRevealed": true, "hasFlag": false}],
  [{"isMine": true, "isRevealed": false, "hasFlag": false}, ..., {"isMine": true, "isRevealed": true, "hasFlag": false}]
]
```

In the aforementioned array the i, j index of each element corresponds to a i, j cell within the game board

Where:
  * isMine indicates whether a cell is a mine or not
  * isRevealed indicates whether a cell has been revealed or not
  * hasFlag if the cell has been flagged

## Endpoints

### GET /minesweeper/{id}

Get current status of board where:

* id: is the game id

Returns:

In case of success:

* status: The status code of the response
* error: Whether or not there's an error
* data: Game data
* data.id: Game id
* data.board: Current board status in which:
1. "."  means that a cell has not been revelead
1. A number  means that a cell has been revealed and it contains the number of surrounding mines 
1. "*"  means that a cell is a mine
1. "?"  means that a cell has a flag on it
* data.isOver: Whether the game is over or not
* data.started: When was the game started
* data.finished: When was the game finished (null if it's not finished yet)

```json
{
  "status": 200,
  "error": false,
  "data" : {
    "id": 1,
    "board": [
      [".", ".", ".", ".", "1"],
      [".", ".", ".", ".", "0"],
      [".", ".", ".", ".", "0"],
      [".", ".", ".", ".", "1"],
      [".", ".", ".", ".", "0"]
    ],
    "isOver": false,
    "started": "2019-07-18T00:07:00.728Z",
    "finished": null
  }
}
```

In case of game not being found


```json
{
  "status": 404,
  "error": true,
  "message": "Game not found"
}
```

### POST /minesweeper/

Creates a new minesweeper game. It returns a response like the following where the id is the new id of the game

```json
{
  "status": 200,
  "error": false,
  "data": {
    "id": 2,
    "board": [
      [".", ".", ".", ".", "."],
      [".", ".", ".", ".", "."],
      [".", ".", ".", ".", "."],
      [".", ".", ".", ".", "."],
      [".", ".", ".", ".", "."]
    ],
    "isOver": false,
    "started": "2019-07-18T00:07:00.728Z",
    "finished": null
  }
}
```

### POST /minesweeper/{id}/reveal/{i}/{j}

Reveals a new cell in the board

Query params:

* id: game id
* i: x coordinate in the board
* j: y coordinate in the board


```json
{
  "status": 200,
  "error": false,
  "data" : {
    "id": 1,
    "board": [
      [".", ".", ".", ".", "1"],
      [".", ".", ".", ".", "0"],
      [".", ".", ".", ".", "0"],
      [".", ".", ".", ".", "0"],
      [".", ".", ".", ".", "1"]
    ],
    "isOver": false,
    "started": "2019-07-18T00:07:00.728Z",
    "finished": null
  }
}
```
