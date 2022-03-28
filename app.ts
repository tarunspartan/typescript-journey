function add(n1: number, n2: number) {
    return n1 + n2
}

function printResult(num:number): void {
    console.log(num)
}

printResult(add(1,2))

let combinedValues : (a : number, b: number) => number

combinedValues = add

console.log(combinedValues(1,2))