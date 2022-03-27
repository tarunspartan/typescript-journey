function add(n1: number, n2: number, showResult: true, resultPhrase: string) {
    const r = n1 + n2
    if (showResult) {
        console.log(resultPhrase + r)
    } else {
        return r
    }
}

const number1 = 45, number2 = 5.9, showResult = true, resultPhrase = 'Result is: '

add(number1, number2, showResult, resultPhrase)