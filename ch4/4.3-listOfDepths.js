const Tree = require('./*Tree');
const LL = require('../ch2/*LL');

//traverse a tree and return an array of linked lists (one for each depth)

const listOfDepths = (tree) => {
    const q = [tree];
    const depths = [];

    while (q.length) {
        let buffer = [];
        while (q.length) {
            buffer.push(q.shift());
        }
        let dLL = new LL;
        buffer.forEach(node => dLL.addToTail(node.val));
        depths.push(dLL);        
        for (let node of buffer) {
            q.push(...node.children);            
        }
    }

    return depths;
}

let t = new Tree(1);
t.addChild(2);
t.addChild(3);
t.addChild(4);
t.children[0].addChild(5);
t.children[0].addChild(6);
t.children[1].addChild(7);
t.children[1].addChild(8);
t.children[1].addChild(9);
t.children[0].children[0].addChild(0);
t.children[0].children[0].children[0].addChild(11);

console.log(listOfDepths(t).forEach(ll => ll.printList()));