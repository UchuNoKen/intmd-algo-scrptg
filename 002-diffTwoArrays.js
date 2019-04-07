/**
 *
 *
 * 002 - Diff Two Arrays
 *
 * @param {Array} arr1
 * @param {Array} arr2
 *
 */

// Return the elements from two arrays that are not contained in the other

// Function starter code
function diffArray(arr1, arr2) {
  var newArr = [];
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// my arrow function solution
let diffArray = (arr1, arr2) => {
  return arr1.concat(arr2).filter(element => !arr1.includes(element) || !arr2.includes(element));
};

// declarative solution
function diffArray(arr1, arr2) {
  return arr1.filter(el => !arr2.includes(el)).concat(arr2.filter(el => !arr1.includes(el)));
}

// my declarative solution
let diffArray = (arr1, arr2) => {
  return [...diffArrElement(arr1, arr2), ...diffArrElement(arr2, arr1)];

  function diffArrElement(a, b) {
    return a.filter(element => b.indexOf(element) === -1);
  }
};

// Pass in array 1 and array 2 to diffArray
// return an array where
// the diffArrElement helper fuction is called
// it runs with arr1 as the first param and arr2 as the second
// it filters a for values not in b, returns those elements as first spread values
// it filters b for values not in a, returns those elements as second set of spread values
