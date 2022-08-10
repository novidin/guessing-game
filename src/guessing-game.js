class GuessingGame {
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
    }

    lower() {
        this.max = this.result;
    }

    greater() {
        this.min = this.result;
    }
}

module.exports = GuessingGame;

