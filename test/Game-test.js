const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Game', function() {
  let game;

  beforeEach(() => {
   game = new Game();
    });

  it('should be a function', function() {

    expect(Game).to.be.a('function');
  });

  it('should be able to create cards', function() {

    game.createCards();
 
    expect(game.cards).to.deep.equal(prototypeQuestions);
  });

  it('should be able to create a deck of cards', function() {

    game.createCards();
 
    expect(game.deck.cards).to.deep.equal(game.cards);
  });

  it('should be able to create a round using the deck', function() {

    game.createCards();
 
    expect(game.currentRound.deck).to.deep.equal(game.deck.cards);
  });
});