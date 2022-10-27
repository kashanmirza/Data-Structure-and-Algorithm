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
 var addTwoNumbers = (l1, l2) => {
    var node;
    var p = (node = new ListNode(0));
    var carry = 0;
    var sum = 0;
    while (l1 || l2) {
      if (l1 && l2) {
        sum = l1.val + l2.val + carry;
        l1 = l1.next;
        l2 = l2.next;
      } else if (l1) {
        sum = l1.val + carry;
        l1 = l1.next;
      } else if (l2) {
        sum = l2.val + carry;
        l2 = l2.next;
      }
  
      carry = Math.floor(sum / 10);
      sum = Math.floor(sum) % 10;
      node.next = new ListNode(sum);
      node = node.next;
    }
  
    if (carry === 1) {
      node.next = new ListNode(carry);
    }
      return p.next;
  };
  
  class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  