function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0;
    let orangeCount = 0;

    for (let apple of apples) {
        // console.log('s === ', s)
        // console.log(a + apple)
        if (s <= a + apple && a + apple <= t) {
            appleCount++;
        }
    }
    console.log(appleCount);

    for (let orange of oranges) {
        if (s <= b + orange && b + orange <= t) orangeCount++;
    }
    console.log(orangeCount)
}
