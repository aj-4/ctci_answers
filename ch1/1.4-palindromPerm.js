//determine whether a given string is a permutation of a palindrome

const palindromePerm = (str) => {
    const hash = {};
    for (let char of str) {
        if (hash[char]) {
            delete hash[char]
        } else {
            hash[char] = true;
        }
    }
    return Object.keys(hash).length > 1 ? false : true;
}

console.log(palindromePerm('tacocat') === true);
console.log(palindromePerm('taco cat') === false);
console.log(palindromePerm('racecar') === true);