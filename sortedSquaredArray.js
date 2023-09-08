
// Write a function that takes in a non-empty array of integers that are sorted
// in ascending order and returns a new array of the same length with the squares
// of the original integers also sorted in ascending order.

function sortedSquaredArray(array) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
      let squared = array[i] * array[i];
      console.log(squared)
      newArray.push(squared);
    };


    const quickSort = (newArray) => {
      if (newArray.length <= 1) {
        return newArray;
      }

      let pivot = newArray[0];
      let leftArr = [];
      let rightArr = [];

      for (let i = 1; i < newArray.length; i++) {
        if (newArray[i] < pivot) {
          leftArr.push(newArray[i]);
        } else {
          rightArr.push(newArray[i]);
        }
      }

      return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
    };

    return quickSort(newArray);
  }
