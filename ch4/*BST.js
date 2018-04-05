class BST {
    constructor(val, parent = null) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.parent = parent;
    }
    addNode(val, parent = this) {
        let node = new BST(val, parent);
        if (val < this.val) {
            if (!this.left) {
                this.left = node;
                return node;
            }
            else {
                return this.left.addNode(val, this.left);
            }
        } else if (val > this.val) {
            if (!this.right) {
                this.right = node;
                return node;
            }
            else {
                return this.right.addNode(val, this.right);
            }
        }
    }
}

module.exports = BST;