
// Write a function that takes in a Binary Search Tree (BST) and a target integer
// value and returns the closest value to that target value contained in the BST. You can assume that there will only be one closest value.

// record diff
// if a node === target, return that val
// traverse the tree and check the difference between the target and the node val
// if diff is less than current diff or diff is null, set current node val as diff

// Time: O(n) Space: O()

function findClosestValueInBst(tree, target) {
    let diff = null;
    let closest;
    const stack = [tree];

    while (stack.length) {
      const curr = stack.pop();
      if (curr.value === target) return curr.value;
      const currDiff = Math.abs(curr.value - target);
      if(currDiff < diff || diff === null) {
        diff = currDiff;
        closest = curr.value;
      }
      if (curr.right !== null) stack.push(curr.right);
      if (curr.left !== null) stack.push(curr.left);
    }

    return closest;

}

class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
