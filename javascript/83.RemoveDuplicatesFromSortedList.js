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
const deleteDuplicates = head => {
    let current = head
    while(current != null && current.next != null) {
        let checker = current.next.val === current.val
        current.next = checker ? current.next.next : current.next;
        if (!checker) current = current.next
    }

    return head
}

/**
 *  @Runtime: {80 ms or 149 ms}
 *  @Memory: {40.7 MB or 40 MB}
 */