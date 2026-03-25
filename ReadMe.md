```markdown
# JavaScript Calculator

A simple JavaScript-based calculator that performs basic arithmetic operations and tracks calculation history using structured objects.

## Features

- Basic arithmetic operations:
  - Addition
  - Subtraction
  - Multiplication
  - Division (with zero handling)
  - Exponentiation
  - Square root
- History tracking stored as structured objects
- Clean and reusable function-based design

---

## Project Structure

```

calculator/
│── index.js
│── README.md

````

---

## How It Works

Each calculation is performed using a dedicated function. After computing the result, the operation is stored in a history array as an object.

### History Format

Each entry in the history array follows this structure:

```js
{
  operation: "add",
  operands: [a, b],
  result: x
}
````

Example:

```js
[
  { operation: "add", operands: [2, 4], result: 6 },
  { operation: "divide", operands: [4, 0], result: "Error: Cannot divide by zero" }
]
```

---

## Functions

### `addition(num1, num2)`

Returns the sum of two numbers.

### `subtraction(num1, num2)`

Returns the difference between two numbers.

### `multiplication(num1, num2)`

Returns the product of two numbers.

### `division(num1, num2)`

Returns the quotient of two numbers.
Handles division by zero by returning an error message.

### `raisedToPower(num1, num2)`

Returns `num1` raised to the power of `num2`.

### `squareRoot(num)`

Returns the square root of a number.

---

## History Tracking

All operations are stored in the `calcHistory` array using the helper function:

```js
saveToHistory(operation, operands, result);
```

This ensures:

* Consistent data structure
* Easy debugging
* Future extensibility (UI, persistence, analytics)

---

## Example Usage

```js
addition(2, 4);
division(10, 2);
squareRoot(9);

console.log(calcHistory);
```

---

## Running the Project

1. Ensure you have Node.js installed
2. Run the file:

```bash
node index.js
```

---

## Future Improvements

* Add a user interface (web or CLI)
* Include timestamps for each operation
* Add unique IDs for history entries
* Implement undo/redo functionality
* Persist history using local storage or a database

---

## License

This project is for educational purposes.

```
```
