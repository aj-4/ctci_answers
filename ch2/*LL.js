class LL {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    addToHead(val) {
        let node = new Node(val);
        if (!this.head) {
            this.tail = node;
        } else {
            node.next = this.head;
        }
        this.head = node;
    }
    addToTail(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
        } else {
            this.tail.next = node;
        }
        this.tail = node;        
    }
    printList() {
        let node = this.head;
        let out = ''
        while (node) {
            out = out + node.val + ' -> ';
            node = node.next;
        }
        console.log(out);
    }
}

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

module.exports = LL;