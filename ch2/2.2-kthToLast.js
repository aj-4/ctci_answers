const LL = require('./*LL');

//delete the kth to last item of a linked list

const kthToLast = (ll, k) => {
    //recurse to bottom
    //start popping off and counting
    let node = ll.head;
    let counter = 0;
    
    let kth = getKth(node);

    return kth || null;

    function getKth(node) {
        if (!node) return;        
        let rv = getKth(node.next);
        counter++;
        if (counter === k) {
            return node;
        }
        return rv;
    }
}

let ll = new LL;
ll.addToHead(1);
ll.addToHead(2);
ll.addToHead(3);
ll.addToHead(1);

console.log(kthToLast(ll, 1));
console.log(kthToLast(ll, 2));