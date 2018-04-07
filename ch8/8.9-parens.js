const parens = (n) => {
    let l = n;
    let r = n;

    const out = [];

    helper('', l, r);

    return out;

    function helper(sub = '', lRem, rRem) {
        console.log('sub is', sub);
        if (lRem > rRem) {
            return;
        }
        if (!lRem && !rRem) {
            out.push(sub);
            return;
        } 
        if (!lRem) {
            helper(sub + ')', lRem, rRem - 1);
        } else if (rRem === lRem) {
            helper(sub + '(', lRem - 1, rRem);
        } else {
            helper(sub + ')', lRem, rRem - 1);
            helper(sub + '(', lRem - 1, rRem);
        }
    }
}

console.log(parens(3));