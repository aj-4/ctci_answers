const perms = (string, hash = {}, substr = [], output = []) => {
    if (!string || !string.length) return null;

    if (substr.length === string.length) {
        output.push(substr.join(''));
        return;
    }

    if (!Object.keys(hash).length) {
        for (let char of string) {
            hash[char] = hash[char] + 1 || 1;
        }
    }

    for (let char in hash) {
        if (hash[char]) {
            hash[char]--;
            substr.push(char);
            perms(string, hash, substr, output);
            substr.pop();
            hash[char]++;
        }
    }

    return output;
}

console.log(perms('aabb'));