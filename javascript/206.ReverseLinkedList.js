/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = head => {
    let [prev, curr] = [null, head]
    while(curr) [curr.next, prev, curr] = [prev, curr, curr.next]
    return prev
}

/**
 *  @Runtime: {83 ms}
 *  @Memory: {41.1 MB}
 */