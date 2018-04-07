const BST = require('./*BST');

const allPossible = (root, arr = []) => {
    if (!root) return null;

    if(arr.length )

    arr.push(root);

    if (root.left) {
        arr.push(root.left);
        allPossible(root, arr);
        arr.pop();
    }
}