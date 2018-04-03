const LL = require('./*LL');

//given two lists, determine whether they intersect

const intersection = (l1, l2) => {
    let len1 = getLen(l1);
    let len2 = getLen(l2);
    let lenDiff = Math.abs(len1 - len2);
    let greater = len1 > len2 ? l1 : l2;

    while (lenDiff--) {
        greater.head = greater.head.next;
    }

    let node1 = l1.head;
    let node2 = l2.head;

    while (node1 && node2) {
        if (node1 === node2) {
            return true;
        } else {
            node1 = node1.next;
            node2 = node2.next;
        }
    }

    return false;

    function getLen(list) {
        let node = list.head;
        let count = 0;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }
}

let l1 = new LL;
l1.addToTail(1);
l1.addToTail(2);
l1.addToTail(3);
l1.addToTail(4);
l1.addToTail(5);

let l2 = new LL;
l2.addToTail(1);
l2.addToTail(2);
l2.head.next.next = l1.head.next.next.next;

console.log(intersection(l1, l2));