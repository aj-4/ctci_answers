const Stack = require('./*Stack');

class SetOfStacks {
    constructor(limit) {
        this.store = [new Stack];
        this.limit = limit;
        this.size = 0;
    }
    push(val) {
        if (this.size % 10 === 0) {
            this.store.push(new Stack);
        }
        this.store[this.store.length - 1].push(val);
        this.size++;
    }
    pop() {
        let val = this.store[this.store.length - 1].pop();
        if (!this.store[this.store.length - 1].peek()) {
            this.store.pop();
        }
        this.size--;
        return val;
    }
    popAt(index) {
        this.size--;
        return this.store[index].pop();
    }
}