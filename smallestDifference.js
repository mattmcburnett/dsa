function smallestDifference(arrayOne, arrayTwo) {

    const sums = {};
    let smallest = Infinity;

    for (let i = 0; i < arrayOne.length; i++) {
      for (let j = 0; j < arrayTwo.length; j++) {
        const diff = Math.abs(arrayOne[i] - arrayTwo[j])
        sums[diff] = [arrayOne[i], arrayTwo[j]]

        if (diff < smallest) {
          smallest = diff
        }
      }
    }
    return sums[smallest];
  }
