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
const postorderTraversal = root => {
    const print = [];
    const postorder = curr => {
        if (curr) {
            postorder(curr.left);
            postorder(curr.right);
            print.push(curr.val);
        }
    }

    postorder(root)
    return print
}

/**
 *  @Runtime: {86 ms}
 *  @Memory: {38.7 MB}
 */