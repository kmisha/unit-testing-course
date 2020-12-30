const {NumbersValidator} = require('./numbers_validator')
const {expect} = require('chai')

describe(`isEventNumber positive scenarios`, () => {
    let validator;
    beforeEach(() => validator = new NumbersValidator())
    afterEach(() => validator = null)

    it(`should return true if number is even`, () => {
        expect(validator.isEvenNumber(4)).to.be.eq(true)
    })

    it(`should return false if number is odd`, () => {
        expect(validator.isEvenNumber(5)).to.be.eq(false)
    })

})
