function add(n1: number, n2: number) {
    return n1 + n2
}

function printResult(num: number): void {
    console.log(num)
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const r = n1 + n2
    cb(r)
}

printResult(add(1, 2))

let combinedValues: (a: number, b: number) => number

combinedValues = add

console.log(combinedValues(1, 2))

addAndHandle(1,2, (r) => {
    console.log(r)
})