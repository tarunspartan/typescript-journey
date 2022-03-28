let userInput: unknown
let userName: string

userInput = 5
userInput = "t"

if (typeof userInput === 'string') {
    userName = userInput
}

function generateError(message: string, code: number): never {
    throw { message, errorCode: code }
}

generateError('error occured', 500)