const LL = require('./*LL');

//given a linked list, determine whether it's a palindrome

//1 -> 2 -> 3 -> 2 -> 1

const palindrome = (ll) => {
    let slow = ll.head;
    let fast = ll.head;
    const stack = [slow.val];

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        stack.push(slow.val);
    }

    if (stack.length % 2 === 1) {
        slow = slow.next;
        stack.pop();
    }

    while (slow) {
        let compare = stack.pop();
        if (slow.val !== compare) {
            return false;
        }
        slow = slow.next;
    }

    return true;
}

let l1 = new LL;
l1.addToHead(1);
l1.addToHead(2);
l1.addToHead(3);
l1.addToHead(2);
l1.addToHead(1);

console.log(palindrome(l1));