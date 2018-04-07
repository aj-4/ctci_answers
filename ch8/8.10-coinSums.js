const denoms = [1, 2, 5];

const coinSums = (total, j=0, sub = 0, ways = 0) => {
    if (sub === total) return 1;
    if (sub > total) return 0;

    for (let i = j; i < denoms.length; i++) {
        if (sub + denoms[i] <= total) {
            ways += coinSums(total, i, sub + denoms[i]);
        }
    }

    return ways;
}

console.log(coinSums(5));