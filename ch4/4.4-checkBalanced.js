const BST = require('./*BST');

//given a bst, validate whether it is balanced (branches not differing by > 1)

const checkBalanced = (bst) => {
    if (!bst) return true;

    if (Math.abs(getHeight(bst.left) - getHeight(bst.right)) > 1) {
        return false;
    }

    return checkBalanced(bst.left) && checkBalanced(bst.right);

    function getHeight(root) {
        if (!root) return 0;
        return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
    }
}

let bst = new BST(4);
bst.addNode(2);
bst.addNode(6);
bst.addNode(1);
bst.addNode(3);
bst.addNode(5);
bst.addNode(7);

console.log(checkBalanced(bst) === true);

bst.addNode(8);
bst.addNode(9);
bst.addNode(10);
bst.addNode(11);
bst.addNode(12);

console.log(checkBalanced(bst) === false);