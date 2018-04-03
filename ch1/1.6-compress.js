//compress the characters of a string into clusters
//if the string cluster is longer than the original, return original

const compress = (str) => {
    let output = '';
    let counter = 1;
    let last;
    for (let char of str) {
        if (!last) {
            last = char;
        } else if (last && last === char) {
            counter++;
        } else {
            output = output + last + counter;
            counter = 1;
            last = char;
        }
    }
    output = output + last + counter;
    return output.length < str.length ? output : str;
}

console.log(compress('aaaabbbc') === 'a4b3c1');
console.log(compress('abcde') === 'abcde');
console.log(compress('aaaaaaaaaaab') === 'a11b1');