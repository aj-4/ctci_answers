const LL = require('./*LL');

//delete any duplicate values found in a LL, in place

const rmDups = (ll) => {
    //wo buffer, O(n^2)
    let node = ll.head;
    let ptr = ll.head;

    const hash = {};
    hash[ptr.val] = true;

    while (node && node.next) {
        ptr = ptr.next;
        if (hash[ptr.val]) {
            node.next = node.next.next;
        } else {
            hash[ptr.val] = true;
            node = node.next;            
        }
    }

    return hash;
}
 
let ll = new LL;
ll.addToHead(1);
ll.addToHead(2);
ll.addToHead(3);
ll.addToHead(1);
ll.addToHead(1);
ll.addToHead(1);
ll.addToHead(1);

ll.printList();

console.log(rmDups(ll));

ll.printList();