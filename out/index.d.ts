export type CardSuit = 'spades' | 'hearts' | 'clubs' | 'diamonds'
export type CardWorth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13
export type CardValue = 'ace' | 'two' | 'three' | 'four' | 'five' | 'six' | 'seven' | 'eight' | 'nine' | 'ten' | 'jack' | 'queen' | 'king'
export type CardOptions = {
  /**
   * The suit of the card. Lowercase, plural.
   */
  suit?: CardSuit,
  /**
   * The worth of the card, ace being 1, two being 2, etc.
   */
  worth?: CardWorth,
  /**
   * The numerical value of the card, e.g. 'ace'.
   */
  value?: CardValue,
  /**
   * The full name of the card, e.g. 'king of hearts'.
   */
  name?: string,
  /**
   * The position of the card in it's deck.
   */
  position?: number
}

export class Card {
  /**
   * The suit of the card. Lowercase, plural.
   */
  public suit: CardSuit

  /**
   * The worth of the card, ace being 1, two being 2, etc.
   */
  public worth: CardWorth

  /**
   * The numerical value of the card, e.g. 'ace'.
   */
  public value: CardValue

  /**
   * The full name of the card, e.g. 'king of hearts'.
   */
  public name: string

  /**
   * The 0-based position of the card in it's deck.
   */
  public position?: number


  /**
   * Creates a card with the specified options.
   * @param options Requires either a name, (e.g. 'two of diamonds') OR a suit and value|worth.
   */
  constructor (options: CardOptions)
}

export class Deck {
  /**
   * The size of the deck. Starts off at 52.
   */
  public size: number
  
  /**
   * The cards in the deck.
   */
  public cards: Card[]

  /**
   * Creates a deck of 52 unique cards.
   */
  constructor ()

  /**
   * Pulls the card at `position` from the deck, removing it from the array. Returns the card.
   * @param position The 0-based position to pull the card from. Random if not specified.
   */
  public pull (position?: number): Card

  /**
   * Inserts a card into the deck. Returns the card.
   * @param card The card to insert.
   * @param position The 0-based position to insert the card to. Random if not specified.
   */
  public insert (card: Card, position?: number): Card

  /**
   * Removes a card from the deck.
   * @param card The card to remove from the deck.
   */
  public remove (card: Card): Card

  /**
   * Shuffle the deck with Fisher-Yates algorithm.
   */
  public shuffle (passes?: number): Card[]
}
