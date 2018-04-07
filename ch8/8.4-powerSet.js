const powerSet = (set) => {
    const output = [];
    let ss = [];
    let marked = [];
    getSubset([], 0);

    return output;

    function getSubset(sub, i) {
        if (sub.length > set.length) {
            return;
        } else {
            output.push(sub.slice());
        }
        for (let j = i; j < set.length; j++) {
            if (!marked[j]) {
                marked[j] = true;
                sub.push(set[j]);
                getSubset(sub, j);
                sub.pop();
                marked[j] = false;
            }
        }
    }
}

console.log(powerSet([1,2,3]));
