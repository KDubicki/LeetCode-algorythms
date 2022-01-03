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
 * @return {number[]}
 */
const preorderTraversal = root => {
    const print = [];
    const preorder = curr => {
        if (curr) {
            print.push(curr.val);
            preorder(curr.left);
            preorder(curr.right);
        }
    }

    preorder(root)
    return print
}

/**
 *  @Runtime: {64 ms}
 *  @Memory: {39.2 MB}
 */