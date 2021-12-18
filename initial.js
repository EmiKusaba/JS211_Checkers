'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

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

class Board {
  constructor() {
    this.grid = []
    for (i = 0; i < 8; i++) {
      let row = []
      for (j = 0; j < 8; j++) {
        row.push[null]
      }
      this.grid.push(row)
    }
  }
}
