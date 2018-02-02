'use strict'; // Whole-script strict mode syntax

function Deck(card) {
  this.card = card;


  this.info = function () {
    return this.card;
  }

}

function generateDeck() {
  var deck = [];

  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  var ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

  for (var s = 0; s < suits.length; s++) {
    for (var v = 0; v < ranks.length; v++) {
      //   {
      //     'suit': suits[s],
      //     'value': values[v],
      //     'reversed': false
      // }

      deck.push(new Card(suits[s], ranks[v]));
    }
  }

  return deck;
}

function shuffleDeck(deck) {
  var counter = deck.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random indexx§
    var index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    var temp = deck[counter];
    deck[counter] = deck[index];
    deck[index] = temp;
  }

  return deck;
}



function Card(suit, rank) {
  this.suit = suit;
  this.rank = rank;

  if (this.rank === "jack" ||
    this.rank === "queen" ||
    this.rank === "king") {
    this.value = 10;
  } else if (this.rank === "ace") {
    this.value = 11;
  } else {
    this.value = parseInt(this.rank)
  };

  this.reverse = true;

  this.info = function () {
    return this.suit + ' ' + this.rank + ' ' + this.reverse;
  }

  this.createHTML = function () {
    $('.deck').append(
      $('<div id="' + this.suit + '">')
      .addClass('spades-7'))
  }

  this.createHTML_card_image = function () {
    console.log("whatever")
    $('.player_area').append(
      $('<div class="playerscard">')
      .addClass(this.suit + "-" + this.rank)
    )

  }

  //function Hand(value, card) {
  //this.value = value;
  //this.card = card;

}