class Tree {
    constructor(val) {
        this.val = val;
        this.children = [];
    }
    addChild(val) {
        this.children.push(new Tree(val));
    }
}

module.exports = Tree;