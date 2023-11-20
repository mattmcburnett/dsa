function birthdayCakeCandles(candles) {
    let tallest;
    let tallestCount = 0;

    for (let height of candles) {
        if (height === tallest) tallestCount++;
        if (height > tallest || !tallest) {
            tallest = height;
            tallestCount = 1;
        }
    }
    return tallestCount;
}
