// Given two non-empty arrays of integers, write a function that determines
// whether the second array is a subsequence of the first one.
// A subsequence of an array is a set of numbers that aren't necessarily adjacent
// in the array but that are in the same order as they appear in the array. For
// instance, the numbers

// Time: O(n) Space O(1)

function isValidSubsequence(array, sequence) {

    let i = 0;

    for (let num of array) {
      if(num === sequence[i]) {
        i++;
      }
      if (i === sequence.length) return true;
    }
    return false;
  }
