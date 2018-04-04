const Stack = require('./*Stack');

class StackMin {
    constructor() {
        this.store = new Stack;
        this.minStack = new Stack;
    }
    push(val) {
        this.store.push(val);
        if (!this.minStack.peek()) {
            this.minStack.push(val);
        } else if (val < this.minStack.peek()) {
            this.minStack.push(val);
        }
    }
    pop() {
        let val = this.store.pop();
        if (val === this.minStack.peek()) {
            this.minStack.pop();
        }
    }
    min() {
        return this.minStack.peek();
    }
}

let m = new StackMin;
m.push(5);
m.push(2);
m.push(4);
m.push(1);
m.push(6);
m.push(3);

console.log(m.min() === 1);
m.pop();
m.pop();
m.pop();
m.pop();
console.log(m.min() === 2);