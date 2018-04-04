class Stack {
    constructor() {
        this.store = [];
    }
    push(val) {
        this.store.push(val);
    }
    pop() {
        return this.store.pop();
    }
    peek() {
        return this.store[this.store.length - 1]
    }
}

module.exports = Stack;