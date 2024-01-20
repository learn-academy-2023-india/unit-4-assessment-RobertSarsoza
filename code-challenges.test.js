// UNIT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly. If you get stuck, please leave comments to help us understand your thought process.

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2)
    }
  }
  // Example: Generate Fibonacci sequence up to the 6th number

  test ('Generates Fib sequence up to 6th number', () => {
    const fibonacciLength1 = 6
    const fibonacciSequence = Array.from({ length: fibonacciLength1}, (_, i) => fibonacci(i +1))
    const expectedSequence = [1, 1, 2, 3, 5, 8]
    expect (fibonacciSequence).toEqual(expectedSequence)
})
// Expected output: [0, 1, 1, 2, 3, 5, 8]

// Example: Generate Fibonacci sequence up to the 10th number

test('Generates Fib sequence up to 10th number', () => {
    const fibonacciLength2 = 10;
    const fibonacciSequence = Array.from({ length: fibonacciLength2}, (_, i) => fibonacci(i +1));
    const expectedSequence2 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(fibonacciSequence).toEqual(expectedSequence2)
  })
//   Expected output:  [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.
// line 15-21

Pseudo code:

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// b) Create the function that makes the test pass.

// Pseudo code:
