const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;

  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    // add another card
    card4 = new Card(16, 'What kind of pizza is objectively the best?', ['Pepperoni', 'Supreme', 'Hawaiian'], 'Hawaiian');
   
    deck = new Deck([card1, card2, card3, card4]);
    round = new Round(deck);
    });

  it('should be a function', function() {

    expect(Round).to.be.a('function');
  });

  it('should be able to store the current card', function() {

    expect(round.currentCard).to.deep.equal(card1);
  });

  it('should have a takeTurn function', function() {
    round.takeTurn('sea otter');

    expect(round.takeTurn).to.be.a('function');
  });

  it('should increment turns after each guess', function() {
    round.takeTurn('sea otter');

    expect(round.turns).to.equal(1);
  });

  it('should update the current card after each guess', function()  {
    round.takeTurn('sea otter');

    expect(round.currentCard).to.deep.equal(card2);
  });

  it('should be able to store incorrect guesses and their IDs', function()  {
    round.takeTurn('crab');

    expect(round.incorrectGuesses).to.deep.equal(['1: crab']);
  });

it('should be able to calculate percent correct', function()  {
  round.takeTurn('capybara');
  round.takeTurn('giant african snail');
  round.takeTurn('sea slug');
  round.takeTurn('Hawaiian');

  expect(round.percentCorrect).to.equal('25.00%');
});

it('should be able to end a round', function()  {
  round.takeTurn('capybara');
  round.takeTurn('giant african snail');
  round.takeTurn('sea slug');
  round.takeTurn('Hawaiian');

  round.endRound();

  expect(round.endRound).to.be.a('function');
});

it('should be able to store a timer value', function()  {
  round.calculateTimer();

  expect(round.calculateTimer()).to.equal(round.timer);
});
});