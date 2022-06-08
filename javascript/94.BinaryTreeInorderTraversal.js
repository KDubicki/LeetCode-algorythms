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
const inorderTraversal = root => {
    const print = [];
    const inorder = curr => {
        if (curr) {
            inorder(curr.left);
            print.push(curr.val);
            inorder(curr.right);
        }
    }

    inorder(root)
    return print
}

/**
 *  @Runtime: {76 ms}
 *  @Memory: {39 MB}
 */