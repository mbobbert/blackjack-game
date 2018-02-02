'use strict'; // Whole-script strict mode syntax

function Deck (card) {
	this.card = card;


	this.info = function() {
		return this.card;
    }



}

function Card(suit, rank, value, reverse, x, y) {
    this.suit = suit;
    this.rank = rank;
    this.value = value;
    this.reverse = reverse;
    this.x = x;
    this.y = y;

    this.info = function() {
		return this.suit + ' ' + this.rank + ' ' + this.reverse;
    }

    this.createHTML = function() {
		$('.deck').append(
            $('<div id="' + this.suit + '">')
            .addClass('spades-7'))
            .css('left', this.x * 64 + 'px')
            .css('top', this.y * 64 + 'px')
        }

}

