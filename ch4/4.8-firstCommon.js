const Tree = require('./*Tree');

const firstCommon = (tree, node1, node2) => {
    if (!root) return false;

    if (!inTree(root, p) || !inTree(root, q)) return false;

    if (root === p) return p;
    if (root === q) return q;

    let pRight = inTree(root.right, p);
    let qRight = inTree(root.right, q);

    if (pRight && !qRight || !pRight && qRight) return root;

    if (pRight) {
        return lowestCommonAncestor(root.right, p, q);
    } else {
        return lowestCommonAncestor(root.left, p, q);
    }

    function inTree(root, node) {
        if (!root) return false;

        if (node === root) {
            return true;
        }

        return inTree(root.left, node) || inTree(root.right, node)
    }
}