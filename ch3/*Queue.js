class Queue {
    constructor() {
        this.store = [];
    }
    enqueue(val) {
        this.store.push(val);
    }
    dequeue() {
        return this.store.shift();
    }
    peek() {
        return this.store[0];
    }
}