const LL = require('./*LL');
//sum two lists from head to tail
//ex 6 -> 1 -> 7 + 2 -> 7 -> 5
//= 716 + 572 = 1288 8 -> 8 -> 2 -> 1

const sumLists = (l1, l2) => {
    head1 = l1.head;
    head2 = l2.head;

    const out = new LL;

    let rem = 0;

    while (head1 || head2) {
        let val1 = head1 ? head1.val : 0;
        let val2 = head2 ? head2.val : 0;
        let newVal = val1 + val2 + rem;
        out.addToTail(newVal % 10);
        if (newVal > 10) {
            rem = 1;
        } else {
            rem = 0;
        }
        head1 = head1.next;
        head2 = head2.next;
    }

    if (rem) {
        out.addToTail(1);
    }

    return out;
}

let l1 = new LL;
let l2 = new LL;
l1.addToHead(7);
l1.addToHead(1);
l1.addToHead(6);
l2.addToHead(5);
l2.addToHead(7);
l2.addToHead(2);

let l3 = sumLists(l1, l2);

l1.printList();
l2.printList();
l3.printList();