const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
  let card;
  let turn;

  beforeEach(() => {
   card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
   turn = new Turn('object', card);
    });

  it('should be a function', function() {

    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {

    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should store a guess', function() {

    expect(turn.guess).to.equal('object');
  });  

  it('should store a card object', function() {

    expect(turn.card).to.equal(card);
  });

  it('should be able to evaluate guesses as true or false', function()  {
    turn.evaluateGuess();

    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should be able to return true guesses as correct and false guesses as incorrect', function()  {
    turn.evaluateGuess();

    expect(turn.giveFeedback()).to.equal("correct!");
  });
});