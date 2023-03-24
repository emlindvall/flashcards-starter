const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.currentCard = deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
    this.percentCorrect = "";
    this.guess = "";
    this.dateOn = "";
    this.timeOn = "";
    this.dateOff = "";
    this.timeOff = "";
    this.timer = "";
  }
  returnCurrentCard() {
    this.currentCard = this.deck[this.turns];
    return this.currentCard;
  }
  takeTurn(guess)  {
    var currentTurn = new Turn(guess, this.currentCard);
    this.turns = (this.turns +1);
    if (currentTurn.evaluateGuess() === false) {
      this.incorrectGuesses.push(`${this.currentCard.id}: ${currentTurn.guess}`);
    }
    
    var feedback = currentTurn.giveFeedback();
    this.calculatePercentCorrect();
    this.returnCurrentCard();
    return feedback;
  }
  calculatePercentCorrect() {
    var decimal = ((this.turns - this.incorrectGuesses.length) / this.turns);
    var percent = (decimal * 100).toFixed(2);
    this.percentCorrect = `${percent}%`;
  }
  calculateTimer() {
    var difference = (this.timeOff - this.timeOn);
    var milliseconds = difference; 
    var hours = Math.floor(milliseconds / 1000 / 60 / 60);
    milliseconds -= (hours * 1000 * 60 * 60);
    var minutes = Math.floor(milliseconds / 1000 / 60 )
    milliseconds -= (minutes * 1000 * 60);
    var seconds = Math.floor(milliseconds / 1000)
    milliseconds -= (seconds * 1000);
    this.timer = (`${minutes} minutes and ${seconds} seconds!`)
    return this.timer;
  }
  endRound()  {
    this.dateOff = new Date;
    this.timeOff = this.dateOff.getTime();
    this.calculateTimer();
    var stats = (`**Round over!** You answered ${this.percentCorrect} of the questions correctly in ${this.timer}!`)
    console.log(`${stats}`);
  }
}

module.exports = Round;