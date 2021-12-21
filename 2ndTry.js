'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//checker
class Checker {
  constructor(isWhite) {
    this.isWhite = isWhite
    if (isWhite) {
      this.symbol = String.fromCharCode(0x125CB)
    } else {
      this.symbol = String.fromCharCode(0x125CF)
    }
  }
}


//board
class Board {
  constructor() {
    this.grid = []
    //   [
    //     [null, null, null, null, null, null, null, null],
    //     [null, null, null, null, null, null, null, null],
    //     [null, null, null, null, null, null, null, null],
    //     [null, null, null, null, null, null, null, null],
    //     [null, null, null, null, null, null, null, null],
    //     [null, null, null, null, null, null, null, null],
    //     [null, null, null, null, null, null, null, null],
    //     [null, null, null, null, null, null, null, null]
    // ]
    for (let i = 0; i < 8; i++) {
      let row = []
      for (let j = 0; j < 8; j++) {
        row.push[null]
      }
      this.grid.push(row)
    }
  }

  createCheckers() {
    const whitePositions = [[0, 1], [0, 3], [0, 5], [0, 7],
    [1, 0], [1, 2], [1, 4], [1, 6],
    [2, 1], [2, 3], [2, 5], [2, 7]];

    const blackPositions = [[5, 0], [5, 2], [5, 4], [5, 6],
    [6, 1], [6, 3], [6, 5], [6, 7],
    [7, 0], [7, 2], [7, 4], [7, 6]];


    for (let i = 0; i < whitePositions.length; i++) {
      let white = new Checker(true)
      let pos = whitePositions[i]
      let row = pos[0]
      let col = pos[1]
      this.grid[row][col] = white
    }
    for (let i = 0; i < blackPositions.length; i++) {
      let black = new Checker(false)
      let pos = blackPositions[i]
      let row = pos[0]
      let col = pos[1]
      this.grid[row][col] = black
    }
  }
}
//Game
class Game {
  constructor() {
    this.board = new Board()
  }
  printBoard() {
    let string = " 0 1 2 3 4 5 6 7\n"
    for (let i = 0; i < this.board.grid.length; i++) {
      let row = this.board.grid[i]
      let rowString = `${i} `
      for (let j = 0; j < row.length; j++) {
        const val = row[j]
        if (val) {
          rowString += `${val.symbol} `
        } else {
          rowString += "  "
        }
      }
      rowString += "\n"
      string += rowString
    }
    console.log(string)
  }
  start() {
    this.board.createCheckers()
    this.printBoard()
  }
}
let game = new Game()
game.start()