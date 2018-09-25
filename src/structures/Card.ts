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

const worths = new Map([
  ['ace', 1],
  ['two', 2],
  ['three', 3],
  ['four', 4],
  ['five', 5],
  ['six', 6],
  ['seven', 7],
  ['eight', 8],
  ['nine', 9],
  ['ten', 10],
  ['jack', 11],
  ['queen', 12],
  ['king', 13]
])

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
   * @param options Requires either a name (e.g. 'two of diamonds') OR a suit and value|worth.
   */
  constructor (options: CardOptions) {
    if (options.name) {
      this.name = options.name.toLowerCase()
      this.value = this.name.substring(0, this.name.indexOf(' ')) as CardValue
      this.suit = this.name.substring(this.name.indexOf('of ') + 3) as CardSuit
      this.worth = worths.get(this.value) as CardWorth
      this.position = options.position !== undefined ? options.position : null

      const keys = worths.keys()

      while (true) {
        const next = keys.next()

        if (next.value === this.value) {
          break
        }

        if (next.done === true) {
          throw new Error('invalid value in name')
        }
      }

      if (this.suit !== 'clubs' && this.suit !== 'diamonds' && this.suit !== 'hearts' && this.suit !== 'spades') {
        throw new Error('invalid suit in name')
      }

      return this
    }

    if (options.suit) this.suit = options.suit
    else throw new Error('no suit')

    if (options.value) this.value = options.value
    else if (!options.worth) throw new Error('no value/worth')

    this.worth = options.worth
    this.position = options.position ? options.position : null

    if (this.worth && !this.value) {
      const values = worths.keys()

      while (true) {
        const next = values.next()

        if (worths.get(next.value) === this.worth) {
          this.value = next.value as CardValue
          break
        }

        if (next.done === true) {
          throw new Error('invalid worth')
        }
      }
    }

    if (this.value && !this.worth) {
      this.worth = worths.get(this.value) as CardWorth
    }

    if (this.suit && this.value) {
      this.name = `${this.value} of ${this.suit}`
    }
  }
}
