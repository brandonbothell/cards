"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
class Deck {
    /**
     * Creates a deck of 52 unique cards.
     */
    constructor() {
        /**
         * The size of the deck. Starts off at 52.
         */
        this.size = 52;
        /**
         * The cards in the deck.
         */
        this.cards = [];
        const types = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king'];
        const suits = ['spades', 'hearts', 'diamonds', 'clubs'];
        let pos = 0;
        types.forEach((type) => {
            suits.forEach((suit) => {
                this.cards.push(new _1.Card({ name: `${type} of ${suit}`, position: pos++ }));
            });
        });
    }
    /**
     * Pulls the card at `position` from the deck, removing it from the array. Returns the card.
     * @param position The 0-based position to pull the card from. Random if not specified.
     */
    pull(position = Math.floor(Math.random() * this.cards.length)) {
        const card = this.cards[position];
        this.cards.splice(position, 1);
        this.size--;
        return card;
    }
    /**
     * Inserts a card into the deck. Returns the card.
     * @param card The card to insert.
     * @param position The 0-based position to insert the card to. Random if not specified.
     */
    insert(card, position = Math.floor(Math.random() * this.cards.length)) {
        this.cards.splice(position, 0, card);
        card.position = position;
        this.size++;
        return card;
    }
    /**
     * Removes a card from the deck.
     * @param card The card to remove from the deck.
     */
    remove(card) {
        const index = this.cards.findIndex(value => card.suit === value.suit && card.value === value.value);
        if (index === -1) {
            return null;
        }
        this.cards.splice(index, 1);
        this.size--;
        return card;
    }
    /**
     * Shuffle the deck with Fisher-Yates algorithm.
     */
    shuffle(passes = 1) {
        for (let p = 0; p <= passes; p++) {
            for (let index = 0; index < this.cards.length; index++) {
                const switchIndex = Math.floor(Math.random() * (index + 1));
                const swap = this.cards[index];
                this.cards[switchIndex].position = swap.position;
                this.cards[index].position = switchIndex;
                this.cards[index] = this.cards[switchIndex];
                this.cards[switchIndex] = swap;
            }
            return this.cards;
        }
    }
}
exports.Deck = Deck;
