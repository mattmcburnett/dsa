function miniMaxSum(arr) {
    const sorted = arr.sort((a,b) => a-b);
    let index = 0;
    let minSum = 0;
    let maxSum = 0;

    while (index < 4) {
        minSum += sorted[index];
        maxSum += sorted[sorted.length - (index + 1)];
        index ++;
    }
    console.log(`${minSum} ${maxSum}`)
}
