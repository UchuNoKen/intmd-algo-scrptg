/**
 *
 * 003 - Seek and destroy
 *
 * @param {Array} arr
 *
 */

// Function starter code
function destroyer(arr) {
  // Remove all the values
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Basic solution
let destroyer = arr => {
  let args = Array.prototype.slice.call(arguments);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean); // Boolean is a filter for any null's created by the 'delete' operator
};

// arrow function solution
let destroyer = arr => {
  let args = Array.from(arguments).slice(1);
  return arr.filter(target => !args.includes(target));
};

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// concise ES6 solution

let destroyer = (arr, ...args) => arr.filter(target => !args.includes(target));
