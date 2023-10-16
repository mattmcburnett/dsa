function nonConstructibleChange(coins) {
    const sorted = coins.sort((a, b) => a - b);
    console.log(sorted)
    let change = 0;

    for (let coin of sorted) {
      if (coin > change + 1) return change + 1;
      change += coin;
    }

    return change + 1;
  }
