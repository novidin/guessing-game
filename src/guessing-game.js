class GuessingGame {
  constructor() {
    this.min = 0;
    this.max = 0;
    //this.result = 0;
    this.array = [];
    this.index = 0;
  }

  setRange(min, max) {
    // this.min = min;
    // this.max = max;
    for(let i = 0; i < max; i++) {
      this.array.push(i)
    }
    this.max = this.array.length;
  }

  guess() {
    this.index = Math.ceil((this.min + this.max) / 2)
    return this.array[this.index];
  }

  lower() {
    this.max = this.index - 1;
  }

  greater() {
    this.min = this.index;
  }
}

module.exports = GuessingGame;
