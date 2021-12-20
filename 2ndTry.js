'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

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
  }
//checker

//Game