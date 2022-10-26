class GuessingGame {
<<<<<<< HEAD
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
=======
    constructor() {
        this.result = 0;
        this.min = 0;
        this.max = 0;
     }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.result = this.min + Math.ceil((this.max - this.min) / 2);
        return this.result;
>>>>>>> 82711eb77fc3c111f454a75f3aadebcdef38987e
    }
    this.max = this.array.length;
  }

<<<<<<< HEAD
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
=======
    lower() {
        this.max = this.result;
    }

    greater() {
        this.min = this.result;
    }
>>>>>>> 82711eb77fc3c111f454a75f3aadebcdef38987e
}

module.exports = GuessingGame;

