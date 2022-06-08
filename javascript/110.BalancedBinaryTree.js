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
 * @return {boolean}
 */
const isBalanced = root => {
    if (!root) return true

    let answer = true
    const checker = (node, depth = 1) => {
        if (!answer) return;
        if (!node) return depth - 1

        const left = checker(node.left, depth + 1)
        const right = checker(node.right, depth + 1)
        if (Math.abs(left - right) > 1) answer = false
        return Math.max(left, right)
    }

    checker(root)
    return answer
}

/**
 *  @Runtime: {88 ms}
 *  @Memory: {43.4 MB}
 */