const Stack = require('./*Stack');

const sortStack = (s1) => {
    const s2 = new Stack;
    let sorted = 0;
    let tmp;

    while (s1.peek()) {
        let tmp = s1.pop();

        while (s2.peek() && s2.peek() > tmp) {
            s1.push(s2.pop());
        }

        s2.push(tmp);
    }

    return s2;
}

let s = new Stack;
s.push(4);
s.push(3);
s.push(1);
s.push(2);

console.log(sortStack(s));