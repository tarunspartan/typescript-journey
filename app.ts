type Combinable = number | string
type ConversionDescriptor = 'as-number' | 'as-text'

function combine(i: Combinable, j: Combinable, resultConversion: ConversionDescriptor) {
    let result
    if (typeof i === 'number' && typeof j === 'number' || resultConversion === 'as-number') {
        result = +i + +j
    } else {
        result = i.toString() + j.toString()
    }
    return result
}

const combinedAges = combine(30, 12, 'as-number')
console.log(combinedAges)

const combinedStringAges = combine('30', '12', 'as-number')
console.log(combinedStringAges)

const combinedNames = combine('Tarun', 'M', 'as-text')
console.log(combinedNames)