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
 * @return {TreeNode}
 */
const invertTree = root => {
    const invert = node =>{
        if(node == null) return;

        [node.left, node.right] = [node.right, node.left]
        invert(node.left)
        invert(node.right)
    }

    invert(root)
    return root
}

/**
 *  @Runtime: {80 ms}
 *  @Memory: {40.3 MB}
 */