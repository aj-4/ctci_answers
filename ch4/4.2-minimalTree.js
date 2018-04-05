const BST = require('./*BST');

//given a sorted, ascending list, create a balanced tree

const minHeight = ( array ) => {
    if (!array || !array.length) return null;
    let mid = array.length >> 1;
    let midVal = array[mid]
    const tree = new BST(midVal);
    tree.left = minHeight(array.slice(0, mid));
    tree.right = minHeight(array.slice(mid + 1));
    return tree;
}

console.log(minHeight([1,2,3,4,5,6, 7]));