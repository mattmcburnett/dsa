//Is the string a palindrome?

// checking to see if a word is a palindrome
// one pointer the beginning and one at the end
// pointers must be the same letter
// end when the pointers are at the same index or passed each other
// while loop?

// Time: O(n) Space: O(1)

function isPalindrome(string) {
    let j = string.length - 1;
    let i = 0;

    while (i <= j) {
      if (string[i] !== string[j]) return false;
      i++;
      j--;
    }

    return true;

}

