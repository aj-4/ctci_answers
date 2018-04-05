const bst = require('./*BST');

//given a binary tree, find the next in-order-traversal node

const nextNode = (tree, node) => {
    if (!tree) return null;

    if (node.right) {
        let nxt = node.right
        while(nxt.left) {
            nxt = nxt.left;
        }
        return nxt;
    }

    if (node.parent && node.parent.val > node.val) {
        return node.parent;
    }

    let par = node.parent;

    if (par.right && par.right !== node) {
        return nextNode(tree, par.right);
    }

    return null;
}

let tree = new bst(4);
let two = tree.addNode(2);
let one = tree.addNode(1);
tree.addNode(3);
let six = tree.addNode(6);
let eight = tree.addNode(8);
let seven = tree.addNode(7);

console.log(nextNode(tree, two).val);
console.log(nextNode(tree, eight));
console.log(nextNode(tree, seven).val);