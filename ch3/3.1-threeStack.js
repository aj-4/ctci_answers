const Stack = require('./*Stack');

//describe how you could use a single array to implement three stacks

//bucket method - distribute with some sort of hashing

class ThreeStack {
    constructor() {
        this.stacks = [];
        for (let i = 0; i < 3; i++) {
            this.stacks.push(new Stack);
        }
        this.size = 0;
    }
    push(val) {
        this.stacks[this.size % 3].push(val);
        this.size++;
    }
    pop() {
        this.size--;
        return this.stacks[this.size % 3].pop();
    }
}

let three = new ThreeStack;
three.push(0);
three.push(1);
three.push(2);
three.push(3);

console.log(three.pop() === 3);
console.log(three.pop() === 2);
console.log(three.pop() === 1);
