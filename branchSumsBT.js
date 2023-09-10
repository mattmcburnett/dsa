
// Write a function that takes in a Binary Tree and returns a list of its branch
// sums ordered from leftmost branch sum to rightmost branch sum.

// A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree
// branch is a path of nodes in a tree that starts at the root node and ends at
// any leaf node.


// depth first recursive traversal
// declare array of sums and feed into helper
// maintain a sum var and add values to it as you go deeper and pass into helper
// when you hit a leaf, push the sum to the array

const calcSums = (root, sum, sums) => {
    if (root === null) return
    const newSum = sum + root.value;
    if (!root.left && ! root.right) sums.push(newSum);
    if (root.left) calcSums(root.left, newSum, sums);
    if (root.right) calcSums(root.right, newSum, sums);
}

function branchSums(root) {
    sums = []
    calcSums(root, 0, sums);
    return sums;
}
