import { Card } from '.'

export class Deck {
  /**
   * The size of the deck. Starts off at 52.
   */
  public size: number = 52

  /**
   * The cards in the deck.
   */
  public cards: Card[] = []

  /**
   * Creates a deck of 52 unique cards.
   */
  constructor () {
    const types = [ 'ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king' ]
    const suits = [ 'spades', 'hearts', 'diamonds', 'clubs' ]

    types.forEach((type, index) => {
      suits.forEach((suit, index1) => {
        this.cards.push(new Card({ name: `${type} of ${suit}`, position: index + index1 }))
      })
    })
  }

  /**
   * Pulls the card at `position` from the deck, removing it from the array. Returns the card.
   * @param position The 0-based position to pull the card from. Random if not specified.
   */
  public pull (position: number = Math.floor(Math.random() * this.cards.length)) {
    const card = this.cards[position]
    this.cards.splice(position, 1)
    this.size--

    return card
  }

  /**
   * Inserts a card into the deck. Returns the card.
   * @param card The card to insert.
   * @param position The 0-based position to insert the card to. Random if not specified.
   */
  public insert (card: Card, position: number = Math.floor(Math.random() * this.cards.length)) {
    this.cards.splice(position, 0, card)
    card.position = position
    this.size++

    return card
  }

  /**
   * Removes a card from the deck.
   * @param card The card to remove from the deck.
   */
  public remove (card: Card) {
    const index = this.cards.findIndex(value => card.suit === value.suit && card.value === value.value)

    if (index === -1) {
      return null
    }

    this.cards.splice(index, 1)
    this.size--

    return card
  }
}
