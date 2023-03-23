const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {
    let card1;
    let card2;
    let card3;
    let deck;
  
    beforeEach(() => {
      card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
     
      deck = new Deck([card1, card2, card3]);
      });

  it('should be a function', function() {

    expect(Deck).to.be.a('function');
  });

  it('should be able to store card objects', function() {

    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it('should be able to know how many cards are in the deck', function()  {
    deck.countCards();

    expect(deck.countedCards).to.deep.equal(3);
  });
});