/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = (root, targetSum) => {
    const check = (current, sum) => {
        if (!current)  return 0
        sum += current.val

        if (current.left === null && current.right === null)    return sum === targetSum;
        return check(current.left, sum) || check(current.right, sum)
    }

    return check(root, 0)
}

/**
 *  @Runtime: {84 ms}
 *  @Memory: {42.6 MB}
 */