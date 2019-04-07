/**
 *
 * 001 - Sum All Numbers In a Range
 *
 * @param {Array} arr
 */

// Pass an array of two numbers to the function. Return the sum of those two numbers
// plus the numbers in between them

// Function starter code
function sumAll(arr) {
  return 1;
}

sumAll([1, 4]);

// Use Math.max() to find the maximum value of two numbers.
// Use Math.min() to find the minimum value of two numbers.

// Remember to that you must add all the numbers in between so this would require
// a way to get those numbers.

let sumAll = arr => {
  let summed = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    summed += i;
  }
  return summed;
};

sumAll([1, 4]);

// loop from min of arr to max of arr, keep running total
// return total
