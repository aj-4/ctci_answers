const bst = require('./*BST');

//given a binary search tree, validate whether it is a true BST

const validate = (tree, min = null, max = null) => {
    if (min && tree.val < min || max && tree.val > max) {
        return false
    }

    if (tree.left && !validate(tree.left, min, tree.val)) {
        return false
    }

    if (tree.right && !validate(tree.right, tree.val, max)) {
        return false;
    }

    return true;
}

let tree = new bst(4);
tree.addNode(2);
tree.addNode(6);
tree.addNode(1);
tree.addNode(3);
tree.addNode(5);
tree.addNode(7);

console.log(validate(tree) === true);

tree.left.left = new bst(9);

console.log(validate(tree) === false);