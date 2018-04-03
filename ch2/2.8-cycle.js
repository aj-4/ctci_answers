const LL = require('./*LL');

const detectCycle = (list) => {
    if (!list) return false;

    let slow = list.head;
    let fast = list.head;

    let cycle = false;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            cycle = true;
            break;
        }
    }

    if (!cycle) return false;

    fast = list.head;

    while (true) {
        fast = fast.next;
        slow = slow.next;
        if (fast === slow) {
            break;
        }
    }

    return slow;
}

let l = new LL;
l.addToTail(1);
l.addToTail(2);
l.addToTail(3);
l.addToTail(4);
l.addToTail(5);
l.head.next.next.next.next.next = l.head.next.next;

console.log(detectCycle(l));