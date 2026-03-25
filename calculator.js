let calcHistory = [];

function addition(a, b) {
    let result = a + b;
    addToHistory("addition", [num1, num2], result);
    return result
}
console.log(addition(2,4))

function subtraction(a, b) {
    let result = a - b;
    addToHistory("subtraction", [num1, num2], result);
    return result
}
console.log(subtraction(2,4))

function multiplication(a, b) {
    let result = a * b;
    addToHistory("multiplication", [a, b], result);
    return result;
}
console.log(multiplication(4,3))
console.log(multiplication(2,0))

function division(a, b) {
    let result = a / b;
    addToHistory("division", [a, b], result);
    if(num2 == 0 ) {
        return "Error: Cannot divide by Zero";
    } return result
}

console.log(division(4,2))
console.log(division(2,0))


function addToHistory(operation, operands, result) {
    calcHistory.push({
        operation: operation,
        operands: operands,
        result: result
    });
    return calcHistory
}
console.log(calcHistory)
