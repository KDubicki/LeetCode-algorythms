/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = (head, val) => {
    if (!head) return head;
    head.next = removeElements(head.next, val);
    return (head.val === val) ? head.next : head;
}

/**
 *  @Runtime: {141 ms}
 *  @Memory: {43.8 MB}
 */