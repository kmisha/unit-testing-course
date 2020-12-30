class NumbersValidator {
    constructor() {}

    isEvenNumber(number) {
        if (!isNumber(number)) {
            throw new TypeError(`${number} should be a number`)
        }

        return !!!(number % 2)
    }

    getEvens(arr) {
        if (Array.isArray(arr) && arr.every(isNumber)) {
            return arr.filter(this.isEvenNumber)
        } else {
            throw new TypeError(`${arr} is not array of numbers`)
        }
    }
}

function isNumber(n) {
    return typeof n === 'number'
}

module.exports = { NumbersValidator }
