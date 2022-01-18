/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
    let carry = 0

    const add = (l1, l2) => {
        let val = (l1.val || 0) + (l2.val || 0) + carry
        let nodeVal = val % 10
        carry = (val - nodeVal) / 10

        if (!l1.next && !l2.next && !carry) return new ListNode(nodeVal)

        return new ListNode(
            nodeVal,
            add(l1.next || new ListNode(), l2.next || new ListNode())
        )
    }

    return add(l1, l2)
}

/**
 *  @Runtime: {197 ms}
 *  @Memory: {43.8 MB}
 */