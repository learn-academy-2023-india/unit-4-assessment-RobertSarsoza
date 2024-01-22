// UNIT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly. If you get stuck, please leave comments to help us understand your thought process.

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

// function fibonacci(n) {
//     if (n <= 1) {
//       return n;
//     } else {
//       return fibonacci(n - 1) + fibonacci(n - 2)
//     }
//   }
  // Example: Generate Fibonacci sequence up to the 6th number

//   test ('Generates Fib sequence up to 6th number', () => {
//     const fibonacciLength1 = 6
//     const fibonacciSequence = Array.from({ length: fibonacciLength1}, (blank, x) => fibonacci(x +1))
//     const expectedSequence = [1, 1, 2, 3, 5, 8]
//     expect (fibonacciSequence).toEqual(expectedSequence)
// })
// Expected output: [0, 1, 1, 2, 3, 5, 8]

// Example: Generate Fibonacci sequence up to the 10th number

// test('Generates Fib sequence up to 10th number', () => {
//     const fibonacciLength2 = 10;
//     const fibonacciSequence = Array.from({ length: fibonacciLength2}, (blank, x) => fibonacci(x +1));
//     const expectedSequence2 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
//     expect(fibonacciSequence).toEqual(expectedSequence2)
//   })
//   Expected output:  [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.
// lines 15-21***

    // Pseudo code:
// My last assessment showed that i needed to improve my pseudo code so I used ChatGPT to help me understand how pseudo code should look. I now see that its sort of just a skeleton of what the code would be. This first example is mainly just chatgpt because i needed the guidance.
    // Create function***
// function (length((represented by n))):
//     if length-n <= 0  
// return [the same number]
//      if length-n = 1
// return [0 index]
//     if length-n <= 2 
// return [0 index, 1 index, etc]

// Start with the first two numbers [0, 1] index**
// Continue until the desired length is achieved
// the nextNumber = array[lastIndex] + array[lastIndex - 1]
// array.push(nextNumber)
// making new length = length - 1
// then return array

    // generate test ***
// Set the desired length of the Fibonacci sequence
// Set fibonacciLength1 to 6 or 10
// Generate the Fibonacci sequence up to the specified length
// Create fibonacciSequence using Array.from with parameters:
//   - Object { length: fibonacciLength(#) }
//   - Callback function with parameters (blank, x):
//   - Calculate the Fibonacci number for each position (x + 1) using the fibonacci function
    
// Define the expected Fibonacci sequence
// Set expectedSequence to 
// [1, 1, 2, 3, 5, 8] or [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    
// Check if the generated sequence matches the expected sequence
// Assert that fibonacciSequence is equal to expectedSequence
    
// End of the test case

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

function karma(votes) {
    const {upVotes, downVotes} = votes
    const tally = upVotes - downVotes
    return tally
}
const votes1 = { upVotes: 13, downVotes: 2 }
const tally1 = karma(votes1)
// Expected output: 11

const votes2 = { upVotes: 2, downVotes: 33 }
const tally2 = karma(votes2)
// Expected output: -31

// b) Create the function that makes the test pass.
test ('Give final karma for votes1', () => {
    const votes1 = { upVotes: 13, downVotes: 2 }
    const result1 = karma(votes1)
    const expected1 = 11
    expect(result1).toEqual(expected1)
})
test('Give final karma for votes2', () => {
    const votes2 = { upVotes: 2, downVotes: 33 }
    const result2 = karma(votes2)
    const expected2 = -31
    expect(result2).toEqual(expected2)
});


// Pseudo code:
// // create a function called that takes an object with upVotes and downVotes.
// Extract upVotes and downVotes from the input object
// Calculate the tally by subtracting downVotes from upVotes.
// tally = upVotes - downVotes
// Return the calculated tally.

// votes1 = { upVotes: 13, downVotes: 2 }
// Call the karma function with votes1 and store the result in tally1.
// tally1 = karma(votes1)
// Display the result (tally1).

// votes2 = { upVotes: 2, downVotes: 33 }
// Call the karma function with votes2 and store the result in tally2.
// tally2 = karma(votes2)
// Display the result (tally2).

// Test 1: Give final karma for votes1
// function testGiveFinalKarmaForVotes1():
    // Define an object with 13 upVotes and 2 downVotes.
    // votes1 = { upVotes: 13, downVotes: 2 }
    // Call the karma function with votes1 and store the result in result1.
    // result1 = karma(votes1)
    // Set the expected result for votes1 to be 11.
    // expected1 = 11
    // Check if the result1 matches the expected1.
    // assertEqual(result1, expected1)

// Test 2: Give final karma for votes2
// function testGiveFinalKarmaForVotes2():
    // Define an object with 2 upVotes and 33 downVotes.
    // votes2 = { upVotes: 2, downVotes: 33 }
    // Call the karma function with votes2 and store the result in result2.
    // result2 = karma(votes2)
    // Set the expected result for votes2 to be -31.
    // expected2 = -31
    // Check if the result2 matches the expected2.
    // assertEqual(result2, expected2)

// Run the tests
