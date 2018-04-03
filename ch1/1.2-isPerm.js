//given two strings, determine if one is a permutation of the other

const isPerm = (str1, str2) => {
    const hash = {};
    for (let char of str1) {
        hash[char] = hash[char] + 1 || 1;
    }
    for (let char of str2) {
        if (!hash[char]) {
            return false;
        } else if (hash[char] > 1) {
            hash[char]--;
        } else {
            delete hash[char];
        }
    }
    return true;
}

console.log(isPerm('aron', 'nora') === true);
console.log(isPerm('ignore', 'noril') === false);