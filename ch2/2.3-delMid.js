const LL = require('./*LL');

const delMid = (node) => {
    //copy next node to current node
    if (!node) return;
    if (node.next) {
        node.val = node.next.val;
        node.next = node.next.next;        
    } else {
        node = null;
    }
}


let ll = new LL;
ll.addToHead(1);
ll.addToHead(2);
ll.addToHead(3);

ll.printList();

delMid(ll.head.next);

ll.printList();