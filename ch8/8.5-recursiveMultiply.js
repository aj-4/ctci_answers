const multiply = (num1, num2) => {
    let lesser = Math.min(num1, num2);
    let greater = Math.max(num1, num2);
    let output = 0;

    if (!num1 || !num2) return 0;

    output = helper(lesser, greater);

    function helper(l, g) {
        if (l === 1) {
            return g;
        }
        let 
    }
}