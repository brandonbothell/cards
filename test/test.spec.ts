import 'mocha'
import { expect } from 'chai'
import { Card, Deck } from '../src'

describe('Cards', () => {
  it('should not work with an invalid name', () => {
    let error

    try {
      const card = new Card({ name: 'thing of stuff' })
    } catch (err) {
      error = err.message
    }

    expect(error).to.equal('invalid value in name')

    try {
      const card = new Card({ name: 'ace of dogs' })
    } catch (err) {
      error = err.message
    }

    expect(error).to.equal('invalid suit in name')
  })

  it('should work with a valid name', () => {
    expect(new Card({ name: 'ace of spades' })).to.be.an.instanceOf(Card)
  })

  it('should parse values correctly', () => {
    const card = new Card({ name: 'ace of spades', position: 1 })

    expect(card.value).to.equal('ace')
    expect(card.suit).to.equal('spades')
    expect(card.position).to.equal(1)
  })
})

describe('Decks', () => {
  it('should have 52 cards', () => {
    const deck = new Deck()

    expect(deck.size).to.equal(52)
    expect(deck.cards.length).to.equal(52)
  })

  it('should pull cards correctly', () => {
    const deck = new Deck()
    const card = deck.cards[0]

    deck.pull(0)

    expect(deck.size).to.equal(51)
    expect(deck.cards[0]).to.not.equal(card)
  })

  it('should insert cards correctly', () => {
    const deck = new Deck()
    const card = new Card({ name: 'ace of spades' })

    deck.insert(card, deck.size)

    expect(deck.size).to.equal(53)
    expect(deck.cards[deck.size - 1]).to.equal(card)
  })

  it('should remove cards correctly', () => {
    const deck = new Deck()
    const card = new Card({ name: 'ace of spades' })

    deck.remove(card)

    expect(deck.size).to.equal(51)
    expect(deck.cards.findIndex(card => card.name === 'ace of spades')).to.equal(-1)
  })
})
