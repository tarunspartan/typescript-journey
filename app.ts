function combine(i: number | string, j: number | string) {
    let result
    if (typeof i === 'number' && typeof j === 'number') {
        result = i + j
    } else {
        result = i.toString() + j.toString()
    }
    return result
}

const combinedAges = combine(30,12)
console.log(combinedAges)

const combinedNames = combine('Tarun','M')
console.log(combinedNames)