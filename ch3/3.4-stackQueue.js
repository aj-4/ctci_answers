const Stack = require('./*Stack');

class MyQueue {
    constructor() {
        this.store = new Stack;
        this.buffer = new Stack;
    }
    enqueue(val) {
        if (!this.store.peek()) {
            while (this.buffer.peek()) {
                this.store.push(this.buffer.pop());
            }
        }
        this.store.push(val);
    }
    dequeue() {
        if (!this.buffer.peek()) {
            while (this.store.peek()) {
                this.buffer.push(this.store.pop());
            }
        }
        return this.buffer.pop();
    }
}

let myQ = new MyQueue;

myQ.enqueue(1);
myQ.enqueue(2);
myQ.enqueue(3);
myQ.enqueue(4);

console.log(myQ.dequeue() === 1);
console.log(myQ.dequeue() === 2);

myQ.enqueue(5);

console.log(myQ.dequeue() === 3);
console.log(myQ.dequeue() === 4);
console.log(myQ.dequeue() === 5);