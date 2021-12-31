/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = nums => {
    if (!nums.length) return null;

    const index = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[index]);
    root.left = sortedArrayToBST(nums.slice(0, index));
    root.right = sortedArrayToBST(nums.slice(index + 1));

    return root;
}

/**
 *  @Runtime: {84 ms}
 *  @Memory: {42 MB}
 */