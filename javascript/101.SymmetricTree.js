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
const isSymmetric = root => {
    const symmetric = (p, q) => {
        if (p === null && q === null) return true
        if (p === null || q === null) return false
        if (p.val !== q.val) return false
        return (symmetric(p.left, q.right) && symmetric(p.right, q.left))
    }

    if (root.val === null) return true
    return symmetric(root.left, root.right)
}

/**
 *  @Runtime: {80 ms}
 *  @Memory: {40.9 MB}
 */