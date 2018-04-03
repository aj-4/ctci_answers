const LL = require('./*LL');
//given a ll, partition the list before and after value x

const partition = (head, x) => {
    if (!head) return null;
    let l1 = new LL;
    let l2 = new LL;
    let node = head;

    while (node) {
        if (node.val < x) {
            l1.addToHead(node.val);
        } else {
            l2.addToHead(node.val)
        }
        node = node.next;
    }
    
    l1.tail.next = l2.head;
    return l1;
}

let l = new LL;
l.addToHead(2);
l.addToHead(1);
l.addToHead(7);
l.addToHead(5);
l.addToHead(6);
l.addToHead(3);

let lPartition = partition(l.head, 4);

lPartition.printList();