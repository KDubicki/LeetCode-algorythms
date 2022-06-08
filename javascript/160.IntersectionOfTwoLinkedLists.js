/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = (headA, headB) => {
    let a = headA
    let b = headB

    while (a !== b) {
        a = (a == null) ? headB : a.next
        b = (b == null) ? headA : b.next
    }

    return a
}

/**
 *  @Runtime: {149 ms}
 *  @Memory: {45.7 MB}
 */