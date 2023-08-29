/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const set = new Set();
    for (let num of nums) {
        set.add(num);
    };
    if (set.size !== nums.length) return true;
    return false;
};