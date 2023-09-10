const wordList = [
    "level",
    "deified",
    "radar",
    "civic",
    "javascript",
    "racecar",
    "kayak",
    "apple",
    "rotor",
    "madam",
    "banana",
    "noon",
    "refer",
    "engine",
    "rotor",
    "deleveled",
  ];

  const resultList = [
    true,
    true,
    true,
    true,
    false,
    true,
    true,
    false,
    true,
    true,
    false,
    true,
    true,
    false,
    true,
    true,
  ];

const isPalindrome = (string) => {

      let leftIndex = 0;
      let rightIndex = string.length - 1;

      while (leftIndex <= rightIndex) {
          if (string[leftIndex] !== string[rightIndex]) return false;
          leftIndex++;
          rightIndex--;
      }

      return true;
};

const palindromeList = (list) => {

    for (let i = 0; i < list.length; i++) {

        list[i] = isPalindrome(list[i])
    };

    return list;

}

const isCorrect = (myList, results) => {

    if (myList.length !== results.length) return false;

    for (let i = 0; i < myList.length; i++) {
        if (myList[i] != results[i]) return false;
    }

    return true;

}

console.log(isCorrect(palindromeList(wordList), resultList));

// console.log(palindromeList(wordList))

  const wordOne = "racecar";
  const wordTwo = 'bruh';
  const wordThree = 'noon';



// console.log(isPalindrome(wordThree))
